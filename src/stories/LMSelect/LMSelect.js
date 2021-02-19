import React, { useState } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { Checkbox, Divider, Icon, Paper, Popover } from "@material-ui/core";
import "./LMSelect.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import { CheckBox } from '@material-ui/icons';
import { LmAvatar } from "../Avatar/LmAvatar";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import RoomServiceOutlinedIcon from "@material-ui/icons/RoomServiceOutlined";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import moment from "moment";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
export const LMSelect = ({ items, placeholder, variant, labelId }) => {
  const [values, setvalues] = React.useState(0);

  const handleChange = (event) => {
    setvalues(event.target.value);
  };

  return (
      <Select
        labelId={labelId}
        id="demo-simple-select-helper"
        value={values}
        onChange={handleChange}
        variant={variant}
      >
        <MenuItem disabled value={0}>
          <em>{placeholder}</em>
        </MenuItem>
        {items.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.text}
            </MenuItem>
          );
        })}
      </Select>
  );
};

export default LMSelect;
