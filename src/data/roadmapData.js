// Import roadmap data from individual files
import golangRoadmap from './golangrm.js';
import aiRoadmap from './ai.js';
import cloudRoadmap from './cloud.js';
import designSystemRoadmap from './designsystem.js';
import dsaRoadmap from './dsa.js';
import webDevRoadmap from './webdev.js';
import databaseRoadmap from './database.js';
import securityRoadmap from './security.js';
import performanceRoadmap from './performance.js';
import projectRoadmap from './project.js';

const roadmapData = [
  // Golang Roadmap
  ...golangRoadmap,
  // AI/ML Roadmap
  ...aiRoadmap,
  // Cloud Roadmap
  ...cloudRoadmap,
  // System Design Roadmap
  ...designSystemRoadmap,
  // Data Structures & Algorithms Roadmap
  ...dsaRoadmap,
  // Web Development Roadmap
  ...webDevRoadmap,
  // Database Roadmap
  ...databaseRoadmap,
  // Security Roadmap
  ...securityRoadmap,
  // Performance Roadmap
  ...performanceRoadmap,
  // Project Roadmap
  ...projectRoadmap
];

// Export the combined roadmap data
export { roadmapData };

// Export categories, statuses, and priorities for filtering
export const categories = [
  "Golang Core", 
  "Cloud", 
  "AI/ML", 
  "System Design", 
  "Data Structures",
  "Algorithms",
  "Web Development",
  "Database",
  "Security",
  "Performance",
  "Project"
];

export const statuses = [
  "Not Started", 
  "In Progress", 
  "Done"
];

export const priorities = [
  "High", 
  "Medium", 
  "Low"
];