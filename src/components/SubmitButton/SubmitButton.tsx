import { Button } from "@mui/material";
import SubmitButtonCSS from "./SubmitButton.module.css";

const SubmitButton = ({ text }: { text: string }) => {
  return (
    <Button type="submit" variant="contained" className={SubmitButtonCSS.btn}>
      {text}
    </Button>
  );
};

export { SubmitButton };
