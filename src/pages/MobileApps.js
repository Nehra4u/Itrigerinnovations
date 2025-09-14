import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Smartphone, Zap, Shield, Users, CheckCircle, ArrowRight, Download, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileApps = () => {
  const platforms = [
    { name: 'React Native', level: 92, color: 'from-blue-500 to-cyan-500', icon: '⚛️' },
    { name: 'Flutter', level: 88, color: 'from-blue-400 to-blue-600', icon: '🐦' },
    { name: 'iOS Native', level: 85, color: 'from-gray-600 to-gray-800', icon: '🍎' },
    { name: 'Android Native', level: 90, color: 'from-green-500 to-green-700', icon: '🤖' },
    { name: 'Xamarin', level: 78, color: 'from-purple-500 to-purple-700', icon: '🔷' }
  ];

  const developmentPhases = [
    { phase: 1, title: 'Strategy & Planning', description: 'Market research, user personas, and technical feasibility analysis', duration: '1-2 weeks' },
    { phase: 2, title: 'UI/UX Design', description: 'Wireframes, mockups, and interactive prototypes', duration: '2-3 weeks' },
    { phase: 3, title: 'Development', description: 'Frontend and backend development with agile methodology', duration: '8-12 weeks' },
    { phase: 4, title: 'Testing & QA', description: 'Comprehensive testing across devices and platforms', duration: '2-3 weeks' },
    { phase: 5, title: 'Deployment', description: 'App store submission and production deployment', duration: '1-2 weeks' },
    { phase: 6, title: 'Maintenance', description: 'Ongoing support, updates, and performance monitoring', duration: 'Ongoing' }
  ];

  const appTypes = [
    {
      icon: Users,
      title: 'Social & Communication Apps',
      description: 'Building engaging social platforms with real-time messaging and community features',
      features: ['Real-time Chat', 'Social Feeds', 'Push Notifications', 'User Profiles'],
      examples: ['Messaging Apps', 'Social Networks', 'Community Platforms']
    },
    {
      icon: Zap,
      title: 'Business & Productivity Apps',
      description: 'Enterprise-grade applications that streamline workflows and boost productivity',
      features: ['Task Management', 'Team Collaboration', 'Document Sharing', 'Analytics Dashboard'],
      examples: ['CRM Systems', 'Project Management', 'HR Solutions']
    },
    {
      icon: Shield,
      title: 'FinTech & Banking Apps',
      description: 'Secure financial applications with advanced encryption and compliance',
      features: ['Secure Transactions', 'Biometric Auth', 'Fraud Detection', 'Regulatory Compliance'],
      examples: ['Digital Wallets', 'Banking Apps', 'Investment Platforms']
    },
    {
      icon: Download,
      title: 'E-commerce & Retail Apps',
      description: 'Feature-rich shopping experiences with seamless payment integration',
      features: ['Product Catalog', 'Payment Gateway', 'Order Tracking', 'Loyalty Programs'],
      examples: ['Shopping Apps', 'Marketplace', 'Food Delivery']
    }
  ];

  const techStack = [
    { category: 'Frontend', technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
    { category: 'Backend', technologies: ['Node.js', 'Python', 'Java', 'Firebase'] },
    { category: 'Database', technologies: ['MongoDB', 'PostgreSQL', 'SQLite', 'Realm'] },
    { category: 'Cloud', technologies: ['AWS', 'Google Cloud', 'Azure', 'Firebase'] },
    { category: 'Testing', technologies: ['Jest', 'Detox', 'Appium', 'XCTest'] },
    { category: 'Analytics', technologies: ['Firebase Analytics', 'Mixpanel', 'Amplitude'] }
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
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Mobile App Development</h1>
                <p className="text-xl text-white/90">Designing high-performing mobile apps for a connected future</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Platform Expertise */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Platform Expertise</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We develop native and cross-platform mobile applications that deliver exceptional user experiences 
                across iOS and Android devices. Our team combines technical expertise with creative design to 
                build apps that users love and businesses rely on.
              </p>
              <div className="space-y-4">
                {['Cross-Platform Development', 'Native iOS & Android Apps', 'Progressive Web Apps', 'App Store Optimization'].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Platform Proficiency</h3>
              <div className="space-y-4">
                {platforms.map((platform, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <span className="text-lg mr-2">{platform.icon}</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{platform.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{platform.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${platform.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${platform.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Development Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Mobile App Development Process</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {developmentPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center h-full flex flex-col">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {phase.phase}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{phase.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 flex-grow">{phase.description}</p>
                </div>
                <div className="text-xs text-primary-600 dark:text-primary-400 font-medium">{phase.duration}</div>
                {index < developmentPhases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-primary-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* App Types */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Types of Apps We Build</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {appTypes.map((type, index) => {
              const IconComponent = type.icon;
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
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{type.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{type.description}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {type.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-500 mr-2" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, exampleIndex) => (
                        <span key={exampleIndex} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-full">
                          {example}
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Our Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                      <span className="text-gray-700 dark:text-gray-300">{tech}</span>
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
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Mobile App?</h2>
          <p className="text-xl text-white/90 mb-8">Transform your idea into a powerful mobile application that users will love.</p>
          <Link
            to="/#contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default MobileApps;
