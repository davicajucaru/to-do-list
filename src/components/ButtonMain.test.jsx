import { render, screen } from "@testing-library/react";
import ButtonMain from "./ButtonMain";

test("There should be an add button.", () => {
  render(<ButtonMain />);
  const buttonRender = screen.getByText(/Add/i);
  expect(buttonRender).toBeInTheDocument();
});
