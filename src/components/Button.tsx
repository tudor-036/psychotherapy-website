import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

/**
 * Button component for CTAs
 * 
 * @param variant - 'primary' (blue) or 'secondary' (pink)
 * @param className - additional classes
 * @param onClick - click handler
 */
const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}) => {
  const baseClasses = "font-semibold rounded-lg shadow-lg transition-all duration-300";
  const variantClasses = variant === 'primary' 
    ? "bg-[#4A6073] hover:bg-[#3A5063] text-white px-8 py-4" 
    : "bg-[#C98F8F] hover:bg-[#B97A7A] text-white px-8 py-4";
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;