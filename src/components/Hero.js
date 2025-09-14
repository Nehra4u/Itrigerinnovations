import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Zap, Globe, Database, Shield, ArrowRight, Play } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();
  
  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
        : 'bg-gradient-to-br from-blue-50 via-white to-gray-50'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Tech Icons */}
        <motion.div
          className={`absolute top-20 left-10 ${
            isDark ? 'text-primary-400/20' : 'text-black/20'
          }`}
          animate={isDark ? { y: [0, -20, 0], rotate: [0, 5, 0] } : {}}
          transition={isDark ? { duration: 6, repeat: Infinity, ease: "easeInOut" } : {}}
        >
          <Code className="w-16 h-16" />
        </motion.div>
        
        <motion.div
          className={`absolute top-40 right-20 ${
            isDark ? 'text-secondary-400/20' : 'text-black/20'
          }`}
          animate={isDark ? { y: [0, 20, 0], rotate: [0, -5, 0] } : {}}
          transition={isDark ? { duration: 8, repeat: Infinity, ease: "easeInOut" } : {}}
        >
          <Cpu className="w-12 h-12" />
        </motion.div>
        
        <motion.div
          className={`absolute bottom-40 left-20 ${
            isDark ? 'text-primary-400/20' : 'text-black/20'
          }`}
          animate={isDark ? { y: [0, -15, 0], rotate: [0, 3, 0] } : {}}
          transition={isDark ? { duration: 7, repeat: Infinity, ease: "easeInOut" } : {}}
        >
           <Database className="w-14 h-14" />
         </motion.div>
        
        <motion.div
          className={`absolute bottom-20 right-40 ${
            isDark ? 'text-primary-400/20' : 'text-black/20'
          }`}
          animate={isDark ? { y: [0, 25, 0], rotate: [0, -3, 0] } : {}}
          transition={isDark ? { duration: 9, repeat: Infinity, ease: "easeInOut" } : {}}
        >
          <Shield className="w-10 h-10" />
        </motion.div>

        {/* Animated Grid Pattern */}
        <div className={`absolute inset-0 opacity-30 ${
          isDark 
            ? "bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
            : "bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
        }`}></div>
        
        {/* Gradient Orbs */}
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl ${
          isDark 
            ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20'
            : 'bg-gradient-to-r from-primary-500/10 to-secondary-500/10'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
          isDark 
            ? 'bg-gradient-to-r from-secondary-500/20 to-primary-500/20'
            : 'bg-gradient-to-r from-secondary-500/10 to-primary-500/10'
        }`}></div>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 text-center px-4">
        {/* Company Logo & Tagline */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={`inline-flex items-center space-x-3 backdrop-blur-sm rounded-full px-6 py-3 mb-6 ${
            isDark 
              ? 'bg-white/5 border border-white/10'
              : 'bg-gray-900/5 border border-gray-900/10'
          }`}>
            <div className={`w-2 h-2 rounded-full ${
              isDark ? 'bg-primary-400 animate-pulse' : 'bg-black'
            }`}></div>
            <span className={`text-sm font-medium ${
              isDark ? 'text-white/70' : 'text-black'
            }`}>Core Development Company</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
            isDark ? 'text-white' : 'text-black'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block">We Build</span>
          <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-secondary-400 bg-clip-text text-transparent">
            Digital Solutions
          </span>
          <span className="block">That Matter</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-black'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          From cutting-edge web applications to powerful mobile solutions, we transform ideas into 
          <span className="text-primary-400 font-semibold"> innovative digital experiences</span> that drive business growth
        </motion.p>

        {/* Tech Stack Preview */}
        <motion.div
          className={`flex flex-wrap justify-center items-center gap-4 mb-8 ${
            isDark ? 'text-gray-400' : 'text-black'
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-sm">Powered by:</span>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${
              isDark ? 'bg-primary-400' : 'bg-black'
            }`}></div>
            <span>React</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${
              isDark ? 'bg-secondary-400' : 'bg-black'
            }`}></div>
            <span>Node.js</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${
              isDark ? 'bg-primary-400' : 'bg-black'
            }`}></div>
            <span>AI/ML</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="group bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
          
          <motion.button
            className={`group backdrop-blur-sm font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
              isDark 
                ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                : 'bg-gray-900/10 border border-gray-900/20 text-black hover:bg-gray-900/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">500+</div>
            <div className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-black'
            }`}>Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">50+</div>
            <div className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-black'
            }`}>Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">24/7</div>
            <div className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-black'
            }`}>Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">99%</div>
            <div className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-black'
            }`}>Success Rate</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className={`w-6 h-10 border-2 rounded-full flex justify-center ${
              isDark ? 'border-white/30' : 'border-black/30'
            }`}
            animate={isDark ? { y: [0, 10, 0] } : {}}
            transition={isDark ? { duration: 2, repeat: Infinity } : {}}
          >
            <motion.div
              className={`w-1 h-3 rounded-full mt-2 ${
                isDark ? 'bg-white/60' : 'bg-black/60'
              }`}
              animate={isDark ? { y: [0, 12, 0] } : {}}
              transition={isDark ? { duration: 2, repeat: Infinity } : {}}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Action Cards */}
      <motion.div
        className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className={`backdrop-blur-sm rounded-2xl p-6 w-64 ${
          isDark 
            ? 'bg-white/5 border border-white/10'
            : 'bg-gray-900/5 border border-gray-900/10'
        }`}>
          <div className="flex items-center space-x-3 mb-4">
            <div className={`w-3 h-3 rounded-full ${
              isDark ? 'bg-primary-400' : 'bg-black'
            }`}></div>
            <span className={`font-semibold ${
              isDark ? 'text-white' : 'text-black'
            }`}>Live Status</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-black'
              }`}>Server Uptime</span>
              <span className="text-primary-400 font-bold">99.9%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-black'
              }`}>Response Time</span>
              <span className="text-secondary-400 font-bold">45ms</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-black'
              }`}>Active Users</span>
              <span className="text-primary-400 font-bold">2.4K</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-8 transform -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <div className={`backdrop-blur-sm rounded-2xl p-6 w-64 ${
          isDark 
            ? 'bg-white/5 border border-white/10'
            : 'bg-gray-900/5 border border-gray-900/10'
        }`}>
          <div className="flex items-center space-x-3 mb-4">
            <div className={`w-3 h-3 rounded-full ${
              isDark ? 'bg-secondary-400' : 'bg-black'
            }`}></div>
            <span className={`font-semibold ${
              isDark ? 'text-white' : 'text-black'
            }`}>Tech Stack</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${
                isDark ? 'bg-primary-400' : 'bg-black'
              }`}></div>
              <span className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-black'
              }`}>React 18 + Next.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${
                isDark ? 'bg-secondary-400' : 'bg-black'
              }`}></div>
              <span className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-black'
              }`}>Node.js + Express</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${
                isDark ? 'bg-primary-400' : 'bg-black'
              }`}></div>
              <span className={`text-sm ${
                isDark ? 'text-gray-300' : 'text-black'
              }`}>AI/ML Integration</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
