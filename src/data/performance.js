// Performance roadmap data
const performanceRoadmap = [
  {
    quarter: "Q3 2025",
    title: "Performance Optimization",
    progress: 0,
    goals: [
      {
        title: "Profiling Go Applications",
        description: "Use pprof and trace tools to identify performance bottlenecks",
        category: "Performance",
        status: "Not Started",
        estimatedTime: "3 days",
        deadline: "2025-08-03",
        priority: "High",
        resources: [
          { name: "Go Profiling", url: "https://blog.golang.org/profiling-go-programs" }
        ],
      },
      {
        title: "Memory Optimization",
        description: "Reduce memory allocations and implement efficient data structures",
        category: "Performance",
        status: "Not Started",
        estimatedTime: "4 days",
        deadline: "2025-08-07",
        priority: "High",
        resources: [
          { name: "Go Memory Management", url: "https://povilasv.me/go-memory-management/" }
        ],
      },
      {
        title: "Concurrency Optimization",
        description: "Optimize goroutine usage, prevent leaks, and implement worker pools",
        category: "Performance",
        status: "Not Started",
        estimatedTime: "5 days",
        deadline: "2025-08-12",
        priority: "High",
        resources: [
          { name: "Go Concurrency Patterns", url: "https://blog.golang.org/pipelines" }
        ],
      },
      {
        title: "Database Query Optimization",
        description: "Optimize SQL queries, indexes, and connection pooling",
        category: "Performance",
        status: "Not Started",
        estimatedTime: "4 days",
        deadline: "2025-08-16",
        priority: "Medium",
        resources: [
          { name: "SQL Performance Tuning", url: "https://use-the-index-luke.com/" }
        ],
      }
    ]
  },
  {
    quarter: "Q4 2025",
    title: "Advanced Performance Techniques",
    progress: 0,
    goals: [
      {
        title: "Caching Strategies",
        description: "Implement multi-level caching with Redis, in-memory caches, and CDNs",
        category: "Performance",
        status: "Not Started",
        estimatedTime: "5 days",
        deadline: "2025-10-05",
        priority: "High",
        resources: [
          { name: "Caching Best Practices", url: "https://aws.amazon.com/caching/best-practices/" }
        ],
      },
      {
        title: "Load Testing & Benchmarking",
        description: "Use tools like k6, Apache Bench, and Go benchmarks to test performance",
        category: "Performance",
        status: "Not Started",
        estimatedTime: "4 days",
        deadline: "2025-10-09",
        priority: "Medium",
        resources: [
          { name: "k6 Load Testing", url: "https://k6.io/docs/" }
        ],
      },
      {
        title: "Distributed Tracing",
        description: "Implement OpenTelemetry for tracing requests across microservices",
        category: "Performance",
        status: "Not Started",
        estimatedTime: "6 days",
        deadline: "2025-10-15",
        priority: "Medium",
        resources: [
          { name: "OpenTelemetry Go", url: "https://opentelemetry.io/docs/go/" }
        ],
      }
    ]
  }
];

export default performanceRoadmap;