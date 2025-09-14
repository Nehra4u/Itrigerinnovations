import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Brain, Users, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      features: ['React/Next.js', 'Node.js/Express', 'Custom CMS', 'E-commerce Solutions'],
      color: 'primary',
      category: 'Web Development'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'iOS/Swift', 'Android/Kotlin'],
      color: 'secondary',
      category: 'Mobile Development'
    },
    {
      icon: Database,
      title: 'Custom Software Solutions',
      description: 'Enterprise-grade applications and business software tailored to your needs.',
      features: ['Desktop Applications', 'Web Applications', 'API Development', 'Database Design'],
      color: 'accent',
      category: 'Software Development'
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that learn, adapt, and optimize business processes.',
      features: ['Predictive Analytics', 'Computer Vision', 'NLP', 'Deep Learning'],
      color: 'primary',
      category: 'AI/ML'
    },
    {
      icon: Users,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Marketing', 'PPC Campaigns'],
      color: 'secondary',
      category: 'Digital Marketing'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'from-primary-500/20 to-primary-600/20 border-primary-500/30 text-primary-400',
      secondary: 'from-secondary-500/20 to-secondary-600/20 border-secondary-500/30 text-secondary-400',
      accent: 'from-primary-500/20 to-secondary-500/20 border-primary-500/30 text-primary-400'
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">Our Core Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Transform Your Business
            </span>
            <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              With Technology
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We specialize in website development, mobile apps, custom software, AI/ML solutions, and digital marketing to drive your business forward
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group tech-card hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(service.color)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className={`w-1.5 h-1.5 bg-${service.color}-400 rounded-full`}></div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can drive innovation and growth for your organization
            </p>
            <motion.button
              className="btn-gradient"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
