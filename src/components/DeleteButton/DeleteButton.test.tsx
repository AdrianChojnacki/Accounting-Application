import { fireEvent, render, screen } from "@testing-library/react";
import { DeleteButton } from ".";

describe("DeleteButton tests:", () => {
  test("should render DeleteButton component", () => {
    render(<DeleteButton onClick={() => {}} />);

    const deleteButton = screen.getByTestId("delete-button");

    expect(deleteButton).toBeInTheDocument();
  });

  test("DeleteButton should be clicked 1 time", () => {
    const onClick = jest.fn();
    render(<DeleteButton onClick={onClick} />);

    const deleteButton = screen.getByTestId("delete-button");
    fireEvent.click(deleteButton);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
