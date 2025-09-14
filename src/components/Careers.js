import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Award, 
  Globe, 
  Clock, 
  DollarSign,
  ArrowRight,
  CheckCircle,
  MapPin,
  Calendar,
  ExternalLink,
  Play,
  BookOpen,
  Coffee
} from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Positions', count: 8 },
    { id: 'engineering', name: 'Engineering', count: 4 },
    { id: 'design', name: 'Design', count: 2 },
    { id: 'marketing', name: 'Marketing', count: 1 },
    { id: 'sales', name: 'Sales', count: 1 }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      department: 'engineering',
      type: 'Full-time',
      location: 'Remote / Jaipur, India',
      experience: '3-5 years',
      salary: '₹8,00,000 - ₹15,00,000',
      description: 'We\'re looking for an experienced Full-Stack Developer to join our core development team and help build scalable web applications.',
      requirements: [
          'Strong experience with React, Node.js, and TypeScript',
          'Experience with cloud platforms (AWS/Azure)',
          'Knowledge of microservices architecture',
          'Experience with CI/CD pipelines',
          'Strong problem-solving skills'
      ],
      benefits: [
          'Competitive salary with equity options',
          'Flexible working hours',
          'Professional development budget',
          'Health insurance coverage',
          'Annual team retreats'
      ],
      urgent: true
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'design',
      type: 'Full-time',
      location: 'Hybrid / Delhi, India',
      experience: '2-4 years',
      salary: '₹6,00,000 - ₹12,00,000',
      description: 'Join our design team to create beautiful, intuitive user experiences that delight our clients and users.',
      requirements: [
          'Proficiency in Figma, Adobe Creative Suite',
          'Experience with design systems',
          'Understanding of user research methods',
          'Portfolio showcasing web/mobile designs',
          'Collaboration with development teams'
      ],
      benefits: [
          'Creative freedom and ownership',
          'Latest design tools and resources',
          'Design conference attendance',
          'Mentorship opportunities',
          'Work-life balance'
      ],
      urgent: false
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'engineering',
      type: 'Full-time',
      location: 'Remote / Anywhere',
      experience: '2-4 years',
      salary: '₹7,00,000 - ₹14,00,000',
      description: 'Help us build and maintain robust, scalable infrastructure that supports our growing client base.',
      requirements: [
          'Experience with Docker, Kubernetes',
          'Knowledge of AWS/Azure services',
          'Experience with CI/CD tools',
          'Monitoring and logging expertise',
          'Security best practices'
      ],
      benefits: [
          'Remote-first culture',
          'Latest cloud certifications',
          'Infrastructure ownership',
          'Performance bonuses',
          'Learning and development'
      ],
      urgent: false
    },
    {
      id: 4,
      title: 'React Native Developer',
      department: 'engineering',
      type: 'Full-time',
      location: 'Remote / Mumbai, India',
      experience: '1-3 years',
      salary: '₹5,00,000 - ₹10,00,000',
      description: 'Build cross-platform mobile applications that work seamlessly on both iOS and Android platforms.',
      requirements: [
          'Strong React Native experience',
          'Knowledge of mobile app development',
          'Understanding of mobile UI/UX',
          'Experience with state management',
          'Testing and debugging skills'
      ],
      benefits: [
          'Mobile development focus',
          'App store publishing experience',
          'Performance optimization skills',
          'Regular skill assessments',
          'Career growth path'
      ],
      urgent: false
    },
    {
      id: 5,
      title: 'Digital Marketing Specialist',
      department: 'marketing',
      type: 'Full-time',
      location: 'Hybrid / Bangalore, India',
      experience: '2-3 years',
      salary: '₹4,00,000 - ₹8,00,000',
      description: 'Drive our digital presence and help acquire new clients through strategic marketing campaigns.',
      requirements: [
          'Experience with Google Ads, Facebook Ads',
          'SEO and content marketing knowledge',
          'Analytics and reporting skills',
          'Creative campaign development',
          'B2B marketing experience'
      ],
      benefits: [
          'Marketing budget ownership',
          'Performance-based bonuses',
          'Industry conference attendance',
          'Creative campaign freedom',
          'Data-driven decision making'
      ],
      urgent: false
    }
  ];

  const companyCulture = [
    {
      icon: Heart,
      title: 'People First',
      description: 'We believe our team is our greatest asset. We invest in their growth, well-being, and success.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Innovation Driven',
      description: 'We encourage creative thinking, experimentation, and pushing the boundaries of what\'s possible.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Great ideas come from teamwork. We foster an environment where everyone\'s voice is heard.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to client satisfaction.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Above-market compensation with regular reviews and performance bonuses'
    },
    {
      icon: Globe,
      title: 'Remote Work',
      description: 'Flexible remote work options with hybrid arrangements available'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Work when you\'re most productive with flexible scheduling'
    },
    {
      icon: BookOpen,
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and professional development'
    },
    {
      icon: Heart,
      title: 'Health Coverage',
      description: 'Comprehensive health insurance for you and your family'
    },
    {
      icon: Coffee,
      title: 'Team Events',
      description: 'Regular team building activities and annual retreats'
    }
  ];

  const filteredPositions = selectedDepartment === 'all' 
    ? openPositions 
    : openPositions.filter(position => position.department === selectedDepartment);

  return (
    <section id="careers" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
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
            <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">Join Our Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Build Your <span className="gradient-text">Future</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our dynamic team of innovators and help shape the future of technology. We\'re looking for passionate individuals 
            who want to make a difference.
          </p>
        </motion.div>

        {/* Company Culture */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our <span className="gradient-text">Culture</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We\'ve built a culture that values innovation, collaboration, and personal growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyCulture.map((culture, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${culture.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <culture.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {culture.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {culture.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why <span className="gradient-text">Join Us</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive benefits and opportunities that support your professional and personal growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">
                  {benefit.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Open <span className="gradient-text">Positions</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our current opportunities and find the perfect role for your skills and career goals
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'
                }`}
              >
                {dept.name}
                <span className="ml-2 px-2 py-1 bg-white/20 text-xs rounded-full">
                  {dept.count}
                </span>
              </button>
            ))}
          </div>

          {/* Positions Grid */}
          <div className="space-y-6">
            {filteredPositions.map((position, index) => (
              <motion.div
                key={position.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Position Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {position.title}
                          {position.urgent && (
                            <span className="ml-3 px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                              Urgent
                            </span>
                          )}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                          {position.description}
                        </p>
                      </div>
                    </div>

                    {/* Position Meta */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{position.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{position.salary}</span>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Requirements:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {position.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="lg:w-48 flex flex-col space-y-3">
                    <motion.button
                      className="btn-gradient w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                    <motion.button
                      className="btn-outline w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Details
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Process */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Application <span className="gradient-text">Process</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our simple and transparent application process ensures a smooth experience for all candidates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Apply', description: 'Submit your application with resume and portfolio' },
              { step: 2, title: 'Review', description: 'Our team reviews your application within 48 hours' },
              { step: 3, title: 'Interview', description: 'Technical and cultural fit discussions' },
              { step: 4, title: 'Offer', description: 'Receive your offer and join our team' }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* General Application CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Don't See the Right Role?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We\'re always looking for talented individuals. Send us your resume and we\'ll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Submit General Application</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Download Company Brochure</span>
                  <BookOpen className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
