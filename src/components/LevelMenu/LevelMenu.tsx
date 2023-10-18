import React from 'react';
import { useDataFilter } from '../../customHooks/filterData';
import LevelCard from '../cards/LevelCard/LevelCard'
import BackIcon from '../../assets/images/back.png'
import IconButton from '../buttons/Icon/IconButton';
import TextButton from '../buttons/Text/TextButton';

interface DataItem {
    name: string;
    category: string;
    color: string;
}

interface LevelMenuProps {
    location: string;
    data: DataItem[];
  }

const LevelMenu: React.FC<LevelMenuProps> = ({ location, data }) => {

    const { data: filteredData, setFilterCategory, selectedFilter } = useDataFilter({ initialData: data });
    return (
        <div>
            <div>
                <IconButton imageSrc={BackIcon} />
                <TextButton buttonText={location}/>

                <label htmlFor="colorFilter">Type</label>
                <select
                    id="colorFilter"
                    onChange={e => setFilterCategory(e.target.value)}
                    value={selectedFilter}
                    >
                    <option value="">All</option>
                    {Array.from(new Set(data.map(item => item.category))).map(category => (
                        <option key={category} value={category}>
                        {category}
                    </option>
                    ))}
                </select>
            </div>

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