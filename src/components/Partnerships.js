import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users2, 
  Zap, 
  Globe, 
  Database, 
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Users,
  TrendingUp,
  MessageCircle,
  Bell,
  Download
} from 'lucide-react';

const Partnerships = () => {
  const partnerships = [
    {
      category: 'Cloud & Infrastructure',
      partners: [
        {
          name: 'Amazon Web Services',
          logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=200&fit=crop',
          description: 'Enterprise cloud solutions and infrastructure services',
          benefits: ['Scalable hosting', 'Global CDN', 'Advanced security', 'Cost optimization'],
          status: 'Platinum Partner'
        },
        {
          name: 'Microsoft Azure',
          logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=200&fit=crop',
          description: 'Enterprise-grade cloud platform and services',
          benefits: ['Hybrid cloud', 'AI services', 'Enterprise integration', 'Compliance'],
          status: 'Gold Partner'
        },
        {
          name: 'Google Cloud Platform',
          logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=200&fit=crop',
          description: 'Innovative cloud computing and AI solutions',
          benefits: ['Machine learning', 'Big data analytics', 'Kubernetes', 'Serverless'],
          status: 'Silver Partner'
        }
      ]
    },
    {
      category: 'Development Tools',
      partners: [
        {
          name: 'GitHub',
          logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=200&fit=crop',
          description: 'Leading platform for version control and collaboration',
          benefits: ['Code management', 'CI/CD pipelines', 'Security scanning', 'Team collaboration'],
          status: 'Official Partner'
        },
        {
          name: 'Atlassian',
          logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=200&fit=crop',
          description: 'Project management and development tools',
          benefits: ['Jira integration', 'Confluence docs', 'Bitbucket', 'Agile workflows'],
          status: 'Silver Partner'
        }
      ]
    },
    {
      category: 'Payment & E-commerce',
      partners: [
        {
          name: 'Stripe',
          logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=200&fit=crop',
          description: 'Complete payment processing platform',
          benefits: ['Global payments', 'Subscription billing', 'Fraud protection', 'Developer-friendly'],
          status: 'Platinum Partner'
        },
        {
          name: 'Shopify',
          logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=200&fit=crop',
          description: 'E-commerce platform and solutions',
          benefits: ['Store setup', 'Payment integration', 'Inventory management', 'Marketing tools'],
          status: 'Gold Partner'
        }
      ]
    }
  ];

  const integrations = [
    {
      name: 'CRM Integration',
      description: 'Seamlessly connect with popular CRM platforms',
      platforms: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho'],
      icon: Users,
      color: 'from-primary-500 to-primary-600'
    },
    {
      name: 'Marketing Automation',
      description: 'Integrate with leading marketing platforms',
      platforms: ['Mailchimp', 'ActiveCampaign', 'ConvertKit', 'Klaviyo'],
      icon: Zap,
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      name: 'Analytics & Tracking',
      description: 'Comprehensive analytics and reporting solutions',
      platforms: ['Google Analytics', 'Mixpanel', 'Amplitude', 'Hotjar'],
      icon: TrendingUp,
      color: 'from-primary-500 to-secondary-500'
    },
    {
      name: 'Communication Tools',
      description: 'Connect with popular communication platforms',
      platforms: ['Slack', 'Microsoft Teams', 'Discord', 'Zoom'],
      icon: MessageCircle,
      color: 'from-secondary-500 to-primary-500'
    }
  ];

  const apiServices = [
    {
      name: 'RESTful APIs',
      description: 'Standard REST APIs for easy integration',
      features: ['JSON responses', 'OAuth 2.0', 'Rate limiting', 'Comprehensive docs'],
      icon: Globe,
      color: 'from-primary-500 to-primary-600'
    },
    {
      name: 'GraphQL APIs',
      description: 'Modern GraphQL APIs for flexible data queries',
      features: ['Single endpoint', 'Type safety', 'Real-time updates', 'Efficient queries'],
      icon: Database,
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      name: 'Webhook Services',
      description: 'Real-time event notifications and triggers',
      features: ['Event-driven', 'Secure delivery', 'Retry logic', 'Custom payloads'],
      icon: Bell,
      color: 'from-primary-500 to-secondary-500'
    }
  ];

  return (
    <section id="partnerships" className="section-padding bg-white dark:bg-gray-900">
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
            <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">Partnerships & Integrations</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Strategic <span className="gradient-text">Partnerships</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We collaborate with industry leaders to provide you with the best technology solutions and seamless integrations
          </p>
        </motion.div>

        {/* Partnerships by Category */}
        <div className="space-y-16 mb-20">
          {partnerships.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.category}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.partners.map((partner, partnerIndex) => (
                  <motion.div
                    key={partnerIndex}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: partnerIndex * 0.1 }}
                  >
                    {/* Partner Header */}
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden bg-white dark:bg-gray-700 p-2">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {partner.name}
                      </h4>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
                        {partner.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed">
                      {partner.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-3 mb-6">
                      <h5 className="font-semibold text-gray-900 dark:text-white text-sm">Key Benefits:</h5>
                      {partner.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      className="w-full btn-outline group-hover:from-primary-500 group-hover:to-secondary-500 group-hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Capabilities */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Seamless <span className="gradient-text">Integrations</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect your existing tools and platforms with our solutions for a unified digital experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${integration.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <integration.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">
                  {integration.name}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4 text-sm">
                  {integration.description}
                </p>
                
                <div className="space-y-2">
                  {integration.platforms.map((platform, platformIndex) => (
                    <div key={platformIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{platform}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* API Services */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful <span className="gradient-text">API Services</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Build custom integrations and extend our platform's capabilities with our comprehensive API offerings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {apiServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  {service.name}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  className="w-full btn-gradient"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View API Documentation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Become a Partner CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-2xl p-8 md:p-12">
            <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Become Our Partner
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Are you a technology company looking to expand your reach? Let's explore partnership opportunities 
              that can benefit both our companies and deliver exceptional value to our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="btn-gradient text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Partnership Inquiry
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                className="btn-outline text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Partnership Guide
                <Download className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnerships;
