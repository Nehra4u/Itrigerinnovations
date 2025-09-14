import React from 'react';
import { motion } from 'framer-motion';
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Itriger</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We are a tech-cocktail entity delivering fast-track IT solutions powered with a perfect balance 
                of technology modernization, software designing-development, and business consultancy.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale:0.9 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Our Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Website Development</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Mobile Apps Development</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Software Development</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Open Source Development</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">E-Commerce Solutions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Graphic Design Solutions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">AI & Machine Learning</a></li>
              </ul>
            </motion.div>

            {/* Industries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Industries</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Healthcare</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Education</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Finance</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Retail</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Manufacturing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Logistics</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Media & Entertainment</a></li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">info@itrigerinnovations.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="text-gray-300">India: +91 9251916024</p>
                    <p className="text-gray-300">USA: +1 808 818 6055</p>
                    <p className="text-gray-300">UK: +44 7521 454240</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="text-gray-300">Jaipur, Rajasthan, India</p>
                    <p className="text-gray-300">Delhi, India</p>
                    <p className="text-gray-300">USA & UK Offices</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-400">
                © {currentYear} Itriger Innovations Private Limited. All Rights Reserved.
              </p>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">Made with ❤️ in India</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                Refund Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                FAQ
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
