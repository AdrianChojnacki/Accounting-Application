import { Button } from "@mui/material";
import { ISubmitButtonProps } from ".";
import SubmitButtonCSS from "./SubmitButton.module.css";

const SubmitButton = ({ text, onClick }: ISubmitButtonProps) => {
  return (
    <Button
      type="submit"
      variant="contained"
      className={SubmitButtonCSS.btn}
      onClick={onClick}
      data-testid="submit-button"
    >
      {text}
    </Button>
  );
};

export { SubmitButton };
