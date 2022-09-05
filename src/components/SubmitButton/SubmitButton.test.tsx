import { fireEvent, render, screen } from "@testing-library/react";
import { SubmitButton } from ".";

describe("SubmitButton tests:", () => {
  test("should render SubmitButton component", () => {
    render(<SubmitButton text="" onClick={() => {}} />);

    const submitButton = screen.getByTestId("submit-button");

    expect(submitButton).toBeInTheDocument();
  });

  test("should render SubmitButton component with 'test' text content", () => {
    render(<SubmitButton text="test" onClick={() => {}} />);

    const submitButton = screen.getByTestId("submit-button");

    expect(submitButton).toHaveTextContent("test");
  });

  test("SubmitButton should be clicked 1 time", () => {
    const onClick = jest.fn();
    render(<SubmitButton text="" onClick={onClick} />);

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
