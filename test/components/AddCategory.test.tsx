import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';
import {
  Mock,
  afterEach,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from 'vitest';
import GifApp from '../../src/GifApp';

describe('Pruebas en <AddCategory />', () => {
  // const onNewCategory = vi.fn(() => console.log('executed'));
  beforeEach(() => {
    //
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('debe cambiar el valor de la prueba', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.input(input, { target: { value: 'homer' } });

    expect(input.value).toBe('homer');
    screen.debug();
  });

  test('deberia llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'the mandalorian';
    const onNewCategory = vi.fn(() => console.log('executed'));

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    const form = screen.getByRole('form') as HTMLInputElement;

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    screen.debug();
  });

  test('No debe de llamar onNewCategory si el input esra vacio', () => {
    const onNewCategory = vi.fn(() => console.log('executed'));

    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole('form') as HTMLInputElement;
    fireEvent.submit(form);

    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
