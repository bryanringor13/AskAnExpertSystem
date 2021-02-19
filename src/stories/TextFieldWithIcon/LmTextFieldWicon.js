import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import SortIcon from "@material-ui/icons/Sort";
import { InputAdornment } from "@material-ui/core";
import { FormControl } from "@material-ui/core";

import { OutlinedInput } from "@material-ui/core";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

export const LmTextFieldWicon = ({
  fullWidth,
  placeholder,
  variant,
  children,
  onKeyDown,
}) => {
  return (
    <div>
      <FormControl
        variant={variant}
        className="MuiTextField-root MuiFormControl-fullWidth"
      >
        <OutlinedInput
          onKeyDown={onKeyDown}
          startAdornment={
            <InputAdornment
              position="start"
              className="MuiOutlinedInput-inputAdornedStart MuiOutlinedInput-inputAdornedEnd"
            >
              {children}
            </InputAdornment>
          }
          fullWidth={true}
          placeholder={placeholder}
          endAdornment={
            <InputAdornment
              position="end"
              className="MuiOutlinedInput-inputAdornedStart MuiOutlinedInput-inputAdornedEnd"
            >
              <CreateOutlinedIcon color="primary" />
            </InputAdornment>
          }
        ></OutlinedInput>
      </FormControl>
    </div>
  );
};

LmTextFieldWicon.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
  fullWidth: true,
};
