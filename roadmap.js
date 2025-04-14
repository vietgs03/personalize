const roadmapData = [
    {
      quarter: "Q2 2025",
      title: "Optimize Backend & AI Integration",
      progress: 45,
      goals: [
        {
          title: "Build gRPC-based microservices",
          description: "Set up client-server with protocol buffers, handle errors, retries, and auth",
          category: "Golang Core",
          status: "Done",
          estimatedTime: "1 week",
          deadline: "2025-04-20",
          priority: "High",
          resources: [
            { name: "gRPC Go Docs", url: "https://grpc.io/docs/languages/go/" },
          ],
        },
        {
          title: "Parallel AI inference service",
          description: "Write a batch processing service in Go using errgroup, optimized for throughput",
          category: "AI/ML",
          status: "In Progress",
          estimatedTime: "2 weeks",
          deadline: "2025-04-30",
          priority: "High",
        },
        {
          title: "Deploy AI model to Vertex AI",
          description: "Convert local model and deploy to Vertex AI endpoint using Terraform",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-05-05",
          priority: "Medium",
          resources: [
            { name: "Vertex AI Tutorial", url: "https://cloud.google.com/vertex-ai/docs/general/deploying-models" },
          ],
        }
      ]
    },
    {
      quarter: "Q3 2025",
      title: "Master Distributed Systems & Scalability",
      progress: 0,
      goals: [
        {
          title: "Design event-driven system with Kafka",
          description: "Use Kafka pub-sub to decouple services and handle high-throughput message processing",
          category: "System Design",
          status: "Not Started",
          estimatedTime: "2 weeks",
          deadline: "2025-07-10",
          priority: "High",
        }
      ]
    }
  ];