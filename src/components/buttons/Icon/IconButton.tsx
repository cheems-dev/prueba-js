import React from 'react';
import buttonStyle from "./IconButton.module.scss";

interface IconButtonProps {
  imageSrc: string;
}

const IconButton: React.FC<IconButtonProps> = ({ imageSrc }) => {
  return (
    <button className={buttonStyle.buttonContainer}>
      <img src={imageSrc} alt="icon"/>
    </button>
  );
};

export default IconButton;
