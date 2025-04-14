import { createContext, useState, useEffect } from 'react';
import { 
  dailyTasksData, 
  getCurrentDateString, 
  calculateDailyProgress,
  calculateWeeklyProgress,
  calculateTotalDuration,
  getTasksForDate
} from '../data/dailyTasksData';

export const DailyTasksContext = createContext();

export const DailyTasksProvider = ({ children }) => {
  // Load tasks from localStorage if available or use default data
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('dailyTasks');
    return savedTasks ? JSON.parse(savedTasks) : dailyTasksData;
  });
  
  const [selectedDate, setSelectedDate] = useState(getCurrentDateString());
  const [currentTasks, setCurrentTasks] = useState([]);
  const [dailyProgress, setDailyProgress] = useState(0);
  const [weeklyProgress, setWeeklyProgress] = useState(0);
  const [totalStudyTime, setTotalStudyTime] = useState('0h');
  
  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('dailyTasks', JSON.stringify(tasks));
  }, [tasks]);

  // Update current tasks when selected date changes
  useEffect(() => {
    const tasksForDate = getTasksForDate(tasks, selectedDate);
    setCurrentTasks(tasksForDate);
    setDailyProgress(calculateDailyProgress(tasksForDate));
    setWeeklyProgress(calculateWeeklyProgress(tasks, selectedDate));
    setTotalStudyTime(calculateTotalDuration(tasksForDate));
  }, [selectedDate, tasks]);

  // Toggle task completion status
  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map(dayData => {
      if (dayData.date === selectedDate) {
        const updatedDayTasks = dayData.tasks.map(task => {
          if (task.id === taskId) {
            return { ...task, done: !task.done };
          }
          return task;
        });
        return { ...dayData, tasks: updatedDayTasks };
      }
      return dayData;
    });
    
    setTasks(updatedTasks);
  };

  // Add new task to current date
  const addTask = (newTask) => {
    // Check if selected date exists in tasks
    const dateExists = tasks.some(dayData => dayData.date === selectedDate);
    
    if (dateExists) {
      const updatedTasks = tasks.map(dayData => {
        if (dayData.date === selectedDate) {
          return {
            ...dayData,
            tasks: [...dayData.tasks, { ...newTask, id: `task-${Date.now()}` }]
          };
        }
        return dayData;
      });
      setTasks(updatedTasks);
    } else {
      // Create a new date entry
      setTasks([
        ...tasks,
        {
          date: selectedDate,
          tasks: [{ ...newTask, id: `task-${Date.now()}` }]
        }
      ]);
    }
  };

  // Delete a task
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.map(dayData => {
      if (dayData.date === selectedDate) {
        const updatedDayTasks = dayData.tasks.filter(task => task.id !== taskId);
        return { ...dayData, tasks: updatedDayTasks };
      }
      return dayData;
    });
    
    setTasks(updatedTasks);
  };

  // Get available dates for the date picker
  const getAvailableDates = () => {
    return tasks.map(dayData => dayData.date);
  };
  
  // Export tasks data to JSON file
  const exportTasks = () => {
    const dataStr = JSON.stringify(tasks, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `daily_tasks_backup_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // Import tasks from JSON file
  const importTasks = (jsonData) => {
    try {
      const parsedData = JSON.parse(jsonData);
      // Basic validation that the imported data has the expected structure
      if (Array.isArray(parsedData) && parsedData.length > 0 && parsedData[0].tasks) {
        setTasks(parsedData);
        return { success: true, message: "Tasks imported successfully!" };
      } else {
        return { success: false, message: "Invalid data format. Please use a proper tasks JSON file." };
      }
    } catch (error) {
      return { success: false, message: "Error parsing JSON data: " + error.message };
    }
  };
  
  // Reset to default data
  const resetToDefault = () => {
    if (window.confirm("Are you sure you want to reset all task data to default? This cannot be undone.")) {
      setTasks(dailyTasksData);
      return true;
    }
    return false;
  };

  return (
    <DailyTasksContext.Provider
      value={{
        tasks,
        selectedDate,
        setSelectedDate,
        currentTasks,
        dailyProgress,
        weeklyProgress,
        totalStudyTime,
        toggleTaskStatus,
        addTask,
        deleteTask,
        getAvailableDates,
        exportTasks,
        importTasks,
        resetToDefault
      }}
    >
      {children}
    </DailyTasksContext.Provider>
  );
};