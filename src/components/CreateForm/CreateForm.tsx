import * as React from "react";
import { Box, Grid, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const CreateForm = () => {
  const [value, setValue] = React.useState<Date | null>(new Date());

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <form>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs>
              <DesktopDatePicker
                label="Creation date"
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params: any) => <TextField {...params} />}
                disablePast
              />
            </Grid>
            <Grid item xs>
              <DesktopDatePicker
                label="Payment date"
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params: any) => <TextField {...params} />}
                disablePast
              />
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>
    </form>
  );
};

export { CreateForm };
