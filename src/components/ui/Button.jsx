import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-4 py-2 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 shadow-sm',
    outline: 'border border-gray-200 text-gray-700 hover:bg-gray-50',
    ghost: 'text-gray-600 hover:bg-gray-100',
    icon: 'p-2 rounded-full hover:bg-gray-100 text-gray-600',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
