import { useState } from 'react';

interface DataItem {
  name: string;
  category: string;
  color: string;
  backgroundSrc: string;
}

interface UseDataFilterProps {
  initialData: DataItem[];
}

interface UseDataFilterResult {
  data: DataItem[];
  selectedFilter: string;
  setFilterCategory: (category: string) => void;
}

export function useDataFilter({ initialData }: UseDataFilterProps): UseDataFilterResult {
  const [data, setData] = useState<DataItem[]>(initialData);
  const [selectedFilter, setselectedFilter] = useState<string>('');

  const filterData = () => {
    if (!selectedFilter) {
      return data;
    }
    return data.filter(item => item.category === selectedFilter);
  };

  const setFilterCategory = (category: string) => {
    setselectedFilter(category);
  };

  return { data: filterData(), selectedFilter, setFilterCategory };
}