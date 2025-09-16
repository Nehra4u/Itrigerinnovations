import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, Shield, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  const technologies = [
    { name: 'React.js', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Node.js', level: 90, color: 'from-green-500 to-emerald-500' },
    { name: 'Next.js', level: 88, color: 'from-gray-700 to-gray-900' },
    { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-800' },
    { name: 'MongoDB', level: 82, color: 'from-green-600 to-green-800' },
    { name: 'AWS', level: 80, color: 'from-orange-500 to-red-500' }
  ];

  const developmentProcess = [
    { step: 1, title: 'Discovery & Planning', description: 'Requirements gathering, technical analysis, and project roadmap creation' },
    { step: 2, title: 'UI/UX Design', description: 'Wireframing, prototyping, and creating user-centered designs' },
    { step: 3, title: 'Frontend Development', description: 'Building responsive, interactive user interfaces' },
    { step: 4, title: 'Backend Development', description: 'Server-side logic, APIs, and database integration' },
    { step: 5, title: 'Testing & QA', description: 'Comprehensive testing including unit, integration, and E2E tests' },
    { step: 6, title: 'Deployment & Launch', description: 'Production deployment with CI/CD pipelines' },
    { step: 7, title: 'Maintenance & Support', description: 'Ongoing support, updates, and performance optimization' }
  ];

  const expertiseAreas = [
    {
      icon: Globe,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development with modern frameworks and technologies',
      features: ['MERN/MEAN Stack', 'Microservices Architecture', 'RESTful APIs', 'GraphQL Integration']
    },
    {
      icon: Smartphone,
      title: 'Progressive Web Apps',
      description: 'Building PWAs that deliver native app-like experiences on the web',
      features: ['Service Workers', 'Offline Functionality', 'Push Notifications', 'App Shell Architecture']
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Scalable database architecture and optimization for high-performance applications',
      features: ['SQL & NoSQL Databases', 'Data Modeling', 'Query Optimization', 'Database Scaling']
    },
    {
      icon: Shield,
      title: 'Security Implementation',
      description: 'Comprehensive security measures to protect applications and user data',
      features: ['Authentication & Authorization', 'Data Encryption', 'OWASP Compliance', 'Security Audits']
    }
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
                <Code className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Web Development</h1>
                <p className="text-xl text-white/90">Sculpting modern, dynamic web applications for the connected world</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Web Development Expertise</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We specialize in creating cutting-edge web applications that combine stunning design with robust functionality. 
                Our expert team leverages the latest technologies and best practices to deliver scalable, secure, and 
                high-performance web solutions.
              </p>
              <div className="space-y-4">
                {['Custom Web Applications', 'E-commerce Platforms', 'Content Management Systems', 'API Development & Integration'].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Technology Stack Proficiency</h3>
              <div className="space-y-4">
                {technologies.map((tech, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${tech.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Development Process Flow Chart */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Development Process Flow</h2>
          <div className="relative">
            <div className="grid md:grid-cols-7 gap-4">
              {developmentProcess.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center h-full flex flex-col">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{process.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 flex-grow">{process.description}</p>
                  </div>
                  {index < developmentProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-primary-500" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Expertise Areas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Areas of Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => {
              const IconComponent = area.icon;
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
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{area.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{area.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Web Application?</h2>
          <p className="text-xl text-white/90 mb-8">Let's discuss your project and create something amazing together.</p>
          <Link
            to="/#contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default WebDevelopment;
