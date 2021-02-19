import {
  Button,
  Divider,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Paper,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { request } from "../../modules/main_dashboard/components/MyRequests/components/constants/dummy_data_tabs";
import { LmAvatar } from "../Avatar/LmAvatar";
import { dum_data } from "./constants/dum.data";

require("./style.css");

export const LMAssignSME = ({
  placeholder,
  orientation,
  endIcon,
  primary,
  isSubmit,
  assignProps,
  ...props
}) => {
  const [openFilter, setOpenFilter] = React.useState(false);
  const [close, setClose] = React.useState(true);
  const [input, setInput] = React.useState("");
  const [relatedData, setRelated] = React.useState(dum_data);
  const [searchResult, sesearchResult] = React.useState(dum_data);

  const [componentCard, setcomponentCard] = React.useState({
    fCard: true,
    sCard: false,
    tCard: false,
  });

  const [state, setState] = React.useState({ fName: "", lName: "" });
  const [currentAssigned, setcurrentAssigned] = React.useState({
    fName: "",
    lName: "",
  });

  const openTopic = () => {
    console.log("Open Navigation");
    setOpenFilter(true);
  };

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      setClose(false);

      if (!input) {
        sesearchResult(relatedData);
        return;
      }

      let filteredData = relatedData.filter(
        (x) =>
          x.firstName.toUpperCase() === input.toUpperCase() ||
          x.lastName.toUpperCase() === input.toUpperCase()
      );
      sesearchResult(filteredData);
    }
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const openCloseCard = (closeCardName, openCardName) => {
    switch (closeCardName) {
      case "fCard":
        setcomponentCard((prevState) => ({
          ...prevState,
          fCard: false,
        }));
        break;
      case "sCard":
        setcomponentCard((prevState) => ({
          ...prevState,
          sCard: false,
        }));
        break;
      case "tCard":
        setcomponentCard((prevState) => ({
          ...prevState,
          tCard: false,
        }));
        break;
    }

    switch (openCardName) {
      case "fCard":
        setcomponentCard((prevState) => ({
          ...prevState,
          fCard: true,
        }));
        break;
      case "sCard":
        setcomponentCard((prevState) => ({
          ...prevState,
          sCard: true,
        }));
        break;
      case "tCard":
        setcomponentCard((prevState) => ({
          ...prevState,
          tCard: true,
        }));
        break;
    }
  };
  const selectExpert = (fname, lname) => {
    setState((prevState) => ({
      ...prevState,
      fName: fname,
      lName: lname,
    }));

    openCloseCard("tCard", "sCard");
    setClose(true);
  };
  const setCurrentAssigned = () => {
    setcurrentAssigned((prevState) => ({
      ...prevState,
      fName: state.fName,
      lName: state.lName,
    }));

    openCloseCard("sCard", "fCard");
    assignProps(state.fName);
  };
  const Assigned = () => {
    return (
      <div>
        <div class="jss2">
          <span></span>

          <Grid container>
            <Grid item></Grid>
            <Grid item>
              <div className="jss6">
                <Box p={1} flexGrow={1}></Box>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ width: "310px" }}
                  style={{ fontSize: "smaller" }}
                >
                  Assigned To
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container justify="space-between">
            <Grid>
              <div className="jss7"></div>
            </Grid>
            <Grid>
              <Box p={1} flexGrow={1}></Box>
              <div className="jss263 jss228">
                <IconButton onClick={() => openCloseCard("fCard", "tCard")}>
                  <CreateOutlinedIcon />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </div>
        <Box display="flex" p={1} style={{ padding: "7px 0px 0px 0px" }}>
          <Box p={1} flexGrow={1} style={{ padding: "0px" }}>
            <div class="d-table w-100">
              <div
                className="jss110"
                style={{ backgroundColor: "#ffffff", padding: "0px 12px" }}
              >
                <div className="jss155 jss113">
                  <div className="jss156">
                    <div>
                      <LmAvatar alt="Bilbo Baggins" className="jss162" />
                    </div>
                  </div>
                  <div className="jss157">
                    <div>
                      {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                      <span id="name">
                        {currentAssigned.lName !== ""
                          ? currentAssigned.lName + "," + currentAssigned.fName
                          : "No One"}
                      </span>
                    </div>
                    <div>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        style={{ width: "310px" }}
                        style={{ fontSize: "smaller" }}
                      >
                        Sub-Topic
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </div>
    );
  };

  const Question = ({ fName, lName }) => {
    return (
      <div>
        <Paper>
          <Box p={1} flexGrow={1}></Box>
          <div className="jss6" style={{ margin: "0px 14px 0px 14px" }}>
            Are you sure you want to assign this card to :
          </div>
          <Box display="flex" p={1}>
            <Box p={1} flexGrow={1}>
              <div class="d-table w-100">
                <div
                  className="jss110"
                  style={{ backgroundColor: "#ffffff", padding: "0px 12px" }}
                >
                  <div className="jss155 jss113">
                    <div className="jss156">
                      <div>
                        <LmAvatar alt="Bilbo Baggins" className="jss162" />
                      </div>
                    </div>
                    <div className="jss157">
                      <div>
                        {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                        <span id="name">
                          {state.lName},{state.fName}
                        </span>
                      </div>
                      <div>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          style={{ width: "310px" }}
                          style={{ fontSize: "smaller" }}
                        >
                          Sub-Topic
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
          <Box pt={2}> </Box>
          <div class="jss2">
            <span></span>

            <Grid container>
              <Grid item></Grid>
              <Grid item>
                <div className="jss6">
                  <Button
                    size="small"
                    className="jss40"
                    color="primary"
                    style={{ fontWeight: "bold", color: "#4c4444" }}
                    onClick={() => openCloseCard("sCard", "fCard")}
                  >
                    No
                  </Button>
                </div>
              </Grid>
            </Grid>

            <Grid container justify="space-between">
              <Grid>
                <div className="jss7"></div>
              </Grid>
              <Grid>
                <div className="jss263 jss228">
                  <Button
                    size="small"
                    className="jss40"
                    color="primary"
                    style={{ fontWeight: "bold", color: "#e31c79" }}
                    onClick={() => {
                      setCurrentAssigned();
                    }}
                  >
                    Yes, Assign
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
          <Box pt={2}> </Box>
        </Paper>
      </div>
    );
  };

  const Filter = () => {
    return (
      <div>
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
          placeholder="Type the expert's name here..."
          endAdornment={
            <InputAdornment
              position="end"
              className="MuiOutlinedInput-inputAdornedStart MuiOutlinedInput-inputAdornedEnd"
            ></InputAdornment>
          }
        ></OutlinedInput>

        {!close ? (
          <div>
            <Paper>
              <Box pt={2}> </Box>
              <div class="d-table w-100">
                <div
                  className="jss110"
                  style={{ backgroundColor: "#ffffff", padding: "0px 12px" }}
                >
                  <div className="jss155 jss113">
                    <div className="jss156">
                      <div>
                        <LmAvatar alt="Bilbo Baggins" className="jss162" />
                      </div>
                    </div>
                    <div className="jss157">
                      <div>
                        {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                        <span id="name">Assign to any SME from</span>
                      </div>
                      <div>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          style={{ width: "310px" }}
                          style={{ fontSize: "smaller" }}
                        >
                          Sub-Topic
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Box pt={2}> </Box>
              <Divider />
            </Paper>

            <List
              component="nav"
              className={classes.root}
              aria-label="mailbox folders"
            >
              {searchResult.map((_content) => (
                <div>
                  <ListItem
                    button
                    onClick={() =>
                      selectExpert(_content.firstName, _content.lastName)
                    }
                  >
                    <div class="border d-table w-100">
                      <div className="jss155 jss113">
                        <div className="jss156">
                          <div>
                            <LmAvatar alt="Bilbo Baggins" className="jss162" />
                          </div>
                        </div>
                        <div className="jss157">
                          <div>
                            {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                            <span id="name">
                              {_content.lastName},{_content.firstName}
                            </span>
                          </div>
                          <div>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              style={{ width: "310px" }}
                              style={{ fontSize: "smaller" }}
                            >
                              action on [# time] ago
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          </div>
        ) : null}
      </div>
    );
  };
  const classes = useStyles();
  return (
    <FormControl
      variant="outlined"
      className="MuiTextField-root MuiFormControl-fullWidth"
    >
      {componentCard.fCard ? <Assigned fName={"John"} lName={"Doe"} /> : null}

      {componentCard.sCard ? <Question fName={"John"} lName={"Doe"} /> : null}

      {componentCard.tCard ? <Filter /> : null}
    </FormControl>
  );
};
