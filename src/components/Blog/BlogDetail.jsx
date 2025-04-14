import React, { useContext, useState, useRef } from 'react';
import { BlogContext } from '../../context/BlogContext';
import { ThemeContext } from '../../context/ThemeContext';
import { getReadingTime, getRelatedPosts } from '../../data/blogData';

const BlogDetail = ({ post }) => {
  const { 
    selectPost, 
    likePost, 
    unlikePost, 
    bookmarkPost, 
    removeBookmark, 
    sharePost, 
    followAuthor, 
    unfollowAuthor, 
    addComment,
    addReply,
    isPostLiked,
    isPostBookmarked,
    isAuthorFollowed,
    getRelatedPostsForId,
    currentUser
  } = useContext(BlogContext);
  
  const { theme } = useContext(ThemeContext);
  
  const [commentText, setCommentText] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  const commentInputRef = useRef(null);
  const replyInputRef = useRef(null);
  
  React.useEffect(() => {
    if(post) {
      setRelatedPosts(getRelatedPostsForId(post.id, 3));
    }
  }, [post, getRelatedPostsForId]);
  
  if (!post) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Function to render markdown content
  const renderMarkdown = (content) => {
    // Simple replacement for markdown headers and code blocks
    // In a real app, you might want to use a markdown library
    return content
      .replace(/##\s(.*)/g, '<h2 class="text-2xl font-bold mt-6 mb-4">$1</h2>')
      .replace(/###\s(.*)/g, '<h3 class="text-xl font-bold mt-5 mb-3">$1</h3>')
      .replace(/\*\*(.*)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code class="bg-gray-200 dark:bg-gray-700 px-1 rounded">$1</code>')
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-200 dark:bg-gray-700 p-4 rounded my-4 overflow-x-auto"><code>$1</code></pre>')
      .replace(/- (.*)/g, '<li class="ml-6 list-disc">$1</li>')
      .split('\n').join('<br />');
  };
  
  const handleLike = () => {
    isPostLiked(post.id) ? unlikePost(post.id) : likePost(post.id);
  };
  
  const handleBookmark = () => {
    isPostBookmarked(post.id) ? removeBookmark(post.id) : bookmarkPost(post.id);
  };
  
  const handleShare = () => {
    sharePost(post.id);
  };
  
  const handleFollow = () => {
    if (!post.author) return;
    isAuthorFollowed(post.author.id) ? unfollowAuthor(post.author.id) : followAuthor(post.author.id);
  };
  
  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      addComment(post.id, commentText);
      setCommentText('');
    }
  };
  
  const handleSubmitReply = (e, commentId) => {
    e.preventDefault();
    if (replyText.trim()) {
      addReply(post.id, commentId, replyText);
      setReplyText('');
      setReplyingTo(null);
    }
  };
  
  const startReply = (commentId) => {
    setReplyingTo(commentId);
    setTimeout(() => {
      if (replyInputRef.current) {
        replyInputRef.current.focus();
      }
    }, 100);
  };

  return (
    <div className={`max-w-4xl mx-auto px-4 py-8 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
      {/* Back Button */}
      <button 
        onClick={() => selectPost(null)}
        className={`mb-6 flex items-center ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to blog list
      </button>
      
      <article className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden`}>
        {/* Cover Image */}
        {post.coverImage && (
          <div className="w-full h-64 md:h-96 overflow-hidden relative">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6">
              {post.tags && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 bg-white/20 text-white backdrop-blur-sm rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{post.title}</h1>
              <div className="flex items-center text-white/90 text-sm">
                <span>{formatDate(post.createdAt)}</span>
                <span className="mx-2">•</span>
                <span>{post.readingTime || getReadingTime(post.content)} min read</span>
                {post.stats && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{post.stats.views} views</span>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
        
        <div className="p-6 md:p-8">
          {/* If we don't have a cover image with overlay, show the title here */}
          {!post.coverImage && (
            <>
              <h1 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>
                {post.title}
              </h1>
              
              <div className="flex items-center mb-6">
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Published on {formatDate(post.createdAt)}
                  {post.lastUpdated !== post.createdAt && 
                    ` (Updated: ${formatDate(post.lastUpdated)})`}
                  <span className="mx-2">•</span>
                  <span>{post.readingTime || getReadingTime(post.content)} min read</span>
                  {post.stats && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{post.stats.views} views</span>
                    </>
                  )}
                </div>
                {post.tags && (
                  <div className="ml-auto flex flex-wrap">
                    {post.tags.map(tag => (
                      <span 
                        key={tag} 
                        className={`${theme === 'dark' 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-200 text-gray-800'} 
                          text-xs px-2 py-1 rounded mr-2 mb-2`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}

          {/* Author information */}
          <div className={`flex items-center justify-between p-4 mb-8 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
            <div className="flex items-center">
              {post.author?.avatar && (
                <img 
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-white"
                />
              )}
              <div>
                <div className="flex items-center">
                  <h3 className="font-bold">{post.author?.name || "Unknown Author"}</h3>
                  {post.author?.isVerified && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                {post.author?.bio && (
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {post.author.bio}
                  </p>
                )}
                <div className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {post.author?.followers || 0} followers
                </div>
              </div>
            </div>
            
            <button 
              onClick={handleFollow}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isAuthorFollowed(post.author?.id)
                ? (theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-gray-300 text-gray-800')
                : (theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white')
              }`}
            >
              {isAuthorFollowed(post.author?.id) ? 'Following' : 'Follow'}
            </button>
          </div>
          
          {/* Content */}
          <div 
            className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''} mb-8`} 
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} 
          />

          {/* Social interactions */}
          <div className="flex flex-wrap items-center justify-between border-t border-b py-4 mb-6 gap-4 
            ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}">
            <div className="flex items-center gap-6">
              <button 
                onClick={handleLike}
                className={`flex items-center gap-2 ${
                  isPostLiked(post.id)
                    ? 'text-red-500'
                    : `${theme === 'dark' ? 'text-gray-300 hover:text-red-400' : 'text-gray-700 hover:text-red-500'}`
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isPostLiked(post.id) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isPostLiked(post.id) ? 0 : 2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="font-medium">{post.stats?.likes || 0}</span>
              </button>
              <button 
                onClick={() => commentInputRef.current?.focus()}
                className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="font-medium">{post.comments?.length || 0}</span>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={handleBookmark}
                className={`flex items-center gap-2 ${
                  isPostBookmarked(post.id)
                    ? 'text-blue-500'
                    : `${theme === 'dark' ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isPostBookmarked(post.id) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isPostBookmarked(post.id) ? 0 : 2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span>Bookmark</span>
              </button>
              <button 
                onClick={handleShare}
                className={`flex items-center gap-2 ${theme === 'dark' ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-gray-900'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Comments section */}
          <div>
            <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Comments ({post.comments?.length || 0})
            </h3>
            
            {/* Comment form */}
            <form onSubmit={handleSubmitComment} className="mb-8">
              <div className="flex items-start space-x-4">
                {currentUser?.avatar && (
                  <img 
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-10 h-10 rounded-full"
                  />
                )}
                <div className="flex-grow">
                  <textarea
                    ref={commentInputRef}
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Add a comment..."
                    rows={3}
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:outline-none ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-600'
                        : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500'
                    }`}
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      type="submit"
                      disabled={!commentText.trim()}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        commentText.trim()
                          ? (theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white')
                          : (theme === 'dark' ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-500 cursor-not-allowed')
                      }`}
                    >
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            </form>
            
            {/* Comments list */}
            {post.comments && post.comments.length > 0 ? (
              <div className="space-y-6">
                {post.comments.map(comment => (
                  <div key={comment.id} className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700/40' : 'bg-gray-50'}`}>
                    <div className="flex justify-between">
                      <div className="flex items-center mb-2">
                        {comment.author?.avatar && (
                          <img 
                            src={comment.author.avatar}
                            alt={comment.author.name}
                            className="w-8 h-8 rounded-full mr-2"
                          />
                        )}
                        <div>
                          <div className="font-medium">{comment.author?.name || "Anonymous"}</div>
                          <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                            {formatDate(comment.createdAt)}
                          </div>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => console.log('Report comment')}
                        className={`text-xs ${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}
                      >
                        Report
                      </button>
                    </div>
                    
                    <div className={`mt-2 mb-3 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                      {comment.content}
                    </div>
                    
                    <div className="flex items-center text-sm gap-4">
                      <button className={`flex items-center ${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        {comment.likes || 0}
                      </button>
                      <button 
                        onClick={() => startReply(comment.id)}
                        className={`flex items-center ${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Reply
                      </button>
                    </div>
                    
                    {/* Reply form */}
                    {replyingTo === comment.id && (
                      <form 
                        onSubmit={(e) => handleSubmitReply(e, comment.id)}
                        className="mt-3 ml-8"
                      >
                        <div className="flex items-start space-x-3">
                          {currentUser?.avatar && (
                            <img 
                              src={currentUser.avatar}
                              alt={currentUser.name}
                              className="w-7 h-7 rounded-full"
                            />
                          )}
                          <div className="flex-grow">
                            <textarea
                              ref={replyInputRef}
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                              placeholder="Write a reply..."
                              rows={2}
                              className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:outline-none ${
                                theme === 'dark'
                                  ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-600'
                                  : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500'
                              }`}
                            />
                            <div className="flex justify-end mt-2">
                              <button
                                type="button"
                                onClick={() => setReplyingTo(null)}
                                className={`px-3 py-1 mr-2 rounded-md text-xs ${
                                  theme === 'dark' ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-800'
                                }`}
                              >
                                Cancel
                              </button>
                              <button
                                type="submit"
                                disabled={!replyText.trim()}
                                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                                  replyText.trim()
                                    ? (theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white')
                                    : (theme === 'dark' ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-500 cursor-not-allowed')
                                }`}
                              >
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    )}
                    
                    {/* Replies */}
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="mt-4 ml-6 space-y-4">
                        {comment.replies.map(reply => (
                          <div key={reply.id} className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700/70' : 'bg-gray-100'}`}>
                            <div className="flex items-center mb-2">
                              {reply.author?.avatar && (
                                <img 
                                  src={reply.author.avatar}
                                  alt={reply.author.name}
                                  className="w-6 h-6 rounded-full mr-2"
                                />
                              )}
                              <div>
                                <div className="font-medium text-sm">{reply.author?.name || "Anonymous"}</div>
                                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                  {formatDate(reply.createdAt)}
                                </div>
                              </div>
                            </div>
                            <div className={`mt-1 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                              {reply.content}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className={`text-center py-10 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p>No comments yet. Be the first to share your thoughts!</p>
              </div>
            )}
          </div>
        </div>
      </article>
      
      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-12">
          <h2 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map(relatedPost => (
              <div 
                key={relatedPost.id}
                onClick={() => selectPost(relatedPost.id)}
                className={`rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
              >
                {relatedPost.coverImage && (
                  <div className="w-full h-40 overflow-hidden">
                    <img
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{relatedPost.title}</h3>
                  <div className="flex items-center text-sm">
                    {relatedPost.author?.avatar && (
                      <img 
                        src={relatedPost.author.avatar}
                        alt={relatedPost.author.name}
                        className="w-6 h-6 rounded-full mr-2"
                      />
                    )}
                    <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {relatedPost.author?.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;