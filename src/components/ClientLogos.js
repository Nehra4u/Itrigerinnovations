import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, Zap, Shield } from 'lucide-react';

const ClientLogos = () => {
  const clients = [
    { name: 'TechCorp', industry: 'Technology', icon: Building2, color: 'from-blue-500 to-purple-600' },
    { name: 'Global Solutions', industry: 'Consulting', icon: Globe, color: 'from-green-500 to-blue-600' },
    { name: 'InnovateLab', industry: 'Startup', icon: Zap, color: 'from-yellow-500 to-orange-600' },
    { name: 'SecureNet', industry: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-pink-600' },
    { name: 'DataFlow', industry: 'Analytics', icon: Building2, color: 'from-indigo-500 to-purple-600' },
    { name: 'CloudTech', industry: 'Cloud Services', icon: Globe, color: 'from-teal-500 to-green-600' },
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-700 dark:text-primary-400 text-sm font-medium mb-4"
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
            Trusted By Industry Leaders
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Companies That <span className="gradient-text">Trust Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            We've partnered with leading companies across various industries to deliver innovative solutions that drive business growth.
          </motion.p>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <motion.div
                className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${client.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(0, 168, 89, 0.2)"
                }}
              >
                <client.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{client.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{client.industry}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-8 text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
