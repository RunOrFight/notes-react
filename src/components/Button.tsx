import React, { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline';
}

const Button: FC<ButtonProps> = ({ children, variant = '', ...props }) => {
  return (
    <button className={`button rounded text-md ${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
