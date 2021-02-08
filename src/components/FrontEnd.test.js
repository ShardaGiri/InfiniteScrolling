/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  fireEvent, render,
} from '@testing-library/react';
import SearchFunction from './FrontEnd';

describe('Testing SearchFunction Component', () => {
  it('It should set the query on input', async () => {
    const utils = render(<SearchFunction />);
    const input = utils.getByTestId('input-query');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
  // it('loading text is shown while API request is in progress', async () => {
  //   render(<SearchFunction />);
  //   expect(screen.queryByText('Loading...')).toBeInTheDocument();
  //   jest.useFakeTimers();
  //   await waitForElementToBeRemoved(screen.queryByText('Loading...'));
  // });
});
