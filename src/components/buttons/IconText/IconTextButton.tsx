import React from 'react';
import buttonStyle from "./IconTextButton.module.scss";

interface IconTextButtonProps {
  imageSrc: string;
  buttonText: string;
}

const IconTextButton: React.FC<IconTextButtonProps> = ({ imageSrc, buttonText }) => {
  return (
    <button className={buttonStyle.buttonContainer}>
      <img src={imageSrc} alt="icon"/>
      <span>{buttonText}</span>
    </button>
  );
};

export default IconTextButton;
