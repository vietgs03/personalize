import { useContext, useState } from 'react';
import { DailyTasksContext } from '../../context/DailyTasksContext';
import { ThemeContext } from '../../context/ThemeContext';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import DatePicker from './DatePicker';
import ProgressStats from './ProgressStats';

const DailyTaskTracker = () => {
  const { 
    selectedDate, 
    setSelectedDate, 
    currentTasks, 
    dailyProgress, 
    weeklyProgress, 
    totalStudyTime 
  } = useContext(DailyTasksContext);
  const { darkMode } = useContext(ThemeContext);
  const [showForm, setShowForm] = useState(false);

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className={`rounded-lg p-6 mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-xl md:text-2xl font-bold mb-1">Daily Learning Tracker</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Track your daily Golang learning progress</p>
          </div>
          <DatePicker 
            selectedDate={selectedDate} 
            setSelectedDate={setSelectedDate} 
          />
        </div>

        <ProgressStats 
          dailyProgress={dailyProgress} 
          weeklyProgress={weeklyProgress} 
          totalStudyTime={totalStudyTime} 
        />
        
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              Tasks for {formatDate(selectedDate)}
            </h2>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center px-3 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              {showForm ? 'Cancel' : 'Add Task'}
            </button>
          </div>
          
          {showForm && <TaskForm closeForm={() => setShowForm(false)} />}
          
          <TaskList tasks={currentTasks} />
        </div>
      </div>
    </div>
  );
};

export default DailyTaskTracker;