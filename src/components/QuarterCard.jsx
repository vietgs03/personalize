import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ProgressBar from './ProgressBar';
import TaskCard from './TaskCard';

const QuarterCard = ({ quarter, quarterIndex }) => {
  const { darkMode } = useContext(ThemeContext);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  // Add staggered animation entrance
  useEffect(() => {
    setTimeout(() => {
      setAnimateIn(true);
    }, quarterIndex * 150);
  }, [quarterIndex]);

  // Get quarter label color based on progress
  const getProgressColor = (progress) => {
    if (progress >= 80) return 'text-green-500 dark:text-green-400';
    if (progress >= 40) return 'text-yellow-500 dark:text-yellow-400';
    return 'text-red-500 dark:text-red-400';
  };

  // Count tasks by status
  const countTasksByStatus = () => {
    const counts = {
      total: quarter.goals.length,
      done: 0,
      inProgress: 0,
      notStarted: 0
    };

    quarter.goals.forEach(goal => {
      if (goal.status === 'Done') counts.done++;
      else if (goal.status === 'In Progress') counts.inProgress++;
      else counts.notStarted++;
    });

    return counts;
  };

  const taskCounts = countTasksByStatus();

  return (
    <div 
      className={`border rounded-lg mb-6 overflow-hidden shadow-md transition-all duration-300 transform ${
        animateIn ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
    >
      <div 
        className={`p-4 cursor-pointer border-b transition-colors duration-200 ${
          darkMode ? 'border-gray-700 hover:bg-gray-750' : 'border-gray-200 hover:bg-gray-50'
        }`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center">
              <h2 className="text-xl font-bold">{quarter.quarter}</h2>
              <span className={`ml-3 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                quarter.progress >= 70 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                quarter.progress >= 30 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 
                'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {quarter.progress}%
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400">{quarter.title}</p>
          </div>
          <div className="flex items-center">
            {/* Task counts */}
            <div className="hidden md:flex mr-4 space-x-2">
              <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                {taskCounts.done} Done
              </span>
              <span className="text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                {taskCounts.inProgress} In Progress
              </span>
              <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                {taskCounts.notStarted} Not Started
              </span>
            </div>
            <svg 
              className={`w-5 h-5 transform transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="mt-3">
          <ProgressBar progress={quarter.progress} />
        </div>
        
        {/* Mobile view task counts */}
        <div className="flex md:hidden mt-2 space-x-2">
          <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            {taskCounts.done} Done
          </span>
          <span className="text-xs px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
            {taskCounts.inProgress} In Progress
          </span>
          <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
            {taskCounts.notStarted} Not Started
          </span>
        </div>
      </div>

      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isCollapsed ? 'max-h-0 opacity-0' : 'max-h-full opacity-100'
      }`}>
        <div className="p-4">
          {quarter.goals.length > 0 ? (
            quarter.goals.map((goal, goalIndex) => (
              <TaskCard 
                key={goalIndex} 
                goal={goal} 
                quarterIndex={quarterIndex}
                goalIndex={goalIndex}
              />
            ))
          ) : (
            <div className={`text-center py-8 rounded-lg ${
              darkMode ? 'bg-gray-750 text-gray-400' : 'bg-gray-50 text-gray-500'
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-12 w-12 mx-auto mb-3 opacity-50" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
                />
              </svg>
              <p className="text-lg font-medium">No goals for this period</p>
              <p className="text-sm mt-1">All tasks may be filtered out by current filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuarterCard;