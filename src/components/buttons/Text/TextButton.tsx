import React from 'react';
import buttonStyle from "./TextButton.module.scss";

interface TextButtonProps {
  buttonText: string;
}

const TextButton: React.FC<TextButtonProps> = ({ buttonText }) => {
  return (
    <button className={buttonStyle.buttonContainer}>
      <span>{buttonText}</span>
    </button>
  );
};

export default TextButton;
