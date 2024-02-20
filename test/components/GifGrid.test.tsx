import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

vi.mock('../../src/hooks/useFetchGifs');

const category = 'Homer Simpson';

describe('Pruebas en GifGrid', () => {
  test('debe mostrar el loadinig inicalmente', () => {
    vi.mocked(useFetchGifs).mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    const { getByText } = render(<GifGrid category={category} />);

    expect(getByText('Cargando...'));
    expect(getByText(category));
  });

  test('debe mostar items cuando se cargan las imagenes', () => {
    vi.mocked(useFetchGifs).mockReturnValue({
      gifs: [
        {
          id: 'VXJWhaO7afRe',
          title: 'One Punch Man GIF',
          url: 'https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=9217b59fksn3eh6y1ea8mxtt3j5v0n3gliyrmgg6k6vxc20r&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        },
        {
          id: 'T2d4uMzn7dzOVHcUHA',
          title: 'Kimetsu No Yaiba Demon Slayer GIF',
          url: 'https://media0.giphy.com/media/T2d4uMzn7dzOVHcUHA/giphy.gif?cid=9217b59fzbcueb6hw4455lyb8d6zrw96asm78wfpv6j2191n&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        },
      ],
      isLoading: false,
    });

    const { getAllByRole } = render(<GifGrid category={category} />);

    expect(getAllByRole('img').length).toBe(2);
  });
});
