import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Bug, Shield, Target, Monitor, ArrowRight, TestTube, FileCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const QA = () => {
  const qaCapabilities = [
    { name: 'Automated Testing', level: 95, color: 'from-green-500 to-emerald-500', icon: '🤖' },
    { name: 'Manual Testing', level: 92, color: 'from-blue-500 to-cyan-500', icon: '👨‍💻' },
    { name: 'Performance Testing', level: 90, color: 'from-purple-500 to-pink-500', icon: '⚡' },
    { name: 'Security Testing', level: 88, color: 'from-red-500 to-orange-500', icon: '🔒' },
    { name: 'API Testing', level: 93, color: 'from-indigo-500 to-purple-500', icon: '🔗' },
    { name: 'Mobile Testing', level: 87, color: 'from-teal-500 to-cyan-500', icon: '📱' }
  ];

  const qaProcess = [
    { step: 1, title: 'Test Planning', description: 'Comprehensive test strategy and planning phase', icon: FileCheck },
    { step: 2, title: 'Test Design', description: 'Test case creation and test data preparation', icon: Target },
    { step: 3, title: 'Environment Setup', description: 'Test environment configuration and setup', icon: Monitor },
    { step: 4, title: 'Test Execution', description: 'Manual and automated test execution', icon: TestTube },
    { step: 5, title: 'Defect Management', description: 'Bug identification, reporting, and tracking', icon: Bug },
    { step: 6, title: 'Test Reporting', description: 'Comprehensive test reports and metrics', icon: FileCheck },
    { step: 7, title: 'Quality Assurance', description: 'Final quality validation and sign-off', icon: CheckCircle }
  ];

  const qaServices = [
    {
      icon: TestTube,
      title: 'Functional Testing',
      description: 'Comprehensive functional testing to ensure software meets requirements',
      features: ['Unit Testing', 'Integration Testing', 'System Testing', 'User Acceptance Testing'],
      methodologies: ['Black Box Testing', 'White Box Testing', 'Grey Box Testing', 'Regression Testing']
    },
    {
      icon: Shield,
      title: 'Security Testing',
      description: 'Thorough security assessment to identify vulnerabilities and threats',
      features: ['Penetration Testing', 'Vulnerability Assessment', 'Authentication Testing', 'Data Protection'],
      methodologies: ['OWASP Testing', 'SQL Injection Testing', 'XSS Testing', 'Security Audits']
    },
    {
      icon: Monitor,
      title: 'Performance Testing',
      description: 'Load and performance testing to ensure optimal application performance',
      features: ['Load Testing', 'Stress Testing', 'Volume Testing', 'Scalability Testing'],
      methodologies: ['Baseline Testing', 'Spike Testing', 'Endurance Testing', 'Capacity Planning']
    },
    {
      icon: Bug,
      title: 'Test Automation',
      description: 'Automated testing frameworks for efficient and reliable test execution',
      features: ['Test Script Development', 'CI/CD Integration', 'Cross-browser Testing', 'API Automation'],
      methodologies: ['Data-Driven Testing', 'Keyword-Driven Testing', 'Hybrid Framework', 'BDD Testing']
    }
  ];

  const testingTools = [
    { category: 'Automation Tools', tools: ['Selenium', 'Cypress', 'TestComplete', 'Appium', 'Playwright'] },
    { category: 'Performance Tools', tools: ['JMeter', 'LoadRunner', 'Gatling', 'K6', 'BlazeMeter'] },
    { category: 'API Testing', tools: ['Postman', 'REST Assured', 'SoapUI', 'Insomnia', 'Newman'] },
    { category: 'Mobile Testing', tools: ['Appium', 'Espresso', 'XCUITest', 'Detox', 'TestFlight'] },
    { category: 'Security Testing', tools: ['OWASP ZAP', 'Burp Suite', 'Nessus', 'Veracode', 'Checkmarx'] },
    { category: 'Test Management', tools: ['TestRail', 'Zephyr', 'qTest', 'TestLink', 'Azure Test Plans'] }
  ];

  const testingTypes = [
    { name: 'Web Applications', coverage: '95%', description: 'Comprehensive web app testing across browsers' },
    { name: 'Mobile Applications', coverage: '92%', description: 'Native and hybrid mobile app testing' },
    { name: 'API Services', coverage: '98%', description: 'RESTful and SOAP API testing' },
    { name: 'Desktop Applications', coverage: '88%', description: 'Windows, Mac, and Linux desktop testing' },
    { name: 'Database Testing', coverage: '90%', description: 'Data integrity and performance testing' },
    { name: 'Cloud Applications', coverage: '93%', description: 'Cloud-native application testing' }
  ];

  const qualityMetrics = [
    { metric: 'Defect Detection Rate', value: '98%', description: 'Bugs found before production' },
    { metric: 'Test Coverage', value: '95%', description: 'Code coverage through testing' },
    { metric: 'Automation Coverage', value: '85%', description: 'Automated test coverage' },
    { metric: 'Time to Market', value: '40%', description: 'Reduction in release cycles' }
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
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Quality Assurance</h1>
                <p className="text-xl text-white/90">Delivering excellence with robust automated and manual QA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* QA Capabilities */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our QA Expertise</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We ensure your software meets the highest quality standards through comprehensive testing methodologies. 
                Our QA experts combine manual testing expertise with cutting-edge automation frameworks to deliver 
                reliable, secure, and high-performing applications.
              </p>
              <div className="space-y-4">
                {['Comprehensive Test Coverage', 'Automated Testing Frameworks', 'Performance & Security Testing', 'Continuous Quality Assurance'].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Testing Proficiency</h3>
              <div className="space-y-4">
                {qaCapabilities.map((capability, index) => (
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

        {/* QA Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">QA Testing Process</h2>
          <div className="grid md:grid-cols-7 gap-4">
            {qaProcess.map((process, index) => {
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
                  {index < qaProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-primary-500" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* QA Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">QA Services We Provide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {qaServices.map((service, index) => {
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
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Methodologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.methodologies.map((method, methodIndex) => (
                        <span key={methodIndex} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-full">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Testing Tools */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Testing Tools & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testingTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{tool.category}</h3>
                <div className="space-y-2">
                  {tool.tools.map((toolName, toolIndex) => (
                    <div key={toolIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">{toolName}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testing Coverage */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Testing Coverage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testingTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{type.name}</h3>
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">{type.coverage}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quality Metrics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Quality Metrics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{metric.metric}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Ensure Quality Excellence?</h2>
          <p className="text-xl text-white/90 mb-8">Let's implement comprehensive QA processes that guarantee your software quality.</p>
          <Link
            to="/#contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Quality Assurance
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default QA;
