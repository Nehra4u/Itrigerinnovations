import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, GitBranch, Server, Shield, Monitor, CheckCircle, ArrowRight, Cloud, Database, Settings, Workflow, BarChart3, Users, Globe, TrendingUp, Star, Eye, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const DevOps = () => {
  const devopsCapabilities = [
    { name: 'CI/CD Pipelines', level: 95, color: 'from-blue-500 to-cyan-500', icon: '🔄' },
    { name: 'Infrastructure as Code', level: 92, color: 'from-green-500 to-emerald-500', icon: '🏗️' },
    { name: 'Container Orchestration', level: 90, color: 'from-purple-500 to-pink-500', icon: '🐳' },
    { name: 'Cloud Architecture', level: 88, color: 'from-orange-500 to-red-500', icon: '☁️' },
    { name: 'Monitoring & Logging', level: 93, color: 'from-indigo-500 to-purple-500', icon: '📊' },
    { name: 'Security Integration', level: 87, color: 'from-red-500 to-pink-500', icon: '🔒' }
  ];

  const devopsProcess = [
    { step: 1, title: 'Assessment & Planning', description: 'Current infrastructure analysis and DevOps roadmap creation', icon: Settings },
    { step: 2, title: 'CI/CD Setup', description: 'Automated build, test, and deployment pipeline implementation', icon: GitBranch },
    { step: 3, title: 'Infrastructure Automation', description: 'Infrastructure as Code implementation with version control', icon: Server },
    { step: 4, title: 'Containerization', description: 'Application containerization and orchestration setup', icon: Cloud },
    { step: 5, title: 'Monitoring Implementation', description: 'Comprehensive monitoring, logging, and alerting systems', icon: Monitor },
    { step: 6, title: 'Security Integration', description: 'DevSecOps practices and security automation', icon: Shield },
    { step: 7, title: 'Optimization', description: 'Performance tuning and continuous improvement', icon: Zap }
  ];

  const devopsServices = [
    {
      icon: GitBranch,
      title: 'CI/CD Pipeline Development',
      description: 'Automated continuous integration and deployment pipelines for faster, reliable releases',
      features: ['Automated Testing', 'Code Quality Gates', 'Deployment Automation', 'Rollback Strategies'],
      tools: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Management',
      description: 'Scalable cloud infrastructure design and management across multiple platforms',
      features: ['Multi-Cloud Strategy', 'Auto-Scaling', 'Cost Optimization', 'Disaster Recovery'],
      tools: ['AWS', 'Azure', 'Google Cloud', 'Terraform']
    },
    {
      icon: Server,
      title: 'Container Orchestration',
      description: 'Containerized application deployment and management at scale',
      features: ['Microservices Architecture', 'Load Balancing', 'Service Discovery', 'Health Monitoring'],
      tools: ['Docker', 'Kubernetes', 'OpenShift', 'Helm']
    },
    {
      icon: Monitor,
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring solutions for application and infrastructure health',
      features: ['Real-time Monitoring', 'Log Aggregation', 'Performance Metrics', 'Alert Management'],
      tools: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog']
    }
  ];

  const technologies = [
    { category: 'CI/CD Tools', tools: ['Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'Azure DevOps', 'CircleCI'] },
    { category: 'Infrastructure', tools: ['Terraform', 'Ansible', 'Puppet', 'Chef', 'CloudFormation'] },
    { category: 'Containers', tools: ['Docker', 'Kubernetes', 'OpenShift', 'Helm', 'Istio'] },
    { category: 'Cloud Platforms', tools: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Linode'] },
    { category: 'Monitoring', tools: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic'] },
    { category: 'Security', tools: ['Vault', 'SonarQube', 'OWASP ZAP', 'Twistlock', 'Aqua Security'] }
  ];

  const benefits = [
    { title: 'Faster Time to Market', description: 'Reduce deployment time from weeks to minutes', percentage: '80%' },
    { title: 'Improved Reliability', description: 'Automated testing and deployment reduce human errors', percentage: '95%' },
    { title: 'Cost Optimization', description: 'Efficient resource utilization and auto-scaling', percentage: '40%' },
    { title: 'Enhanced Security', description: 'Integrated security practices throughout the pipeline', percentage: '90%' }
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
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">DevOps Services</h1>
                <p className="text-xl text-white/90">Streamlined processes and collaboration for code lifecycle</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* DevOps Capabilities */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our DevOps Expertise</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We accelerate your software delivery with modern DevOps practices, automation, and cloud-native solutions. 
                Our expert team bridges the gap between development and operations, enabling faster, more reliable deployments 
                while maintaining security and quality standards.
              </p>
              <div className="space-y-4">
                {['Continuous Integration/Deployment', 'Infrastructure Automation', 'Cloud Migration & Management', 'Security & Compliance'].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">DevOps Proficiency</h3>
              <div className="space-y-4">
                {devopsCapabilities.map((capability, index) => (
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

        {/* DevOps Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">DevOps Implementation Process</h2>
          <div className="grid md:grid-cols-7 gap-4">
            {devopsProcess.map((process, index) => {
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
                  {index < devopsProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-primary-500" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* DevOps Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">DevOps Services We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {devopsServices.map((service, index) => {
              const IconComponent = service.icon;
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
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-full">
                          {tool}
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">DevOps Technology Stack</h2>
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
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">{tool}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">DevOps Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl text-center"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{benefit.percentage}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{benefit.description}</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Accelerate Your Development?</h2>
          <p className="text-xl text-white/90 mb-8">Let's implement DevOps practices that will transform your software delivery.</p>
          <Link
            to="/#contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your DevOps Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default DevOps;
