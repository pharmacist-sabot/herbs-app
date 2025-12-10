import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import herbsService from '@/services/herbs-service';

describe('herbs Service', () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('fetches herbs successfully', async () => {
    const mockData = {
      status: 'success',
      data: [{ ID: 1, Name: 'Test Herb', Category: 'Test' }],
    };

    (globalThis.fetch as any).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const result = await herbsService.getAllHerbs();
    expect(result.data).toHaveLength(1);
    expect(result.data[0].Name).toBe('Test Herb');
    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
  });

  it('throws error when API fails', async () => {
    (globalThis.fetch as any).mockResolvedValue({
      ok: false,
      status: 500,
    });

    await expect(herbsService.getAllHerbs()).rejects.toThrow('HTTP error! status: 500');
  });

  it('throws error when response status is not success', async () => {
    const mockData = {
      status: 'error',
      message: 'Server Error',
    };

    (globalThis.fetch as any).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    await expect(herbsService.getAllHerbs()).rejects.toThrow('Server Error');
  });
});
