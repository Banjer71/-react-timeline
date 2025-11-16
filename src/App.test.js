import { render, screen } from '@testing-library/react';
import App from './App';

test('renders timeline header', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Timeline/i);
  expect(linkElement).toBeInTheDocument();
});
