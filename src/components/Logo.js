import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Logo = ({ className = '', size = 'default' }) => {
  const { isDark } = useTheme();
  
  const sizeClasses = {
    small: 'h-5 md:h-6',
    default: 'h-6 md:h-8',
    large: 'h-8 md:h-10',
    xl: 'h-10 md:h-12'
  };

  return (
    <motion.div
      className={`flex items-center space-x-1 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img 
        src="/logo.svg" 
        alt="Itriger Innovations" 
        className={`${sizeClasses[size]} w-auto`}
      />
      {/* <span className={`font-bold text-lg md:text-xl hidden sm:block drop-shadow-lg bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent`}>
        Itriger
      </span>
      <span className={`font-bold text-base md:text-lg hidden lg:block drop-shadow-md bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent`}>
        Innovations
      </span> */}
    </motion.div>
  );
};

export default Logo;
