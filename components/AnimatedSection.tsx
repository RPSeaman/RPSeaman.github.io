import React from 'react';
import { motion, useTransform, useSpring, useMotionValue } from 'framer-motion';

export const AnimatedSection: React.FC<{ id?: string; className?: string; layout?: boolean; children: React.ReactNode }> = ({ id, className = '', layout, children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse 3D tilt spring rotation transformations
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { damping: 25, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { damping: 25, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.section
      id={id}
      layout={layout}
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        type: "spring",
        stiffness: 55,
        damping: 14,
        mass: 1
      }}
      className={`glass-panel overflow-hidden transition-colors duration-300 hover:border-accent-teal/20 ${className}`}
    >
      {/* Tilting inner content wrapper - keeps the outer backdrop-filter flat so glass blur never drops! */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.008 }}
        className="w-full h-full p-8 md:p-12 transition-transform duration-300 ease-out"
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

