import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Trophy, Users, BarChart3, Smartphone, Clock, Bot, Target, Video, Globe } from 'lucide-react';

const Sports = () => {
  const capabilities = [
    {
      icon: Smartphone,
      title: "Sports Mobile Apps",
      description: "Comprehensive sports applications for fan engagement, live streaming, and team management"
    },
    {
      icon: BarChart3,
      title: "Sports Analytics",
      description: "Advanced performance analytics and data insights for teams, players, and organizations"
    },
    {
      icon: Video,
      title: "Live Streaming Platforms",
      description: "High-quality live streaming solutions for sports events and fan engagement"
    },
    {
      icon: Users,
      title: "Fan Engagement Systems",
      description: "Interactive platforms connecting fans with teams, players, and sporting events"
    }
  ];

  const sportsSolutions = [
    {
      title: "Sports Performance Analytics",
      description: "Advanced analytics platform that tracks player performance, team statistics, and game insights using AI and machine learning to optimize training and strategic decisions.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Player Tracking", "Performance Metrics", "Strategic Insights"]
    },
    {
      title: "Fan Engagement Platform",
      description: "Comprehensive fan engagement ecosystem featuring live updates, interactive content, social features, and personalized experiences to build stronger connections between fans and teams.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2093&q=80",
      features: ["Live Updates", "Social Features", "Personalized Content"]
    },
    {
      title: "Sports Streaming Solutions",
      description: "High-quality live streaming platform with multi-camera angles, real-time statistics overlay, interactive features, and global distribution capabilities for sports broadcasting.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: ["Multi-Camera Views", "Real-time Stats", "Global Distribution"]
    }
  ];

  const sportsTrends = [
    {
      icon: Bot,
      title: "AI in Sports",
      description: "Artificial intelligence enhancing player performance analysis and injury prevention strategies"
    },
    {
      icon: Target,
      title: "Virtual Reality Training",
      description: "Immersive VR training environments for skill development and tactical preparation"
    },
    {
      icon: Globe,
      title: "Esports Integration",
      description: "Digital sports platforms bridging traditional sports with competitive gaming experiences"
    },
    {
      icon: Clock,
      title: "Real-time Analytics",
      description: "Live performance tracking and instant feedback systems for coaches and athletes"
    }
  ];

  const sportsCategories = [
    { name: "Football", icon: "⚽", fans: "50M+" },
    { name: "Basketball", icon: "🏀", fans: "30M+" },
    { name: "Cricket", icon: "🏏", fans: "100M+" },
    { name: "Tennis", icon: "🎾", fans: "25M+" },
    { name: "Baseball", icon: "⚾", fans: "40M+" },
    { name: "Esports", icon: "🎮", fans: "75M+" }
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
                <Gamepad2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Sports <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Technology</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Revolutionizing sports through innovative technology solutions that enhance performance, engage fans, and transform the way we experience athletic competition.
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
              <div className="text-gray-600 dark:text-gray-300">Sports Fans Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">99.9%</div>
              <div className="text-gray-600 dark:text-gray-300">Platform Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">85%</div>
              <div className="text-gray-600 dark:text-gray-300">Fan Engagement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Live Coverage</div>
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
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Sports Technology"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Next-Gen Sports Solutions</h3>
              <p className="text-lg opacity-90">Transforming athletic performance and fan experiences</p>
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
              Sports Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive sports technology solutions designed to enhance athletic performance and fan engagement
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

      {/* Sports Solutions Section */}
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
              Innovative Sports Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Cutting-edge sports applications that enhance performance and revolutionize fan experiences
            </p>
          </motion.div>

          <div className="space-y-16">
            {sportsSolutions.map((solution, index) => (
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
                    <Trophy className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Categories */}
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
              Sports Categories We Serve
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive sports technology solutions across diverse athletic disciplines and competitions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {sportsCategories.map((category, index) => (
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
                  {category.fans}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Trends Section */}
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
              Sports Technology Trends
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay ahead with emerging sports technologies and innovations shaping the future of athletics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sportsTrends.map((trend, index) => {
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
              Transform Sports with Technology
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Partner with us to revolutionize athletic performance and create extraordinary sports experiences
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Start Your Sports Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sports;
