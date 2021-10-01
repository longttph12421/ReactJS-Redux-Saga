import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const bol = () => false;
const DateTime = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          variant="inline"
          format="dd/MM/yyyy"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          label={label}
          error={touched && invalid}
          helperText={touched && error}
          {...input}
          {...custom}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};
export default DateTime;
