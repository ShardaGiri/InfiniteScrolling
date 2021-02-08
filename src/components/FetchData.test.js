import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
// import axios from "axios";

import useSearch from './FetchData';

const axios = require('axios');

jest.mock('axios', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('testing useSearch component with useSearchMock', () => {
  it('Should get Data', async () => {
    jest.spyOn(axios, 'default').mockResolvedValue({
      data: {
        numFound: 1,
        start: 1,
        docs: [
          {
            title: 'BR',
          },
        ],
        num_found: 1,
      },
    });
    await act(async () => {
      const { result, waitForNextUpdate } = renderHook(() => useSearch('test', 1));
      expect(result.current.books).toEqual([]);
      await waitForNextUpdate();
      expect(result.current.books).toEqual([{ title: 'BR' }]);
    });
  });
  it('cheching for hasMore', async () => {
    jest.spyOn(axios, 'default').mockResolvedValue({
      data: {
        numFound: 1000,
        start: 1,
        docs: [
          {
            title: 'BR',
          },
        ],
        num_found: 1,
      },
    });
    await act(async () => {
      const { result, waitForNextUpdate } = renderHook(() => useSearch('test', 1));
      expect(result.current.hasMore).toBeFalsy();
      await waitForNextUpdate();
      if (result.current.numFound > 0) {
        expect(result.current.hasMore).toBeTruthy();
      }
    });
  });
  it('Checking for loading', async () => {
    jest.spyOn(axios, 'default').mockResolvedValue({
      data: {
        numFound: 1,
        start: 1,
        docs: [
          {
            title: 'BR',
          },
        ],
        num_found: 1,
      },
    });
    await act(async () => {
      const { result, waitForNextUpdate } = renderHook(() => useSearch('test', 1));
      expect(result.current.loading).toBeTruthy();
      await waitForNextUpdate();
      expect(result.current.loading).toBeFalsy();
    });
  });
  it('should handle error data', async () => {
    jest.spyOn(axios, 'default').mockRejectedValue();
    await act(async () => {
      const { result, waitForNextUpdate } = renderHook(() => useSearch('test', 1));
      expect(result.current.error).toBeFalsy();
      await waitForNextUpdate();
      expect(result.current.error).toBeTruthy();
    });
  });
});
