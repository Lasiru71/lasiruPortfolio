import React from 'react';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', type = 'button', href, ...props }) => {
  const className = `custom-btn btn-${variant}`;

  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
