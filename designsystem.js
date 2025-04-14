const designSystemRoadmap = [
    {
      quarter: "Q2 2025",
      title: "System Design Fundamentals",
      progress: 0,
      goals: [
        {
          title: "Scalability Basics",
          description: "Understand horizontal vs vertical scaling, load balancing, and caching strategies",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-04-17",
          priority: "High",
          resources: [
            { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" }
          ],
        },
        {
          title: "Database Design & Normalization",
          description: "Learn database schema design, normalization forms, and indexing strategies",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-04-22",
          priority: "High",
          resources: [
            { name: "Database Design Tutorial", url: "https://www.lucidchart.com/pages/database-diagram/database-design" }
          ],
        },
        {
          title: "API Design Principles",
          description: "Master RESTful API design, versioning, authentication, and documentation",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-04-26",
          priority: "High",
          resources: [
            { name: "REST API Design Best Practices", url: "https://swagger.io/resources/articles/best-practices-in-api-design/" }
          ],
        },
        {
          title: "Microservices Architecture",
          description: "Understand microservices principles, patterns, and tradeoffs compared to monoliths",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-05-03",
          priority: "High",
          resources: [
            { name: "Microservices Guide", url: "https://martinfowler.com/microservices/" }
          ],
        },
        {
          title: "Distributed Systems Basics",
          description: "Learn CAP theorem, consistency models, and distributed consensus",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-05-10",
          priority: "High",
          resources: [
            { name: "Distributed Systems for Fun and Profit", url: "http://book.mixu.net/distsys/" }
          ],
        },
        {
          title: "Caching Strategies",
          description: "Implement various caching patterns: cache-aside, write-through, write-behind, and eviction policies",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-05-14",
          priority: "Medium",
          resources: [
            { name: "Caching Best Practices", url: "https://aws.amazon.com/caching/best-practices/" }
          ],
        },
        {
          title: "Load Balancing Techniques",
          description: "Understand algorithms like round-robin, least connections, and consistent hashing",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "3 days",
          deadline: "2025-05-17",
          priority: "Medium",
          resources: [
            { name: "Load Balancing Algorithms", url: "https://www.nginx.com/resources/glossary/load-balancing/" }
          ],
        },
        {
          title: "Message Queues & Pub/Sub",
          description: "Learn asynchronous communication patterns using message brokers like RabbitMQ and Kafka",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-05-22",
          priority: "High",
          resources: [
            { name: "Apache Kafka Documentation", url: "https://kafka.apache.org/documentation/" }
          ],
        },
        {
          title: "Database Sharding",
          description: "Implement horizontal partitioning strategies for databases",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-05-26",
          priority: "Medium",
          resources: [
            { name: "Database Sharding Guide", url: "https://www.digitalocean.com/community/tutorials/understanding-database-sharding" }
          ],
        },
        {
          title: "Rate Limiting & Throttling",
          description: "Implement token bucket, leaky bucket, and fixed window algorithms",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "3 days",
          deadline: "2025-05-29",
          priority: "Medium",
          resources: [
            { name: "Rate Limiting Algorithms", url: "https://konghq.com/blog/how-to-design-a-scalable-rate-limiting-algorithm/" }
          ],
        }
      ]
    },
    {
      quarter: "Q3 2025",
      title: "Advanced System Design & Patterns",
      progress: 0,
      goals: [
        {
          title: "Design event-driven system with Kafka",
          description: "Use Kafka pub-sub to decouple services and handle high-throughput message processing",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "2 weeks",
          deadline: "2025-07-14",
          priority: "High",
          resources: [
            { name: "Kafka Streams Documentation", url: "https://kafka.apache.org/documentation/streams/" }
          ],
        },
        {
          title: "CQRS & Event Sourcing",
          description: "Implement Command Query Responsibility Segregation and event sourcing patterns",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "10 days",
          deadline: "2025-07-24",
          priority: "Medium",
          resources: [
            { name: "CQRS Journey", url: "https://docs.microsoft.com/en-us/previous-versions/msp-n-p/jj554200(v=pandp.10)" }
          ],
        },
        {
          title: "Distributed Transactions",
          description: "Understand 2PC, saga pattern, and eventual consistency models",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-07-31",
          priority: "High",
          resources: [
            { name: "Saga Pattern", url: "https://microservices.io/patterns/data/saga.html" }
          ],
        },
        {
          title: "Service Discovery",
          description: "Implement service discovery using tools like Consul or etcd",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-08-04",
          priority: "Medium",
          resources: [
            { name: "Service Discovery in Microservices", url: "https://www.nginx.com/blog/service-discovery-in-a-microservices-architecture/" }
          ],
        },
        {
          title: "API Gateway Pattern",
          description: "Design and implement API gateways for microservices architecture",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-08-09",
          priority: "High",
          resources: [
            { name: "API Gateway Pattern", url: "https://microservices.io/patterns/apigateway.html" }
          ],
        },
        {
          title: "Circuit Breaker Pattern",
          description: "Implement resilience patterns for distributed systems",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "3 days",
          deadline: "2025-08-12",
          priority: "Medium",
          resources: [
            { name: "Circuit Breaker Pattern", url: "https://martinfowler.com/bliki/CircuitBreaker.html" }
          ],
        },
        {
          title: "Distributed Tracing",
          description: "Implement request tracing across microservices using Jaeger or Zipkin",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-08-19",
          priority: "Medium",
          resources: [
            { name: "OpenTelemetry Documentation", url: "https://opentelemetry.io/docs/" }
          ],
        },
        {
          title: "Data Consistency in Distributed Systems",
          description: "Understand and implement strategies for data consistency across services",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-08-26",
          priority: "High",
          resources: [
            { name: "Data Consistency Primer", url: "https://docs.microsoft.com/en-us/previous-versions/msp-n-p/dn589800(v=pandp.10)" }
          ],
        },
        {
          title: "Serverless Architecture",
          description: "Design event-driven applications using serverless computing models",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-09-02",
          priority: "Medium",
          resources: [
            { name: "Serverless Architectures", url: "https://martinfowler.com/articles/serverless.html" }
          ],
        },
        {
          title: "Bulkhead Pattern",
          description: "Implement isolation and partitioning for system resilience",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "3 days",
          deadline: "2025-09-05",
          priority: "Medium",
          resources: [
            { name: "Bulkhead Pattern", url: "https://docs.microsoft.com/en-us/azure/architecture/patterns/bulkhead" }
          ],
        }
      ]
    },
    {
      quarter: "Q4 2025",
      title: "System Design Case Studies & Optimization",
      progress: 0,
      goals: [
        {
          title: "Design a URL Shortener",
          description: "Create a scalable URL shortening service with high availability",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-10-05",
          priority: "Medium",
          resources: [
            { name: "URL Shortener System Design", url: "https://www.educative.io/courses/grokking-the-system-design-interview/m2ygV4E81AR" }
          ],
        },
        {
          title: "Design a Distributed File Storage",
          description: "Create a scalable file storage system like Google Drive or Dropbox",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "10 days",
          deadline: "2025-10-15",
          priority: "High",
          resources: [
            { name: "Distributed File System Design", url: "https://www.educative.io/courses/grokking-the-system-design-interview/m22Gymjp4mG" }
          ],
        },
        {
          title: "Design a Social Media Platform",
          description: "Create a scalable architecture for a social network with news feed and notifications",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "10 days",
          deadline: "2025-10-25",
          priority: "Medium",
          resources: [
            { name: "Social Network System Design", url: "https://www.educative.io/courses/grokking-the-system-design-interview/m2G48X18NDO" }
          ],
        },
        {
          title: "Design a Real-time Chat System",
          description: "Create a scalable architecture for real-time messaging like WhatsApp or Slack",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-11-01",
          priority: "Medium",
          resources: [
            { name: "Chat System Design", url: "https://www.educative.io/courses/grokking-the-system-design-interview/B8R22v0wqJo" }
          ],
        },
        {
          title: "Design a Video Streaming Service",
          description: "Create a scalable architecture for video streaming like YouTube or Netflix",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "10 days",
          deadline: "2025-11-11",
          priority: "High",
          resources: [
            { name: "Video Streaming System Design", url: "https://www.educative.io/courses/grokking-the-system-design-interview/xV26VjZ7yMl" }
          ],
        },
        {
          title: "Design a Rate Limiter",
          description: "Create a distributed rate limiting system for APIs",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-11-15",
          priority: "Medium",
          resources: [
            { name: "Rate Limiter System Design", url: "https://www.educative.io/courses/grokking-the-system-design-interview/3jYKmrVAPGQ" }
          ],
        },
        {
          title: "Design a Web Crawler",
          description: "Create a distributed web crawler for search engines",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-11-22",
          priority: "Medium",
          resources: [
            { name: "Web Crawler System Design", url: "https://www.educative.io/courses/grokking-the-system-design-interview/NE5LpPrWrKv" }
          ],
        },
        {
          title: "Design a Distributed Cache",
          description: "Create a scalable distributed caching system like Redis or Memcached",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-11-29",
          priority: "High",
          resources: [
            { name: "Distributed Cache System Design", url: "https://www.educative.io/courses/grokking-the-system-design-interview/3j6NnJrpp5p" }
          ],
        },
        {
          title: "Design a Notification System",
          description: "Create a scalable push notification service for mobile and web applications",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-12-04",
          priority: "Medium",
          resources: [
            { name: "Notification System Design", url: "https://www.educative.io/courses/grokking-the-system-design-interview/mE2XkgGRnmp" }
          ],
        },
        {
          title: "System Design Interview Preparation",
          description: "Practice end-to-end system design interviews with comprehensive solutions",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "2 weeks",
          deadline: "2025-12-18",
          priority: "High",
          resources: [
            { name: "System Design Interview Book", url: "https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF" }
          ],
        }
      ]
    }
  ];
  
  export default designSystemRoadmap;