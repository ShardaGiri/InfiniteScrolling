/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
// import SearchFunction from './components/searchFunction';

// jest.mock('./components/searchFunction', () => (
//   const ActualSearchFunction = jest.requireActual('./components/searchFunction');
//   <div data-testid="search">
//     <ActualSearchFunction />
//   </div>
// ));

import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
