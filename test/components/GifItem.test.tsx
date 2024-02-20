import React from 'react';

import { describe, expect, it, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { IGifData } from '../../src/interfaces';
import { GifItem } from '../../src/components';

describe('Pruebas en <GifItem />', () => {
  const gif: IGifData = {
    id: 'VXJWhaO7afRe',
    title: 'One Punch Man GIF',
    url: 'https://media0.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=9217b59fk7mz91mj0mxbpph0koffdt8z8lxf1akdadwpnfv2&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  };

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<GifItem key={gif.id} {...gif} />);

    expect(container).toMatchSnapshot();
  });

  test('debe mostar la imagen con el URL y el ALT indicado', () => {
    const { container } = render(<GifItem key={gif.id} {...gif} />);
    // screen.debug();

    const { src, alt } = screen.getByRole<HTMLImageElement>('img');
    expect(src).toBe(gif.url);
    expect(alt).toBe(gif.title);
  });
});
