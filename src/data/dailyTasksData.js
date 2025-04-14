export const dailyTasksData = [
  {
    date: "2025-04-13",
    tasks: [
      { id: "task-1", title: "Review Goroutines", duration: "1h", done: true },
      { id: "task-2", title: "Refactor gRPC handler", duration: "1.5h", done: false },
      { id: "task-3", title: "Study GCP PubSub", duration: "2h", done: true },
      { id: "task-4", title: "Write unit tests for auth middleware", duration: "1h", done: false },
    ]
  },
  {
    date: "2025-04-12",
    tasks: [
      { id: "task-5", title: "Implement JWT authentication", duration: "2h", done: true },
      { id: "task-6", title: "Create Docker compose for local dev", duration: "1h", done: true },
      { id: "task-7", title: "Study Kubernetes operators", duration: "1.5h", done: false },
    ]
  },
  {
    date: "2025-04-11",
    tasks: [
      { id: "task-8", title: "Configure Prometheus metrics", duration: "1h", done: true },
      { id: "task-9", title: "Read about WASM and Golang", duration: "1h", done: true },
      { id: "task-10", title: "Practice with Go generics", duration: "2h", done: true },
    ]
  }
];

export const getCurrentDateString = () => {
  const today = new Date();
  return today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
};

export const calculateDailyProgress = (tasks) => {
  if (!tasks || tasks.length === 0) return 0;
  const completed = tasks.filter(task => task.done).length;
  return Math.round((completed / tasks.length) * 100);
};

export const calculateWeeklyProgress = (dailyTasksArray, date) => {
  const currentDate = date ? new Date(date) : new Date();
  const oneWeekAgo = new Date(currentDate);
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
  let totalTasks = 0;
  let completedTasks = 0;
  
  dailyTasksArray.forEach(dayData => {
    const taskDate = new Date(dayData.date);
    if (taskDate >= oneWeekAgo && taskDate <= currentDate) {
      dayData.tasks.forEach(task => {
        totalTasks++;
        if (task.done) completedTasks++;
      });
    }
  });
  
  return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
};

export const calculateTotalDuration = (tasks) => {
  if (!tasks || tasks.length === 0) return '0h';
  
  let totalHours = 0;
  
  tasks.forEach(task => {
    const durationStr = task.duration;
    const match = durationStr.match(/^(\d+(\.\d+)?)h$/);
    if (match) {
      totalHours += parseFloat(match[1]);
    }
  });
  
  return `${totalHours.toFixed(1)}h`;
};

export const getTasksForDate = (dailyTasksArray, dateStr) => {
  const found = dailyTasksArray.find(dayData => dayData.date === dateStr);
  return found ? found.tasks : [];
};