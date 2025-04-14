import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ProgressBar = ({ progress, size = 'normal' }) => {
  const { darkMode } = useContext(ThemeContext);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  
  // Animate the progress bar
  useEffect(() => {
    // Reset to 0 when component mounts and when progress changes
    setAnimatedProgress(0);
    
    // Animate to the current progress value
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [progress]);
  
  const getColorClass = () => {
    if (progress < 33) return 'bg-red-500';
    if (progress < 66) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getProgressLabel = () => {
    if (progress < 20) return 'Just started';
    if (progress < 50) return 'In progress';
    if (progress < 80) return 'Almost there';
    if (progress < 100) return 'Nearly complete';
    return 'Complete!';
  };

  return (
    <div className="w-full">
      <div className={`w-full ${size === 'small' ? 'h-1' : 'h-2'} ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
        <div 
          className={`h-full ${getColorClass()} transition-all duration-1000 ease-out`} 
          style={{ width: `${animatedProgress}%` }}
        >
        </div>
      </div>
      {size !== 'small' && progress > 0 && (
        <div className="flex justify-end mt-1">
          <span className={`text-xs ${getColorClass()} text-opacity-80 font-medium`}>
            {getProgressLabel()}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;