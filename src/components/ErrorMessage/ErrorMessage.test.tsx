import { render, screen } from "@testing-library/react";
import { ErrorMessage } from ".";

describe("ErrorMessage tests:", () => {
  test("should render ErrorMessage component", () => {
    render(<ErrorMessage text="" />);

    const errorMessage = screen.getByTestId("error-message");

    expect(errorMessage).toBeInTheDocument();
  });

  test("should render ErrorMessage component with 'test' text content", () => {
    render(<ErrorMessage text="test" />);

    const errorMessage = screen.getByTestId("error-message");

    expect(errorMessage).toHaveTextContent("test");
  });
});
