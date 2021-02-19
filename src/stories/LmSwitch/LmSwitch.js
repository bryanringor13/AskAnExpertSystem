import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Box from "@material-ui/core/Box";
import Switch from '@material-ui/core/Switch';

export const LmSwitch = ({ children, onChange, link, color }) => {

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
  return (
    <Switch
    checked={state.checkedA}
    onChange={handleChange}
    name="checkedA"
    color={color}
    inputProps={{ 'aria-label': 'secondary checkbox' }}
  />
  );
};
