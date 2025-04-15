// Security roadmap data
const securityRoadmap = [
  {
    quarter: "Q3 2025",
    title: "Security Fundamentals",
    progress: 0,
    goals: [
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
        title: "Input Validation & Sanitization",
        description: "Prevent injection attacks through proper input validation and sanitization",
        category: "Security",
        status: "Not Started",
        estimatedTime: "3 days",
        deadline: "2025-07-19",
        priority: "High",
        resources: [
          { name: "OWASP Input Validation", url: "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html" }
        ],
      },
      {
        title: "HTTPS & TLS Implementation",
        description: "Configure secure HTTPS connections and understand TLS certificates",
        category: "Security",
        status: "Not Started",
        estimatedTime: "2 days",
        deadline: "2025-07-21",
        priority: "High",
        resources: [
          { name: "HTTPS in Go", url: "https://golang.org/pkg/crypto/tls/" }
        ],
      },
      {
        title: "CSRF & XSS Protection",
        description: "Implement protections against cross-site request forgery and cross-site scripting",
        category: "Security",
        status: "Not Started",
        estimatedTime: "3 days",
        deadline: "2025-07-24",
        priority: "High",
        resources: [
          { name: "OWASP XSS Prevention", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" }
        ],
      }
    ]
  },
  {
    quarter: "Q4 2025",
    title: "Advanced Security",
    progress: 0,
    goals: [
      {
        title: "Security Headers & CSP",
        description: "Implement Content Security Policy and other security headers",
        category: "Security",
        status: "Not Started",
        estimatedTime: "2 days",
        deadline: "2025-10-02",
        priority: "Medium",
        resources: [
          { name: "Security Headers", url: "https://securityheaders.com/" }
        ],
      },
      {
        title: "OAuth 2.0 & OpenID Connect",
        description: "Implement OAuth 2.0 flows and OpenID Connect for authentication",
        category: "Security",
        status: "Not Started",
        estimatedTime: "5 days",
        deadline: "2025-10-07",
        priority: "Medium",
        resources: [
          { name: "OAuth 2.0 in Go", url: "https://github.com/golang/oauth2" }
        ],
      },
      {
        title: "API Security Best Practices",
        description: "Implement rate limiting, API keys, and secure API design patterns",
        category: "Security",
        status: "Not Started",
        estimatedTime: "4 days",
        deadline: "2025-10-11",
        priority: "High",
        resources: [
          { name: "API Security Checklist", url: "https://github.com/shieldfy/API-Security-Checklist" }
        ],
      }
    ]
  }
];

export default securityRoadmap;