/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
// import { within, render } from '@testing-library/react';

// import SearchFunction from './components/searchFunction';

// jest.mock('./components/searchFunction', () => (
//   const ActualSearchFunction = jest.requireActual('./components/searchFunction');
//   <div data-testid="search">
//     <ActualSearchFunction />
//   </div>
// ));

// test('App renders <SearchFunction />', () => {
// render(<App />);
// const linkElement = screen.getByText(/learn react/i);
// expect(linkElement).toBeInTheDocument();

// const { getByTestId } = render(<App />);
// const appHeader = getByTestId('app-header');
// const clocksInHeader = within(appHeader).getByTestId('search');
// expect(clocksInHeader.length).toBe(1);

// });
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
