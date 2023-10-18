import { useState } from 'react';

interface DataItem {
  name: string;
  color: string;
}

interface UseDataFilterProps {
  initialData: DataItem[];
}

interface UseDataFilterResult {
  data: DataItem[];
  selectedFilter: string;
  setFilterColor: (color: string) => void;
}

export function useDataFilter({ initialData }: UseDataFilterProps): UseDataFilterResult {
  const [data, setData] = useState<DataItem[]>(initialData);
  const [selectedFilter, setselectedFilter] = useState<string>('');

  const filterData = () => {
    if (!selectedFilter) {
      return data;
    }
    return data.filter(item => item.color === selectedFilter);
  };

  const setFilterColor = (color: string) => {
    setselectedFilter(color);
  };

  return { data: filterData(), selectedFilter, setFilterColor };
}