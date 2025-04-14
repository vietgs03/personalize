import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RoadmapProvider } from './context/RoadmapContext';
import { DailyTasksProvider } from './context/DailyTasksContext';
import { BlogProvider } from './context/BlogContext';
import Dashboard from './pages/Dashboard';
import DailyTaskTracker from './components/DailyTaskTracker/DailyTaskTracker';
import BlogPage from './components/Blog/BlogPage';
import SkillAssessment from './pages/SkillAssessment';
import TabNavigation from './components/TabNavigation';

function App() {
  const [activeTab, setActiveTab] = useState('roadmap'); // 'roadmap', 'daily', 'blog', 'evaluation'

  const renderContent = () => {
    switch (activeTab) {
      case 'roadmap':
        return <Dashboard />;
      case 'daily':
        return <DailyTaskTracker />;
      case 'blog':
        return <BlogPage />;
      case 'evaluation':
        return <SkillAssessment />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <RoadmapProvider>
        <DailyTasksProvider>
          <BlogProvider>
            <div className="min-h-screen">
              <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
              <div className="pt-16">
                {renderContent()}
              </div>
            </div>
          </BlogProvider>
        </DailyTasksProvider>
      </RoadmapProvider>
    </ThemeProvider>
  );
}

export default App;