const aiRoadmap = [
    {
      quarter: "Q2 2025",
      title: "AI/ML Fundamentals",
      progress: 0,
      goals: [
        {
          title: "Machine Learning Basics",
          description: "Learn fundamental ML concepts, algorithms, and mathematical foundations",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "2 weeks",
          deadline: "2025-04-15",
          priority: "High",
          resources: [
            { name: "Andrew Ng's Machine Learning Course", url: "https://www.coursera.org/learn/machine-learning" },
            { name: "Elements of Statistical Learning", url: "https://web.stanford.edu/~hastie/ElemStatLearn/" }
          ],
        },
        {
          title: "Python for Data Science",
          description: "Master NumPy, Pandas, Matplotlib, and Scikit-learn for data manipulation and analysis",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-04-22",
          priority: "High",
          resources: [
            { name: "Python Data Science Handbook", url: "https://jakevdp.github.io/PythonDataScienceHandbook/" }
          ],
        },
        {
          title: "Supervised Learning Algorithms",
          description: "Implement and evaluate regression, classification, decision trees, and ensemble methods",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "10 days",
          deadline: "2025-05-02",
          priority: "High",
          resources: [
            { name: "Scikit-learn Documentation", url: "https://scikit-learn.org/stable/supervised_learning.html" }
          ],
        },
        {
          title: "Unsupervised Learning",
          description: "Master clustering, dimensionality reduction, and anomaly detection techniques",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-05-09",
          priority: "Medium",
          resources: [
            { name: "Unsupervised Learning Tutorial", url: "https://scikit-learn.org/stable/unsupervised_learning.html" }
          ],
        },
        {
          title: "Feature Engineering",
          description: "Learn techniques for creating, selecting, and transforming features for ML models",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-05-14",
          priority: "High",
          resources: [
            { name: "Feature Engineering for Machine Learning", url: "https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/" }
          ],
        },
        {
          title: "Model Evaluation & Validation",
          description: "Master cross-validation, metrics, hyperparameter tuning, and model selection",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-05-18",
          priority: "High",
          resources: [
            { name: "Model Evaluation Guide", url: "https://scikit-learn.org/stable/model_selection.html" }
          ],
        },
        {
          title: "Neural Networks Fundamentals",
          description: "Understand perceptrons, activation functions, backpropagation, and basic architectures",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-05-25",
          priority: "High",
          resources: [
            { name: "Deep Learning Book", url: "https://www.deeplearningbook.org/" }
          ],
        },
        {
          title: "Deep Learning with PyTorch",
          description: "Learn PyTorch fundamentals, tensors, autograd, and building neural networks",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "10 days",
          deadline: "2025-06-04",
          priority: "High",
          resources: [
            { name: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/" }
          ],
        },
        {
          title: "Convolutional Neural Networks",
          description: "Master CNN architectures, layers, and applications for computer vision tasks",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-06-11",
          priority: "Medium",
          resources: [
            { name: "CS231n: CNN for Visual Recognition", url: "http://cs231n.stanford.edu/" }
          ],
        },
        {
          title: "Recurrent Neural Networks",
          description: "Implement RNNs, LSTMs, and GRUs for sequence modeling and NLP tasks",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-06-18",
          priority: "Medium",
          resources: [
            { name: "Understanding LSTM Networks", url: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/" }
          ],
        }
      ]
    },
    {
      quarter: "Q3 2025",
      title: "Advanced AI & Specialized Applications",
      progress: 0,
      goals: [
        {
          title: "Parallel AI inference service",
          description: "Write a batch processing service using errgroup, optimized for throughput",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "2 weeks",
          deadline: "2025-07-15",
          priority: "High",
          resources: [
            { name: "Go Concurrency Patterns", url: "https://blog.golang.org/pipelines" }
          ],
        },
        {
          title: "Natural Language Processing",
          description: "Master text preprocessing, embeddings, transformers, and BERT-based models",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "2 weeks",
          deadline: "2025-07-29",
          priority: "High",
          resources: [
            { name: "Hugging Face Transformers", url: "https://huggingface.co/transformers/" }
          ],
        },
        {
          title: "Generative AI & Diffusion Models",
          description: "Understand and implement diffusion models for image generation",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "10 days",
          deadline: "2025-08-08",
          priority: "Medium",
          resources: [
            { name: "Diffusion Models Tutorial", url: "https://lilianweng.github.io/posts/2021-07-11-diffusion-models/" }
          ],
        },
        {
          title: "Reinforcement Learning",
          description: "Learn RL fundamentals, Q-learning, policy gradients, and deep RL techniques",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "2 weeks",
          deadline: "2025-08-22",
          priority: "Medium",
          resources: [
            { name: "Reinforcement Learning: An Introduction", url: "http://incompleteideas.net/book/the-book-2nd.html" }
          ],
        },
        {
          title: "MLOps Fundamentals",
          description: "Master ML pipelines, experiment tracking, model versioning, and deployment",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-08-29",
          priority: "High",
          resources: [
            { name: "MLOps: Machine Learning Operations", url: "https://ml-ops.org/" }
          ],
        },
        {
          title: "Model Optimization & Quantization",
          description: "Learn techniques for optimizing model size, inference speed, and deployment efficiency",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-09-03",
          priority: "Medium",
          resources: [
            { name: "PyTorch Quantization", url: "https://pytorch.org/docs/stable/quantization.html" }
          ],
        },
        {
          title: "Graph Neural Networks",
          description: "Understand and implement GNNs for graph-structured data",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-09-10",
          priority: "Low",
          resources: [
            { name: "PyTorch Geometric", url: "https://pytorch-geometric.readthedocs.io/" }
          ],
        },
        {
          title: "Explainable AI",
          description: "Master techniques for model interpretability and explanation",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-09-14",
          priority: "Medium",
          resources: [
            { name: "SHAP: SHapley Additive exPlanations", url: "https://github.com/slundberg/shap" }
          ],
        },
        {
          title: "Time Series Analysis",
          description: "Learn forecasting methods, ARIMA, and deep learning for time series",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-09-21",
          priority: "Medium",
          resources: [
            { name: "Time Series Forecasting", url: "https://otexts.com/fpp2/" }
          ],
        },
        {
          title: "Anomaly Detection",
          description: "Implement statistical and ML-based approaches for outlier detection",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-09-26",
          priority: "Medium",
          resources: [
            { name: "Anomaly Detection Learning Resources", url: "https://github.com/yzhao062/anomaly-detection-resources" }
          ],
        }
      ]
    },
    {
      quarter: "Q4 2025",
      title: "AI Production & Research",
      progress: 0,
      goals: [
        {
          title: "AI Model Deployment at Scale",
          description: "Learn to deploy ML models to production with TorchServe, TensorFlow Serving, or ONNX Runtime",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-10-07",
          priority: "High",
          resources: [
            { name: "TorchServe", url: "https://pytorch.org/serve/" }
          ],
        },
        {
          title: "AI Ethics & Responsible AI",
          description: "Understand fairness, accountability, transparency, and ethical considerations in AI",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "4 days",
          deadline: "2025-10-11",
          priority: "Medium",
          resources: [
            { name: "Fairness in Machine Learning", url: "https://fairmlbook.org/" }
          ],
        },
        {
          title: "Multimodal Learning",
          description: "Implement models that combine vision, text, and other modalities",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "10 days",
          deadline: "2025-10-21",
          priority: "Medium",
          resources: [
            { name: "CLIP: Connecting Text and Images", url: "https://openai.com/blog/clip/" }
          ],
        },
        {
          title: "AI Research Paper Implementation",
          description: "Reproduce and implement a recent AI research paper from scratch",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "2 weeks",
          deadline: "2025-11-04",
          priority: "Medium",
          resources: [
            { name: "Papers With Code", url: "https://paperswithcode.com/" }
          ],
        },
        {
          title: "Federated Learning",
          description: "Understand and implement privacy-preserving ML across distributed devices",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-11-11",
          priority: "Low",
          resources: [
            { name: "TensorFlow Federated", url: "https://www.tensorflow.org/federated" }
          ],
        },
        {
          title: "AI System Design",
          description: "Design end-to-end AI systems with considerations for scalability, reliability, and cost",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-11-18",
          priority: "High",
          resources: [
            { name: "Designing Machine Learning Systems", url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/" }
          ],
        },
        {
          title: "AI Model Monitoring",
          description: "Implement systems to detect model drift, data drift, and performance degradation",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "5 days",
          deadline: "2025-11-23",
          priority: "High",
          resources: [
            { name: "Evidently AI", url: "https://github.com/evidentlyai/evidently" }
          ],
        },
        {
          title: "AutoML & Neural Architecture Search",
          description: "Explore automated machine learning and neural architecture search techniques",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-11-30",
          priority: "Low",
          resources: [
            { name: "AutoML: Methods, Systems, Challenges", url: "https://www.automl.org/book/" }
          ],
        },
        {
          title: "AI for Edge Devices",
          description: "Learn to deploy and optimize ML models for resource-constrained edge devices",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "1 week",
          deadline: "2025-12-07",
          priority: "Medium",
          resources: [
            { name: "TensorFlow Lite", url: "https://www.tensorflow.org/lite" }
          ],
        },
        {
          title: "AI Research Project",
          description: "Conduct original research on a novel AI problem and write a technical report",
          category: "AI/ML",
          status: "Not Started",
          estimatedTime: "3 weeks",
          deadline: "2025-12-28",
          priority: "Medium",
          resources: [
            { name: "arXiv Machine Learning", url: "https://arxiv.org/list/cs.LG/recent" }
          ],
        }
      ]
    }
  ];
  
  export default aiRoadmap;