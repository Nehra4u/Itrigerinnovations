import React from 'react';
import { motion } from 'framer-motion';
import { Tv, Play, Video, Users, BarChart3, Shield, Globe, CheckCircle, Settings, Workflow, Star, Eye, Bot, Headphones, Smartphone } from 'lucide-react';

const MediaOTT = () => {
  const capabilities = [
    {
      icon: Video,
      title: "Video Streaming Platforms",
      description: "High-quality video streaming solutions with adaptive bitrate and global CDN distribution"
    },
    {
      icon: Users,
      title: "Content Management",
      description: "Comprehensive content management systems for media libraries and digital assets"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Advanced viewer analytics and content performance tracking for data-driven decisions"
    },
    {
      icon: Shield,
      title: "DRM & Security",
      description: "Robust digital rights management and content protection for secure media distribution"
    }
  ];

  const mediaSolutions = [
    {
      title: "OTT Streaming Platform",
      description: "Complete over-the-top streaming solution with multi-device support, adaptive streaming, content recommendation engine, and subscription management for seamless viewer experiences.",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Multi-Device Support", "Adaptive Streaming", "Content Recommendations"]
    },
    {
      title: "Live Broadcasting Solutions",
      description: "Professional live streaming platform with real-time encoding, multi-camera support, interactive features, and global distribution for live events and broadcasts.",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
      features: ["Real-time Encoding", "Multi-Camera Support", "Interactive Features"]
    },
    {
      title: "Media Asset Management",
      description: "Comprehensive digital asset management system for organizing, cataloging, and distributing media content with automated workflows and metadata management.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      features: ["Content Organization", "Automated Workflows", "Metadata Management"]
    }
  ];

  const mediaTrends = [
    {
      icon: Bot,
      title: "AI Content Curation",
      description: "Artificial intelligence algorithms for personalized content recommendations and automated curation"
    },
    {
      icon: Globe,
      title: "5G Streaming",
      description: "Ultra-low latency streaming experiences enabled by 5G networks and edge computing"
    },
    {
      icon: Headphones,
      title: "Immersive Audio",
      description: "Spatial audio and immersive sound technologies enhancing viewer engagement"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Content",
      description: "Content optimized for mobile consumption with vertical video and interactive features"
    }
  ];

  const mediaCategories = [
    { name: "Entertainment", icon: "🎬", viewers: "100M+" },
    { name: "News & Sports", icon: "📺", viewers: "75M+" },
    { name: "Education", icon: "📚", viewers: "50M+" },
    { name: "Music & Audio", icon: "🎵", viewers: "80M+" },
    { name: "Gaming", icon: "🎮", viewers: "60M+" },
    { name: "Documentaries", icon: "🎥", viewers: "40M+" }
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
                <Tv className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Media & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">OTT</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming media and entertainment through cutting-edge streaming technology, content management solutions, and immersive viewer experiences.
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
              <div className="text-gray-600 dark:text-gray-300">Content Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">99.9%</div>
              <div className="text-gray-600 dark:text-gray-300">Streaming Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">4K</div>
              <div className="text-gray-600 dark:text-gray-300">Ultra HD Quality</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Live Broadcasting</div>
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
              src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Media & OTT Technology"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Next-Gen Streaming Solutions</h3>
              <p className="text-lg opacity-90">Delivering content worldwide</p>
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
              Media & OTT Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive media technology solutions designed to deliver exceptional streaming experiences and content management
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

      {/* Media Solutions Section */}
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
              Advanced Media Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Innovative media applications that revolutionize content delivery and viewer engagement
            </p>
          </motion.div>

          <div className="space-y-16">
            {mediaSolutions.map((solution, index) => (
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
                    <Play className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Categories */}
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
              Media Categories We Serve
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive media solutions across diverse content categories and entertainment formats
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {mediaCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {category.name}
                </h3>
                <div className="text-primary-600 dark:text-primary-400 font-bold">
                  {category.viewers}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Trends Section */}
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
              Media Technology Trends
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay ahead with emerging media technologies and innovations shaping the future of entertainment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaTrends.map((trend, index) => {
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
              Transform Media with Technology
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Partner with us to revolutionize content delivery and create extraordinary media experiences
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Start Your Media Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MediaOTT;
