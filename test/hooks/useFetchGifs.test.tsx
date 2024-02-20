import { describe, expect, test } from 'vitest';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { renderHook, waitFor } from '@testing-library/react';

describe('Pruebas en el hook useFetchGifs', () => {
  test('deberia regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch Man'));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('deberia regresar un arreglo de Gifs y isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch Man'));
    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
