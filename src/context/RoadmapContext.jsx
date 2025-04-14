import { createContext, useState, useEffect } from 'react';
import { roadmapData, categories, statuses, priorities } from '../data/roadmapData';

export const RoadmapContext = createContext();

export const RoadmapProvider = ({ children }) => {
  // Load data from localStorage if available, otherwise use default data
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('roadmapData');
    return savedData ? JSON.parse(savedData) : roadmapData;
  });
  const [filteredData, setFilteredData] = useState(data);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [overallProgress, setOverallProgress] = useState(0);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('roadmapData', JSON.stringify(data));
  }, [data]);

  // Apply filters when they change
  useEffect(() => {
    let filtered = [...data];
    
    if (categoryFilter) {
      filtered = filtered.map(quarter => ({
        ...quarter,
        goals: quarter.goals.filter(goal => goal.category === categoryFilter)
      })).filter(quarter => quarter.goals.length > 0);
    }
    
    if (statusFilter) {
      filtered = filtered.map(quarter => ({
        ...quarter,
        goals: quarter.goals.filter(goal => goal.status === statusFilter)
      })).filter(quarter => quarter.goals.length > 0);
    }
    
    setFilteredData(filtered);
  }, [categoryFilter, statusFilter, data]);

  // Calculate overall progress
  useEffect(() => {
    const totalGoals = data.reduce((acc, quarter) => acc + quarter.goals.length, 0);
    const completedGoals = data.reduce((acc, quarter) => 
      acc + quarter.goals.filter(goal => goal.status === "Done").length, 0);
    
    setOverallProgress(totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0);
  }, [data]);

  // Setup event listeners for filter actions
  useEffect(() => {
    // Clear category filter
    const handleClearCategoryFilter = () => {
      setCategoryFilter('');
    };
    
    // Clear status filter
    const handleClearStatusFilter = () => {
      setStatusFilter('');
    };
    
    // Clear all filters
    const handleClearAllFilters = () => {
      setCategoryFilter('');
      setStatusFilter('');
    };
    
    // Add event listeners
    window.addEventListener('clearCategoryFilter', handleClearCategoryFilter);
    window.addEventListener('clearStatusFilter', handleClearStatusFilter);
    window.addEventListener('clearAllFilters', handleClearAllFilters);
    
    // Clean up
    return () => {
      window.removeEventListener('clearCategoryFilter', handleClearCategoryFilter);
      window.removeEventListener('clearStatusFilter', handleClearStatusFilter);
      window.removeEventListener('clearAllFilters', handleClearAllFilters);
    };
  }, []);

  // Update a goal's status
  const updateGoalStatus = (quarterIndex, goalIndex, newStatus) => {
    const updatedData = [...data];
    updatedData[quarterIndex].goals[goalIndex].status = newStatus;
    
    // Recalculate quarter progress
    const quarterGoals = updatedData[quarterIndex].goals;
    const completedGoals = quarterGoals.filter(goal => goal.status === "Done").length;
    updatedData[quarterIndex].progress = Math.round((completedGoals / quarterGoals.length) * 100);
    
    setData(updatedData);
  };

  // Add a new goal to a quarter
  const addGoal = (quarterIndex, newGoal) => {
    const updatedData = [...data];
    updatedData[quarterIndex].goals.push(newGoal);
    
    // Recalculate quarter progress
    const quarterGoals = updatedData[quarterIndex].goals;
    const completedGoals = quarterGoals.filter(goal => goal.status === "Done").length;
    updatedData[quarterIndex].progress = Math.round((completedGoals / quarterGoals.length) * 100);
    
    setData(updatedData);
  };

  // Delete a goal
  const deleteGoal = (quarterIndex, goalIndex) => {
    const updatedData = [...data];
    updatedData[quarterIndex].goals.splice(goalIndex, 1);
    
    // Recalculate quarter progress if goals remain
    if (updatedData[quarterIndex].goals.length > 0) {
      const quarterGoals = updatedData[quarterIndex].goals;
      const completedGoals = quarterGoals.filter(goal => goal.status === "Done").length;
      updatedData[quarterIndex].progress = Math.round((completedGoals / quarterGoals.length) * 100);
    } else {
      updatedData[quarterIndex].progress = 0;
    }
    
    setData(updatedData);
  };

  // Export data to JSON file
  const exportData = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `roadmap_backup_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // Import data from JSON file
  const importData = (jsonData) => {
    try {
      const parsedData = JSON.parse(jsonData);
      // Basic validation that the imported data has the expected structure
      if (Array.isArray(parsedData) && parsedData.length > 0 && parsedData[0].goals) {
        setData(parsedData);
        return { success: true, message: "Data imported successfully!" };
      } else {
        return { success: false, message: "Invalid data format. Please use a proper roadmap JSON file." };
      }
    } catch (error) {
      return { success: false, message: "Error parsing JSON data: " + error.message };
    }
  };

  // Reset to default data
  const resetToDefault = () => {
    if (window.confirm("Are you sure you want to reset all data to default? This cannot be undone.")) {
      setData(roadmapData);
      return true;
    }
    return false;
  };

  return (
    <RoadmapContext.Provider 
      value={{ 
        roadmapData: filteredData, 
        originalData: data,
        categories, 
        statuses,
        priorities,
        categoryFilter, 
        setCategoryFilter,
        statusFilter, 
        setStatusFilter,
        overallProgress,
        updateGoalStatus,
        addGoal,
        deleteGoal,
        exportData,
        importData,
        resetToDefault
      }}
    >
      {children}
    </RoadmapContext.Provider>
  );
};