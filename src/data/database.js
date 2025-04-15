// Database roadmap data
const databaseRoadmap = [
  {
    quarter: "Q3 2025",
    title: "Database Integration",
    progress: 0,
    goals: [
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
        title: "SQL Database Design",
        description: "Design normalized database schemas, indexes, and query optimization",
        category: "Database",
        status: "Not Started",
        estimatedTime: "4 days",
        deadline: "2025-07-16",
        priority: "High",
        resources: [
          { name: "Database Design Tutorial", url: "https://www.lucidchart.com/pages/database-diagram/database-design" }
        ],
      },
      {
        title: "NoSQL with MongoDB",
        description: "Implement document databases using MongoDB and mongo-go-driver",
        category: "Database",
        status: "Not Started",
        estimatedTime: "5 days",
        deadline: "2025-07-21",
        priority: "Medium",
        resources: [
          { name: "MongoDB Go Driver", url: "https://docs.mongodb.com/drivers/go/" }
        ],
      },
      {
        title: "Redis for Caching",
        description: "Implement caching strategies using Redis and go-redis",
        category: "Database",
        status: "Not Started",
        estimatedTime: "3 days",
        deadline: "2025-07-24",
        priority: "Medium",
        resources: [
          { name: "go-redis", url: "https://github.com/go-redis/redis" }
        ],
      }
    ]
  },
  {
    quarter: "Q4 2025",
    title: "Advanced Database Concepts",
    progress: 0,
    goals: [
      {
        title: "Database Sharding & Partitioning",
        description: "Implement horizontal and vertical partitioning strategies",
        category: "Database",
        status: "Not Started",
        estimatedTime: "1 week",
        deadline: "2025-10-07",
        priority: "Medium",
        resources: [
          { name: "Database Sharding Guide", url: "https://www.digitalocean.com/community/tutorials/understanding-database-sharding" }
        ],
      },
      {
        title: "Database Replication",
        description: "Set up master-slave replication and handle failover scenarios",
        category: "Database",
        status: "Not Started",
        estimatedTime: "4 days",
        deadline: "2025-10-11",
        priority: "Medium",
        resources: [
          { name: "MySQL Replication", url: "https://dev.mysql.com/doc/refman/8.0/en/replication.html" }
        ],
      },
      {
        title: "Time-Series Databases",
        description: "Work with InfluxDB or TimescaleDB for time-series data",
        category: "Database",
        status: "Not Started",
        estimatedTime: "5 days",
        deadline: "2025-10-16",
        priority: "Low",
        resources: [
          { name: "InfluxDB Go Client", url: "https://github.com/influxdata/influxdb-client-go" }
        ],
      }
    ]
  }
];

export default databaseRoadmap;