import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const CircularProgress = ({ progress, size = 40, strokeWidth = 4, category = null, showLabel = true }) => {
  const { darkMode } = useContext(ThemeContext);
  
  // Tính toán các thông số cho SVG
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  // Xác định màu sắc dựa trên tiến độ
  const getProgressColor = () => {
    if (progress >= 80) return { stroke: '#22c55e', text: 'text-green-500' };
    if (progress >= 40) return { stroke: '#f59e0b', text: 'text-yellow-500' };
    return { stroke: '#ef4444', text: 'text-red-500' };
  };
  
  const { stroke, text } = getProgressColor();
  
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
      >
        {/* Vòng tròn nền */}
        <circle
          className={darkMode ? 'stroke-gray-700' : 'stroke-gray-200'}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          strokeWidth={strokeWidth}
        />
        
        {/* Vòng tròn tiến độ */}
        <circle
          className="transition-all duration-1000 ease-out"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      
      {/* Hiển thị phần trăm ở giữa */}
      {showLabel && (
        <div className={`absolute inset-0 flex items-center justify-center ${text} font-medium`}>
          <span className={`text-${size > 50 ? 'sm' : 'xs'}`}>{progress}%</span>
        </div>
      )}
    </div>
  );
};

export default CircularProgress;