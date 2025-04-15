// Web Development roadmap data
const webDevRoadmap = [
  {
    quarter: "Q3 2025",
    title: "Web Development with Go",
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
        title: "Frontend Integration with Go",
        description: "Serve static files, templates, and integrate with modern frontend frameworks",
        category: "Web Development",
        status: "Not Started",
        estimatedTime: "5 days",
        deadline: "2025-07-28",
        priority: "Medium",
        resources: [
          { name: "Go Templates", url: "https://golang.org/pkg/html/template/" }
        ],
      },
      {
        title: "API Documentation with Swagger",
        description: "Generate API documentation using Swagger/OpenAPI specifications",
        category: "Web Development",
        status: "Not Started",
        estimatedTime: "3 days",
        deadline: "2025-07-31",
        priority: "Medium",
        resources: [
          { name: "Swaggo", url: "https://github.com/swaggo/swag" }
        ],
      }
    ]
  },
  {
    quarter: "Q4 2025",
    title: "Advanced Web Development",
    progress: 0,
    goals: [
      {
        title: "GraphQL with Go",
        description: "Build GraphQL APIs using gqlgen or graphql-go",
        category: "Web Development",
        status: "Not Started",
        estimatedTime: "1 week",
        deadline: "2025-10-07",
        priority: "Medium",
        resources: [
          { name: "gqlgen", url: "https://gqlgen.com/" }
        ],
      },
      {
        title: "Progressive Web Apps",
        description: "Create offline-capable, installable web applications with service workers",
        category: "Web Development",
        status: "Not Started",
        estimatedTime: "1 week",
        deadline: "2025-10-14",
        priority: "Medium",
        resources: [
          { name: "PWA Documentation", url: "https://web.dev/progressive-web-apps/" }
        ],
      },
      {
        title: "Microservices Communication",
        description: "Implement service discovery, API gateways, and inter-service communication",
        category: "Web Development",
        status: "Not Started",
        estimatedTime: "10 days",
        deadline: "2025-10-24",
        priority: "High",
        resources: [
          { name: "Microservices with Go", url: "https://www.nginx.com/blog/building-microservices-inter-process-communication/" }
        ],
      }
    ]
  }
];

export default webDevRoadmap;