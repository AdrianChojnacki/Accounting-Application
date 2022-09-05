import { render, screen } from "@testing-library/react";
import { Spinner } from ".";

describe("Spinner tests:", () => {
  test("should render Spinner component", () => {
    render(<Spinner />);

    const spinner = screen.getByTestId("spinner");

    expect(spinner).toBeInTheDocument();
  });
});
