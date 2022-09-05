import i18n from "i18next";
import { FormControl, Select, MenuItem } from "@mui/material";

const LangSwitch = () => {
  const { language, changeLanguage } = i18n;

  const handleChange = (event: any) => {
    changeLanguage(event.target.value);
  };

  return (
    <FormControl size="small" data-testid="lang-switch">
      <Select
        value={language}
        onChange={handleChange}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="pl">Polski</MenuItem>
        <MenuItem value="en">English</MenuItem>
      </Select>
    </FormControl>
  );
};

export { LangSwitch };
