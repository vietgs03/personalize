import React, { createContext, useState, useEffect } from 'react';
import { initialBlogPosts, getRelatedPosts } from '../data/blogData';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    return savedPosts ? JSON.parse(savedPosts) : initialBlogPosts;
  });
  
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [tags, setTags] = useState([]);
  const [currentUser, setCurrentUser] = useState(() => {
    // In a real app, this would come from authentication
    return {
      id: "user-1",
      name: "Việt Hoàng",
      username: "viethoang",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Backend Engineer | Golang Enthusiast",
      following: [],
      bookmarks: [],
      likedPosts: []
    };
  });
  
  // Save posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    
    // Update tags list
    const uniqueTags = new Set();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => uniqueTags.add(tag));
    });
    
    setTags(Array.from(uniqueTags));
  }, [blogPosts]);
  
  // Basic CRUD operations
  const addBlogPost = (newPost) => {
    const post = {
      ...newPost,
      id: `blog-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
      lastUpdated: new Date().toISOString().split('T')[0],
      author: currentUser,
      stats: {
        likes: 0,
        comments: 0,
        views: 0,
        bookmarks: 0,
        shares: 0
      },
      comments: [],
      isPublished: true,
      isPremium: false,
      isFeatured: false
    };
    
    setBlogPosts(prevPosts => [...prevPosts, post]);
    return post;
  };
  
  const updateBlogPost = (id, updatedPost) => {
    setBlogPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === id 
          ? { ...post, ...updatedPost, lastUpdated: new Date().toISOString().split('T')[0] }
          : post
      )
    );
  };
  
  const deleteBlogPost = (id) => {
    setBlogPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    if (selectedPostId === id) {
      setSelectedPostId(null);
    }
  };
  
  const selectPost = (id) => {
    if (id) {
      // Increment view count when selecting a post
      setBlogPosts(prevPosts => 
        prevPosts.map(post => 
          post.id === id 
            ? { 
                ...post, 
                stats: { 
                  ...post.stats, 
                  views: (post.stats?.views || 0) + 1 
                } 
              }
            : post
        )
      );
    }
    setSelectedPostId(id);
  };
  
  const getSelectedPost = () => {
    return blogPosts.find(post => post.id === selectedPostId) || null;
  };
  
  // Social interaction functions
  const likePost = (postId) => {
    setBlogPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { 
              ...post, 
              stats: { 
                ...post.stats, 
                likes: (post.stats?.likes || 0) + 1 
              } 
            }
          : post
      )
    );
    
    // Add to user's liked posts
    setCurrentUser(prevUser => ({
      ...prevUser,
      likedPosts: [...(prevUser.likedPosts || []), postId]
    }));
  };
  
  const unlikePost = (postId) => {
    setBlogPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { 
              ...post, 
              stats: { 
                ...post.stats, 
                likes: Math.max(0, (post.stats?.likes || 0) - 1)
              } 
            }
          : post
      )
    );
    
    // Remove from user's liked posts
    setCurrentUser(prevUser => ({
      ...prevUser,
      likedPosts: (prevUser.likedPosts || []).filter(id => id !== postId)
    }));
  };
  
  const bookmarkPost = (postId) => {
    setBlogPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { 
              ...post, 
              stats: { 
                ...post.stats, 
                bookmarks: (post.stats?.bookmarks || 0) + 1 
              } 
            }
          : post
      )
    );
    
    // Add to user's bookmarks
    setCurrentUser(prevUser => ({
      ...prevUser,
      bookmarks: [...(prevUser.bookmarks || []), postId]
    }));
  };
  
  const removeBookmark = (postId) => {
    setBlogPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { 
              ...post, 
              stats: { 
                ...post.stats, 
                bookmarks: Math.max(0, (post.stats?.bookmarks || 0) - 1)
              } 
            }
          : post
      )
    );
    
    // Remove from user's bookmarks
    setCurrentUser(prevUser => ({
      ...prevUser,
      bookmarks: (prevUser.bookmarks || []).filter(id => id !== postId)
    }));
  };
  
  const followAuthor = (authorId) => {
    setCurrentUser(prevUser => ({
      ...prevUser,
      following: [...(prevUser.following || []), authorId]
    }));
    
    // Update author's followers count in their posts
    setBlogPosts(prevPosts => 
      prevPosts.map(post => 
        post.author?.id === authorId 
          ? { 
              ...post, 
              author: { 
                ...post.author, 
                followers: (post.author.followers || 0) + 1 
              } 
            }
          : post
      )
    );
  };
  
  const unfollowAuthor = (authorId) => {
    setCurrentUser(prevUser => ({
      ...prevUser,
      following: (prevUser.following || []).filter(id => id !== authorId)
    }));
    
    // Update author's followers count in their posts
    setBlogPosts(prevPosts => 
      prevPosts.map(post => 
        post.author?.id === authorId 
          ? { 
              ...post, 
              author: { 
                ...post.author, 
                followers: Math.max(0, (post.author.followers || 0) - 1)
              } 
            }
          : post
      )
    );
  };
  
  const addComment = (postId, content) => {
    const newComment = {
      id: `comment-${Date.now()}`,
      content,
      createdAt: new Date().toISOString().split('T')[0],
      author: currentUser,
      likes: 0,
      replies: []
    };
    
    setBlogPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { 
              ...post, 
              comments: [...(post.comments || []), newComment],
              stats: {
                ...post.stats,
                comments: (post.comments?.length || 0) + 1
              }
            }
          : post
      )
    );
    
    return newComment;
  };
  
  const addReply = (postId, commentId, content) => {
    const newReply = {
      id: `reply-${Date.now()}`,
      content,
      createdAt: new Date().toISOString().split('T')[0],
      author: currentUser,
      likes: 0
    };
    
    setBlogPosts(prevPosts => 
      prevPosts.map(post => {
        if (post.id !== postId) return post;
        
        const updatedComments = post.comments.map(comment => {
          if (comment.id !== commentId) return comment;
          
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply]
          };
        });
        
        return {
          ...post,
          comments: updatedComments,
          stats: {
            ...post.stats,
            comments: (post.stats?.comments || 0) + 1
          }
        };
      })
    );
    
    return newReply;
  };
  
  const sharePost = (postId) => {
    // In a real app, this would open a share dialog
    // For now, just increment the share count
    setBlogPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { 
              ...post, 
              stats: { 
                ...post.stats, 
                shares: (post.stats?.shares || 0) + 1 
              } 
            }
          : post
      )
    );
    
    // Simulate sharing to clipboard
    const post = blogPosts.find(post => post.id === postId);
    if (post) {
      const shareText = `Check out this article: ${post.title}\n\nShared from My Blog Platform.`;
      navigator.clipboard.writeText(shareText)
        .then(() => {
          console.log('Article link copied to clipboard');
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    }
  };
  
  // Data export/import functionality
  const exportBlogData = () => {
    const dataStr = JSON.stringify(blogPosts);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `blog_posts_backup_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };
  
  const importBlogData = (jsonData) => {
    try {
      const parsedData = JSON.parse(jsonData);
      
      // Basic validation
      if (Array.isArray(parsedData) && parsedData.length > 0 && 
          parsedData[0].title && parsedData[0].content) {
        setBlogPosts(parsedData);
        return { success: true, message: "Blog posts imported successfully!" };
      } else {
        return { 
          success: false, 
          message: "Invalid data format. Please use a proper blog posts JSON file." 
        };
      }
    } catch (error) {
      return { 
        success: false, 
        message: `Error parsing JSON: ${error.message}` 
      };
    }
  };
  
  const filterPostsByTag = (tag) => {
    if (!tag) return blogPosts;
    return blogPosts.filter(post => post.tags.includes(tag));
  };

  const searchPosts = (query) => {
    const lowercaseQuery = query.toLowerCase();
    return blogPosts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) || 
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  };
  
  // Get trending posts based on engagement metrics
  const getTrendingPosts = (limit = 3) => {
    return [...blogPosts]
      .sort((a, b) => {
        const scoreA = (a.stats?.views || 0) + (a.stats?.likes || 0) * 2 + (a.stats?.comments?.length || 0) * 3;
        const scoreB = (b.stats?.views || 0) + (b.stats?.likes || 0) * 2 + (b.stats?.comments?.length || 0) * 3;
        return scoreB - scoreA;
      })
      .slice(0, limit);
  };
  
  // Get posts from authors the user follows
  const getFollowingFeed = () => {
    return blogPosts.filter(post => 
      currentUser.following && currentUser.following.includes(post.author?.id)
    );
  };
  
  // Get related posts for a specific post
  const getRelatedPostsForId = (postId, limit = 3) => {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return [];
    
    return blogPosts
      .filter(p => p.id !== postId)
      .filter(p => p.tags.some(tag => post.tags.includes(tag)))
      .slice(0, limit);
  };

  const value = {
    blogPosts,
    tags,
    selectedPostId,
    currentUser,
    selectPost,
    getSelectedPost,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    likePost,
    unlikePost,
    bookmarkPost,
    removeBookmark,
    followAuthor,
    unfollowAuthor,
    addComment,
    addReply,
    sharePost,
    exportBlogData,
    importBlogData,
    filterPostsByTag,
    searchPosts,
    getTrendingPosts,
    getFollowingFeed,
    getRelatedPostsForId,
    isPostLiked: (postId) => currentUser.likedPosts?.includes(postId),
    isPostBookmarked: (postId) => currentUser.bookmarks?.includes(postId),
    isAuthorFollowed: (authorId) => currentUser.following?.includes(authorId)
  };
  
  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};