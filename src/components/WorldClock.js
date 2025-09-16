import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const AnalogClock = ({ timezone, size = 120 }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeInZone = new Date(now.toLocaleString("en-US", { timeZone: timezone }));
      setTime(timeInZone);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourAngle = (hours * 30) + (minutes * 0.5);
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="absolute inset-0">
        {/* Clock face */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 4}
          fill="white"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-300 dark:text-gray-600"
        />
        
        {/* Hour markers */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) * (Math.PI / 180);
          const x1 = size / 2 + (size / 2 - 15) * Math.sin(angle);
          const y1 = size / 2 - (size / 2 - 15) * Math.cos(angle);
          const x2 = size / 2 + (size / 2 - 8) * Math.sin(angle);
          const y2 = size / 2 - (size / 2 - 8) * Math.cos(angle);
          
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-600 dark:text-gray-400"
            />
          );
        })}

        {/* Hour hand */}
        <line
          x1={size / 2}
          y1={size / 2}
          x2={size / 2 + (size / 4) * Math.sin(hourAngle * Math.PI / 180)}
          y2={size / 2 - (size / 4) * Math.cos(hourAngle * Math.PI / 180)}
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-gray-800 dark:text-gray-200"
        />

        {/* Minute hand */}
        <line
          x1={size / 2}
          y1={size / 2}
          x2={size / 2 + (size / 2.5) * Math.sin(minuteAngle * Math.PI / 180)}
          y2={size / 2 - (size / 2.5) * Math.cos(minuteAngle * Math.PI / 180)}
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-gray-700 dark:text-gray-300"
        />

        {/* Second hand */}
        <line
          x1={size / 2}
          y1={size / 2}
          x2={size / 2 + (size / 2.2) * Math.sin(secondAngle * Math.PI / 180)}
          y2={size / 2 - (size / 2.2) * Math.cos(secondAngle * Math.PI / 180)}
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          className="text-red-500"
        />

        {/* Center dot */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r="4"
          fill="currentColor"
          className="text-gray-800 dark:text-gray-200"
        />
      </svg>
    </div>
  );
};

const WorldClock = () => {
  const [dates, setDates] = useState({});

  const timeZones = [
    {
      name: 'India',
      timezone: 'Asia/Kolkata',
      flag: '🇮🇳'
    },
    {
      name: 'USA',
      timezone: 'America/New_York',
      flag: '🇺🇸'
    },
    {
      name: 'UK',
      timezone: 'Europe/London',
      flag: '🇬🇧'
    },
    {
      name: 'Australia',
      timezone: 'Australia/Sydney',
      flag: '🇦🇺'
    }
  ];

  useEffect(() => {
    const updateDates = () => {
      const newDates = {};
      timeZones.forEach(zone => {
        const now = new Date();
        const dateString = now.toLocaleDateString('en-US', {
          timeZone: zone.timezone,
          weekday: 'short',
          month: 'short',
          day: 'numeric'
        });
        newDates[zone.name] = dateString;
      });
      setDates(newDates);
    };

    updateDates();
    const interval = setInterval(updateDates, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">Global Presence</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            We're Available <span className="gradient-text">Worldwide</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our global team works around the clock to serve clients across different time zones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeZones.map((zone, index) => (
            <motion.div
              key={zone.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              {/* Country Header */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{zone.flag}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {zone.name}
                </h3>
              </div>

              {/* Analog Clock */}
              <div className="flex justify-center mb-4">
                <AnalogClock timezone={zone.timezone} size={120} />
              </div>

              {/* Date Display */}
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {dates[zone.name] || 'Loading...'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Support? We're Here 24/7</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              No matter what time zone you're in, our global team is ready to assist you with your project needs.
            </p>
            <motion.button
              className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorldClock;
