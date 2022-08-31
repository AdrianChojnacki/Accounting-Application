import { render, screen } from "@testing-library/react";
import { SkeletonText } from ".";

describe("SkeletonText tests:", () => {
  test("should render SkeletonText component", () => {
    render(<SkeletonText />);

    const skeletonText = screen.getByTestId("skeleton-text");

    expect(skeletonText).toBeInTheDocument();
  });
});
