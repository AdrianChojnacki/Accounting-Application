import CircularProgress from "@mui/material/CircularProgress";
import SpinnerCSS from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={SpinnerCSS.spinner} data-testid="spinner">
      <CircularProgress color="inherit" />
    </div>
  );
};

export { Spinner };
