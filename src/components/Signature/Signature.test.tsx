import { render, screen } from "@testing-library/react";
import { Signature } from ".";

describe("Signature tests:", () => {
  test("should render Signature component", () => {
    render(<Signature text="" />);

    const signature = screen.getByTestId("signature");

    expect(signature).toBeInTheDocument();
  });

  test("should render Signature component with 'test' text content", () => {
    render(<Signature text="test" />);

    const signature = screen.getByTestId("signature");

    expect(signature).toHaveTextContent("test");
  });
});
