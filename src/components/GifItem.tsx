import { IGifData } from '../interfaces';

export function GifItem({ url, title }: IGifData) {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}
