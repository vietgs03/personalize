import { useState, useEffect, useRef, useContext } from 'react';
import { RoadmapContext } from '../context/RoadmapContext';
import { DailyTasksContext } from '../context/DailyTasksContext';
import { BlogContext } from '../context/BlogContext';
import { ThemeContext } from '../context/ThemeContext';

const GlobalSearch = ({ setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState({
    roadmap: [],
    dailyTasks: [],
    blogPosts: []
  });
  
  const searchInputRef = useRef(null);
  const searchResultsRef = useRef(null);
  const { darkMode } = useContext(ThemeContext);
  
  // Import data from all contexts
  const { roadmapData } = useContext(RoadmapContext);
  const { tasks } = useContext(DailyTasksContext);
  const { blogPosts, selectPost } = useContext(BlogContext);

  // Handle outside clicks to close the search dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Search function
  useEffect(() => {
    if (searchTerm.length < 2) {
      setSearchResults({
        roadmap: [],
        dailyTasks: [],
        blogPosts: []
      });
      return;
    }

    const term = searchTerm.toLowerCase();
    
    // Search roadmap goals
    const roadmapResults = [];
    roadmapData.forEach(quarter => {
      quarter.goals.forEach(goal => {
        if (
          goal.title.toLowerCase().includes(term) ||
          (goal.description && goal.description.toLowerCase().includes(term)) ||
          goal.category.toLowerCase().includes(term)
        ) {
          roadmapResults.push({
            id: `${quarter.quarter}-${goal.title}`,
            title: goal.title,
            subtitle: `${quarter.quarter} - ${goal.category}`,
            description: goal.description || "",
            status: goal.status
          });
        }
      });
    });
    
    // Search daily tasks
    const dailyTasksResults = tasks
      .filter(task => 
        task.title.toLowerCase().includes(term) ||
        task.date.includes(term)
      )
      .map(task => ({
        id: task.id,
        title: task.title,
        subtitle: `Due: ${new Date(task.date).toLocaleDateString()}`,
        done: task.done,
        duration: task.duration
      }));
    
    // Search blog posts
    const blogResults = blogPosts
      .filter(post => 
        post.title.toLowerCase().includes(term) ||
        post.content.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      )
      .map(post => ({
        id: post.id,
        title: post.title,
        subtitle: `${new Date(post.createdAt).toLocaleDateString()} • ${post.tags.join(', ')}`,
        preview: post.content.substring(0, 100) + '...'
      }));
    
    setSearchResults({
      roadmap: roadmapResults.slice(0, 5),
      dailyTasks: dailyTasksResults.slice(0, 5),
      blogPosts: blogResults.slice(0, 5)
    });
  }, [searchTerm, roadmapData, tasks, blogPosts]);

  // Handle navigation to search results
  const handleResultClick = (type, result) => {
    setIsOpen(false);
    setSearchTerm('');
    
    switch (type) {
      case 'roadmap':
        setActiveTab('roadmap');
        break;
      case 'dailyTasks': 
        setActiveTab('daily');
        break;
      case 'blogPosts':
        setActiveTab('blog');
        if (result.id) {
          selectPost(result.id);
        }
        break;
      default:
        break;
    }
  };

  // Calculate total results count
  const totalResults = searchResults.roadmap.length + 
    searchResults.dailyTasks.length + 
    searchResults.blogPosts.length;

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 100);
      }
      
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative">
      {/* Search Button */}
      <button 
        onClick={() => {
          setIsOpen(!isOpen);
          setTimeout(() => {
            if (!isOpen) searchInputRef.current?.focus();
          }, 100);
        }}
        className={`flex items-center px-3 py-1.5 rounded-md transition-colors ${
          darkMode 
            ? 'bg-gray-700 hover:bg-gray-600' 
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
        title="Search (Ctrl+K)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-sm">Search</span>
        <span className="text-xs opacity-60 ml-2 px-1 py-0.5 border rounded">⌘K</span>
      </button>
      
      {/* Search Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className={`w-full max-w-2xl rounded-lg shadow-xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
            ref={searchResultsRef}
          >
            {/* Search Input */}
            <div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  ref={searchInputRef}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search roadmap, tasks, or blog posts..."
                  className={`w-full p-2 focus:outline-none ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}
                  autoFocus
                />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="ml-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {searchTerm.length < 2 ? (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p className="mb-1">Start typing to search</p>
                  <p className="text-xs">Search roadmap goals, daily tasks, and blog posts</p>
                </div>
              ) : totalResults === 0 ? (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-lg mb-1">No results found</p>
                  <p className="text-sm">Try different keywords or check your spelling</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {/* Roadmap Results */}
                  {searchResults.roadmap.length > 0 && (
                    <div className="p-4">
                      <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Roadmap Goals</h3>
                      <ul className="space-y-2">
                        {searchResults.roadmap.map((result) => (
                          <li 
                            key={result.id}
                            onClick={() => handleResultClick('roadmap', result)}
                            className={`p-2 rounded-md cursor-pointer ${
                              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="font-medium">{result.title}</div>
                              <span className={`text-xs px-2 py-0.5 rounded ${
                                result.status === 'Done' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                result.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                                'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                              }`}>
                                {result.status}
                              </span>
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{result.subtitle}</div>
                            {result.description && (
                              <div className="text-sm mt-1 text-gray-600 dark:text-gray-300 line-clamp-1">{result.description}</div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Daily Tasks Results */}
                  {searchResults.dailyTasks.length > 0 && (
                    <div className="p-4">
                      <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Daily Tasks</h3>
                      <ul className="space-y-2">
                        {searchResults.dailyTasks.map((result) => (
                          <li 
                            key={result.id}
                            onClick={() => handleResultClick('dailyTasks', result)}
                            className={`p-2 rounded-md cursor-pointer ${
                              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className={`font-medium ${result.done ? 'line-through text-gray-500' : ''}`}>{result.title}</div>
                              <span className="text-xs text-gray-500 dark:text-gray-400">{result.duration}</span>
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{result.subtitle}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Blog Posts Results */}
                  {searchResults.blogPosts.length > 0 && (
                    <div className="p-4">
                      <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Blog Posts</h3>
                      <ul className="space-y-2">
                        {searchResults.blogPosts.map((result) => (
                          <li 
                            key={result.id}
                            onClick={() => handleResultClick('blogPosts', result)}
                            className={`p-2 rounded-md cursor-pointer ${
                              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                            }`}
                          >
                            <div className="font-medium">{result.title}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{result.subtitle}</div>
                            <div className="text-sm mt-1 text-gray-600 dark:text-gray-300 line-clamp-1">{result.preview}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Footer with keyboard shortcuts */}
            <div className={`p-2 text-xs text-center text-gray-500 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              Press <kbd className="px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-700">Esc</kbd> to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;