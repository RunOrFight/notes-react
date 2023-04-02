import React, { InputHTMLAttributes, forwardRef } from 'react';
import { IconType } from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: IconType;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ leftIcon, ...props }, ref) => {
  return (
    <div className="input rounded">
      {leftIcon && leftIcon({ fontSize: '18px' })}
      <input ref={ref} className="input__control" {...props} />
    </div>
  );
});

export default Input;
