import { useEffect, useState } from 'react';
import { IGifData } from '../interfaces';
import { getGifs } from '../services';

export const useFetchGifs = (category: string) => {
  const [gifs, setGifs] = useState<IGifData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newGif = await getGifs(category);
    setGifs(newGif);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    gifs,
    isLoading,
  };
};
