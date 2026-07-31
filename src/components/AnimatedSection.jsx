import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  stagger = false,
}) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
        ...(stagger && {
          staggerChildren: 0.1,
          delayChildren: delay,
        }),
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function AnimatedItem({ children, className = '' }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
