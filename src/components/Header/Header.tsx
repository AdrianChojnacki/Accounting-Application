import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import HeaderCSS from "./Header.module.css";

const Header = () => {
  return (
    <header className={HeaderCSS.header}>
      <Stack spacing={2} direction="row">
        <Link to="/" className={HeaderCSS.link}>
          <Button variant="contained" className={HeaderCSS.btn}>
            INVOICES
          </Button>
        </Link>
        <Link to="/create" className={HeaderCSS.link}>
          <Button variant="contained" className={HeaderCSS.btn}>
            CREATE
          </Button>
        </Link>
      </Stack>
    </header>
  );
};

export { Header };
