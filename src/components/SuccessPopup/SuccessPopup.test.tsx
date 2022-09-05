import { render, screen } from "@testing-library/react";
import { SuccessPopup } from ".";

describe("SuccessPopup tests:", () => {
  test("should render SuccessPopup component", () => {
    render(<SuccessPopup text="" />);

    const successPopup = screen.getByTestId("success-popup");

    expect(successPopup).toBeInTheDocument();
  });

  test("should render SuccessPopup component with 'test' text content", () => {
    render(<SuccessPopup text="test" />);

    const successPopup = screen.getByTestId("success-popup-text");

    expect(successPopup).toHaveTextContent("test");
  });
});
