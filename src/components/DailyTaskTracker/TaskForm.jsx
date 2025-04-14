import { useState, useContext } from 'react';
import { DailyTasksContext } from '../../context/DailyTasksContext';
import { ThemeContext } from '../../context/ThemeContext';

const TaskForm = ({ closeForm }) => {
  const { addTask } = useContext(DailyTasksContext);
  const { darkMode } = useContext(ThemeContext);
  const [task, setTask] = useState({
    title: '',
    duration: '1h',
    done: false
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!task.title.trim()) {
      setError('Task title is required');
      return;
    }
    
    // Duration validation (format: Xh or X.Xh)
    const durationPattern = /^\d+(\.\d+)?h$/;
    if (!durationPattern.test(task.duration)) {
      setError('Duration must be in format: 1h, 1.5h, etc');
      return;
    }
    
    // Add task and reset form
    addTask(task);
    setTask({
      title: '',
      duration: '1h',
      done: false
    });
    setError('');
    closeForm();
  };

  return (
    <div className={`mb-6 p-4 rounded-lg border ${
      darkMode ? 'bg-gray-750 border-gray-700' : 'bg-gray-50 border-gray-200'
    }`}>
      <h3 className="font-semibold mb-3">Add New Learning Task</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Task Title
          </label>
          <input
            type="text"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            placeholder="e.g., Study Go concurrency patterns"
            className={`w-full p-2 rounded-md border ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300'
            }`}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Estimated Duration
          </label>
          <input
            type="text"
            value={task.duration}
            onChange={(e) => setTask({ ...task, duration: e.target.value })}
            placeholder="e.g., 1.5h"
            className={`w-full p-2 rounded-md border ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300'
            }`}
          />
          <p className="text-xs text-gray-500 mt-1">Format: 1h, 1.5h, 2h, etc.</p>
        </div>
        
        {error && (
          <div className="mb-4 p-2 bg-red-500 bg-opacity-10 border border-red-500 text-red-500 rounded-md text-sm">
            {error}
          </div>
        )}
        
        <div className="flex justify-end">
          <button
            type="button"
            onClick={closeForm}
            className="px-4 py-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;