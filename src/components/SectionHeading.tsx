import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Section heading component with consistent styling
 */
const SectionHeading: React.FC<SectionHeadingProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`font-serif text-3xl md:text-4xl font-bold text-center text-[#4A6073] mb-12 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionHeading;