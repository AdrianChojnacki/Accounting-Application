import { render, screen } from "@testing-library/react";
import { TestComponent } from ".";

test("should render TestComponent", () => {
  render(<TestComponent text="test" />);
  const testComponent = screen.getByText(/test/i);
  expect(testComponent).toBeInTheDocument();
});
