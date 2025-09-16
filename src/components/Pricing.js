import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Users, ArrowRight, Calculator } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: { monthly: 2999, yearly: 29999 },
      originalPrice: { monthly: 3999, yearly: 39999 },
      features: [
        'Custom Website Development',
        'Responsive Design',
        'Basic SEO Optimization',
        'Contact Form Integration',
        'Social Media Integration',
        'Basic Analytics Setup',
        '1 Month Support',
        '2 Revisions'
      ],
      popular: false,
      icon: Zap,
      color: 'from-primary-500 to-primary-600'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and e-commerce',
      price: { monthly: 7999, yearly: 79999 },
      originalPrice: { monthly: 9999, yearly: 99999 },
      features: [
        'Everything in Starter',
        'E-commerce Integration',
        'Advanced SEO Optimization',
        'Content Management System',
        'Payment Gateway Integration',
        'Advanced Analytics',
        '3 Months Support',
        '5 Revisions',
        'Performance Optimization',
        'Security Implementation'
      ],
      popular: true,
      icon: Star,
      color: 'from-primary-500 to-secondary-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large-scale applications and complex systems',
      price: { monthly: 19999, yearly: 199999 },
      originalPrice: { monthly: 24999, yearly: 249999 },
      features: [
        'Everything in Professional',
        'Custom Application Development',
        'API Development & Integration',
        'Advanced Security Features',
        'Scalability Planning',
        'Performance Monitoring',
        '6 Months Support',
        'Unlimited Revisions',
        'Priority Support',
        'Dedicated Project Manager',
        'Training & Documentation',
        'Post-Launch Maintenance'
      ],
      popular: false,
      icon: Users,
      color: 'from-secondary-500 to-secondary-600'
    }
  ];

  const customServices = [
    {
      name: 'Mobile App Development',
      price: '₹50,000 - ₹5,00,000',
      description: 'Native and cross-platform mobile applications',
      features: ['iOS & Android', 'React Native', 'Flutter', 'Custom UI/UX']
    },
    {
      name: 'AI & Machine Learning',
      price: '₹1,00,000 - ₹10,00,000',
      description: 'Intelligent solutions and automation',
      features: ['Predictive Analytics', 'Computer Vision', 'NLP', 'Custom AI Models']
    },
    {
      name: 'Enterprise Software',
      price: '₹5,00,000 - ₹50,00,000',
      description: 'Large-scale business applications',
      features: ['Custom ERP Systems', 'CRM Solutions', 'Workflow Automation', 'Integration Services']
    }
  ];


  return (
    <section id="pricing" className="section-padding bg-white dark:bg-gray-900">
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
            <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">Pricing Plans</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our commitment to quality and ongoing support.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 flex items-center">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-2 px-2 py-1 bg-primary-500 text-white text-xs rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-2xl scale-105'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-primary-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  plan.popular ? 'bg-white/20' : 'bg-primary-500/10'
                }`}>
                  <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-primary-600'}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-3xl font-bold">₹</span>
                  <span className="text-5xl font-bold">
                    {plan.price[billingCycle].toLocaleString()}
                  </span>
                  {billingCycle === 'monthly' && <span className="text-xl ml-2">/mo</span>}
                  {billingCycle === 'yearly' && <span className="text-xl ml-2">/year</span>}
                </div>
                {plan.originalPrice[billingCycle] > plan.price[billingCycle] && (
                  <p className={`text-sm ${plan.popular ? 'text-white/70' : 'text-gray-500'} line-through`}>
                    ₹{plan.originalPrice[billingCycle].toLocaleString()}
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-white' : 'text-green-500'
                    }`} />
                    <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-primary-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPlan(plan.id)}
              >
                Choose {plan.name}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Custom Services */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Custom <span className="gradient-text">Solutions</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Need something specific? We offer custom development services tailored to your unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                  {service.price}
                </div>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
                <motion.button
                  className="w-full btn-outline"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Custom Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Calculator */}
        <motion.div
          className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Quote?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Use our project calculator to get an estimated cost for your specific requirements. 
              Get instant pricing based on your project scope and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Type
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <option>Web Application</option>
                <option>Mobile App</option>
                <option>E-commerce Platform</option>
                <option>Custom Software</option>
                <option>AI/ML Solution</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Timeline
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <option>1-2 months</option>
                <option>3-4 months</option>
                <option>5-6 months</option>
                <option>6+ months</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Team Size
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                <option>1-2 developers</option>
                <option>3-5 developers</option>
                <option>6-10 developers</option>
                <option>10+ developers</option>
              </select>
            </div>
          </div>

          <div className="text-center">
            <motion.button
              className="btn-gradient text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Calculate Project Cost
              <Calculator className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Pricing <span className="gradient-text">FAQ</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  What's included in the support period?
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Support includes bug fixes, minor updates, and technical assistance. Major feature additions may require additional development time.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Can I upgrade my plan later?
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes! You can upgrade your plan at any time. We'll prorate the difference and ensure a smooth transition.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Do you offer maintenance packages?
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we offer ongoing maintenance packages for security updates, performance optimization, and content updates.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  What about hosting and domain costs?
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Hosting and domain costs are not included in our development packages. We can recommend reliable providers and help with setup.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
