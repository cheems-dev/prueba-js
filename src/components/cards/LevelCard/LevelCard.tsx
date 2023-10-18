import React from 'react';

interface DataItem {
    name: string;
    color: string;
}

const LevelCard: React.FC<DataItem> = ({ name, color }) => {
    return (
        <div>
           <h3>{name}</h3>
           <p style={{ color: color }}>{color}</p>
           <button>ENTER</button>
        </div>
  );
};

export default LevelCard;