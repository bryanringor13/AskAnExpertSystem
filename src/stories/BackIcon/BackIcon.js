import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Box from "@material-ui/core/Box";

export const BackIcon = ({ children, onChange, link }) => {
  return (
    <Box p={1} flexGrow={1}>
      <IconButton href={link}>
        <ArrowBackIosIcon fontSize="small" color="primary" /> {children}
      </IconButton>
    </Box>
  );
};
