import { search, SearchResponse } from '../src';
import fetch from 'cross-fetch';
jest.mock('cross-fetch');

describe('search', () => {
  it('returns search results', async () => {
    // Define the mock result
    const mockResult: SearchResponse = {
      hits: [
        {
          description: 'mock description',
          snippets: ['mock snippet'],
          title: 'mock title',
          url: 'mock url',
        },
      ],
      latency: 123,
    };

    // Mock the fetch function
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockResult),
    } as Response);

    const result = await search('test', 'test-key');

    // Expect the result to be the mock result
    expect(result).toEqual(mockResult);
  });
});