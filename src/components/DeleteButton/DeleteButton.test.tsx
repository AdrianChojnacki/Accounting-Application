import { render, screen } from "@testing-library/react";
import { DeleteButton } from ".";

test("should render DeleteButton component", () => {
  render(<DeleteButton onClick={() => {}} />);
  const deleteButton = screen.getByTestId("delete-button");
  expect(deleteButton).toBeInTheDocument();
});
