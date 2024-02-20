import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import GifApp from '../src/GifApp';

describe('Pruebas en el hook useFetchGifs', () => {
  test('deberia regresar el estado inicial', () => {
    const { getByRole } = render(<GifApp />);
    const input = getByRole('textbox') as HTMLInputElement;

    expect(input.value).toBe('');
  });
});
