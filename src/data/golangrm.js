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
        }
      ]
    }
];

export default golangRoadmap;