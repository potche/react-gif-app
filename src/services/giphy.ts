import { type IGifData, type SearchResponse } from '../interfaces';

export const getGifs = async (tag: string): Promise<IGifData[]> => {
  const serviceUrl = 'http://api.giphy.com/v1/gifs';
  const apiKey = 'J0elr5m0KagXL22w41U6pBkJkyGZnpy1';

  const resp = await fetch(
    `${serviceUrl}/search?api_key=${apiKey}&limit=10&q=${tag}`
  );
  const respGif: SearchResponse = await resp.json();

  const gifData = respGif.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  return gifData;
};
