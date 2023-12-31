import React from 'react';
import IconTextButton from '../buttons/IconText/IconTextButton';
import Styles from './Navbar.module.scss';
import backIcon from '../../assets/images/icon_menu.png';
import labIcon from '../../assets/images/icon_menu2.png';
import IconButton from '../buttons/Icon/IconButton';

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
    <nav className={Styles.navbar}>
      <div className={Styles.actionButtons}>
      {data.map((button, index) => (
        <IconTextButton
          key = {index}
          imageSrc = {button.imageSrc}
          buttonText = {button.buttonText}
        />
      ))}    
      </div>
      <div className={Styles.actionButtons}>
        <IconButton imageSrc = {backIcon}/>
        <IconButton imageSrc = {labIcon}/>
      </div>
    </nav>
  );
};

export default Navbar;