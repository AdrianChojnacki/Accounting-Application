import CircularProgress from "@mui/material/CircularProgress";
import SpinnerCSS from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={SpinnerCSS.spinner}>
      <CircularProgress />
    </div>
  );
};

export { Spinner };
