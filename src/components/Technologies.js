import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Shield,
  Smartphone,
  Brain,
  Server,
  Code2,
  Database,
  Settings,
  Globe,
  Zap,
  FileText,
  Layers,
  Monitor,
  Cpu,
  HardDrive,
  Wrench,
  Box,
  GitBranch,
  Palette,
  Coffee,
  Hash,
  Triangle,
  Chrome,
  Activity
} from 'lucide-react';

const Technologies = () => {
  const [activeTab, setActiveTab] = useState('All Technologies');

  const tabs = [
    'All Technologies',
    'Mobile',
    'Front End',
    'Database',
    'Backend',
    'CMS',
    'Infra and DevOps'
  ];

  const technologies = {
    'All Technologies': [
      { name: 'AWS', icon: <Cloud className="w-8 h-8 text-orange-500" />, category: 'Cloud' },
      { name: 'Google Cloud', icon: <Cloud className="w-8 h-8 text-blue-500" />, category: 'Cloud' },
      { name: 'Gradle', icon: <Settings className="w-8 h-8 text-green-600" />, category: 'Build Tool' },
      { name: 'Jenkins', icon: <Zap className="w-8 h-8 text-blue-600" />, category: 'CI/CD' },
      { name: 'Appium', icon: <Smartphone className="w-8 h-8 text-purple-600" />, category: 'Testing' },
      { name: 'Selenium', icon: <Shield className="w-8 h-8 text-green-500" />, category: 'Testing' },
      { name: 'React', icon: <Code2 className="w-8 h-8 text-blue-400" />, category: 'Frontend' },
      { name: 'Angular', icon: <Code2 className="w-8 h-8 text-red-600" />, category: 'Frontend' },
      { name: 'Vue.js', icon: <Code2 className="w-8 h-8 text-green-500" />, category: 'Frontend' },
      { name: 'Node.js', icon: <Server className="w-8 h-8 text-green-600" />, category: 'Backend' },
      { name: 'Python', icon: <Server className="w-8 h-8 text-yellow-500" />, category: 'Backend' },
      { name: 'Java', icon: <Server className="w-8 h-8 text-orange-600" />, category: 'Backend' },
      { name: 'MongoDB', icon: <Database className="w-8 h-8 text-green-500" />, category: 'Database' },
      { name: 'PostgreSQL', icon: <Database className="w-8 h-8 text-blue-600" />, category: 'Database' },
      { name: 'MySQL', icon: <Database className="w-8 h-8 text-blue-500" />, category: 'Database' },
      { name: 'Docker', icon: <Settings className="w-8 h-8 text-blue-500" />, category: 'DevOps' },
      { name: 'Kubernetes', icon: <Settings className="w-8 h-8 text-blue-600" />, category: 'DevOps' },
      { name: 'Flutter', icon: <Smartphone className="w-8 h-8 text-blue-400" />, category: 'Mobile' },
      { name: 'React Native', icon: <Smartphone className="w-8 h-8 text-blue-500" />, category: 'Mobile' },
      { name: 'Swift', icon: <Smartphone className="w-8 h-8 text-orange-500" />, category: 'Mobile' },
      { name: 'Kotlin', icon: <Smartphone className="w-8 h-8 text-purple-600" />, category: 'Mobile' }
    ],
    'Mobile': [
      { name: 'Flutter', icon: <Smartphone className="w-8 h-8 text-blue-400" />, category: 'Cross Platform' },
      { name: 'React Native', icon: <Smartphone className="w-8 h-8 text-blue-500" />, category: 'Cross Platform' },
      { name: 'Swift', icon: <Smartphone className="w-8 h-8 text-orange-500" />, category: 'iOS' },
      { name: 'Kotlin', icon: <Smartphone className="w-8 h-8 text-purple-600" />, category: 'Android' },
      { name: 'Xamarin', icon: <Smartphone className="w-8 h-8 text-blue-600" />, category: 'Cross Platform' },
      { name: 'Ionic', icon: <Zap className="w-8 h-8 text-blue-500" />, category: 'Hybrid' }
    ],
    'Front End': [
      { name: 'React', icon: <Code2 className="w-8 h-8 text-blue-400" />, category: 'Library' },
      { name: 'Angular', icon: <Code2 className="w-8 h-8 text-red-600" />, category: 'Framework' },
      { name: 'Vue.js', icon: <Code2 className="w-8 h-8 text-green-500" />, category: 'Framework' },
      { name: 'Next.js', icon: <Triangle className="w-8 h-8 text-gray-900 dark:text-white" />, category: 'Framework' },
      { name: 'TypeScript', icon: <FileText className="w-8 h-8 text-blue-600" />, category: 'Language' },
      { name: 'JavaScript', icon: <FileText className="w-8 h-8 text-yellow-500" />, category: 'Language' }
    ],
    'Database': [
      { name: 'MongoDB', icon: <Database className="w-8 h-8 text-green-500" />, category: 'NoSQL' },
      { name: 'PostgreSQL', icon: <Database className="w-8 h-8 text-blue-600" />, category: 'SQL' },
      { name: 'MySQL', icon: <Database className="w-8 h-8 text-blue-500" />, category: 'SQL' },
      { name: 'Redis', icon: <HardDrive className="w-8 h-8 text-red-500" />, category: 'Cache' },
      { name: 'Firebase', icon: <Zap className="w-8 h-8 text-orange-500" />, category: 'BaaS' },
      { name: 'DynamoDB', icon: <Database className="w-8 h-8 text-yellow-600" />, category: 'NoSQL' }
    ],
    'Backend': [
      { name: 'Node.js', icon: <Server className="w-8 h-8 text-green-600" />, category: 'Runtime' },
      { name: 'Python', icon: <Server className="w-8 h-8 text-yellow-500" />, category: 'Language' },
      { name: 'Java', icon: <Coffee className="w-8 h-8 text-orange-600" />, category: 'Language' },
      { name: 'PHP', icon: <Server className="w-8 h-8 text-purple-600" />, category: 'Language' },
      { name: 'Go', icon: <Server className="w-8 h-8 text-blue-500" />, category: 'Language' },
      { name: 'C#', icon: <Hash className="w-8 h-8 text-purple-700" />, category: 'Language' }
    ],
    'CMS': [
      { name: 'WordPress', icon: <FileText className="w-8 h-8 text-blue-600" />, category: 'CMS' },
      { name: 'Drupal', icon: <FileText className="w-8 h-8 text-blue-500" />, category: 'CMS' },
      { name: 'Strapi', icon: <Layers className="w-8 h-8 text-purple-600" />, category: 'Headless' },
      { name: 'Contentful', icon: <FileText className="w-8 h-8 text-gray-600" />, category: 'Headless' },
      { name: 'Sanity', icon: <Palette className="w-8 h-8 text-red-500" />, category: 'Headless' },
      { name: 'Ghost', icon: <FileText className="w-8 h-8 text-gray-800 dark:text-gray-200" />, category: 'CMS' }
    ],
    'Infra and DevOps': [
      { name: 'AWS', icon: <Cloud className="w-8 h-8 text-orange-500" />, category: 'Cloud' },
      { name: 'Google Cloud', icon: <Cloud className="w-8 h-8 text-blue-500" />, category: 'Cloud' },
      { name: 'Docker', icon: <Box className="w-8 h-8 text-blue-500" />, category: 'Container' },
      { name: 'Kubernetes', icon: <Settings className="w-8 h-8 text-blue-600" />, category: 'Orchestration' },
      { name: 'Jenkins', icon: <GitBranch className="w-8 h-8 text-blue-600" />, category: 'CI/CD' },
      { name: 'Terraform', icon: <Wrench className="w-8 h-8 text-purple-600" />, category: 'IaC' }
    ]
  };

  return (
    <section id="technologies" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technologies we work with
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {technologies[activeTab].map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white text-center mb-1">
                {tech.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                {tech.category}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 border border-primary-200 dark:border-gray-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Tech Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team can work with any technology stack or build custom solutions tailored to your specific needs
            </p>
            <motion.button
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discuss Your Tech Needs
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
