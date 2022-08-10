import { Link } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { Stack, Button, FormControl, Select, MenuItem } from "@mui/material";
import HeaderCSS from "./Header.module.css";

const Header = () => {
  const { language, changeLanguage } = i18n;
  const { t } = useTranslation();

  const handleChange = (event: any) => {
    changeLanguage(event.target.value);
  };

  return (
    <header className={HeaderCSS.header}>
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
        <FormControl size="small">
          <Select
            value={language}
            onChange={handleChange}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="pl">Polski</MenuItem>
            <MenuItem value="en">English</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </header>
  );
};

export { Header };
