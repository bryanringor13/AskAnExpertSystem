import React from "react";
import useScript from "usescript-hook";
import SearchIcon from "@material-ui/icons/Search";
import SortIcon from "@material-ui/icons/Sort";
import { Button, InputAdornment } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { LmTopicNavigations } from "../TopicNavigation/LmTopicNavigations";
import { OutlinedInput } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export const LmSearch = ({
  placeholder,
  orientation,
  endIcon,
  primary,
  propsKeydown,
  initInput,
  ...props
}) => {
  const loaded = useScript("https://kit.fontawesome.com/a076d05399.js");
  const [openFilter, setOpenFilter] = React.useState(false);
  const [input, setInput] = React.useState(initInput);

  const openTopic = () => {
    console.log("Open Navigation");
    setOpenFilter(true);
  };

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      propsKeydown(input);
    }
  };

  return (
    <FormControl
      variant="outlined"
      className="MuiTextField-root MuiFormControl-fullWidth"
    >
      <OutlinedInput
        color="primary"
        autoFocus={true}
        onKeyDown={keyPress}
        value={input}
        onChange={(evt) => setInput(evt.target.value)}
        startAdornment={
          <InputAdornment
            position="start"
            className="MuiOutlinedInput-inputAdornedStart MuiOutlinedInput-inputAdornedEnd"
          >
            <i class="fab fa-foursquare" style={{ color: "#f50057" }}></i>
          </InputAdornment>
        }
        fullWidth
        placeholder="Search Terms"
        endAdornment={
          <InputAdornment
            position="end"
            className="MuiOutlinedInput-inputAdornedStart MuiOutlinedInput-inputAdornedEnd"
          >
            <Button style={{ textTransform: "none", color: "#686F8A" }}>
              More Filters
              <ArrowRightAltIcon
                color="secondary"
                style={{ marginLeft: "5px" }}
              />
            </Button>
          </InputAdornment>
        }
      ></OutlinedInput>
    </FormControl>
  );
};
