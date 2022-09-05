import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { DetailsButton } from ".";

describe("DetailsButton tests:", () => {
  test("should render DetailsButton component", () => {
    render(
      <Router>
        <DetailsButton id={0} />
      </Router>,
    );

    const detailsButton = screen.getByTestId("details-button");

    expect(detailsButton).toBeInTheDocument();
  });
});
