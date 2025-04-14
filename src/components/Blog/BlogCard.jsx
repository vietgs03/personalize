import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const BlogCard = ({ post, onClick, readingTime }) => {
  const { theme } = useContext(ThemeContext);
  
  // Extract a preview from the content (first 150 characters)
  const contentPreview = post.content.length > 150
    ? `${post.content.substring(0, 150)}...`
    : post.content;

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div 
      className={`rounded-lg shadow-md p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 
        ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-2">
        <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          {post.title}
        </h2>
        <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          {readingTime} min read
        </div>
      </div>
      
      <div className="flex gap-2 mb-3">
        {post.tags.map(tag => (
          <span 
            key={tag} 
            className={`text-xs px-2 py-1 rounded-full 
              ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
          >
            {tag}
          </span>
        ))}
      </div>
      
      <p className={`mb-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        {contentPreview}
      </p>
      
      <div className="flex justify-between items-center text-sm">
        <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
          {post.author}
        </div>
        <div className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
          {formatDate(post.createdAt)}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;