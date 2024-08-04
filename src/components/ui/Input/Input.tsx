import React, { useState } from 'react';
import './style.scss';
import { FaEye, FaEyeSlash } from "react-icons/fa6";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  register?: any;
  validationRules?: any;
}

const Input: React.FC<IInputProps> = ({ icon, register,validationRules = {}, name, type, ...rest }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  const inputType = type === "password" && !isVisible ? "password" : "text";

  return (
    <div className="form-input">
      <input type={inputType} {...rest} name={name} {...register(name, validationRules)} />
      {type === "password" ? (
        <span className="icon-box" onClick={toggleVisibility}>
          {isVisible ? <FaEyeSlash /> : <FaEye />}
        </span>
      ) : (
        <span className="icon-box">{icon}</span>
      )}
    </div>
  );
};

export default Input;
