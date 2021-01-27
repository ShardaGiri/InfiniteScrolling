import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import Search from './search';

// jest.mock('axios');
jest.mock('axios', () => ({
  __esModule: true,
  default: jest.fn(),
}));
it('Returns Books Array', async () => {
  // axios.get.mockResolvedValue({
  //   data: [{
  //     numFound: 1,
  //     start: 1,
  //     docs: [
  //       {
  //         title: 'BR',
  //       }],
  //     num_found: 1,
  //   }],
  // });
  jest.spyOn(axios, 'default').mockResolvedValue({
    data: [{
      numFound: 1,
      start: 1,
      docs: [
        {
          title: 'BR',
        }],
      num_found: 1,
    }],
  });
  const { result, waitForNextUpdate } = renderHook(() => Search('test', 1));
  console.log(result.current);
  expect(result.current.books).toEqual([]);
  expect(result.current.loading).toBeTruthy();
  await waitForNextUpdate();
  console.log(result.current);
  expect(result.current.books.num_found).toEqual(1);
  expect(result.current.loading).toBeTruthy();
});

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
// import { render, screen } from '@testing-library/react';
// import axios from 'axios';
// import Search from './search';

// jest.mock('axios');
// it('fetches data from API', async () => {
//   axios.get.mockResolvedValue({
//     data: [{ title: 'Sky', author: 'James', publish_year: '1998' }],
//   });

//   render(<Search />);
//   const bookTitle = await screen.findByText('Sky');
//   expect(bookTitle).toBeInTheDocument();
// });

// import { renderHook } from '@testing-library/react-hooks';
// import axios from 'axios';
// //import MockAdapter from 'axios-mock-adapter';
// import Search from './search';

// describe('Search perform GET Request', () => {
//   //const url = 'https://openlibrary.org/search.json?q=test';
//   const pageNumber = 2;
//   //const mockData = {
//   //   numFound: 1, start: 1, docs: [{ title: 'BR' }], num_found: 1,
//   // };
//   // const mock = new MockAdapter(axios);

//   // afterEach(() => {
//   //   mock.reset();
//   // });

//   it('Successfully Mocking actual network request', async () => {
//     mock.onGet(url).reply(200, mockData);
//     const { result, waitForNextUpdate } = renderHook(() => Search(url, pageNumber));
//     // eslint-disable-next-line no-console
//     console.log(result.current);
//     // expect(result.current.books).toEqual([]);
//     // expect(result.current.loading).toBeTruthy();
//     // expect(result.current.error).toBeFalsy();
//     // //   expect(result.current.hasMore).toBeTruthy();
//     await waitForNextUpdate();
//     // eslint-disable-next-line no-console
//     console.log(result.current);
//     // expect(result.current.books).toEqual('response');
//     // expect(result.current.loading).toBeFalsy();
//   });

//   xit('Errorneous Request', async () => {
//     mock.reset();
//     mock.onGet(url).reply(200, { error: [{ message: 'book not found' }] });
//     const { result, waitForNextUpdate } = renderHook(() => Search(url, pageNumber));
//     expect(result.current.books).toEqual([]);
//     expect(result.current.loading).toBeTruthy();
//     expect(result.current.error).toBeFalsy();
//     //   expect(result.current.hasMore).toBeTruthy();
//     await waitForNextUpdate();
//     expect(result.current.books).toMatchObject({ errors: [{ message: 'book not found' }] });
//     expect(result.current.error).toBeTruthy();
//   });
// });
