import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Calculator, Users, Smartphone, BarChart3, Bot, TrendingUp, CheckCircle } from 'lucide-react';

const Insurance = () => {
  const capabilities = [
    {
      icon: Calculator,
      title: "Risk Assessment",
      description: "Advanced AI-powered risk assessment and underwriting systems for accurate policy pricing"
    },
    {
      icon: FileText,
      title: "Claims Processing",
      description: "Automated claims processing and management systems for faster claim resolution"
    },
    {
      icon: Users,
      title: "Customer Portal",
      description: "Comprehensive customer portals for policy management and self-service capabilities"
    },
    {
      icon: BarChart3,
      title: "Insurance Analytics",
      description: "Advanced analytics for fraud detection, risk modeling, and business intelligence"
    }
  ];

  const insuranceSolutions = [
    {
      title: "Digital Insurance Platform",
      description: "Complete digital insurance ecosystem with policy management, claims processing, customer onboarding, risk assessment, and integrated payment systems for seamless insurance operations.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Policy Management", "Claims Processing", "Risk Assessment"]
    },
    {
      title: "AI-Powered Underwriting",
      description: "Intelligent underwriting system using machine learning algorithms for automated risk assessment, policy pricing, fraud detection, and decision-making processes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["ML Risk Assessment", "Automated Pricing", "Fraud Detection"]
    },
    {
      title: "InsurTech Mobile Solutions",
      description: "Mobile-first insurance applications with instant quotes, policy purchases, claim submissions, document scanning, and real-time customer support for modern insurance experiences.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Instant Quotes", "Mobile Claims", "Document Scanning"]
    }
  ];

  const insuranceTrends = [
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Intelligent chatbots for customer service, policy inquiries, and automated claim assistance"
    },
    {
      icon: Smartphone,
      title: "IoT Integration",
      description: "Internet of Things devices for usage-based insurance and real-time risk monitoring"
    },
    {
      icon: Shield,
      title: "Cyber Insurance",
      description: "Specialized cyber insurance products for digital risks and data breach protection"
    },
    {
      icon: TrendingUp,
      title: "Parametric Insurance",
      description: "Automated parametric insurance products with instant payouts based on predefined triggers"
    }
  ];

  const insuranceTypes = [
    { name: "Life Insurance", icon: "❤️", policies: "50M+" },
    { name: "Health Insurance", icon: "🏥", policies: "100M+" },
    { name: "Auto Insurance", icon: "🚗", policies: "80M+" },
    { name: "Property Insurance", icon: "🏠", policies: "60M+" },
    { name: "Business Insurance", icon: "🏢", policies: "20M+" },
    { name: "Travel Insurance", icon: "✈️", policies: "30M+" }
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
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Insurance</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming insurance industry through innovative technology solutions that enhance customer experiences, streamline operations, and improve risk management.
            </p>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">500M+</div>
              <div className="text-gray-600 dark:text-gray-300">Policies Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">99.5%</div>
              <div className="text-gray-600 dark:text-gray-300">Claim Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">70%</div>
              <div className="text-gray-600 dark:text-gray-300">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Customer Support</div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Smart Insurance Technology"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Future of Insurance</h3>
              <p className="text-lg opacity-90">Protecting what matters most</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
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
              Insurance Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive insurance technology solutions designed to modernize operations and enhance customer experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Insurance Solutions Section */}
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
              Advanced Insurance Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Innovative insurance applications that transform policy management and customer experiences
            </p>
          </motion.div>

          <div className="space-y-16">
            {insuranceSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-lg p-4 text-center">
                        <span className="text-gray-800 dark:text-gray-200 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow"
                  >
                    Explore Solution
                    <CheckCircle className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Types */}
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
              Insurance Types We Serve
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive insurance solutions across diverse coverage types and protection needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {insuranceTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {type.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {type.name}
                </h3>
                <div className="text-primary-600 dark:text-primary-400 font-bold">
                  {type.policies}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Trends Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Insurance Technology Trends
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay ahead with emerging insurance technologies and innovations shaping the future of risk management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insuranceTrends.map((trend, index) => {
              const IconComponent = trend.icon;
              return (
                <motion.div
                  key={trend.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {trend.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {trend.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Secure the Future with Smart Insurance
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Partner with us to revolutionize insurance operations and create exceptional customer experiences
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Start Your Insurance Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;
