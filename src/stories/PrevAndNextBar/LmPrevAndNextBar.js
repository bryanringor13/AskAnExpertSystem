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
// const useStyles = makeStyles((theme) =>
// createStyles({
//   popover: {
//     pointerEvents: 'none',
//   },
//   paper: {
//     padding: theme.spacing(1),
//   },
// }),
// );

export const LmPrevAndNextBar = ({
  variant,
  gutterBottom,

  ...props
}) => {
  //       const classes = useStyles();
  //         const [anchorEl, setAnchorEl] = React.useState(null);

  //   const handlePopoverOpen = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  //   const handlePopoverClose = () => {
  //     setAnchorEl(null);
  //   };
  const [isShown, setIsShown] = useState(false);

  //   const open = Boolean(anchorEl);
  return (
    <div style={{ height: "600px", width: "100%" }}>
      <div
        style={{
          marginBottom: "10px",
          backgroundColor: "#E8E8E8",
          height: "500px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          "The Road goes ever on" - Bilbo Baggins
        </Typography>

        <Typography gutterBottom>
          Roads go ever ever on,
          <br />
          Over rock and under tree,
          <br />
          By caves where never sun has shone,
          <br />
          By streams that never find the sea;
          <br />
          Over snow by winter sown,
          <br />
          And through the merry flowers of June,
          <br />
          Over grass and over stone,
        </Typography>

        <Typography gutterBottom>
          Under cloud and under star,
          <br />
          Yet feet that wandering have gone
          <br />
          Turn at last to home afar.
          <br />
          Eyes that fire and sword have seen
          <br />
          And horror in the halls of stone
          <br />
          Look at last on meadows green
          <br />
          And trees and hills they long have known.
        </Typography>
      </div>

      <React.Fragment>
        {/* <CssBaseline /> */}

        <div
          style={{
            backgroundColor: "white",
            width: "1350px",
            display: "flex",
            flexDirection: "row",
            height: "50px",
          }}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {isShown && (
            <div style={{ position: "relative" }}>
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
                  position: "relative",
                  bottom: "5%",
                  left: "3%",
                }}
              >
                What was Bilbo smoking?ss
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
          <IconButton
            color="secondary"
            size="small"
            style={{ position: "fixed" }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Typography
            // aria-owns={open ? 'mouse-over-popover' : undefined}
            // aria-haspopup="true"
            // onMouseEnter={handlePopoverOpen}
            // onMouseLeave={handlePopoverClose}
            style={{ position: "fixed", bottom: "11.5%", left: "3%" }}
          >
            Previous Card
          </Typography>
          <Typography
            // aria-owns={open ? 'mouse-over-popover' : undefined}
            // aria-haspopup="true"
            // onMouseEnter={handlePopoverOpen}
            // onMouseLeave={handlePopoverClose}
            style={{ position: "fixed", left: "90%", bottom: "11.5%" }}
          >
            Next Card
          </Typography>
          <IconButton
            color="secondary"
            size="small"
            style={{ position: "fixed", left: "96%" }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </React.Fragment>
    </div>
  );
};
