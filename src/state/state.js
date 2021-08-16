import { useEffect, useState } from 'react';
import { filterPaper, mungePaper } from '../utils/munge';
import sample from './data.json';

const useData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(sample.filter(filterPaper).map(mungePaper));
  }, []);

  return { data };
};

export { useData };
