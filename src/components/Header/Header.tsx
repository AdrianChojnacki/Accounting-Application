import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Stack, Button } from "@mui/material";
import { LangSwitch } from "..";
import HeaderCSS from "./Header.module.css";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={HeaderCSS.header} data-testid="header">
      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack spacing={2} direction="row">
          <Link to="/" className={HeaderCSS.link}>
            <Button variant="contained" className={HeaderCSS.btn}>
              {t("invoicesList")}
            </Button>
          </Link>
          <Link to="/create" className={HeaderCSS.link}>
            <Button variant="contained" className={HeaderCSS.btn}>
              {t("addInvoice")}
            </Button>
          </Link>
        </Stack>
        <LangSwitch />
      </Stack>
    </header>
  );
};

export { Header };
