import { useContext, useMemo, useState } from 'react';
import { RoadmapContext } from '../context/RoadmapContext';
import { DailyTasksContext } from '../context/DailyTasksContext';
import { BlogContext } from '../context/BlogContext';
import { ThemeContext } from '../context/ThemeContext';

const SkillAssessment = () => {
  const { originalData: roadmapData, categories } = useContext(RoadmapContext);
  const { tasks } = useContext(DailyTasksContext);
  const { blogPosts } = useContext(BlogContext);
  const { darkMode } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'strengths', 'weaknesses', 'recommendations'

  // Analyze roadmap data to get category-based skills assessment
  const categoryAnalysis = useMemo(() => {
    const analysis = {};
    
    categories.forEach(category => {
      analysis[category] = { total: 0, completed: 0, inProgress: 0, notStarted: 0, score: 0 };
    });
    
    // Count goals by category and status
    roadmapData.forEach(quarter => {
      quarter.goals.forEach(goal => {
        if (analysis[goal.category]) {
          analysis[goal.category].total++;
          
          if (goal.status === 'Done') {
            analysis[goal.category].completed++;
          } else if (goal.status === 'In Progress') {
            analysis[goal.category].inProgress++;
          } else {
            analysis[goal.category].notStarted++;
          }
        }
      });
    });
    
    // Calculate score for each category (0-100)
    Object.keys(analysis).forEach(category => {
      const { total, completed, inProgress } = analysis[category];
      if (total > 0) {
        // Weight: completed = 100%, in progress = 40%
        analysis[category].score = Math.round(((completed + (inProgress * 0.4)) / total) * 100);
      }
    });
    
    return analysis;
  }, [roadmapData, categories]);
  
  // Get daily task analysis
  const dailyTasksAnalysis = useMemo(() => {
    const totalTasks = tasks.reduce((sum, day) => sum + day.tasks.length, 0);
    const completedTasks = tasks.reduce((sum, day) => 
      sum + day.tasks.filter(task => task.done).length, 0);
    
    // Group tasks by month to see progress over time
    const monthlyProgress = {};
    tasks.forEach(day => {
      const date = new Date(day.date);
      const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      
      if (!monthlyProgress[monthYear]) {
        monthlyProgress[monthYear] = { total: 0, completed: 0, label: date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) };
      }
      
      monthlyProgress[monthYear].total += day.tasks.length;
      monthlyProgress[monthYear].completed += day.tasks.filter(task => task.done).length;
    });
    
    // Calculate completion rate for each month
    Object.keys(monthlyProgress).forEach(month => {
      const { total, completed } = monthlyProgress[month];
      monthlyProgress[month].rate = total > 0 ? Math.round((completed / total) * 100) : 0;
    });
    
    // Sort months chronologically
    const sortedMonths = Object.entries(monthlyProgress)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([_, data]) => data);
    
    return {
      totalTasks,
      completedTasks,
      completionRate: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0,
      monthlyProgress: sortedMonths
    };
  }, [tasks]);
  
  // Analyze blog posts to see what topics the user is writing about
  const blogAnalysis = useMemo(() => {
    // Get all tags and count their occurrences
    const tagCounts = {};
    blogPosts.forEach(post => {
      post.tags.forEach(tag => {
        if (tagCounts[tag]) {
          tagCounts[tag]++;
        } else {
          tagCounts[tag] = 1;
        }
      });
    });
    
    // Sort tags by frequency
    const sortedTags = Object.entries(tagCounts)
      .sort(([_, a], [__, b]) => b - a)
      .map(([tag, count]) => ({ tag, count }));
    
    // Count posts by month
    const postsByMonth = {};
    blogPosts.forEach(post => {
      const date = new Date(post.createdAt);
      const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      
      if (postsByMonth[monthYear]) {
        postsByMonth[monthYear].count++;
      } else {
        postsByMonth[monthYear] = { 
          count: 1, 
          label: date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
        };
      }
    });
    
    // Sort months chronologically
    const sortedMonths = Object.entries(postsByMonth)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([_, data]) => data);
    
    return {
      totalPosts: blogPosts.length,
      popularTags: sortedTags.slice(0, 5),
      postsByMonth: sortedMonths
    };
  }, [blogPosts]);
  
  // Identify strengths (categories with highest scores)
  const strengths = useMemo(() => {
    return Object.entries(categoryAnalysis)
      .filter(([_, data]) => data.total > 0) // Only consider categories with goals
      .sort(([_, a], [__, b]) => b.score - a.score)
      .slice(0, 3)
      .map(([category, data]) => ({
        category,
        score: data.score,
        completedGoals: data.completed,
        totalGoals: data.total
      }));
  }, [categoryAnalysis]);
  
  // Identify weaknesses (categories with lowest scores)
  const weaknesses = useMemo(() => {
    return Object.entries(categoryAnalysis)
      .filter(([_, data]) => data.total > 0) // Only consider categories with goals
      .sort(([_, a], [__, b]) => a.score - b.score)
      .slice(0, 3)
      .map(([category, data]) => ({
        category,
        score: data.score,
        completedGoals: data.completed,
        totalGoals: data.total
      }));
  }, [categoryAnalysis]);
  
  // Generate recommendations for improvement
  const recommendations = useMemo(() => {
    const recs = [];
    
    // Recommend focusing on low-score categories with goals
    Object.entries(categoryAnalysis).forEach(([category, data]) => {
      if (data.total > 0 && data.score < 50) {
        recs.push({
          type: 'category_focus',
          category,
          message: `Focus on completing goals in the ${category} category, where you've only completed ${data.completed} out of ${data.total} goals.`
        });
      }
    });
    
    // Recommend maintaining consistency in daily tasks
    if (dailyTasksAnalysis.completionRate < 60) {
      recs.push({
        type: 'consistency',
        message: `Improve your daily task completion rate (currently at ${dailyTasksAnalysis.completionRate}%). Try to complete more daily learning tasks.`
      });
    }
    
    // Recommend writing more blog posts if few exist
    if (blogAnalysis.totalPosts < 5) {
      recs.push({
        type: 'documentation',
        message: `Write more learning notes and blog posts to reinforce your knowledge. You currently have only ${blogAnalysis.totalPosts} posts.`
      });
    }
    
    // If a category has "In Progress" items for too long
    Object.entries(categoryAnalysis).forEach(([category, data]) => {
      if (data.inProgress > 2 && data.completed < data.inProgress) {
        recs.push({
          type: 'completion',
          category,
          message: `You have ${data.inProgress} in-progress goals in ${category}. Try to complete these before starting new ones.`
        });
      }
    });
    
    return recs;
  }, [categoryAnalysis, dailyTasksAnalysis, blogAnalysis]);

  // Get overall skill score (weighted average of all categories)
  const overallScore = useMemo(() => {
    let totalWeight = 0;
    let weightedSum = 0;
    
    Object.entries(categoryAnalysis).forEach(([_, data]) => {
      if (data.total > 0) {
        weightedSum += data.score * data.total;
        totalWeight += data.total;
      }
    });
    
    return totalWeight > 0 ? Math.round(weightedSum / totalWeight) : 0;
  }, [categoryAnalysis]);

  const getProgressColor = (score) => {
    if (score >= 75) return 'text-green-500 dark:text-green-400';
    if (score >= 40) return 'text-yellow-500 dark:text-yellow-400';
    return 'text-red-500 dark:text-red-400';
  };

  const getProgressBarColor = (score) => {
    if (score >= 75) return 'bg-green-500';
    if (score >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className={`p-6 rounded-lg ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-md`}>
        <h1 className="text-xl md:text-2xl font-bold mb-6">Skill Assessment</h1>
        
        {/* Overall Score Card */}
        <div className={`p-6 mb-6 rounded-lg border ${
          darkMode ? 'bg-gray-750 border-gray-700' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold mb-1">Overall Skill Progress</h2>
              <p className="text-gray-500 dark:text-gray-400">Based on your learning roadmap and daily tasks</p>
            </div>
            <div className={`text-3xl font-bold mt-2 md:mt-0 ${getProgressColor(overallScore)}`}>
              {overallScore}%
            </div>
          </div>
          
          <div className={`w-full h-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
            <div 
              className={`h-full ${getProgressBarColor(overallScore)} transition-all duration-1000 ease-out`} 
              style={{ width: `${overallScore}%` }}
            ></div>
          </div>
          
          <div className="mt-4 text-sm">
            {overallScore >= 75 ? (
              <p className="text-green-500 dark:text-green-400">Excellent progress! You're on track to becoming a senior Golang engineer.</p>
            ) : overallScore >= 40 ? (
              <p className="text-yellow-500 dark:text-yellow-400">Good progress. Keep focusing on completing your learning goals.</p>
            ) : (
              <p className="text-red-500 dark:text-red-400">Beginning your learning journey. Build consistency to improve your skills.</p>
            )}
          </div>
        </div>
        
        {/* Tabs Navigation */}
        <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 px-1 ${
                activeTab === 'overview'
                  ? 'border-b-2 border-blue-500 font-medium text-blue-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('strengths')}
              className={`pb-4 px-1 ${
                activeTab === 'strengths'
                  ? 'border-b-2 border-blue-500 font-medium text-blue-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Strengths
            </button>
            <button
              onClick={() => setActiveTab('weaknesses')}
              className={`pb-4 px-1 ${
                activeTab === 'weaknesses'
                  ? 'border-b-2 border-blue-500 font-medium text-blue-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Improvement Areas
            </button>
            <button
              onClick={() => setActiveTab('recommendations')}
              className={`pb-4 px-1 ${
                activeTab === 'recommendations'
                  ? 'border-b-2 border-blue-500 font-medium text-blue-500'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Recommendations
            </button>
          </nav>
        </div>
        
        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div>
            {/* Category Skills Grid */}
            <h2 className="text-lg font-semibold mb-3">Skills by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {Object.entries(categoryAnalysis).map(([category, data]) => (
                data.total > 0 ? (
                  <div 
                    key={category}
                    className={`p-4 border rounded-lg ${
                      darkMode ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{category}</h3>
                      <span className={`font-bold ${getProgressColor(data.score)}`}>
                        {data.score}%
                      </span>
                    </div>
                    <div className={`w-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden mb-2`}>
                      <div 
                        className={`h-full ${getProgressBarColor(data.score)} transition-all duration-500 ease-out`} 
                        style={{ width: `${data.score}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {data.completed} of {data.total} goals completed
                    </div>
                  </div>
                ) : null
              ))}
            </div>
            
            {/* Daily Tasks Completion */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Daily Learning Consistency</h2>
              <div className={`p-4 border rounded-lg ${
                darkMode ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-white'
              }`}>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="font-medium">Task Completion Rate</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {dailyTasksAnalysis.completedTasks} of {dailyTasksAnalysis.totalTasks} tasks completed
                    </p>
                  </div>
                  <span className={`font-bold ${getProgressColor(dailyTasksAnalysis.completionRate)}`}>
                    {dailyTasksAnalysis.completionRate}%
                  </span>
                </div>
                <div className={`w-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden mb-4`}>
                  <div 
                    className={`h-full ${getProgressBarColor(dailyTasksAnalysis.completionRate)} transition-all duration-500 ease-out`} 
                    style={{ width: `${dailyTasksAnalysis.completionRate}%` }}
                  ></div>
                </div>
                
                {/* Monthly Progress Chart */}
                {dailyTasksAnalysis.monthlyProgress.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Monthly Completion Trend</h4>
                    <div className="flex items-end h-32 space-x-2">
                      {dailyTasksAnalysis.monthlyProgress.map((month, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div className="w-full flex justify-center">
                            <div 
                              className={getProgressBarColor(month.rate)} 
                              style={{ height: `${Math.max(month.rate, 5)}%` }}
                            ></div>
                          </div>
                          <div className="text-xs mt-1 text-gray-600 dark:text-gray-400">{month.label}</div>
                          <div className="text-xs font-medium">{month.rate}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Blog Post Activity */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Learning Documentation</h2>
              <div className={`p-4 border rounded-lg ${
                darkMode ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-white'
              }`}>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-medium">Blog Posts & Notes</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {blogAnalysis.totalPosts} posts written
                    </p>
                  </div>
                  {blogAnalysis.popularTags.length > 0 && (
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Top topics:</span>
                      {blogAnalysis.popularTags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index} 
                          className={`text-xs px-2 py-1 rounded-full mr-1 ${
                            darkMode ? 'bg-blue-900 text-blue-100' : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {tag.tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Posts by Month Chart */}
                {blogAnalysis.postsByMonth.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Monthly Writing Activity</h4>
                    <div className="flex items-end h-32 space-x-2">
                      {blogAnalysis.postsByMonth.map((month, index) => {
                        // Calculate relative height based on max count
                        const maxCount = Math.max(...blogAnalysis.postsByMonth.map(m => m.count));
                        const height = maxCount > 0 ? (month.count / maxCount) * 100 : 0;
                        
                        return (
                          <div key={index} className="flex-1 flex flex-col items-center">
                            <div className="w-full flex justify-center">
                              <div 
                                className="bg-blue-500"
                                style={{ height: `${Math.max(height, 5)}%` }}
                              ></div>
                            </div>
                            <div className="text-xs mt-1 text-gray-600 dark:text-gray-400">{month.label}</div>
                            <div className="text-xs font-medium">{month.count}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'strengths' && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Your Strongest Skills</h2>
            
            {strengths.length > 0 ? (
              <div className="space-y-4">
                {strengths.map((item, index) => (
                  <div 
                    key={index}
                    className={`p-4 border rounded-lg ${
                      darkMode ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-lg">{item.category}</h3>
                      <span className={`font-bold ${getProgressColor(item.score)}`}>
                        {item.score}%
                      </span>
                    </div>
                    <div className={`w-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden mb-3`}>
                      <div 
                        className={`h-full ${getProgressBarColor(item.score)} transition-all duration-500 ease-out`} 
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      You've completed {item.completedGoals} of {item.totalGoals} goals in this category.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.score >= 80 
                        ? "Excellent mastery! You're performing exceptionally well in this area."
                        : "Good progress! You're building solid skills in this category."}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className={`p-8 text-center border rounded-lg ${
                darkMode ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="text-gray-500 dark:text-gray-400">Start working on your roadmap goals to build strengths!</p>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'weaknesses' && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Areas for Improvement</h2>
            
            {weaknesses.length > 0 ? (
              <div className="space-y-4">
                {weaknesses.map((item, index) => (
                  <div 
                    key={index}
                    className={`p-4 border rounded-lg ${
                      darkMode ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-lg">{item.category}</h3>
                      <span className={`font-bold ${getProgressColor(item.score)}`}>
                        {item.score}%
                      </span>
                    </div>
                    <div className={`w-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden mb-3`}>
                      <div 
                        className={`h-full ${getProgressBarColor(item.score)} transition-all duration-500 ease-out`} 
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      You've completed only {item.completedGoals} of {item.totalGoals} goals in this category.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Focus on completing more goals in this category to strengthen your skills.
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className={`p-8 text-center border rounded-lg ${
                darkMode ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-500 dark:text-gray-400">No improvement areas identified yet. Start adding goals to your roadmap!</p>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'recommendations' && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Recommended Actions</h2>
            
            {recommendations.length > 0 ? (
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div 
                    key={index}
                    className={`p-4 border-l-4 rounded-lg ${
                      rec.type === 'category_focus'
                        ? 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900 dark:bg-opacity-20'
                        : rec.type === 'consistency' 
                          ? 'border-l-blue-500 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20'
                          : rec.type === 'documentation'
                            ? 'border-l-purple-500 bg-purple-50 dark:bg-purple-900 dark:bg-opacity-20'
                            : 'border-l-green-500 bg-green-50 dark:bg-green-900 dark:bg-opacity-20'
                    } ${darkMode ? 'border border-gray-700' : 'border border-gray-200'}`}
                  >
                    <div className="flex items-start">
                      <div className={`p-1 rounded-full mr-3 ${
                        rec.type === 'category_focus'
                          ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-200'
                          : rec.type === 'consistency' 
                            ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200'
                            : rec.type === 'documentation'
                              ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-200'
                              : 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200'
                      }`}>
                        {rec.type === 'category_focus' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                          </svg>
                        ) : rec.type === 'consistency' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                        ) : rec.type === 'documentation' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">{rec.category ? `${rec.category} Improvement` : 'Recommendation'}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">{rec.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={`p-8 text-center border rounded-lg ${
                darkMode ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-500 dark:text-gray-400">No recommendations available yet. Add more data to your roadmap and daily tasks!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillAssessment;