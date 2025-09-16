import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Monitor, Smartphone, Settings, Brain, TrendingUp, Zap, Globe, CheckCircle, Building2, ShoppingCart, Workflow, BarChart3, Users, Phone, Briefcase, Target, Heart, GraduationCap, Gamepad2, Store, Factory, HardHat, Truck, ShirtIcon, Tv, ThumbsUp, Plane, Sparkles, DollarSign, Shield, Scale, Network, List } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServicesModal, setShowServicesModal] = useState(false);
  const [showFocusModal, setShowFocusModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showIndustryModal, setShowIndustryModal] = useState(false);
  const [prevScrolled, setPrevScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setPrevScrolled(scrolled);
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { 
      name: 'About', 
      href: '#about',
      hasModal: true,
      modalType: 'about'
    },
    { 
      name: 'Focus', 
      href: '#focus',
      hasModal: true,
      modalType: 'focus'
    },
    { 
      name: 'Services', 
      href: '#services',
      hasModal: true,
      modalType: 'services'
    },
    { 
      name: 'Industry', 
      href: '#industry',
      hasModal: true,
      modalType: 'industry'
    },
  ];

  const servicesData = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Sculpting modern, dynamic web applications for the connected world',
      href: '/services/web-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Designing high-performing mobile apps for a connected future',
      href: '/services/mobile-apps'
    },
    {
      icon: Brain,
      title: 'AI / ML',
      description: 'Leveraging AI & ML to Deliver innovative solutions',
      href: '/services/ai-ml'
    },
    {
      icon: Settings,
      title: 'UI/UX Consultancy',
      description: 'Enhancing experience with intuitive and user-centric design services',
      href: '#ui-ux'
    },
    {
      icon: Zap,
      title: 'DevOps',
      description: 'Streamlined Processes and Collaboration for code lifecycle',
      href: '/services/devops'
    },
    {
      icon: CheckCircle,
      title: 'QA',
      description: 'Delivering excellence with robust automated and manual QA',
      href: '/services/qa'
    },
    {
      icon: Globe,
      title: 'IoT',
      description: 'Leveraging the device ecosystems to build a connected world',
      href: '#iot'
    },
    {
      icon: TrendingUp,
      title: 'Marketing',
      description: 'Crafting result-driven strategies to propel your business forward',
      href: '/services/marketing'
    }
  ];

  const focusData = [
    {
      icon: Building2,
      title: 'Enterprise Applications',
      description: 'Empowering organizations with robust and scalable enterprise applications tailored to the needs',
      href: '/focus/enterprise-applications'
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Harnessing the power of artificial intelligence to drive innovation and boost efficiency',
      href: '/focus/artificial-intelligence'
    },
    {
      icon: ShoppingCart,
      title: 'Digital Commerce',
      description: 'Creating high-performance and engaging digital commerce solutions to maximize the business',
      href: '/focus/digital-commerce'
    },
    {
      icon: Settings,
      title: 'Technology Integration',
      description: 'Seamlessly integrating technologies to build cohesive and efficient IT infrastructures',
      href: '/focus/technology-integration'
    },
    {
      icon: Workflow,
      title: 'Business Automation',
      description: 'Streamlining operations and boosting productivity with custom business automation solutions',
      href: '/focus/business-automation'
    },
    {
      icon: BarChart3,
      title: 'BI & Analytics',
      description: 'Turning data into actionable insights with our advanced BI and analytics development service',
      href: '/focus/bi-analytics'
    }
  ];

  const aboutData = [
    {
      icon: Users,
      title: 'Team',
      description: 'Ready to go an extra mile to deliver great software solutions.',
      href: '/about/team'
    },
    {
      icon: Target,
      title: 'How We Work',
      description: 'Get to know how can you work with us.',
      href: '/about/how-we-work'
    },
    {
      icon: Phone,
      title: 'Contact',
      description: 'To discuss your idea and consult with our technology experts.',
      href: '/contact'
    },
    {
      icon: Briefcase,
      title: 'Careers',
      description: 'Explore current openings and apply to be a part of IndiaNIC.',
      href: '/about/careers'
    }
  ];

  const industryData = [
    {
      icon: Heart,
      title: 'Healthcare',
      href: '/industry/healthcare'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      href: '/industry/education'
    },
    {
      icon: Gamepad2,
      title: 'Sports',
      href: '/industry/sports'
    },
    {
      icon: Store,
      title: 'Marketplace',
      href: '/industry/marketplace'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      href: '/industry/manufacturing'
    },
    {
      icon: HardHat,
      title: 'Construction',
      href: '/industry/construction'
    },
    {
      icon: Truck,
      title: 'Logistics',
      href: '/industry/logistics'
    },
    {
      icon: ShirtIcon,
      title: 'Retail',
      href: '/industry/retail'
    },
    {
      icon: Tv,
      title: 'Media & OTT',
      href: '/industry/media-ott'
    },
    {
      icon: ThumbsUp,
      title: 'Social Media',
      href: '/industry/social-media'
    },
    {
      icon: Plane,
      title: 'Travel',
      href: '/industry/travel'
    },
    {
      icon: Sparkles,
      title: 'Beauty & Lifestyle',
      href: '/industry/beauty-lifestyle'
    },
    {
      icon: DollarSign,
      title: 'Finance',
      href: '/industry/finance'
    },
    {
      icon: Shield,
      title: 'Insurance',
      href: '/industry/insurance'
    },
    {
      icon: Scale,
      title: 'Legal',
      href: '/industry/legal'
    },
    {
      icon: Network,
      title: 'IT & Telecom',
      href: '/industry/it-telecom'
    },
    {
      icon: List,
      title: 'On Demand',
      href: '/industry/on-demand'
    }
  ];

  const handleNavigation = (href) => {
    if (href.startsWith('/')) {
      // Navigate to a different page
      navigate(href);
    } else {
      // Scroll to section on current page
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
    setShowServicesModal(false);
    setShowFocusModal(false);
    setShowAboutModal(false);
    setShowIndustryModal(false);
  };

  return (
         <motion.nav
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled? "max-w-7xl mx-auto bg-white dark:bg-gray-900 py-0 rounded-full mt-4": ""} `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
             <div className=" mx-auto px-4 sm:px-6 lg:px-8">
         <div className={`flex items-center ${scrolled? "h-16": "h-20"}`}>
                     {/* Logo */}
          <motion.div
           whileHover={{ scale: 1.05 }}
           key={`logo-${scrolled}`}
           initial={{ x: scrolled && !prevScrolled ? -200 : (!scrolled && prevScrolled ? 200 : 0), opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ 
             type: "spring", 
             stiffness: 300, 
             damping: 30,
             duration: 0.8
           }}
           className="flex items-center cursor-pointer flex-shrink-0"
           onClick={() => navigate('/')}
         >
           <Logo size="default" />
         </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-8 !ml-[136px]">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasModal ? (
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      if (item.modalType === 'services') {
                        setShowServicesModal(true);
                      } else if (item.modalType === 'focus') {
                        setShowFocusModal(true);
                      } else if (item.modalType === 'about') {
                        setShowAboutModal(true);
                      } else if (item.modalType === 'industry') {
                        setShowIndustryModal(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.modalType === 'services') {
                        setShowServicesModal(false);
                      } else if (item.modalType === 'focus') {
                        setShowFocusModal(false);
                      } else if (item.modalType === 'about') {
                        setShowAboutModal(false);
                      } else if (item.modalType === 'industry') {
                        setShowIndustryModal(false);
                      }
                    }}
                  >
                    <motion.button
                      onClick={() => handleNavigation(item.href)}
                      className="font-semibold transition-all duration-200 relative group py-2 flex items-center gap-1 text-black dark:text-white hover:text-primary-600 dark:hover:text-primary-400 drop-shadow-lg"
                      whileHover={{ y: -2 }}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full group-hover:bg-primary-300"></span>
                    </motion.button>
                    
                    {/* Services Modal */}
                    <AnimatePresence>
                      {showServicesModal && item.modalType === 'services' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                        >
                          <div className="p-8">
                            <div className="grid grid-cols-2 gap-1">
                              {servicesData.map((service, index) => {
                                const IconComponent = service.icon;
                                return (
                                  <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group cursor-pointer p-1 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                                    onClick={() => handleNavigation(service.href)}
                                  >
                                    <div className="flex items-start gap-4">
                                      <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                          <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                      </div>
                                      <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                          {service.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                          {service.description}
                                        </p>
                                      </div>
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Focus Modal */}
                    <AnimatePresence>
                      {showFocusModal && item.modalType === 'focus' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                        >
                          <div className="flex">
                            {/* Left Side - Team Building Section */}
                            <div className="w-1/3 bg-gradient-to-br from-primary-500 to-secondary-500 p-8 text-white">
                              <div className="mb-6">
                                <div className="flex -space-x-2 mb-4">
                                  <div className="w-12 h-12 bg-white/20 rounded-full border-2 border-white flex items-center justify-center">
                                    <span className="text-sm font-semibold">👨‍💻</span>
                                  </div>
                                  <div className="w-12 h-12 bg-white/20 rounded-full border-2 border-white flex items-center justify-center">
                                    <span className="text-sm font-semibold">👩‍💻</span>
                                  </div>
                                  <div className="w-12 h-12 bg-white/20 rounded-full border-2 border-white flex items-center justify-center">
                                    <span className="text-sm font-semibold">👨‍💼</span>
                                  </div>
                                  <div className="w-12 h-12 bg-white/20 rounded-full border-2 border-white flex items-center justify-center">
                                    <span className="text-sm font-semibold">👩‍💼</span>
                                  </div>
                                </div>
                              </div>
                              <h2 className="text-2xl font-bold mb-2">Build your</h2>
                              <h2 className="text-3xl font-bold mb-4">Agile Team</h2>
                              <p className="text-white/90 mb-6 text-sm leading-relaxed">
                                Create your own agile team by forming right set of resources skilled in specific streams.
                              </p>
                              <button className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                Contact Us
                              </button>
                            </div>
                            
                            {/* Right Side - Focus Areas */}
                            <div className="flex-1 p-8">
                              <div className="grid grid-cols-2 gap-1">
                                {focusData.map((focus, index) => {
                                  const IconComponent = focus.icon;
                                  return (
                                    <motion.div
                                      key={focus.title}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: index * 0.05 }}
                                      className="group cursor-pointer p-1 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                                      onClick={() => handleNavigation(focus.href)}
                                    >
                                      <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                            <IconComponent className="w-6 h-6 text-white" />
                                          </div>
                                        </div>
                                        <div className="flex-1">
                                          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                            {focus.title}
                                          </h3>
                                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {focus.description}
                                          </p>
                                        </div>
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* About Modal */}
                    <AnimatePresence>
                      {showAboutModal && item.modalType === 'about' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-2/3 transform -translate-x-1/2 mt-2 w-[600px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-2 gap-1">
                              {aboutData.map((about, index) => {
                                const IconComponent = about.icon;
                                return (
                                  <motion.div
                                    key={about.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group cursor-pointer p-1 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                                    onClick={() => handleNavigation(about.href)}
                                  >
                                    <div className="flex items-start gap-1">
                                      <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                          <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                      </div>
                                      <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                          {about.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                          {about.description}
                                        </p>
                                      </div>
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Industry Modal */}
                    <AnimatePresence>
                      {showIndustryModal && item.modalType === 'industry' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[700px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-2 gap-1">
                              {industryData.map((industry, index) => {
                                const IconComponent = industry.icon;
                                return (
                                  <motion.div
                                    key={industry.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.04 }}
                                    className="group cursor-pointer p-1 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                                    onClick={() => handleNavigation(industry.href)}
                                  >
                                    <div className="flex items-center gap-1">
                                      <div className="flex-shrink-0">
                                        <IconComponent className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" />
                                      </div>
                                      <div className="flex-1">
                                        <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors text-base">
                                          {industry.title}
                                        </h3>
                                      </div>
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.button
                    onClick={() => handleNavigation(item.href)}
                    className="font-semibold transition-all duration-200 relative group py-2 text-black dark:text-white hover:text-primary-600 dark:hover:text-primary-400 drop-shadow-lg"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full group-hover:bg-primary-300"></span>
                  </motion.button>
                )}
              </div>
            ))}
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            {!scrolled ? <ThemeToggle /> : null}
            <motion.div
              key={`contact-wrapper-${scrolled}`}
              initial={{ x: scrolled && !prevScrolled ? 200 : (!scrolled && prevScrolled ? -200 : 0), opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.8
              }}
            >
              <motion.button
                className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold px-8 py-2 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('/#contact')}
              >
                Contact Us
               {!scrolled ? <span className="text-lg">→</span> : null}
              </motion.button>
            </motion.div>
          </div>

                     {/* Mobile Header Right Side */}
           <div className="lg:hidden flex items-center space-x-2">
             {/* Theme Toggle for Mobile */}
             <ThemeToggle />
             {/* Mobile Menu Button */}
             <motion.button
               className="p-2 rounded-lg hover:bg-primary-500/10 dark:hover:bg-primary-500/20 transition-colors duration-200"
               onClick={() => setIsOpen(!isOpen)}
               whileTap={{ scale: 0.95 }}
             >
               {isOpen ? (
                 <X className="w-6 h-6 text-primary-600 dark:text-primary-400" />
               ) : (
                 <Menu className="w-6 h-6 text-primary-600 dark:text-primary-400" />
               )}
             </motion.button>
           </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-6 space-y-4 border-t border-primary-500/20 dark:border-primary-500/30 bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-md">
                                 {navItems.map((item) => (
                   <motion.button
                     key={item.name}
                     onClick={() => handleNavigation(item.href)}
                     className="block w-full text-left text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 font-semibold py-3 px-4 rounded-lg hover:bg-primary-500/10 dark:hover:bg-primary-500/20 transition-all duration-200 relative group"
                     whileHover={{ x: 10 }}
                   >
                     {item.name}
                     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
                   </motion.button>
                 ))}
                <motion.button
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation('/#contact')}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
