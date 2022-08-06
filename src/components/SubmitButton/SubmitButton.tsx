import { Button } from "@mui/material";
import SubmitButtonCSS from "./SubmitButton.module.css";
import { ISubmitButtonProps } from ".";

const SubmitButton = ({ text, onClick }: ISubmitButtonProps) => {
  return (
    <Button
      type="submit"
      variant="contained"
      className={SubmitButtonCSS.btn}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export { SubmitButton };
