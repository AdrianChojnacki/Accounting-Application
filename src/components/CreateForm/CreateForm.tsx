import * as React from "react";
import { Box, Grid, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import CreateFormCSS from "./CreateForm.module.css";

const CreateForm = () => {
  const [creationDate, setCreationDate] = React.useState<Date | null>(
    new Date(),
  );
  const [paymentDate, setPaymentDate] = React.useState<Date | null>(new Date());
  const [amount, setAmount] = React.useState<number | null>(0);

  const handleCreationDateChange = (newValue: Date | null) => {
    setCreationDate(newValue);
  };

  const handlePaymentDateChange = (newValue: Date | null) => {
    setPaymentDate(newValue);
  };

  const handleAmountChange = (event: any) => {
    setAmount(event.target.value);
  };

  return (
    <form>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} rowSpacing={3}>
            <Grid item xs={12} sm={4}>
              <DesktopDatePicker
                label="Creation date"
                inputFormat="MM/dd/yyyy"
                disablePast
                value={creationDate}
                onChange={handleCreationDateChange}
                renderInput={(params: any) => (
                  <TextField className={CreateFormCSS.input} {...params} />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <DesktopDatePicker
                label="Payment date"
                inputFormat="MM/dd/yyyy"
                disablePast
                value={paymentDate}
                onChange={handlePaymentDateChange}
                renderInput={(params: any) => (
                  <TextField className={CreateFormCSS.input} {...params} />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Amount"
                type="number"
                variant="outlined"
                InputProps={{ inputProps: { min: 0 } }}
                value={amount}
                onChange={handleAmountChange}
                className={CreateFormCSS.input}
              />
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>
    </form>
  );
};

export { CreateForm };
