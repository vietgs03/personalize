import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ProgressStats = ({ dailyProgress, weeklyProgress, totalStudyTime }) => {
  const { darkMode } = useContext(ThemeContext);

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'text-green-500 dark:text-green-400';
    if (progress >= 40) return 'text-yellow-500 dark:text-yellow-400';
    return 'text-red-500 dark:text-red-400';
  };

  const getProgressBarColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getProgressStatus = (progress) => {
    if (progress >= 80) return 'Great job!';
    if (progress >= 40) return 'Keep going!';
    return 'Just starting';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Daily Progress */}
      <div className={`p-4 rounded-lg border ${
        darkMode ? 'bg-gray-750 border-gray-700' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Today's Progress</h3>
          <span className={`font-bold text-lg ${getProgressColor(dailyProgress)}`}>
            {dailyProgress}%
          </span>
        </div>
        
        <div className={`w-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden mb-1`}>
          <div 
            className={`h-full ${getProgressBarColor(dailyProgress)} transition-all duration-1000 ease-out`} 
            style={{ width: `${dailyProgress}%` }}
          >
          </div>
        </div>
        
        <p className={`text-xs ${getProgressColor(dailyProgress)} text-right font-medium`}>
          {getProgressStatus(dailyProgress)}
        </p>
      </div>
      
      {/* Weekly Progress */}
      <div className={`p-4 rounded-lg border ${
        darkMode ? 'bg-gray-750 border-gray-700' : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Weekly Progress</h3>
          <span className={`font-bold text-lg ${getProgressColor(weeklyProgress)}`}>
            {weeklyProgress}%
          </span>
        </div>
        
        <div className={`w-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden mb-1`}>
          <div 
            className={`h-full ${getProgressBarColor(weeklyProgress)} transition-all duration-1000 ease-out`} 
            style={{ width: `${weeklyProgress}%` }}
          >
          </div>
        </div>
        
        <p className={`text-xs ${getProgressColor(weeklyProgress)} text-right font-medium`}>
          {weeklyProgress > 0 ? `${getProgressStatus(weeklyProgress)}` : 'No data for this week'}
        </p>
      </div>
      
      {/* Total Study Time */}
      <div className={`p-4 rounded-lg border ${
        darkMode ? 'bg-gray-750 border-gray-700' : 'bg-gray-50 border-gray-200'
      }`}>
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Study Time Today</h3>
        
        <div className="flex items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-bold text-lg ml-2">{totalStudyTime}</span>
        </div>
        
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Estimated total learning time
        </p>
      </div>
    </div>
  );
};

export default ProgressStats;