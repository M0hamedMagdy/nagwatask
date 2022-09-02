import { render, screen } from "@testing-library/react";
import App from "./App";

test("Ckeck the Part Of Speech Quiz", () => {
  render(<App />);
  const linkElement = screen.getByText(/Part Of Speech/i);
  expect(linkElement).toBeInTheDocument();
});
