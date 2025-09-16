import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Star, CheckCircle, TrendingUp, Code, Cpu, Database, Shield, Brain, Rocket, Zap, Sparkles, Globe, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      {/* Modern Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-full blur-xl"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-secondary-400/30 to-primary-400/30 rounded-2xl rotate-45 blur-lg"
          animate={{ 
            rotate: [45, 225, 45],
            y: [0, 40, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-32 left-32 w-20 h-20 bg-gradient-to-r from-primary-500/25 to-secondary-500/25 rounded-full blur-md"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated Tech Icons */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-primary-400/10 dark:text-primary-400/20"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Code className="w-16 h-16" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/3 text-secondary-400/10 dark:text-secondary-400/20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <Brain className="w-12 h-12" />
        </motion.div>

        {/* Modern Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0,168,89,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,168,89,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Large Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-secondary-500/15 to-primary-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Modern Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Premium Badge */}
              <motion.div
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 backdrop-blur-sm border border-primary-500/20 rounded-full px-6 py-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <span className="text-primary-600 dark:text-primary-400 font-semibold">AI-Powered Innovation</span>
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-[0.9]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="block text-gray-900 dark:text-white">Build The</span>
                <span className="block bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 bg-clip-text text-transparent">
                  Future
                </span>
                <span className="block text-gray-900 dark:text-white">Today</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform your business with cutting-edge AI solutions, modern web technologies, and 
                <span className="text-primary-600 dark:text-primary-400 font-bold"> intelligent automation</span> that drives real results.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.button
                  className="group bg-primary-600 hover:bg-primary-700 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 flex items-center space-x-3 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Building</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
                
                <motion.button
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 text-gray-900 dark:text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 hover:bg-white/20 dark:hover:bg-gray-800/50 flex items-center space-x-3 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-6 h-6" />
                  <span>Watch Demo</span>
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start items-center gap-8 text-sm text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary-500" />
                  <span>500+ Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary-500" />
                  <span>50+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-primary-500" />
                  <span>Global Reach</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Interactive Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Main Visual Container */}
              <div className="relative">
                {/* Central Hub */}
                <motion.div
                  className="relative mx-auto w-80 h-80 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full backdrop-blur-sm border border-primary-500/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                >
                  {/* Inner Circle */}
                  <div className="absolute inset-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    >
                      <Brain className="w-16 h-16 text-white" />
                    </motion.div>
                  </div>

                  {/* Orbiting Elements */}
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  >
                    <Code className="w-6 h-6 text-primary-600" />
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  >
                    <Database className="w-6 h-6 text-secondary-600" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  >
                    <Shield className="w-6 h-6 text-primary-600" />
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="w-6 h-6 text-secondary-600" />
                  </motion.div>
                </motion.div>

                {/* Floating Stats Cards */}
                <motion.div
                  className="absolute -top-8 -left-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-2xl font-bold text-primary-600">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-8 -right-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <div className="text-2xl font-bold text-secondary-600">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-primary-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
