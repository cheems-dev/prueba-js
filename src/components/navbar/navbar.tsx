import React from 'react';
import IconTextButton from '../buttons/IconText/IconTextButton';

import backIcon from '../../assets/images/icon_menu.png';
import labIcon from '../../assets/images/icon_menu2.png';

const Navbar: React.FC = () => {

  const data = [
    {
      imageSrc: backIcon,
      buttonText: 'CONTINENTS',
    },
    {
      imageSrc: labIcon,
      buttonText: 'INVENTORY',
    },
    {
      imageSrc: labIcon,
      buttonText: 'MARKET',
    },
    {
      imageSrc: labIcon,
      buttonText: 'EXCHANGE',
    },
  ]

  return (
    <nav className="navbar">
      <div className='action-buttons'>
      {data.map((button, index) => (
        <IconTextButton
          key = {index}
          imageSrc = {button.imageSrc}
          buttonText = {button.buttonText}
        />
      ))}    
      </div>
      <div className='action-buttons'>
        <IconTextButton imageSrc = {backIcon}/>
        <IconTextButton imageSrc = {labIcon}/>
      </div>
    </nav>
  );
};

export default Navbar;