import { Link } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import HeaderCSS from "./Header.module.css";

const texts = {
  invoices: "INVOICES",
  create: "CREATE",
};

const Header = () => {
  return (
    <header className={HeaderCSS.header}>
      <Stack spacing={2} direction="row">
        <Link to="/" className={HeaderCSS.link}>
          <Button variant="contained" className={HeaderCSS.btn}>
            {texts.invoices}
          </Button>
        </Link>
        <Link to="/create" className={HeaderCSS.link}>
          <Button variant="contained" className={HeaderCSS.btn}>
            {texts.create}
          </Button>
        </Link>
      </Stack>
    </header>
  );
};

export { Header };
