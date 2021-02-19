import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import SortIcon from "@material-ui/icons/Sort";
import { Button, InputAdornment } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { LmTopicNavigations } from "../TopicNavigation/LmTopicNavigations";
import { OutlinedInput } from "@material-ui/core";

export const LmSearchBar = ({
  placeholder,
  orientation,
  endIcon,
  primary,
  propsKeydown,
  ...props
}) => {
  const [openFilter, setOpenFilter] = React.useState(false);
  const [input, setInput] = React.useState("");

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
        onKeyDown={keyPress}
        value={input}
        onChange={(evt) => setInput(evt.target.value)}
        color="primary"
        autoFocus={true}
        startAdornment={
          <InputAdornment
            position="start"
            className="MuiOutlinedInput-inputAdornedStart MuiOutlinedInput-inputAdornedEnd"
          >
            <SearchIcon />
          </InputAdornment>
        }
        fullWidth
        placeholder={placeholder}
        endAdornment={
          <InputAdornment
            position="end"
            className="MuiOutlinedInput-inputAdornedStart MuiOutlinedInput-inputAdornedEnd"
          >
            <Button onClick={openTopic} >
         
              <LmTopicNavigations>
                {" "}
                Filter Topic
                <SortIcon color="primary" />
              </LmTopicNavigations>

            </Button>
          </InputAdornment>
        }
      ></OutlinedInput>
    </FormControl>
  );
};
