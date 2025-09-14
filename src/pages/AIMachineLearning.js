import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Cpu, Database, TrendingUp, CheckCircle, ArrowRight, Zap, Target, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIMachineLearning = () => {
  const aiCapabilities = [
    { name: 'Machine Learning', level: 95, color: 'from-purple-500 to-pink-500', icon: '🤖' },
    { name: 'Deep Learning', level: 90, color: 'from-blue-500 to-purple-500', icon: '🧠' },
    { name: 'Natural Language Processing', level: 88, color: 'from-green-500 to-blue-500', icon: '💬' },
    { name: 'Computer Vision', level: 85, color: 'from-red-500 to-orange-500', icon: '👁️' },
    { name: 'Predictive Analytics', level: 92, color: 'from-indigo-500 to-purple-500', icon: '📊' },
    { name: 'Neural Networks', level: 87, color: 'from-teal-500 to-cyan-500', icon: '🕸️' }
  ];

  const aiWorkflow = [
    { step: 1, title: 'Data Collection', description: 'Gathering and preprocessing relevant datasets', icon: Database },
    { step: 2, title: 'Data Analysis', description: 'Exploratory data analysis and feature engineering', icon: BarChart3 },
    { step: 3, title: 'Model Selection', description: 'Choosing appropriate algorithms and architectures', icon: Cpu },
    { step: 4, title: 'Training & Validation', description: 'Model training with cross-validation techniques', icon: Brain },
    { step: 5, title: 'Optimization', description: 'Hyperparameter tuning and performance optimization', icon: Target },
    { step: 6, title: 'Deployment', description: 'Production deployment with monitoring systems', icon: Zap },
    { step: 7, title: 'Monitoring', description: 'Continuous monitoring and model improvement', icon: TrendingUp }
  ];

  const aiSolutions = [
    {
      icon: Brain,
      title: 'Intelligent Automation',
      description: 'Automate complex business processes using AI-powered decision making',
      features: ['Process Automation', 'Intelligent Document Processing', 'Workflow Optimization', 'Decision Support Systems'],
      useCases: ['Invoice Processing', 'Customer Service Automation', 'Quality Control', 'Risk Assessment']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast trends and behaviors using advanced machine learning models',
      features: ['Time Series Forecasting', 'Demand Prediction', 'Risk Modeling', 'Customer Behavior Analysis'],
      useCases: ['Sales Forecasting', 'Inventory Management', 'Fraud Detection', 'Churn Prediction']
    },
    {
      icon: Target,
      title: 'Recommendation Systems',
      description: 'Personalized recommendation engines that drive engagement and sales',
      features: ['Collaborative Filtering', 'Content-Based Filtering', 'Hybrid Approaches', 'Real-time Recommendations'],
      useCases: ['E-commerce Recommendations', 'Content Personalization', 'Product Suggestions', 'User Matching']
    },
    {
      icon: Cpu,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis for automated visual recognition',
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'OCR & Document Analysis'],
      useCases: ['Quality Inspection', 'Security Systems', 'Medical Imaging', 'Autonomous Vehicles']
    }
  ];

  const technologies = [
    { category: 'Frameworks', tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV'] },
    { category: 'Languages', tools: ['Python', 'R', 'Julia', 'Scala', 'MATLAB'] },
    { category: 'Cloud Platforms', tools: ['AWS SageMaker', 'Google AI Platform', 'Azure ML', 'IBM Watson'] },
    { category: 'Databases', tools: ['MongoDB', 'PostgreSQL', 'Neo4j', 'InfluxDB', 'Redis'] },
    { category: 'Visualization', tools: ['Matplotlib', 'Plotly', 'D3.js', 'Tableau', 'Power BI'] },
    { category: 'MLOps', tools: ['MLflow', 'Kubeflow', 'Docker', 'Kubernetes', 'Apache Airflow'] }
  ];

  const industries = [
    { name: 'Healthcare', applications: ['Medical Diagnosis', 'Drug Discovery', 'Patient Monitoring', 'Treatment Optimization'] },
    { name: 'Finance', applications: ['Algorithmic Trading', 'Credit Scoring', 'Fraud Detection', 'Risk Management'] },
    { name: 'Retail', applications: ['Demand Forecasting', 'Price Optimization', 'Customer Segmentation', 'Supply Chain'] },
    { name: 'Manufacturing', applications: ['Predictive Maintenance', 'Quality Control', 'Process Optimization', 'Supply Planning'] },
    { name: 'Transportation', applications: ['Route Optimization', 'Autonomous Vehicles', 'Traffic Management', 'Fleet Management'] },
    { name: 'Energy', applications: ['Smart Grid', 'Energy Forecasting', 'Equipment Monitoring', 'Optimization'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="pt-24 pb-12 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">AI & Machine Learning</h1>
                <p className="text-xl text-white/90">Leveraging AI & ML to deliver innovative solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* AI Capabilities */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our AI & ML Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We harness the power of artificial intelligence and machine learning to transform businesses 
                and drive innovation. Our expert team develops cutting-edge AI solutions that automate processes, 
                predict outcomes, and unlock valuable insights from your data.
              </p>
              <div className="space-y-4">
                {['Custom AI Model Development', 'Machine Learning Consulting', 'Data Science Solutions', 'AI Integration Services'].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">AI Expertise Areas</h3>
              <div className="space-y-4">
                {aiCapabilities.map((capability, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <span className="text-lg mr-2">{capability.icon}</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{capability.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{capability.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${capability.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${capability.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* AI Development Workflow */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">AI Development Workflow</h2>
          <div className="grid md:grid-cols-7 gap-4">
            {aiWorkflow.map((process, index) => {
              const IconComponent = process.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center h-full flex flex-col">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{process.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 flex-grow">{process.description}</p>
                  </div>
                  {index < aiWorkflow.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-primary-500" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* AI Solutions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">AI Solutions We Deliver</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {aiSolutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{solution.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{solution.description}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Technology Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">AI/ML Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">{tool}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Industry Applications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Industry Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-purple-200 dark:border-gray-600"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{industry.name}</h3>
                <div className="space-y-2">
                  {industry.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{app}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Harness the Power of AI?</h2>
          <p className="text-xl text-white/90 mb-8">Let's explore how AI and machine learning can transform your business.</p>
          <Link
            to="/#contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your AI Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default AIMachineLearning;
