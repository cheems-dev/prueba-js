import React from 'react';
import cardStyle from "./LevelCard.module.scss";

interface DataItem {
    name: string;
    color: string;
    backgroundSrc: string;
}

const LevelCard: React.FC<DataItem> = ({ name, color, backgroundSrc }) => {
    return (
        <div className={cardStyle.cardContainer}>
            <div className={cardStyle.topSection} style={{backgroundImage: `url(${backgroundSrc})`}}>
                <h3>{name}</h3>
                <div className={cardStyle.circle} style={{ backgroundColor: color }}></div>
            </div>
            <button>ENTER</button>
        </div>
  );
};

export default LevelCard;