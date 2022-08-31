import { render, screen } from "@testing-library/react";
import { SkeletonHome } from ".";

describe("SkeletonHome tests:", () => {
  test("should render SkeletonHome component", () => {
    render(<SkeletonHome rowsNumber={1} />);

    const skeletonHome = screen.getByTestId("skeleton-home");

    expect(skeletonHome).toBeInTheDocument();
  });
});
