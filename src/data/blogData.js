// Sample blog data for initial state
export const initialBlogPosts = [
  {
    id: "blog-1",
    title: "Hiểu về errgroup trong Go",
    tags: ["golang", "concurrency", "backend"],
    createdAt: "2025-04-12",
    lastUpdated: "2025-04-12",
    excerpt: "Gói errgroup trong Go là một công cụ mạnh mẽ để quản lý các goroutine chạy đồng thời và thu thập lỗi từ chúng.",
    coverImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--Uf5DPmKy--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1390/874a0528-c06e-478a-8bb6-66229a4c3803.png",
    content: `## errgroup giúp xử lý các goroutine song song một cách gọn gàng

Gói \`errgroup\` trong Go là một công cụ mạnh mẽ để quản lý các goroutine chạy đồng thời và thu thập lỗi từ chúng. Nó là một phần của package \`golang.org/x/sync/errgroup\`.

### Vấn đề errgroup giải quyết

Khi làm việc với goroutine, chúng ta thường gặp các vấn đề:
- Cần đợi tất cả các goroutine hoàn thành (có thể dùng WaitGroup)
- Xử lý lỗi từ goroutine (không dễ dàng với WaitGroup thuần túy)
- Hủy tất cả goroutine khi một goroutine gặp lỗi

\`errgroup\` giải quyết tất cả các vấn đề này trong một API gọn gàng.

### Ví dụ cơ bản

\`\`\`go
import (
    "context"
    "fmt"
    "golang.org/x/sync/errgroup"
)

func main() {
    g, ctx := errgroup.WithContext(context.Background())
    
    // Chạy nhiều goroutine
    for i := 0; i < 5; i++ {
        i := i  // Tạo bản sao của i cho goroutine
        g.Go(func() error {
            if i == 3 {
                return fmt.Errorf("lỗi từ goroutine %d", i)
            }
            fmt.Printf("Goroutine %d đang chạy\\n", i);
            return nil
        })
    }
    
    // Đợi tất cả goroutine & thu thập lỗi
    if err := g.Wait(); err != nil {
        fmt.Println("Có lỗi:", err)
    }
}`,
    author: {
      id: "user-1",
      name: "Việt Hoàng",
      username: "viethoang",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Backend Engineer | Golang Enthusiast",
      followers: 120,
      following: 45,
      isVerified: true
    },
    stats: {
      likes: 24,
      comments: 5,
      views: 342,
      bookmarks: 12,
      shares: 8
    },
    comments: [
      {
        id: "comment-1",
        content: "Bài viết rất hay! Mong bạn viết thêm về gRPC.",
        createdAt: "2025-04-13",
        author: {
          id: "user-2", 
          name: "Minh Trí",
          username: "minhtri",
          avatar: "https://randomuser.me/api/portraits/men/44.jpg"
        },
        likes: 3,
        replies: []
      },
      {
        id: "comment-2",
        content: "Tôi thấy có một cách tối ưu hơn cho việc xử lý lỗi trong Go concurrency là sử dụng errgroup kết hợp với context.",
        createdAt: "2025-04-13",
        author: {
          id: "user-3", 
          name: "Thu Hà",
          username: "thuha",
          avatar: "https://randomuser.me/api/portraits/women/22.jpg"
        },
        likes: 5,
        replies: [
          {
            id: "reply-1",
            content: "Bạn có thể chia sẻ thêm về cách tiếp cận này không?",
            createdAt: "2025-04-13",
            author: {
              id: "user-1", 
              name: "Việt Hoàng",
              username: "viethoang",
              avatar: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            likes: 1
          }
        ]
      }
    ],
    relatedPosts: ["blog-2"],
    readingTime: 5,
    isPublished: true,
    isPremium: false,
    isFeatured: true
  }
];

// Helper functions for working with blog posts
export const getAllBlogPosts = () => {
  return initialBlogPosts;
};

export const getBlogPostById = (id) => {
  return initialBlogPosts.find(post => post.id === id);
};

export const getBlogPostsByTag = (tag) => {
  return initialBlogPosts.filter(post => post.tags.includes(tag));
};

export const getAllTags = () => {
  const tagsSet = new Set();
  initialBlogPosts.forEach(post => {
    post.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet);
};

export const getPostsByMonth = () => {
  const postsByMonth = {};
  
  initialBlogPosts.forEach(post => {
    const date = new Date(post.createdAt);
    const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;
    
    if (!postsByMonth[monthYear]) {
      postsByMonth[monthYear] = [];
    }
    
    postsByMonth[monthYear].push(post);
  });
  
  return postsByMonth;
};

// Function to calculate reading time based on content length
export const getReadingTime = (content) => {
  const wordsPerMinute = 200; // Average reading speed
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return readingTime < 1 ? 1 : readingTime;
};

// Get trending posts (based on view count, likes, comments)
export const getTrendingPosts = (limit = 3) => {
  return [...initialBlogPosts]
    .sort((a, b) => {
      const scoreA = (a.stats?.views || 0) + (a.stats?.likes || 0) * 2 + (a.stats?.comments || 0) * 3;
      const scoreB = (b.stats?.views || 0) + (b.stats?.likes || 0) * 2 + (b.stats?.comments || 0) * 3;
      return scoreB - scoreA;
    })
    .slice(0, limit);
};

// Get featured posts
export const getFeaturedPosts = (limit = 1) => {
  return initialBlogPosts
    .filter(post => post.isFeatured)
    .slice(0, limit);
};

// Get related posts based on tags
export const getRelatedPosts = (postId, limit = 3) => {
  const post = getBlogPostById(postId);
  if (!post) return [];
  
  const related = initialBlogPosts
    .filter(p => p.id !== postId)
    .map(p => {
      // Calculate how many tags match
      const sharedTags = p.tags.filter(tag => post.tags.includes(tag)).length;
      return { post: p, sharedTags };
    })
    .filter(item => item.sharedTags > 0)
    .sort((a, b) => b.sharedTags - a.sharedTags)
    .map(item => item.post)
    .slice(0, limit);
    
  return related;
};

// Get latest posts
export const getLatestPosts = (limit = 5) => {
  return [...initialBlogPosts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, limit);
};