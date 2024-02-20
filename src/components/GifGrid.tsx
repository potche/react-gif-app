import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { ICategory } from '../interfaces';

export const GifGrid = ({ category }: ICategory) => {
  const { gifs, isLoading } = useFetchGifs(category);
  console.log({ gifs });
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
