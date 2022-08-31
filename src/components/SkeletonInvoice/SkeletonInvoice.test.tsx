import { render, screen } from "@testing-library/react";
import { SkeletonInvoice } from ".";

describe("SkeletonInvoice tests:", () => {
  test("should render SkeletonInvoice component", () => {
    render(<SkeletonInvoice />);

    const skeletonInvoice = screen.getByTestId("skeleton-invoice");

    expect(skeletonInvoice).toBeInTheDocument();
  });
});
