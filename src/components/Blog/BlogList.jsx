import React, { useContext, useState, useEffect } from 'react';
import { BlogContext } from '../../context/BlogContext';
import { ThemeContext } from '../../context/ThemeContext';
import { getReadingTime } from '../../data/blogData';
import BlogCard from './BlogCard';
import BlogSidebar from './BlogSidebar';

const BlogList = () => {
  const { 
    blogPosts, 
    tags, 
    selectPost, 
    filterPostsByTag, 
    searchPosts,
    currentUser, 
    getTrendingPosts,
    getFollowingFeed,
    isPostLiked,
    likePost,
    unlikePost,
    isPostBookmarked,
    bookmarkPost,
    removeBookmark,
    sharePost
  } = useContext(BlogContext);
  
  const { theme } = useContext(ThemeContext);
  
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [feedType, setFeedType] = useState('latest'); // 'latest', 'trending', 'following'
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [followingPosts, setFollowingPosts] = useState([]);
  
  // Get trending and following posts on component mount
  useEffect(() => {
    setTrendingPosts(getTrendingPosts(5));
    setFollowingPosts(getFollowingFeed());
  }, [blogPosts, getTrendingPosts, getFollowingFeed]);
  
  // Filter posts based on selected tag, search query, and feed type
  const filteredPosts = () => {
    let posts = [];
    
    // First apply feed type filter
    switch(feedType) {
      case 'trending':
        posts = trendingPosts;
        break;
      case 'following':
        posts = followingPosts;
        break;
      case 'latest':
      default:
        posts = [...blogPosts].sort((a, b) => 
          new Date(b.createdAt) - new Date(a.createdAt)
        );
    }
    
    // Then apply tag filter if needed
    if (selectedTag) {
      posts = posts.filter(post => post.tags.includes(selectedTag));
    }
    
    // Finally apply search filter if needed
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.content.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return posts;
  };
  
  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };
  
  const handlePostClick = (id) => {
    selectPost(id);
  };
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleToggleLike = (e, postId) => {
    e.stopPropagation(); // Prevent post click event
    isPostLiked(postId) ? unlikePost(postId) : likePost(postId);
  };
  
  const handleToggleBookmark = (e, postId) => {
    e.stopPropagation(); // Prevent post click event
    isPostBookmarked(postId) ? removeBookmark(postId) : bookmarkPost(postId);
  };
  
  const handleShare = (e, postId) => {
    e.stopPropagation(); // Prevent post click event
    sharePost(postId);
  };

  // Find a featured post (if any)
  const featuredPost = blogPosts.find(post => post.isFeatured);

  return (
    <div className={`flex flex-col md:flex-row h-full w-full gap-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
      {/* Left sidebar for filters and tags */}
      <div className="md:w-1/4 lg:w-1/5 md:max-w-xs">
        <BlogSidebar 
          tags={tags} 
          selectedTag={selectedTag} 
          onTagClick={handleTagClick}
          searchQuery={searchQuery}
          onSearchChange={handleSearch}
          currentUser={currentUser}
        />
      </div>
      
      {/* Main content - blog posts list */}
      <div className="flex-1 overflow-auto">
        {/* Feed type tabs */}
        <div className={`mb-6 flex border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <button 
            onClick={() => setFeedType('latest')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition ${
              feedType === 'latest' 
                ? `${theme === 'dark' ? 'border-blue-500 text-blue-400' : 'border-blue-600 text-blue-600'}`
                : 'border-transparent hover:text-gray-600 dark:hover:text-gray-300'
            }`}
          >
            Latest
          </button>
          <button 
            onClick={() => setFeedType('trending')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition ${
              feedType === 'trending' 
                ? `${theme === 'dark' ? 'border-blue-500 text-blue-400' : 'border-blue-600 text-blue-600'}`
                : 'border-transparent hover:text-gray-600 dark:hover:text-gray-300'
            }`}
          >
            Trending
          </button>
          <button 
            onClick={() => setFeedType('following')}
            className={`px-4 py-2 font-medium text-sm border-b-2 transition ${
              feedType === 'following' 
                ? `${theme === 'dark' ? 'border-blue-500 text-blue-400' : 'border-blue-600 text-blue-600'}`
                : 'border-transparent hover:text-gray-600 dark:hover:text-gray-300'
            }`}
          >
            Following
          </button>
        </div>
        
        <div className="p-4">
          {/* Featured post, if any */}
          {featuredPost && feedType === 'latest' && !selectedTag && !searchQuery && (
            <div className="mb-8">
              <h2 className={`text-sm uppercase tracking-wider mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                Featured Post
              </h2>
              <div 
                onClick={() => handlePostClick(featuredPost.id)}
                className={`cursor-pointer group rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
              >
                {featuredPost.coverImage && (
                  <div className="w-full h-72 overflow-hidden">
                    <img
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map(tag => (
                      <span 
                        key={tag} 
                        onClick={(e) => { e.stopPropagation(); handleTagClick(tag); }}
                        className={`text-xs px-2 py-1 rounded-full cursor-pointer 
                          ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {featuredPost.excerpt || featuredPost.content.slice(0, 150) + '...'}
                  </p>
                  
                  {/* Author info */}
                  <div className="flex items-center mb-4">
                    {featuredPost.author?.avatar && (
                      <img 
                        src={featuredPost.author.avatar} 
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full mr-3 border-2 border-white"
                      />
                    )}
                    <div>
                      <div className="font-medium">{featuredPost.author?.name || 'Unknown Author'}</div>
                      <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        {new Date(featuredPost.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })} · {featuredPost.readingTime || getReadingTime(featuredPost.content)} min read
                      </div>
                    </div>
                  </div>
                  
                  {/* Social actions */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={(e) => handleToggleLike(e, featuredPost.id)}
                        className={`flex items-center gap-2 transition-colors ${
                          isPostLiked(featuredPost.id)
                            ? 'text-red-500'
                            : `${theme === 'dark' ? 'text-gray-400 hover:text-red-400' : 'text-gray-600 hover:text-red-500'}`
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 16.828l-6.828-6.828a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        {featuredPost.stats?.likes || 0}
                      </button>
                      <button className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {featuredPost.comments?.length || 0}
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={(e) => handleToggleBookmark(e, featuredPost.id)}
                        className={`flex items-center gap-1 transition-colors ${
                          isPostBookmarked(featuredPost.id)
                            ? 'text-blue-500'
                            : `${theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'}`
                        }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                        </svg>
                      </button>
                      <button 
                        onClick={(e) => handleShare(e, featuredPost.id)}
                        className={`flex items-center gap-1 ${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <h1 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
            {selectedTag ? `Posts tagged with #${selectedTag}` : 
              feedType === 'trending' ? 'Trending Posts' : 
              feedType === 'following' ? 'Posts from Authors You Follow' : 
              'Recent Posts'}
          </h1>
          
          {filteredPosts().length === 0 ? (
            <div className={`text-center py-12 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
              {feedType === 'following' ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-lg mb-2">You're not following any authors yet</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Follow authors to see their latest posts here</p>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p className="text-lg mb-2">No posts found</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {searchQuery ? "Try a different search term" : "Check back later for new content"}
                  </p>
                </>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts().map(post => (
                <div
                  key={post.id}
                  className={`rounded-lg shadow-md overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
                  onClick={() => handlePostClick(post.id)}
                >
                  {post.coverImage && (
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map(tag => (
                        <span 
                          key={tag} 
                          onClick={(e) => { e.stopPropagation(); handleTagClick(tag); }}
                          className={`text-xs px-2 py-1 rounded-full cursor-pointer 
                            ${theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <h2 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{post.title}</h2>
                    <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {post.excerpt || post.content.substring(0, 120) + '...'}
                    </p>
                    
                    {/* Author info */}
                    <div className="flex items-center mb-4">
                      {post.author?.avatar && (
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                      )}
                      <div>
                        <div className="text-sm font-medium">{post.author?.name || 'Unknown Author'}</div>
                        <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          {new Date(post.createdAt).toLocaleDateString()} · {post.readingTime || getReadingTime(post.content)} min read
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={(e) => handleToggleLike(e, post.id)}
                          className={`flex items-center gap-1 transition-colors ${
                            isPostLiked(post.id)
                              ? 'text-red-500'
                              : `${theme === 'dark' ? 'text-gray-400 hover:text-red-400' : 'text-gray-600 hover:text-red-500'}`
                          }`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 16.828l-6.828-6.828a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                          <span>{post.stats?.likes || 0}</span>
                        </button>
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {post.comments?.length || 0}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={(e) => handleToggleBookmark(e, post.id)}
                          className={`flex items-center gap-1 transition-colors ${
                            isPostBookmarked(post.id)
                              ? 'text-blue-500'
                              : `${theme === 'dark' ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'}`
                          }`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                          </svg>
                        </button>
                        <button 
                          onClick={(e) => handleShare(e, post.id)}
                          className={`flex items-center gap-1 ${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'}`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogList;