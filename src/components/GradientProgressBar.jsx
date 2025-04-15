import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { getProgressGradient, getCategoryColor } from '../data/categoryThemes';

const GradientProgressBar = ({ progress, size = 'normal', category = null }) => {
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
  
  const getProgressLabel = () => {
    if (progress < 20) return 'Mới bắt đầu';
    if (progress < 50) return 'Đang tiến hành';
    if (progress < 80) return 'Gần hoàn thành';
    if (progress < 100) return 'Sắp hoàn thành';
    return 'Hoàn thành!';
  };

  // Lấy gradient dựa trên tiến độ hoặc danh mục
  const getBarStyle = () => {
    if (category) {
      const categoryColor = getCategoryColor(category);
      return { background: categoryColor.gradient };
    } else {
      return { background: getProgressGradient(progress) };
    }
  };

  return (
    <div className="w-full">
      <div className={`w-full ${size === 'small' ? 'h-1' : 'h-2'} ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
        <div 
          className={`h-full transition-all duration-1000 ease-out rounded-full`} 
          style={{ 
            width: `${animatedProgress}%`,
            ...getBarStyle()
          }}
        >
        </div>
      </div>
      {size !== 'small' && progress > 0 && (
        <div className="flex justify-end mt-1">
          <span className={`text-xs ${progress >= 80 ? 'text-green-500' : progress >= 40 ? 'text-yellow-500' : 'text-red-500'} text-opacity-80 font-medium`}>
            {getProgressLabel()}
          </span>
        </div>
      )}
    </div>
  );
};

export default GradientProgressBar;