import { describe, expect, test } from 'vitest';
import { getGifs } from '../../src/services';

describe('Pruebas en giphy', () => {
  test('debe retornar n arreglo de gifs', async () => {
    const gifs = await getGifs('simpsons');

    expect(gifs.length).toBe(10);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
