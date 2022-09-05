import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("Header tests:", () => {
  test("should render Header component", () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    const header = screen.getByTestId("header");

    expect(header).toBeInTheDocument();
  });
});
