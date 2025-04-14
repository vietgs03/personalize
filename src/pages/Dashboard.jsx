import { useContext, useMemo } from 'react';
import { RoadmapContext } from '../context/RoadmapContext';
import { ThemeContext } from '../context/ThemeContext';
import Sidebar from '../components/Sidebar';
import MobileMenu from '../components/MobileMenu';
import QuarterCard from '../components/QuarterCard';
import ProgressBar from '../components/ProgressBar';

const Dashboard = () => {
  const { roadmapData, overallProgress, categoryFilter, statusFilter, categories } = useContext(RoadmapContext);
  const { darkMode } = useContext(ThemeContext);

  // Calculate stats for the dashboard
  const stats = useMemo(() => {
    let totalGoals = 0;
    let completedGoals = 0;
    let inProgressGoals = 0;
    let notStartedGoals = 0;
    
    // Category counts
    const categoryCounts = {};
    categories.forEach(category => {
      categoryCounts[category] = 0;
    });
    
    // Count all goals across quarters
    roadmapData.forEach(quarter => {
      quarter.goals.forEach(goal => {
        totalGoals++;
        
        if (goal.status === 'Done') completedGoals++;
        else if (goal.status === 'In Progress') inProgressGoals++;
        else notStartedGoals++;
        
        // Increment category count
        if (categoryCounts[goal.category] !== undefined) {
          categoryCounts[goal.category]++;
        }
      });
    });
    
    // Find the category with most goals
    let mostPopularCategory = '';
    let maxCount = 0;
    Object.keys(categoryCounts).forEach(category => {
      if (categoryCounts[category] > maxCount) {
        maxCount = categoryCounts[category];
        mostPopularCategory = category;
      }
    });
    
    return {
      totalGoals,
      completedGoals,
      inProgressGoals,
      notStartedGoals,
      categoryCounts,
      mostPopularCategory
    };
  }, [roadmapData, categories]);

  // Get today's date formatted
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu />
      
      <div className="md:ml-64 p-4 md:p-6 pt-16 md:pt-6">
        <div className="max-w-4xl mx-auto">
          {/* Dashboard header with date and statistics */}
          <div className={`rounded-lg p-4 md:p-6 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h1 className="text-xl md:text-2xl font-bold mb-1">Golang Backend Engineer Roadmap</h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{formattedDate}</p>
              </div>
              
              <div className="flex items-center mt-3 md:mt-0">
                <div className="mr-2 font-medium">
                  <span className={`text-lg font-bold ${
                    overallProgress >= 70 ? 'text-green-500' : 
                    overallProgress >= 30 ? 'text-yellow-500' : 'text-red-500'
                  }`}>
                    {overallProgress}%
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">Complete</span>
                </div>
              </div>
            </div>
            
            <ProgressBar progress={overallProgress} />
            
            {/* Statistics summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-750' : 'bg-gray-50'}`}>
                <div className="text-sm text-gray-500 dark:text-gray-400">Total Goals</div>
                <div className="text-xl font-bold mt-1">{stats.totalGoals}</div>
              </div>
              
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-750' : 'bg-gray-50'}`}>
                <div className="text-sm text-green-500">Completed</div>
                <div className="text-xl font-bold mt-1 flex items-center">
                  {stats.completedGoals}
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                    ({Math.round((stats.completedGoals / stats.totalGoals) * 100) || 0}%)
                  </span>
                </div>
              </div>
              
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-750' : 'bg-gray-50'}`}>
                <div className="text-sm text-yellow-500">In Progress</div>
                <div className="text-xl font-bold mt-1">{stats.inProgressGoals}</div>
              </div>
              
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-750' : 'bg-gray-50'}`}>
                <div className="text-sm text-gray-500 dark:text-gray-400">Not Started</div>
                <div className="text-xl font-bold mt-1">{stats.notStartedGoals}</div>
              </div>
            </div>
            
            {/* Focus area */}
            {stats.mostPopularCategory && (
              <div className="mt-4 text-sm">
                <span className="text-gray-500 dark:text-gray-400">Focus area: </span>
                <span className="font-medium">{stats.mostPopularCategory}</span>
                <span className="text-gray-500 dark:text-gray-400"> ({stats.categoryCounts[stats.mostPopularCategory]} goals)</span>
              </div>
            )}
          </div>
          
          {/* Filters summary */}
          {(categoryFilter || statusFilter) && (
            <div className={`mb-6 p-4 rounded-lg border ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            } shadow-sm`}>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium">Filtered by:</span>
                {categoryFilter && (
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2.5 py-1 rounded-full text-xs flex items-center">
                    Category: {categoryFilter}
                    <button 
                      className="ml-1.5 hover:text-blue-500"
                      onClick={() => window.dispatchEvent(new CustomEvent('clearCategoryFilter'))}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 111.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </span>
                )}
                {statusFilter && (
                  <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-2.5 py-1 rounded-full text-xs flex items-center">
                    Status: {statusFilter}
                    <button 
                      className="ml-1.5 hover:text-purple-500"
                      onClick={() => window.dispatchEvent(new CustomEvent('clearStatusFilter'))}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 111.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </span>
                )}
                <button 
                  className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 ml-auto"
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('clearAllFilters'));
                  }}
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
          
          {/* Quarters */}
          {roadmapData.length > 0 ? (
            roadmapData.map((quarter, index) => (
              <QuarterCard 
                key={quarter.quarter} 
                quarter={quarter} 
                quarterIndex={index}
              />
            ))
          ) : (
            <div className={`text-center py-12 border rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500 dark:text-gray-400 text-lg">No roadmap data matches the current filters</p>
              <p className="text-sm mt-2">Try adjusting your category or status filters</p>
              <button 
                className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-150"
                onClick={() => window.dispatchEvent(new CustomEvent('clearAllFilters'))}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;