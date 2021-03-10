import React from "react";
import { InputAdornment } from "@material-ui/core";
import TextField from "./components/TextField";

import { ReactComponent as DropdownIcon } from "../icons/dropdownRegular.svg";

import { DatePicker } from "@material-ui/pickers";
import useStyles from "./common/Styles";

const DatePickerComp = (event, labelName) => {
  const classes = useStyles();
  return (
    <DatePicker
      autoOk
      className={classes.dateInput}
      disableToolbar
      disablePast={event ? false : true}
      variant="inline"
      format="M/d/yyyy"
      TextFieldComponent={(props) => (
        <TextField
          {...props}
          label={labelName}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <DropdownIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default DatePickerComp;
