import React, { useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./LmDialog.css";
import { dum_data } from "./constants/dum.data";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CheckIcon from "@material-ui/icons/Check";
import { LmAvatar } from "../Avatar/LmAvatar";
import { LmTypography } from "../Typography/LmTypography";
import { LmTypographyGrey } from "../TypographyGrey/LmTypographyGrey";
import { Grid, IconButton, List, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { LmArtificialProcess } from "../LmArtificialProcess/LmArtificialProcess";
import LmTextField from "../TextField/LmTextField";

import ListItem from "@material-ui/core/ListItem";
import { LmSearchBar } from "../SearchBar/LmSearchBar";
import { LmSelectTopicButton } from "../LmSelectTopicButton/LmSelectTopicButton";
import { LmSelectTopicNavigation } from "../LmSelectTopicNavigation/LmSelectTopicNavigation";
import { LmTopicNavigations } from "../TopicNavigation/LmTopicNavigations";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { LmMoveDiscardModal } from "./LmMoveDiscardModal";
import { LmSuccessAlert } from "../LmSuccessAlert/LmSuccessAlert";

const DarkTextTypography = withStyles({
  root: {
    color: "#000",
  },
})(LmTypography);

export const LmMoveCardsModal = ({ children, addToForm, moveItems, msg }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("lg");
  const [value, setValue] = React.useState("");
  const [isMove, setisMove] = React.useState(false);
  const [checkBoxValue, setcheckBoxValue] = React.useState("all");

  const handleClickOpen = () => {
    setOpen(true);
  };

  //   const handleMaxWidthChange = (event) => {
  //     setMaxWidth(event.target.value);
  //   };

  //   const handleFullWidthChange = (event) => {
  //     setFullWidth(event.target.checked);
  //   };

  const handleClose = () => {
    setOpen(false);
    setisMove(false);
    msg("test");
  };
  const handleCloseCancel = () => {
    setOpen(false);
    setisMove(false);
    // msg("test");
  };
  const handleConfirm = (e) => {
    setOpen(false);
    e.preventDefault();
    if (!value) return;
    addToForm(value);
    setValue("");
    // return <LmSuccessAlert setAlert={true} >Your cards has been successfully moved.</LmSuccessAlert>
    // console.log("set route based on history")
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // if(!value) return;
    // addToForm(value);
    // setValue('');
  };

  const TitleMoveCards = () => {
    const handleChange = (event) => {
      setcheckBoxValue(event.target.value);
    };

    return (
      <div>
        <Typography style={{ fontWeight: "bold" }}>Move Cards</Typography>
        <Box mt={2} />
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={checkBoxValue}
            onChange={handleChange}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <FormControlLabel
                  value="all"
                  control={<Radio />}
                  label="Move all cards to the same topic"
                />
              </div>
              <div>
                <FormControlLabel
                  value="each"
                  control={<Radio />}
                  label="Move each card to a different topic"
                />
              </div>
            </div>
          </RadioGroup>
        </FormControl>
      </div>
    );
  };

  const ConfTitleMoveCards = () => {
    return (
      <div>
        <Typography style={{ fontWeight: "bold" }}>
          Youre about to move {moveItems.length} cards
        </Typography>
        <Box mt={2} />
        <FormControl component="fieldset"></FormControl>
      </div>
    );
  };
  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen}>
        {children}
      </Button>
      {dum_data.map((data) => (
        <Dialog
          open={open}
          // open={true}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          style={{ padding: "30px 204px" }}
          fullScreen={fullScreen}
          maxWidth={maxWidth}
        >
          <Box mt={2} />
          <DialogTitle id="alert-dialog-title">
            {isMove ? <ConfTitleMoveCards /> : <TitleMoveCards />}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {/* start header with title component */}

              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                className="pop"
              >
                <div
                  className="ask-left"
                  style={{ fontSize: "12px", color: "#696969" }}
                >
                  <span id="move-count">{moveItems.length}</span>
                  cards selected
                </div>
                <div className="header-move">{isMove ? "Move to" : "From"}</div>
                {!isMove ? <div className="header-move">Move to</div> : null}
              </div>

              {moveItems.map((value, index) => (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  className="pop"
                >
                  <div className="ask-left">
                    <Paper style={{ padding: "12px" }}>
                      What is usability testing?
                    </Paper>
                  </div>
                  <div className="header-move" style={{ padding: "10px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      className="pop"
                    >
                      <div className="ask-left">
                        <div id="grey-box">
                          Artificial <br /> Inteligence
                        </div>
                      </div>
                      <div>&#62;</div>
                      <div className="ask-right">
                        <div id="white-box">
                          Artificial <br /> Inteligence
                        </div>
                      </div>
                    </div>
                  </div>
                  {index === 0 ? (
                    !isMove ? (
                      <div className="header-move">
                        <LmTopicNavigations>
                          <LmSelectTopicButton>
                            Select Topic
                          </LmSelectTopicButton>
                        </LmTopicNavigations>
                      </div>
                    ) : null
                  ) : (
                    <div>
                      {checkBoxValue === "all" ? (
                        <Box p={1} m={9}></Box>
                      ) : (
                        <LmSelectTopicNavigation>
                          <LmSelectTopicButton>
                            Select Topic
                          </LmSelectTopicButton>
                        </LmSelectTopicNavigation>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* end header modal card */}
            </DialogContentText>
          </DialogContent>
          <Box pt={2} pb={5} px={2}>
            <DialogActions>
              <Button
                color="secondary"
                variant="outlined"
                style={{ padding: "6px" }}
                onClick={() => handleCloseCancel(false)}
              >
                CANCEL
              </Button>
              <Box mr={2} />
              <Button
                onClick={() => (!isMove ? setisMove(true) : handleClose(false))}
                color="primary"
                variant="contained"
                autoFocus
              >
                {isMove ? "MOVE CARDS" : "MOVE"}
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
      ))}
    </div>
  );
};
