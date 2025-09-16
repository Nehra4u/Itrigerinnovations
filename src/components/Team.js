import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail, Users, Award, Heart, Zap } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Visionary leader with 15+ years in software development and digital transformation.',
      expertise: ['Strategic Planning', 'Business Development', 'Technology Innovation'],
      social: {
        linkedin: 'https://in.linkedin.com/company/itriger-innovations-private-limited',
        twitter: 'https://x.com/itriger70252?t=-SCfnQck6ZlSAVR_He8cJw&s=09',
        email: 'rajesh@itrigerinnovations.com'
      }
    },
    {
      name: 'Priya Sharma',
      position: 'CTO & Lead Architect',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Expert in scalable architecture, cloud solutions, and emerging technologies.',
      expertise: ['System Architecture', 'Cloud Computing', 'DevOps'],
      social: {
        linkedin: 'https://in.linkedin.com/company/itriger-innovations-private-limited',
        github: 'https://github.com/itrigerinnovationspvtltd',
        email: 'priya@itrigerinnovations.com'
      }
    },
    {
      name: 'Amit Patel',
      position: 'Head of Development',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Full-stack development expert specializing in React, Node.js, and mobile apps.',
      expertise: ['Full-Stack Development', 'Mobile Apps', 'API Design'],
      social: {
        linkedin: 'https://in.linkedin.com/company/itriger-innovations-private-limited',
        github: 'https://github.com/itrigerinnovationspvtltd',
        email: 'amit@itrigerinnovations.com'
      }
    },
    {
      name: 'Neha Singh',
      position: 'UI/UX Design Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Creative designer focused on user experience and modern interface design.',
      expertise: ['User Experience', 'Interface Design', 'Design Systems'],
      social: {
        linkedin: 'https://in.linkedin.com/company/itriger-innovations-private-limited',
        twitter: 'https://x.com/itriger70252?t=-SCfnQck6ZlSAVR_He8cJw&s=09',
        email: 'neha@itrigerinnovations.com'
      }
    }
  ];

  const companyValues = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'We\'re driven by the desire to create exceptional digital experiences that exceed expectations.'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Our team works together seamlessly, combining diverse skills to deliver innovative solutions.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions for our clients.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous testing to ensure the highest standards of quality.'
    }
  ];

  return (
    <section id="team" className="section-padding bg-white dark:bg-gray-900">
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
            <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">Our Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet the <span className="gradient-text">Innovators</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our talented team of developers, designers, and strategists work together to bring your digital vision to life
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Member Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-primary-500/20 group-hover:ring-primary-500/40 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/80 to-secondary-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-white hover:text-primary-200 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-white hover:text-primary-200 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-white hover:text-primary-200 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    <a href={`mailto:${member.social.email}`} className="text-white hover:text-primary-200 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                {member.position}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>

              {/* Expertise */}
              <div className="flex flex-wrap justify-center gap-2">
                {member.expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Our <span className="gradient-text">Values</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology and innovation. 
              Explore our current opportunities and become part of our success story.
            </p>
            <motion.button
              className="btn-gradient"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
