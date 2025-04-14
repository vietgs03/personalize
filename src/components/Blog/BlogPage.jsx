import React, { useContext } from 'react';
import { BlogContext } from '../../context/BlogContext';
import BlogList from './BlogList';
import BlogDetail from './BlogDetail';

const BlogPage = () => {
  const { selectedPostId, getSelectedPost } = useContext(BlogContext);
  
  // If a post is selected, show the detail view; otherwise, show the list view
  const selectedPost = getSelectedPost();
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {selectedPost ? (
        <BlogDetail post={selectedPost} />
      ) : (
        <BlogList />
      )}
    </div>
  );
};

export default BlogPage;