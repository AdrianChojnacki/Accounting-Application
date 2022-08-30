import { render, screen } from "@testing-library/react";
import { DeletePopup } from ".";

describe("DeletePopup tests:", () => {
  test("should render DeletePopup component", () => {
    render(
      <DeletePopup
        text="test"
        popupState
        hidePopup={() => {}}
        deleteClick={() => {}}
      />,
    );

    const deletePopup = screen.getByTestId("delete-popup");

    expect(deletePopup).toBeInTheDocument();
  });
});
