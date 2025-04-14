import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const BlogSidebar = ({ tags, selectedTag, onTagClick, searchQuery, onSearchChange, currentUser }) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`sticky top-20 space-y-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
      {/* User Profile Section */}
      {currentUser && (
        <div className={`p-5 rounded-lg mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow'}`}>
          <div className="flex items-center mb-4">
            <img 
              src={currentUser.avatar} 
              alt={currentUser.name} 
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <h3 className="font-medium">{currentUser.name}</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>@{currentUser.username}</p>
            </div>
          </div>
          
          <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {currentUser.bio || "No bio provided."}
          </p>
          
          <div className="grid grid-cols-2 gap-2 text-center text-sm">
            <div className={`p-2 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="font-semibold">{currentUser.following?.length || 0}</div>
              <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Following</div>
            </div>
            <div className={`p-2 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="font-semibold">{currentUser.followers || 0}</div>
              <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Followers</div>
            </div>
          </div>
          
          <div className="mt-4 flex space-x-2">
            <button className={`flex-1 px-4 py-2 rounded-md text-sm font-medium ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}>
              Write Post
            </button>
            <button className={`px-4 py-2 rounded-md text-sm font-medium ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Search */}
      <div className={`p-5 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow'}`}>
        <h3 className={`font-medium mb-3 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Search</h3>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={onSearchChange}
            placeholder="Search posts..."
            className={`w-full px-4 py-2 rounded-md 
              ${theme === 'dark' 
                ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' 
                : 'bg-gray-50 text-gray-900 placeholder-gray-500 border-gray-300'} 
              border focus:ring-2 focus:ring-blue-500 focus:outline-none`}
          />
          <svg 
            className={`absolute right-3 top-2.5 h-5 w-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      {/* Reading List - Bookmarked Posts */}
      <div className={`p-5 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow'}`}>
        <h3 className={`font-medium mb-3 flex items-center justify-between ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
          <span>Reading List</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
            {currentUser?.bookmarks?.length || 0}
          </span>
        </h3>
        {currentUser?.bookmarks?.length > 0 ? (
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            You have bookmarked {currentUser.bookmarks.length} posts.
          </p>
        ) : (
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            Save posts for later by bookmarking them.
          </p>
        )}
        <button className={`mt-2 text-sm font-medium ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
          View all bookmarks →
        </button>
      </div>
      
      {/* Tags */}
      <div className={`p-5 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow'}`}>
        <h3 className={`font-medium mb-3 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => onTagClick(tag)}
              className={`px-3 py-1 rounded-full text-sm 
                ${selectedTag === tag 
                  ? (theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800') 
                  : (theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300')}
                transition-colors duration-200`}
            >
              #{tag}
            </button>
          ))}
          
          {tags.length === 0 && (
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>No tags found.</p>
          )}
        </div>
      </div>
      
      {/* Who to follow section */}
      <div className={`p-5 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow'}`}>
        <h3 className={`font-medium mb-3 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
          Who to follow
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Jane Cooper" 
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="font-medium text-sm">Jane Cooper</div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>@janecooper</div>
              </div>
            </div>
            <button className={`px-3 py-1 text-xs rounded-full font-medium ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}>
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="https://randomuser.me/api/portraits/men/86.jpg" 
                alt="Devon Lane" 
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="font-medium text-sm">Devon Lane</div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>@devonlane</div>
              </div>
            </div>
            <button className={`px-3 py-1 text-xs rounded-full font-medium ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}>
              Follow
            </button>
          </div>
        </div>
        <button className={`mt-4 text-sm font-medium ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default BlogSidebar;