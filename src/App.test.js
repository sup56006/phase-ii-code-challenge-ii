import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders blog post titles', () => {
  render(<App />);
  expect(screen.getByText(/my first post/i)).toBeInTheDocument();
  expect(screen.getByText(/react is awesome/i)).toBeInTheDocument();
});

