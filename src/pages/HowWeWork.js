import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Code, Rocket, CheckCircle, ArrowRight, Clock, Shield, Zap, Globe, MessageSquare, Settings } from 'lucide-react';

const HowWeWork = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We dive deep into understanding your business requirements, goals, and challenges.',
      icon: Target,
      features: ['Requirement Analysis', 'Technical Feasibility', 'Project Roadmap', 'Risk Assessment']
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Creating scalable system architecture and intuitive user experience designs.',
      icon: Settings,
      features: ['System Design', 'UI/UX Mockups', 'Database Schema', 'API Architecture']
    },
    {
      step: '03',
      title: 'Agile Development',
      description: 'Building your solution using agile methodologies with regular sprint deliveries.',
      icon: Code,
      features: ['Sprint Planning', 'Daily Standups', 'Code Reviews', 'Continuous Integration']
    },
    {
      step: '04',
      title: 'Testing & Quality',
      description: 'Comprehensive testing ensures your application is robust, secure, and bug-free.',
      icon: Shield,
      features: ['Unit Testing', 'Integration Testing', 'Security Audits', 'Performance Testing']
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      description: 'Seamless deployment to production with monitoring and support systems in place.',
      icon: Rocket,
      features: ['Cloud Deployment', 'Performance Monitoring', 'User Training', 'Go-Live Support']
    },
    {
      step: '06',
      title: 'Maintenance & Support',
      description: 'Ongoing support, updates, and enhancements to keep your solution running smoothly.',
      icon: Users,
      features: ['24/7 Support', 'Regular Updates', 'Performance Optimization', 'Feature Enhancements']
    }
  ];

  const workingPrinciples = [
    {
      icon: Zap,
      title: 'Agile Methodology',
      description: 'Fast iterations with continuous feedback and adaptation to changing requirements.',
      benefits: ['Faster Time-to-Market', 'Flexible Scope Management', 'Regular Client Feedback', 'Risk Mitigation']
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      description: 'Regular updates, clear documentation, and open channels for collaboration.',
      benefits: ['Daily Progress Reports', 'Weekly Sprint Reviews', 'Real-time Chat Support', 'Project Dashboards']
    },
    {
      icon: Globe,
      title: 'Global Collaboration',
      description: 'Seamless coordination across time zones with distributed team expertise.',
      benefits: ['24/7 Development Cycle', 'Diverse Skill Sets', 'Cost Optimization', 'Cultural Insights']
    },
    {
      icon: Clock,
      title: 'Time-Bound Delivery',
      description: 'Committed to meeting deadlines without compromising on quality standards.',
      benefits: ['Milestone Tracking', 'Resource Optimization', 'Predictable Delivery', 'Quality Assurance']
    }
  ];

  const technologies = [
    { name: 'Frontend', tools: ['React', 'Vue.js', 'Angular', 'Next.js'], color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend', tools: ['Node.js', 'Python', 'Java', '.NET'], color: 'from-green-500 to-emerald-500' },
    { name: 'Database', tools: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'], color: 'from-purple-500 to-violet-500' },
    { name: 'Cloud', tools: ['AWS', 'Azure', 'GCP', 'Docker'], color: 'from-orange-500 to-red-500' },
    { name: 'Mobile', tools: ['React Native', 'Flutter', 'iOS', 'Android'], color: 'from-pink-500 to-rose-500' },
    { name: 'AI/ML', tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI'], color: 'from-indigo-500 to-purple-500' }
  ];

  const stats = [
    { value: '2-4 weeks', label: 'Average Project Start', description: 'From concept to development' },
    { value: '99.5%', label: 'Uptime Guarantee', description: 'Reliable system performance' },
    { value: '24/7', label: 'Support Available', description: 'Round-the-clock assistance' },
    { value: '< 48 hours', label: 'Response Time', description: 'Quick issue resolution' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                <Target className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Work</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get to know how you can work with us. Our proven methodology ensures successful project delivery with transparency and quality.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.description}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Process</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A systematic approach that ensures quality, transparency, and timely delivery of your software solutions.
            </p>
          </motion.div>

          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                          {step.step}
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary-500" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Working Principles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Working <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Principles</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The core principles that guide our collaboration and ensure project success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workingPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {principle.description}
                  </p>
                  <div className="space-y-2">
                    {principle.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Technologies We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Master</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our expertise spans across modern technologies and frameworks to build robust solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {tech.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss your requirements and begin building your next great software solution.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow flex items-center gap-2 mx-auto"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
