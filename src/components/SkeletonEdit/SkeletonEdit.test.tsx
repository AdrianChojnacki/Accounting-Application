import { render, screen } from "@testing-library/react";
import { SkeletonEdit } from ".";

describe("SkeletonEdit tests:", () => {
  test("should render NotFound component", () => {
    render(<SkeletonEdit />);

    const skeletonEdit = screen.getByTestId("skeleton-edit");

    expect(skeletonEdit).toBeInTheDocument();
  });
});
