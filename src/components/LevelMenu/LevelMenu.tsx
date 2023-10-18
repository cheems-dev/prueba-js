import React from 'react';
import { useDataFilter } from '../../customHooks/filterData';
import LevelCard from '../cards/LevelCard/LavelCard';

interface DataItem {
    name: string;
    color: string;
}

interface LevelMenuProps {
    location: string;
    data: DataItem[];
  }

const LevelMenu: React.FC<LevelMenuProps> = ({ location, data }) => {

    const { data: filteredData, setFilterColor, selectedFilter } = useDataFilter({ initialData: data });
    return (
        <div>
            <button>Back</button>
            <h2>{location}</h2>

            <label htmlFor="colorFilter">Type</label>
            <select
                id="colorFilter"
                onChange={e => setFilterColor(e.target.value)}
                value={selectedFilter}
            >
                <option value="">All</option>
                {Array.from(new Set(data.map(item => item.color))).map(color => (
                <option key={color} value={color}>
                    {color}
                </option>
                ))}
            </select>

            <ul>
                {
                filteredData.map((item, index) => (
                    <li key={index}><LevelCard name={item.name} color={item.color}/></li>
                ))}
            </ul>
        </div>
  );
};

export default LevelMenu;