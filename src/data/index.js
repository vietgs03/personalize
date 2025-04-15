// Import all roadmap modules
import golangRoadmap from './golangrm.js';
import aiRoadmap from './ai.js';
import cloudRoadmap from './cloud.js';
import dsaRoadmap from './dsa.js';
import designSystemRoadmap from './designsystem.js';

// Export all roadmaps as a combined object
const roadmaps = {
  golang: golangRoadmap,
  ai: aiRoadmap,
  cloud: cloudRoadmap,
  dsa: dsaRoadmap,
  designSystem: designSystemRoadmap
};

// Export individual roadmaps
export {
  golangRoadmap,
  aiRoadmap,
  cloudRoadmap,
  dsaRoadmap,
  designSystemRoadmap
};

// Export default combined roadmaps
export default roadmaps;
