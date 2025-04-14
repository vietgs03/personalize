const golangRoadmap = [
    {
      quarter: "Q2 2025",
      title: "Golang Fundamentals",
      progress: 0,
      goals: [
        {
          title: "Go Basics & Syntax",
          description: "Learn Go syntax, data types, variables, control structures, and basic I/O operations",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-04-10",
          priority: "High",
          resources: [
            { name: "Go by Example", url: "https://gobyexample.com/" },
            { name: "Tour of Go", url: "https://tour.golang.org/" }
          ],
        },
        {
          title: "Functions & Methods",
          description: "Master function declarations, variadic functions, closures, defer statements, and method receivers",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "3 days",
          deadline: "2025-04-13",
          priority: "High",
          resources: [
            { name: "Go Functions Tutorial", url: "https://www.golang-book.com/books/intro/7" }
          ],
        },
        {
          title: "Data Structures in Go",
          description: "Implement arrays, slices, maps, structs, and understand memory management",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-04-17",
          priority: "High",
          resources: [
            { name: "Go Data Structures", url: "https://research.swtch.com/godata" }
          ],
        },
        {
          title: "Error Handling",
          description: "Learn idiomatic error handling, custom errors, and panic/recover mechanisms",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "2 days",
          deadline: "2025-04-19",
          priority: "High",
          resources: [
            { name: "Error Handling in Go", url: "https://blog.golang.org/error-handling-and-go" }
          ],
        },
        {
          title: "Build gRPC-based microservices",
          description: "Set up client-server with protocol buffers, handle errors, retries, and auth",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-04-26",
          priority: "High",
          resources: [
            { name: "gRPC Go Docs", url: "https://grpc.io/docs/languages/go/" },
          ],
        },
        {
          title: "Concurrency with Goroutines",
          description: "Master goroutines, channels, select statements, and synchronization primitives",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-05-03",
          priority: "High",
          resources: [
            { name: "Go Concurrency Patterns", url: "https://blog.golang.org/pipelines" },
            { name: "Concurrency in Go", url: "https://www.oreilly.com/library/view/concurrency-in-go/9781491941294/" }
          ],
        },
        {
          title: "Context Package",
          description: "Learn to use context for cancellation, timeouts, and passing request-scoped values",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "2 days",
          deadline: "2025-05-05",
          priority: "Medium",
          resources: [
            { name: "Go Context", url: "https://blog.golang.org/context" }
          ],
        },
        {
          title: "Testing in Go",
          description: "Write unit tests, benchmarks, and use the testing package effectively",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "3 days",
          deadline: "2025-05-08",
          priority: "Medium",
          resources: [
            { name: "Testing in Go", url: "https://blog.golang.org/cover" }
          ],
        },
        {
          title: "Go Modules & Dependency Management",
          description: "Master go.mod, go.sum, versioning, and dependency management",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "2 days",
          deadline: "2025-05-10",
          priority: "Medium",
          resources: [
            { name: "Go Modules", url: "https://blog.golang.org/using-go-modules" }
          ],
        },
        {
          title: "Interfaces & Type Embedding",
          description: "Understand interface composition, type assertions, and embedding for code reuse",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "3 days",
          deadline: "2025-05-13",
          priority: "Medium",
          resources: [
            { name: "Go Interfaces", url: "https://research.swtch.com/interfaces" }
          ],
        }
      ]
    },
    {
      quarter: "Q3 2025",
      title: "Golang Advanced & Web Development",
      progress: 0,
      goals: [
        {
          title: "RESTful API with Gin/Echo",
          description: "Build production-ready REST APIs using Gin or Echo frameworks with middleware, validation, and error handling",
          category: "Web Development",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-07-07",
          priority: "High",
          resources: [
            { name: "Gin Web Framework", url: "https://github.com/gin-gonic/gin" },
            { name: "Echo Framework", url: "https://echo.labstack.com/" }
          ],
        },
        {
          title: "Database Integration with GORM",
          description: "Connect to SQL databases, perform CRUD operations, migrations, and transactions using GORM",
          category: "Database",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-07-12",
          priority: "High",
          resources: [
            { name: "GORM Documentation", url: "https://gorm.io/docs/" }
          ],
        },
        {
          title: "Authentication & Authorization",
          description: "Implement JWT authentication, role-based access control, and secure password handling",
          category: "Security",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-07-16",
          priority: "High",
          resources: [
            { name: "JWT in Go", url: "https://github.com/golang-jwt/jwt" }
          ],
        },
        {
          title: "Middleware Development",
          description: "Create custom middleware for logging, rate limiting, CORS, and request validation",
          category: "Web Development",
          status: "Not Started",
          estimatedTime: "3 days",
          deadline: "2025-07-19",
          priority: "Medium",
          resources: [
            { name: "Middleware in Go", url: "https://drstearns.github.io/tutorials/gomiddleware/" }
          ],
        },
        {
          title: "Websockets in Go",
          description: "Implement real-time communication using Gorilla WebSocket or native net/http",
          category: "Web Development",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-07-23",
          priority: "Medium",
          resources: [
            { name: "Gorilla WebSocket", url: "https://github.com/gorilla/websocket" }
          ],
        },
        {
          title: "Performance Optimization",
          description: "Profile Go applications, optimize memory usage, and improve execution speed",
          category: "Performance",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-07-28",
          priority: "Medium",
          resources: [
            { name: "Go Performance", url: "https://blog.golang.org/pprof" }
          ],
        },
        {
          title: "Advanced Concurrency Patterns",
          description: "Master worker pools, fan-out/fan-in, rate limiting, and semaphores",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-08-04",
          priority: "High",
          resources: [
            { name: "Advanced Go Concurrency", url: "https://blog.golang.org/advanced-go-concurrency-patterns" }
          ],
        },
        {
          title: "Go Generics",
          description: "Learn to use type parameters and constraints for generic programming in Go 1.18+",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "3 days",
          deadline: "2025-08-07",
          priority: "Medium",
          resources: [
            { name: "Go Generics Tutorial", url: "https://go.dev/doc/tutorial/generics" }
          ],
        },
        {
          title: "Reflection in Go",
          description: "Understand the reflect package for runtime type inspection and manipulation",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "3 days",
          deadline: "2025-08-10",
          priority: "Low",
          resources: [
            { name: "Go Reflection", url: "https://blog.golang.org/laws-of-reflection" }
          ],
        },
        {
          title: "Go Plugins",
          description: "Create dynamically loaded plugins using the plugin package",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "2 days",
          deadline: "2025-08-12",
          priority: "Low",
          resources: [
            { name: "Go Plugins", url: "https://golang.org/pkg/plugin/" }
          ],
        }
      ]
    },
    {
      quarter: "Q4 2025",
      title: "Golang DevOps & Production",
      progress: 0,
      goals: [
        {
          title: "Containerization with Docker",
          description: "Create optimized Docker images for Go applications with multi-stage builds",
          category: "DevOps",
          status: "Not Started",
          estimatedTime: "3 days",
          deadline: "2025-10-03",
          priority: "High",
          resources: [
            { name: "Docker for Go", url: "https://docs.docker.com/language/golang/" }
          ],
        },
        {
          title: "CI/CD for Go Applications",
          description: "Set up continuous integration and deployment pipelines using GitHub Actions or GitLab CI",
          category: "DevOps",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-10-07",
          priority: "High",
          resources: [
            { name: "GitHub Actions for Go", url: "https://github.com/actions/setup-go" }
          ],
        },
        {
          title: "Kubernetes Deployment",
          description: "Deploy Go microservices to Kubernetes with proper configuration and scaling",
          category: "DevOps",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-10-14",
          priority: "High",
          resources: [
            { name: "Kubernetes Go Client", url: "https://github.com/kubernetes/client-go" }
          ],
        },
        {
          title: "Monitoring & Observability",
          description: "Implement metrics, tracing, and logging with Prometheus, Jaeger, and ELK stack",
          category: "DevOps",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-10-19",
          priority: "Medium",
          resources: [
            { name: "Prometheus Go Client", url: "https://github.com/prometheus/client_golang" }
          ],
        },
        {
          title: "Go Code Generation",
          description: "Use go generate for automating code generation tasks",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "2 days",
          deadline: "2025-10-21",
          priority: "Medium",
          resources: [
            { name: "Go Generate", url: "https://blog.golang.org/generate" }
          ],
        },
        {
          title: "Go Assembly",
          description: "Understand Go's assembly language for performance-critical sections",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-10-25",
          priority: "Low",
          resources: [
            { name: "Go Assembly", url: "https://golang.org/doc/asm" }
          ],
        },
        {
          title: "Go Compiler Internals",
          description: "Learn about Go's compilation process, optimizations, and runtime",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-11-01",
          priority: "Low",
          resources: [
            { name: "Go Compiler", url: "https://golang.org/src/cmd/compile/README.md" }
          ],
        },
        {
          title: "Go Fuzzing",
          description: "Implement fuzz testing for Go code to find edge cases and bugs",
          category: "Testing",
          status: "Not Started",
          estimatedTime: "3 days",
          deadline: "2025-11-04",
          priority: "Medium",
          resources: [
            { name: "Go Fuzzing", url: "https://go.dev/doc/tutorial/fuzz" }
          ],
        },
        {
          title: "Go Profiling & Tracing",
          description: "Use pprof and trace tools to analyze and optimize Go applications",
          category: "Performance",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-11-08",
          priority: "Medium",
          resources: [
            { name: "Go Profiling", url: "https://blog.golang.org/profiling-go-programs" }
          ],
        },
        {
          title: "Go Modules Advanced",
          description: "Master vendoring, private modules, and module proxies",
          category: "Golang Core",
          status: "Not Started",
          estimatedTime: "3 days",
          deadline: "2025-11-11",
          priority: "Medium",
          resources: [
            { name: "Go Module Proxies", url: "https://blog.golang.org/module-mirror-launch" }
          ],
        }
      ]
    }
  ];
  
  export default golangRoadmap;