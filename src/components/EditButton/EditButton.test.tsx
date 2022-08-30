import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { EditButton } from ".";

describe("DetailsButton tests:", () => {
  test("should render DetailsButton component", () => {
    render(
      <Router>
        <EditButton id={0} />
      </Router>,
    );

    const editButton = screen.getByTestId("edit-button");

    expect(editButton).toBeInTheDocument();
  });
});
