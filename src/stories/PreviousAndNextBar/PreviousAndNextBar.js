import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { TextareaAutosize } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";
import { Box } from "@material-ui/core";

export const PreviousAndNextBar = ({
  variant,
  gutterBottom,

  ...props
}) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}

      <div
        style={{
          backgroundColor: "white",
          width: "1000px",
          display: "relative",
          flexDirection: "row",
          height: "120px",
          marginTop: "150px",
        }}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isShown && (
          <div>
            <Box
              direction="row"
              style={{
                color: "#363e53",
                overFlow: "hidden",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "1.5",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                letterSpacing: "0.5px",
                position: "fixed",
                bottom: "5%",
                left: "18%",
                position: "fixed",
              }}
            >
              What was Bilbo smoking?
            </Box>

            <Box
              direction="row"
              style={{
                color: "#363e53",
                overFlow: "hidden",
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "1.5",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                letterSpacing: "0.5px",
                position: "fixed",
                bottom: "5%",
                right: "3%",
              }}
            >
              How tall was Bilbo Baggins?
            </Box>
          </div>
        )}
        <div style={{ display: "flex", position: "relative" }}>
          <Box p={1} flexGrow={1} style={{ position: "absolute" }}>
            <IconButton>
              <ArrowBackIosIcon fontSize="small" color="primary" /> Previous
            </IconButton>
          </Box>

          <Box p={1} flexGrow={1} style={{ marginLeft: "1100px" }}>
            <IconButton>
              Next
              <ArrowForwardIosIcon fontSize="small" color="primary" />
            </IconButton>
          </Box>
        </div>
      </div>
    </React.Fragment>
  );
};
