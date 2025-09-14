import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Target, Users, BarChart3, ArrowRight, Megaphone, Search, Mail, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Marketing = () => {
  const marketingCapabilities = [
    { name: 'Digital Marketing', level: 95, color: 'from-blue-500 to-cyan-500', icon: '📱' },
    { name: 'Content Strategy', level: 92, color: 'from-purple-500 to-pink-500', icon: '✍️' },
    { name: 'SEO Optimization', level: 90, color: 'from-green-500 to-emerald-500', icon: '🔍' },
    { name: 'Social Media', level: 88, color: 'from-orange-500 to-red-500', icon: '📢' },
    { name: 'Email Marketing', level: 93, color: 'from-indigo-500 to-purple-500', icon: '📧' },
    { name: 'Analytics & Insights', level: 87, color: 'from-teal-500 to-cyan-500', icon: '📊' }
  ];

  const marketingProcess = [
    { step: 1, title: 'Market Research', description: 'Comprehensive market and competitor analysis', icon: Search },
    { step: 2, title: 'Strategy Planning', description: 'Custom marketing strategy development', icon: Target },
    { step: 3, title: 'Content Creation', description: 'Engaging content and creative development', icon: Megaphone },
    { step: 4, title: 'Campaign Launch', description: 'Multi-channel campaign execution', icon: TrendingUp },
    { step: 5, title: 'Performance Tracking', description: 'Real-time monitoring and optimization', icon: BarChart3 },
    { step: 6, title: 'Analysis & Reporting', description: 'Detailed performance analysis and insights', icon: Users },
    { step: 7, title: 'Optimization', description: 'Continuous improvement and scaling', icon: ArrowRight }
  ];

  const marketingServices = [
    {
      icon: Search,
      title: 'SEO & SEM',
      description: 'Search engine optimization and marketing to boost your online visibility',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Google Ads Management'],
      strategies: ['Content Optimization', 'Link Building', 'Local SEO', 'PPC Campaigns']
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Comprehensive social media strategy and management across platforms',
      features: ['Content Planning', 'Community Management', 'Influencer Partnerships', 'Social Advertising'],
      strategies: ['Brand Storytelling', 'Engagement Campaigns', 'User-Generated Content', 'Social Commerce']
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Targeted email campaigns that nurture leads and drive conversions',
      features: ['Campaign Design', 'List Segmentation', 'Automation Workflows', 'A/B Testing'],
      strategies: ['Drip Campaigns', 'Newsletter Marketing', 'Behavioral Triggers', 'Personalization']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Data-driven marketing insights and performance optimization',
      features: ['Performance Tracking', 'ROI Analysis', 'Customer Journey Mapping', 'Conversion Optimization'],
      strategies: ['Data Visualization', 'Predictive Analytics', 'Attribution Modeling', 'Growth Hacking']
    }
  ];

  const marketingChannels = [
    { category: 'Digital Channels', channels: ['Google Ads', 'Facebook Ads', 'Instagram', 'LinkedIn', 'YouTube'] },
    { category: 'Content Marketing', channels: ['Blog Posts', 'Video Content', 'Infographics', 'Podcasts', 'Webinars'] },
    { category: 'Email & Automation', channels: ['Email Campaigns', 'Marketing Automation', 'Lead Nurturing', 'CRM Integration', 'Drip Sequences'] },
    { category: 'Social Platforms', channels: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok'] },
    { category: 'Analytics Tools', channels: ['Google Analytics', 'Facebook Insights', 'HubSpot', 'Mailchimp', 'SEMrush'] },
    { category: 'Design & Creative', channels: ['Canva', 'Adobe Creative Suite', 'Figma', 'Video Editing', 'Brand Design'] }
  ];

  const campaignTypes = [
    { name: 'Brand Awareness', reach: '95%', description: 'Building brand recognition and visibility' },
    { name: 'Lead Generation', reach: '92%', description: 'Capturing and nurturing potential customers' },
    { name: 'Conversion Optimization', reach: '88%', description: 'Maximizing sales and conversions' },
    { name: 'Customer Retention', reach: '90%', description: 'Engaging and retaining existing customers' },
    { name: 'Product Launches', reach: '85%', description: 'Introducing new products to market' },
    { name: 'Event Marketing', reach: '87%', description: 'Promoting events and webinars' }
  ];

  const marketingMetrics = [
    { metric: 'ROI Improvement', value: '250%', description: 'Average return on marketing investment' },
    { metric: 'Lead Generation', value: '180%', description: 'Increase in qualified leads' },
    { metric: 'Conversion Rate', value: '65%', description: 'Improvement in conversion rates' },
    { metric: 'Brand Awareness', value: '200%', description: 'Growth in brand recognition' }
  ];

  const industryExpertise = [
    { industry: 'Technology', experience: '8+ years', projects: '150+ projects' },
    { industry: 'E-commerce', experience: '6+ years', projects: '120+ projects' },
    { industry: 'Healthcare', experience: '5+ years', projects: '80+ projects' },
    { industry: 'Finance', experience: '7+ years', projects: '100+ projects' },
    { industry: 'Education', experience: '4+ years', projects: '60+ projects' },
    { industry: 'Real Estate', experience: '5+ years', projects: '70+ projects' }
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
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Digital Marketing</h1>
                <p className="text-xl text-white/90">Data-driven marketing strategies that deliver measurable results</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Marketing Capabilities */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Marketing Expertise</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We create comprehensive digital marketing strategies that drive growth and engagement. Our data-driven 
                approach combines creativity with analytics to deliver campaigns that not only reach your target audience 
                but convert them into loyal customers.
              </p>
              <div className="space-y-4">
                {['Strategic Campaign Planning', 'Multi-Channel Marketing', 'Performance Analytics', 'ROI Optimization'].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Marketing Proficiency</h3>
              <div className="space-y-4">
                {marketingCapabilities.map((capability, index) => (
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

        {/* Marketing Process */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Marketing Campaign Process</h2>
          <div className="grid md:grid-cols-7 gap-4">
            {marketingProcess.map((process, index) => {
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
                  {index < marketingProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-primary-500" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Marketing Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Marketing Services We Provide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {marketingServices.map((service, index) => {
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
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Strategies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.strategies.map((strategy, strategyIndex) => (
                        <span key={strategyIndex} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-full">
                          {strategy}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Marketing Channels */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Marketing Channels & Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{channel.category}</h3>
                <div className="space-y-2">
                  {channel.channels.map((channelName, channelIndex) => (
                    <div key={channelIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300">{channelName}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Campaign Types */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Campaign Types & Reach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaignTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{type.name}</h3>
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">{type.reach}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Industry Expertise */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Industry Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryExpertise.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{industry.industry}</h3>
                <div className="text-primary-600 dark:text-primary-400 font-medium mb-1">{industry.experience}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{industry.projects}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Marketing Metrics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Marketing Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">{metric.value}</div>
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
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl text-white/90 mb-8">Let's create marketing campaigns that drive real results for your business.</p>
          <Link
            to="/#contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Marketing Campaign
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default Marketing;
