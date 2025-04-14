import { useContext } from 'react';
import { DailyTasksContext } from '../../context/DailyTasksContext';
import { ThemeContext } from '../../context/ThemeContext';

const TaskList = ({ tasks }) => {
  const { toggleTaskStatus, deleteTask } = useContext(DailyTasksContext);
  const { darkMode } = useContext(ThemeContext);

  if (tasks.length === 0) {
    return (
      <div className={`text-center py-10 rounded-lg border ${
        darkMode ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'
      }`}>
        <svg xmlns="http://www.w3.org/2000/svg" 
          className="h-12 w-12 mx-auto mb-3 text-gray-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
          />
        </svg>
        <p className="text-gray-500 dark:text-gray-400">No tasks for this day</p>
        <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">Add a task to start tracking your learning</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div 
          key={task.id} 
          className={`flex items-center p-3 rounded-lg border transition-all duration-200 ${
            task.done 
              ? darkMode 
                ? 'bg-green-900 bg-opacity-20 border-green-800' 
                : 'bg-green-50 border-green-200'
              : darkMode
                ? 'border-gray-700 hover:bg-gray-750' 
                : 'border-gray-200 hover:bg-gray-50'
          }`}
        >
          <button
            onClick={() => toggleTaskStatus(task.id)}
            className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 transition-colors duration-200 ${
              task.done
                ? 'bg-green-500 border-green-500 text-white'
                : darkMode
                  ? 'border-gray-600 hover:border-green-500'
                  : 'border-gray-300 hover:border-green-500'
            }`}
          >
            {task.done && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          
          <div className="flex-1">
            <p className={task.done ? 'line-through text-gray-500 dark:text-gray-400' : ''}>
              {task.title}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Estimated time: {task.duration}
            </p>
          </div>
          
          <button
            onClick={() => deleteTask(task.id)}
            className="p-1 text-gray-500 hover:text-red-500 transition-colors duration-200"
            title="Delete task"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;