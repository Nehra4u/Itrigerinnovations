import React from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Shield,
  Smartphone,
  Brain,
  Server,
  Code2,
  GitBranch,
  Cpu,
  Lock
} from 'lucide-react';

const Technologies = () => {
  const techCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'primary',
      technologies: [
        { name: 'React 18', level: 95, color: 'primary' },
        { name: 'Next.js 14', level: 90, color: 'primary' },
        { name: 'TypeScript', level: 88, color: 'primary' },
        { name: 'Tailwind CSS', level: 92, color: 'primary' },
        { name: 'Vue.js', level: 85, color: 'primary' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'secondary',
      technologies: [
        { name: 'Node.js', level: 93, color: 'secondary' },
        { name: 'Python/Django', level: 90, color: 'secondary' },
        { name: 'Java/Spring', level: 85, color: 'secondary' },
        { name: 'Go', level: 80, color: 'secondary' },
        { name: 'PHP/Laravel', level: 88, color: 'secondary' }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: Cloud,
      color: 'accent',
      technologies: [
        { name: 'PostgreSQL', level: 90, color: 'accent' },
        { name: 'MongoDB', level: 88, color: 'accent' },
        { name: 'Redis', level: 85, color: 'accent' },
        { name: 'AWS', level: 87, color: 'accent' },
        { name: 'Docker', level: 92, color: 'accent' }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'primary',
      technologies: [
        { name: 'React Native', level: 90, color: 'primary' },
        { name: 'Flutter', level: 85, color: 'primary' },
        { name: 'iOS/Swift', level: 80, color: 'primary' },
        { name: 'Android/Kotlin', level: 82, color: 'primary' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'secondary',
      technologies: [
        { name: 'TensorFlow', level: 85, color: 'secondary' },
        { name: 'PyTorch', level: 80, color: 'secondary' },
        { name: 'OpenAI API', level: 88, color: 'secondary' },
        { name: 'Computer Vision', level: 82, color: 'secondary' }
      ]
    },
    {
      title: 'DevOps & Security',
      icon: Shield,
      color: 'accent',
      technologies: [
        { name: 'Kubernetes', level: 85, color: 'accent' },
        { name: 'CI/CD', level: 90, color: 'accent' },
        { name: 'Security Testing', level: 88, color: 'accent' },
        { name: 'Monitoring', level: 87, color: 'accent' }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'from-primary-500 to-primary-600',
      secondary: 'from-secondary-500 to-secondary-600',
      accent: 'from-primary-500 to-secondary-500'
    };
    return colors[color] || colors.primary;
  };

  const getProgressColor = (color) => {
    const colors = {
      primary: 'bg-primary-500',
      secondary: 'bg-secondary-500',
      accent: 'bg-primary-500'
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="technologies" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-secondary-500/10 border border-secondary-500/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
            <span className="text-secondary-600 dark:text-secondary-400 text-sm font-medium">Tech Stack</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Cutting-Edge
            <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We leverage the latest technologies and frameworks to build scalable, secure, and high-performance solutions
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              className="tech-card group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(category.color)} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{category.technologies.length} technologies</p>
                </div>
              </div>

              {/* Technology Bars */}
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${getProgressColor(tech.color)}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: techIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Info */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center p-6 bg-gradient-to-br from-primary-500/5 to-primary-600/5 border border-primary-500/20 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <GitBranch className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Version Control</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Git, GitHub, GitLab, Bitbucket</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-secondary-500/5 to-secondary-600/5 border border-secondary-500/20 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Performance</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Optimized for speed and scalability</p>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 border border-primary-500/20 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Security</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Enterprise-grade security standards</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Tech Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team can work with any technology stack or build custom solutions tailored to your specific needs
            </p>
            <motion.button
              className="btn-gradient"
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
