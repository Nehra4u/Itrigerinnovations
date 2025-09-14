import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, Users, Star, ArrowRight, CheckCircle, Code, Brain, Zap, Globe } from 'lucide-react';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior React Developer',
      department: 'Frontend Development',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$80k - $120k',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      description: 'Join our frontend team to build cutting-edge web applications using modern React ecosystem.',
      urgent: true
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      department: 'Artificial Intelligence',
      location: 'San Francisco / Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90k - $140k',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision'],
      description: 'Develop and deploy machine learning models for our AI-powered solutions.',
      urgent: false
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Austin / Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$85k - $125k',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      description: 'Build and maintain scalable cloud infrastructure and deployment pipelines.',
      urgent: false
    },
    {
      id: 4,
      title: 'Product Manager',
      department: 'Product',
      location: 'Boston / Remote',
      type: 'Full-time',
      experience: '6+ years',
      salary: '$100k - $150k',
      skills: ['Product Strategy', 'Agile', 'Analytics', 'User Research'],
      description: 'Lead product development and strategy for our enterprise software solutions.',
      urgent: false
    },
    {
      id: 5,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Los Angeles / Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$70k - $100k',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      description: 'Create beautiful and intuitive user experiences for our software products.',
      urgent: true
    },
    {
      id: 6,
      title: 'Full Stack Developer',
      department: 'Development',
      location: 'Chicago / Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$75k - $115k',
      skills: ['Node.js', 'React', 'MongoDB', 'Express'],
      description: 'Work on both frontend and backend development for our web applications.',
      urgent: false
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Market-leading compensation packages with performance bonuses'
    },
    {
      icon: Globe,
      title: 'Remote Work',
      description: 'Flexible work arrangements with option to work from anywhere'
    },
    {
      icon: Brain,
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities and professional development'
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Collaborative environment with talented and supportive colleagues'
    },
    {
      icon: Zap,
      title: 'Latest Tech',
      description: 'Work with cutting-edge technologies and modern development tools'
    },
    {
      icon: Star,
      title: 'Work-Life Balance',
      description: 'Flexible hours, unlimited PTO, and wellness programs'
    }
  ];

  const companyStats = [
    { value: '200+', label: 'Team Members', description: 'Talented professionals' },
    { value: '50+', label: 'Countries', description: 'Global presence' },
    { value: '500+', label: 'Projects', description: 'Successful deliveries' },
    { value: '4.8/5', label: 'Employee Rating', description: 'Glassdoor score' }
  ];

  const departments = [
    { name: 'Engineering', count: 12, color: 'from-blue-500 to-cyan-500' },
    { name: 'Design', count: 3, color: 'from-purple-500 to-pink-500' },
    { name: 'Product', count: 2, color: 'from-green-500 to-emerald-500' },
    { name: 'DevOps', count: 4, color: 'from-orange-500 to-red-500' },
    { name: 'AI/ML', count: 5, color: 'from-indigo-500 to-purple-500' },
    { name: 'QA', count: 3, color: 'from-teal-500 to-cyan-500' }
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
                <Briefcase className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Team</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore current openings and apply to be a part of IndiaNIC. Build the future of technology with passionate innovators.
            </p>
          </motion.div>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.description}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
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
              Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Positions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find your perfect role and join our team of innovative professionals building next-generation software solutions.
            </p>
          </motion.div>

          {/* Department Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {departments.map((dept, index) => (
              <div
                key={dept.name}
                className={`px-4 py-2 bg-gradient-to-r ${dept.color} text-white rounded-full text-sm font-semibold flex items-center gap-2`}
              >
                {dept.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {dept.count}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group relative"
              >
                {job.urgent && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Urgent
                  </div>
                )}
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {job.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    {job.department}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4" />
                    {job.type} • {job.experience}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <DollarSign className="w-4 h-4" />
                    {job.salary}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">With Us</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive benefits and a supportive environment to help you grow your career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
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
              Application <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Process</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our streamlined hiring process ensures a smooth experience for all candidates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply Online', description: 'Submit your application through our portal' },
              { step: '02', title: 'Initial Review', description: 'Our team reviews your application and resume' },
              { step: '03', title: 'Interview', description: 'Technical and cultural fit interviews' },
              { step: '04', title: 'Welcome!', description: 'Join our team and start your journey' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Don't see a perfect match? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow"
              >
                View All Positions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
              >
                Send Resume
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
