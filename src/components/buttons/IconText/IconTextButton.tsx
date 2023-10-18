import React from 'react';

interface IconTextButtonProps {
  imageSrc: string;
  buttonText?: string;
}

const IconTextButton: React.FC<IconTextButtonProps> = ({ imageSrc, buttonText }) => {
  return (
    <button className="custom-button">
      <img src={imageSrc} alt="icon" className="button-icon" />
      {buttonText && <span className="button-text">{buttonText}</span>}
    </button>
  );
};

export default IconTextButton;
