import { render, screen } from "@testing-library/react";
import { NotFound } from ".";

describe("NotFound tests:", () => {
  test("should render NotFound component", () => {
    render(<NotFound text="" />);

    const notFound = screen.getByTestId("not-found");

    expect(notFound).toBeInTheDocument();
  });

  test("should render NotFound component with 'test' text content", () => {
    render(<NotFound text="test" />);

    const notFound = screen.getByTestId("not-found");

    expect(notFound).toHaveTextContent("test");
  });
});
