import { Link } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import HeaderCSS from "./Header.module.css";

const Header = () => {
  return (
    <header className={HeaderCSS.header}>
      <Stack spacing={2} direction="row">
        <Link to="/" className={HeaderCSS.link}>
          <Button variant="contained" className={HeaderCSS.btn}>
            INVOICES LIST
          </Button>
        </Link>
        <Link to="/create" className={HeaderCSS.link}>
          <Button variant="contained" className={HeaderCSS.btn}>
            CREATE INVOICE
          </Button>
        </Link>
      </Stack>
    </header>
  );
};

export { Header };
