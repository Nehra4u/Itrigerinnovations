import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, TrendingUp, Users, Clock, DollarSign, CheckCircle, Star, Eye } from 'lucide-react';

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      title: 'E-Commerce Platform Transformation',
      client: 'Fashion Retail Chain',
      industry: 'Retail & E-Commerce',
      duration: '6 months',
      team: '8 developers',
      budget: '$150,000',
      challenge: 'Legacy system causing 40% cart abandonment and poor mobile experience',
      solution: 'Modern React-based platform with AI-powered recommendations and mobile-first design',
      results: [
        'Cart abandonment reduced by 65%',
        'Mobile conversion increased by 120%',
        'Page load speed improved by 3x',
        'Revenue growth of 45% in first year'
      ],
      technologies: ['React 18', 'Node.js', 'MongoDB', 'AWS', 'AI/ML'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      testimonial: {
        text: 'Itriger transformed our online business completely. The new platform exceeded our expectations and delivered measurable results.',
        author: 'Sarah Johnson',
        position: 'CTO, Fashion Retail Chain',
        rating: 5
      }
    },
    {
      title: 'Healthcare Management System',
      client: 'Regional Hospital Network',
      industry: 'Healthcare',
      duration: '8 months',
      team: '12 developers',
      budget: '$250,000',
      challenge: 'Fragmented systems causing patient data inconsistencies and operational inefficiencies',
      solution: 'Integrated healthcare platform with real-time data synchronization and advanced analytics',
      results: [
        'Patient data accuracy improved by 95%',
        'Administrative efficiency increased by 60%',
        'Cost savings of $200K annually',
        'Patient satisfaction score: 4.8/5'
      ],
      technologies: ['React Native', 'Python', 'PostgreSQL', 'Docker', 'Kubernetes'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      testimonial: {
        text: 'The system has revolutionized how we manage patient care. It\'s intuitive, reliable, and has significantly improved our operations.',
        author: 'Dr. Michael Chen',
        position: 'Chief Medical Officer',
        rating: 5
      }
    },
    {
      title: 'FinTech Mobile Application',
      client: 'Digital Banking Startup',
      industry: 'Financial Technology',
      duration: '4 months',
      team: '6 developers',
      budget: '$100,000',
      challenge: 'Need for a secure, scalable mobile banking app to compete with established players',
      solution: 'Cross-platform mobile app with biometric authentication and real-time transaction processing',
      results: [
        'App store rating: 4.9/5',
        'User acquisition: 50K+ in first quarter',
        'Transaction success rate: 99.9%',
        'Security audit: 100% compliance'
      ],
      technologies: ['Flutter', 'Firebase', 'Node.js', 'Redis', 'Stripe API'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      testimonial: {
        text: 'Itriger delivered a world-class mobile banking app that exceeded our security and performance requirements.',
        author: 'Alex Rodriguez',
        position: 'CEO, Digital Banking Startup',
        rating: 5
      }
    }
  ];

  const currentCase = caseStudies[selectedCase];

  return (
    <section id="case-studies" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900">
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
            <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Proven <span className="gradient-text">Results</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable growth
          </p>
        </motion.div>

        {/* Case Study Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCase(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCase === index
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {study.title}
            </motion.button>
          ))}
        </div>

        {/* Selected Case Study */}
        <motion.div
          key={selectedCase}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Image & Stats */}
            <div className="relative">
              <img
                src={currentCase.image}
                alt={currentCase.title}
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Project Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Clock className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="font-bold text-gray-900">{currentCase.duration}</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="text-sm text-gray-600">Team Size</div>
                    <div className="font-bold text-gray-900">{currentCase.team}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="p-8 lg:p-12">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full">
                    {currentCase.industry}
                  </span>
                  <span className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 text-sm rounded-full">
                    {currentCase.budget}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {currentCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Client: <span className="font-semibold">{currentCase.client}</span>
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    The Challenge
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {currentCase.challenge}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Our Solution
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {currentCase.solution}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-primary-600 mr-2" />
                  Results & Impact
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentCase.results.map((result, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {currentCase.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-2xl p-6">
                <div className="flex items-center mb-3">
                  {[...Array(currentCase.testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
                  "{currentCase.testimonial.text}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {currentCase.testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {currentCase.testimonial.position}
                    </div>
                  </div>
                  <motion.button
                    className="btn-gradient"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Create Your Success Story?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Let's discuss your project and show you how we can deliver similar results for your business
              </p>
              <motion.button
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
