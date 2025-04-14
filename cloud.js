const cloudRoadmap = [
    {
      quarter: "Q2 2025",
      title: "Cloud Fundamentals & AWS",
      progress: 0,
      goals: [
        {
          title: "Cloud Computing Basics",
          description: "Understand cloud service models (IaaS, PaaS, SaaS), deployment models, and key benefits",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "3 days",
          deadline: "2025-04-13",
          priority: "High",
          resources: [
            { name: "AWS Cloud Essentials", url: "https://aws.amazon.com/getting-started/" }
          ],
        },
        {
          title: "AWS Core Services",
          description: "Master EC2, S3, RDS, IAM, VPC, and CloudFormation fundamentals",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-04-20",
          priority: "High",
          resources: [
            { name: "AWS Documentation", url: "https://docs.aws.amazon.com/" }
          ],
        },
        {
          title: "Serverless Computing with AWS Lambda",
          description: "Build serverless applications using Lambda, API Gateway, and DynamoDB",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-04-25",
          priority: "High",
          resources: [
            { name: "AWS Lambda Developer Guide", url: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html" }
          ],
        },
        {
          title: "Container Orchestration with EKS",
          description: "Deploy and manage Kubernetes clusters on AWS EKS",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-05-02",
          priority: "Medium",
          resources: [
            { name: "EKS Workshop", url: "https://www.eksworkshop.com/" }
          ],
        },
        {
          title: "Deploy AI model to Vertex AI",
          description: "Convert local model and deploy to Vertex AI endpoint using Terraform",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-05-09",
          priority: "Medium",
          resources: [
            { name: "Vertex AI Tutorial", url: "https://cloud.google.com/vertex-ai/docs/general/deploying-models" },
          ],
        },
        {
          title: "Infrastructure as Code with Terraform",
          description: "Define and provision cloud infrastructure using Terraform HCL",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-05-16",
          priority: "High",
          resources: [
            { name: "Terraform Documentation", url: "https://www.terraform.io/docs" }
          ],
        },
        {
          title: "Cloud Security Best Practices",
          description: "Implement security controls, encryption, IAM policies, and compliance frameworks",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-05-20",
          priority: "High",
          resources: [
            { name: "AWS Security Best Practices", url: "https://aws.amazon.com/architecture/security-identity-compliance/" }
          ],
        },
        {
          title: "Monitoring & Observability in AWS",
          description: "Set up CloudWatch, X-Ray, and CloudTrail for comprehensive monitoring",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "3 days",
          deadline: "2025-05-23",
          priority: "Medium",
          resources: [
            { name: "AWS Observability Workshop", url: "https://catalog.workshops.aws/observability/en-US" }
          ],
        },
        {
          title: "AWS Cost Optimization",
          description: "Implement strategies for cost management, budgeting, and resource optimization",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "2 days",
          deadline: "2025-05-25",
          priority: "Medium",
          resources: [
            { name: "AWS Cost Management", url: "https://aws.amazon.com/aws-cost-management/" }
          ],
        },
        {
          title: "CI/CD Pipeline with AWS",
          description: "Build continuous integration and deployment pipelines using CodePipeline, CodeBuild, and CodeDeploy",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-05-30",
          priority: "High",
          resources: [
            { name: "AWS CI/CD Workshop", url: "https://catalog.workshops.aws/cicddemo/en-US" }
          ],
        }
      ]
    },
    {
      quarter: "Q3 2025",
      title: "Multi-Cloud & Advanced Services",
      progress: 0,
      goals: [
        {
          title: "Google Cloud Platform Essentials",
          description: "Learn GCP core services: Compute Engine, Cloud Storage, Cloud SQL, and IAM",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-07-07",
          priority: "High",
          resources: [
            { name: "GCP Getting Started", url: "https://cloud.google.com/docs" }
          ],
        },
        {
          title: "Kubernetes on GKE",
          description: "Deploy and manage containerized applications on Google Kubernetes Engine",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-07-12",
          priority: "Medium",
          resources: [
            { name: "GKE Documentation", url: "https://cloud.google.com/kubernetes-engine/docs" }
          ],
        },
        {
          title: "Cloud Functions & Cloud Run",
          description: "Build serverless applications and containerized microservices on GCP",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-07-16",
          priority: "Medium",
          resources: [
            { name: "Cloud Run Documentation", url: "https://cloud.google.com/run/docs" }
          ],
        },
        {
          title: "BigQuery & Data Analytics",
          description: "Use BigQuery for large-scale data analytics and machine learning",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-07-21",
          priority: "Medium",
          resources: [
            { name: "BigQuery ML Tutorial", url: "https://cloud.google.com/bigquery-ml/docs/tutorials" }
          ],
        },
        {
          title: "Microsoft Azure Fundamentals",
          description: "Learn Azure core services: Virtual Machines, Storage, App Service, and Azure AD",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-07-28",
          priority: "Medium",
          resources: [
            { name: "Azure Documentation", url: "https://docs.microsoft.com/en-us/azure/" }
          ],
        },
        {
          title: "Azure Kubernetes Service (AKS)",
          description: "Deploy and manage containerized applications on Azure Kubernetes Service",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-08-01",
          priority: "Medium",
          resources: [
            { name: "AKS Documentation", url: "https://docs.microsoft.com/en-us/azure/aks/" }
          ],
        },
        {
          title: "Multi-Cloud Strategy & Management",
          description: "Design and implement multi-cloud architectures with consistent governance",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-08-08",
          priority: "High",
          resources: [
            { name: "Multi-Cloud Best Practices", url: "https://www.hashicorp.com/resources/multi-cloud-strategy" }
          ],
        },
        {
          title: "Cloud-Native Application Architecture",
          description: "Design applications optimized for cloud environments using microservices and containers",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "10 days",
          deadline: "2025-08-18",
          priority: "High",
          resources: [
            { name: "Cloud Native Computing Foundation", url: "https://www.cncf.io/" }
          ],
        },
        {
          title: "Disaster Recovery & High Availability",
          description: "Implement multi-region, multi-AZ architectures for resilience and business continuity",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-08-23",
          priority: "High",
          resources: [
            { name: "AWS Disaster Recovery", url: "https://aws.amazon.com/disaster-recovery/" }
          ],
        },
        {
          title: "Serverless Data Processing",
          description: "Build event-driven data pipelines using cloud-native serverless services",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-08-30",
          priority: "Medium",
          resources: [
            { name: "AWS Lambda Data Processing", url: "https://aws.amazon.com/lambda/data-processing/" }
          ],
        }
      ]
    },
    {
      quarter: "Q4 2025",
      title: "Cloud DevOps & Specialized Services",
      progress: 0,
      goals: [
        {
          title: "GitOps with ArgoCD",
          description: "Implement GitOps workflows for Kubernetes using ArgoCD",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-10-05",
          priority: "High",
          resources: [
            { name: "ArgoCD Documentation", url: "https://argo-cd.readthedocs.io/" }
          ],
        },
        {
          title: "Service Mesh with Istio",
          description: "Implement service mesh for microservices with traffic management, security, and observability",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-10-12",
          priority: "Medium",
          resources: [
            { name: "Istio Documentation", url: "https://istio.io/latest/docs/" }
          ],
        },
        {
          title: "Cloud Security Automation",
          description: "Implement automated security scanning, compliance checks, and remediation",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-10-17",
          priority: "High",
          resources: [
            { name: "AWS Security Hub", url: "https://aws.amazon.com/security-hub/" }
          ],
        },
        {
          title: "FinOps & Cloud Financial Management",
          description: "Implement FinOps practices for cloud cost optimization and financial accountability",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-10-21",
          priority: "Medium",
          resources: [
            { name: "FinOps Foundation", url: "https://www.finops.org/" }
          ],
        },
        {
          title: "Chaos Engineering in the Cloud",
          description: "Implement chaos experiments to improve system resilience and reliability",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-10-26",
          priority: "Medium",
          resources: [
            { name: "Chaos Monkey", url: "https://netflix.github.io/chaosmonkey/" }
          ],
        },
        {
          title: "Edge Computing & IoT",
          description: "Build cloud-to-edge solutions for IoT data processing and analytics",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-11-02",
          priority: "Low",
          resources: [
            { name: "AWS IoT Greengrass", url: "https://aws.amazon.com/greengrass/" }
          ],
        },
        {
          title: "Database Migration to Cloud",
          description: "Plan and execute database migrations to cloud-native database services",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-11-09",
          priority: "Medium",
          resources: [
            { name: "AWS Database Migration Service", url: "https://aws.amazon.com/dms/" }
          ],
        },
        {
          title: "Hybrid Cloud Architecture",
          description: "Design and implement hybrid cloud solutions connecting on-premises and cloud resources",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "10 days",
          deadline: "2025-11-19",
          priority: "Medium",
          resources: [
            { name: "AWS Outposts", url: "https://aws.amazon.com/outposts/" }
          ],
        },
        {
          title: "Cloud Migration Strategy",
          description: "Develop comprehensive migration strategies using the 6 R's approach",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-11-26",
          priority: "High",
          resources: [
            { name: "AWS Migration Whitepaper", url: "https://docs.aws.amazon.com/whitepapers/latest/aws-migration-whitepaper/welcome.html" }
          ],
        },
        {
          title: "Cloud Architecture Certification",
          description: "Prepare for and obtain a professional cloud architect certification",
          category: "Cloud",
          status: "Not Started",
          estimatedTime: "3 weeks",
          deadline: "2025-12-17",
          priority: "High",
          resources: [
            { name: "AWS Solutions Architect Professional", url: "https://aws.amazon.com/certification/certified-solutions-architect-professional/" }
          ],
        }
      ]
    }
  ];
  
  export default cloudRoadmap;
  