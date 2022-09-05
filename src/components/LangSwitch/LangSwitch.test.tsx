import { render, screen } from "@testing-library/react";
import { LangSwitch } from ".";

describe("LangSwitch tests:", () => {
  test("should render LangSwitch component", () => {
    render(<LangSwitch />);

    const langSwitch = screen.getByTestId("lang-switch");

    expect(langSwitch).toBeInTheDocument();
  });
});
