import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Code, Brain, Zap, Target, CheckCircle, Star, TrendingUp } from 'lucide-react';

const Team = () => {
  const stats = [
    { value: '200+', label: 'Expert Developers', description: 'Skilled professionals' },
    { value: '500+', label: 'Projects Delivered', description: 'Successful implementations' },
    { value: '50+', label: 'Industries Served', description: 'Diverse expertise' },
    { value: '98%', label: 'Client Satisfaction', description: 'Quality assurance' }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Lead AI Engineer',
      expertise: 'Machine Learning & Deep Learning',
      experience: '8+ years',
      image: '👩‍💻',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision']
    },
    {
      name: 'Michael Chen',
      role: 'Full Stack Architect',
      expertise: 'Enterprise Applications',
      experience: '10+ years',
      image: '👨‍💻',
      skills: ['React', 'Node.js', 'AWS', 'Microservices']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Science Lead',
      expertise: 'Business Intelligence & Analytics',
      experience: '7+ years',
      image: '👩‍🔬',
      skills: ['R', 'Tableau', 'SQL', 'Statistical Analysis']
    },
    {
      name: 'David Kumar',
      role: 'DevOps Engineer',
      expertise: 'Cloud Infrastructure',
      experience: '6+ years',
      image: '👨‍🔧',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform']
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      projects: '50+',
      description: 'Digital health solutions, telemedicine platforms, and medical data analytics'
    },
    {
      name: 'Finance',
      icon: '💰',
      projects: '40+',
      description: 'Fintech applications, trading platforms, and blockchain solutions'
    },
    {
      name: 'E-commerce',
      icon: '🛒',
      projects: '60+',
      description: 'Online marketplaces, payment gateways, and inventory management'
    },
    {
      name: 'Education',
      icon: '🎓',
      projects: '30+',
      description: 'E-learning platforms, student management systems, and virtual classrooms'
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      projects: '25+',
      description: 'IoT solutions, supply chain management, and quality control systems'
    },
    {
      name: 'Real Estate',
      icon: '🏢',
      projects: '35+',
      description: 'Property management systems, virtual tours, and market analytics'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every line of code and every project delivery.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Our agile teams work seamlessly together to achieve extraordinary results.'
    },
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies to solve complex business challenges.'
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'Fast adaptation to changing requirements with flexible development approaches.'
    }
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
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to go an extra mile to deliver great software solutions. Meet our passionate team of developers, designers, and innovators.
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

      {/* Team Members Section */}
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
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Leaders</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our experienced team leads bring decades of combined expertise across various technologies and industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {member.expertise}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Award className="w-4 h-4" />
                    {member.experience}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
              Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Serve</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our diverse expertise spans across multiple industries, delivering tailored solutions for unique business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {industry.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-primary-600" />
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    {industry.projects} Projects
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Core Values</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide our team and drive our commitment to delivering exceptional software solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
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
              Ready to Work with Our Expert Team?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss your project requirements and build something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
