import React from 'react';
// import {setupServer} from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../src/App';

it('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  console.log(linkElement);
  expect(linkElement).toBeInTheDocument();
});
