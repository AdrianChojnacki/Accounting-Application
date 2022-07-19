import { useForm, Controller } from "react-hook-form";
import { Box, Button, Grid, TextField } from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import CreateFormCSS from "./CreateForm.module.css";

interface IFormInputs {
  creationDate: Date | null;
  paymentDate: Date | null;
  amount: string | null;
}

const CreateForm = () => {
  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit = (data: any) => {
    let { creationDate, paymentDate, amount } = data;

    let creationDay = creationDate.getDate();
    if (creationDay < 10) creationDay = `0${creationDay}`;
    let creationMonth = creationDate.getMonth() + 1;
    if (creationMonth < 10) creationMonth = `0${creationMonth}`;
    const creationYear = creationDate.getFullYear();

    creationDate = `${creationDay}/${creationMonth}/${creationYear}`;

    let paymentDay = paymentDate.getDate();
    if (paymentDay < 10) paymentDay = `0${paymentDay}`;
    let paymentMonth = paymentDate.getMonth() + 1;
    if (paymentMonth < 10) paymentMonth = `0${paymentMonth}`;
    const paymentYear = paymentDate.getFullYear();

    paymentDate = `${paymentDay}/${paymentMonth}/${paymentYear}`;

    amount = +amount;

    console.log(creationDate, paymentDate, amount);
  };

  return (
    <form action="/" method="POST" onSubmit={handleSubmit(onSubmit)}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} rowSpacing={2}>
            <Grid item xs={12} sm={4}>
              <Controller
                name="creationDate"
                control={control}
                defaultValue={new Date()}
                rules={{ required: true }}
                render={({ field }) => (
                  <DesktopDatePicker
                    {...field}
                    label="Creation date"
                    inputFormat="dd/MM/yyyy"
                    disablePast
                    renderInput={(params) => (
                      <TextField {...params} className={CreateFormCSS.input} />
                    )}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Controller
                name="paymentDate"
                control={control}
                defaultValue={new Date()}
                rules={{ required: true }}
                render={({ field }) => (
                  <DesktopDatePicker
                    {...field}
                    label="Payment date"
                    inputFormat="dd/MM/yyyy"
                    disablePast
                    renderInput={(params) => (
                      <TextField {...params} className={CreateFormCSS.input} />
                    )}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Controller
                name="amount"
                control={control}
                defaultValue="0"
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Amount"
                    type="number"
                    variant="outlined"
                    InputProps={{ inputProps: { min: 0 } }}
                    className={CreateFormCSS.input}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                variant="contained"
                className={CreateFormCSS.btn}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>
    </form>
  );
};

export { CreateForm };
