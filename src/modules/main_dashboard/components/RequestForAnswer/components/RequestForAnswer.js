import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../../../../shared/Header";
import "./style.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { LmAvatar } from "../../../../../stories/Avatar/LmAvatar";
import { LMAssignSME } from "../../../../../stories/LMAssignSME/LMAssignSME";
import Skeleton from "@material-ui/lab/Skeleton";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Tooltip from "@material-ui/core/Tooltip";
import BlockOutlinedIcon from "@material-ui/icons/BlockOutlined";
import { withRouter } from "react-router-dom";
import { RichTextEditor } from "../../../../../stories/RichTextEditor/RichTextEditor";
import { LmButtonDropdown } from "../../../../../stories/LmButtonDropdown/LmButtonDropdown";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import { dum_data } from "../constants/dummy.data";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    flexGrow: 1,
  },
}));

const EditCard = ({ data, setisEdit }) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Paper className="req-answer-paper">
          <div className="edit-card">
            <IconButton onClick={() => setisEdit(false)}>
              <ArrowBackIosIcon fontSize="small" color="primary" /> Back
            </IconButton>

            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={0}
            >
              <Grid item xs={12} style={{ width: "100%" }}>
                <p className="subTitle">Visible Question</p>
                <div className="text-container">
                  <p className="subTitleText">What is Track & Trace</p>
                </div>

                <p className="subTitle">Topic/Subtopics</p>
                <div className="text-container">
                  <div className="jss115">
                    <div
                      className="jss167"
                      data-automation-key="ui-topic-subtopic-topic"
                      data-automation-value="customer-ops"
                    >
                      Main
                    </div>
                    <div
                      className="jss169"
                      data-automation-key="ui-topic-subtopic-subtopic"
                      data-automation-value="pre-sales"
                    >
                      Sub Topic
                    </div>
                  </div>
                </div>

                {/* RTE */}
                <p className="subTitle">Answer</p>
                <form id="myform">
                  <RichTextEditor data={data} />
                </form>

                <p className="subTitle">Invisible Question</p>

                <div className="container-text">
                  <div className="tRow">
                    <div className="left">Invisible question 1</div>
                    <div className="right">
                      <RemoveCircleOutlineIcon />
                    </div>
                  </div>
                </div>

                <Box pt={1}> </Box>
                <div className="container-text">
                  <div className="tRow">
                    <div className="left">Invisible question 2</div>
                    <div className="right">
                      <RemoveCircleOutlineIcon />
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <span>
              <AddCircleOutlineOutlinedIcon style={{ height: "16px" }} />
            </span>
            <span className="add-question-label">Add question</span>
          </div>
          <div className="save-btn">
            <button onClick={() => setisEdit(false)} className="btn-save">
              SAVE AND CLOSE
            </button>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

const RequestForAnswer = withRouter(({ history }) => {
  const classes = useStyles();
  const [assigned, setassigned] = React.useState(null);
  const [isEdit, setisEdit] = React.useState(false);
  const [openSearch, setOpenSearch] = React.useState(false);

  const setAssignee = (e) => {
    setassigned(e);
  };

  const SearchExistingAnswer = () => {
    const [values, setValues] = React.useState({
      amount: "",
      password: "",
      weight: "",
      weightRange: "",
      showPassword: false,
    });
    const [data, setData] = React.useState(dum_data);
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
      var results = dum_data;
      var filterAnswer = results.filter(
        (condition) =>
          typeof condition.title == "string" &&
          condition.title
            .toUpperCase()
            .indexOf(event.target.value.toUpperCase()) > -1
      );

      setData(filterAnswer);
    };
    return (
      <div>
        <div
          style={{ display: "flex", cursor: "pointer" }}
          id="back-action"
          onClick={() => setOpenSearch(false)}
        >
          <ArrowBackIosOutlinedIcon style={{ height: "17px" }} />
          <span style={{ fontSize: "13px" }}>Back</span>
        </div>
        <Input
          style={{ width: "100%" }}
          placeholder="Search for existing answer"
          id="standard-adornment-weight"
          value={values.weight}
          onChange={handleChange("weight")}
          endAdornment={
            <InputAdornment position="end">
              <SearchOutlinedIcon />
            </InputAdornment>
          }
          aria-describedby="standard-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
        <Box mt={2} />
        <Grid container spacing={1}>
          {data.map((item) => (
            <Grid item xs={12}>
              <Paper style={{ padding: "10px 20px 10px 20px" }}>
                <p class="fade-text card">{item.title}</p>
                <p class="fade-text sub-card">{item.description}</p>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };

  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <div id="mains">
          <div className="request-left" style={{ backgroundColor: "#ffffff" }}>
            {isEdit ? (
              <div className="span-left">
                <span className="span-left-answer">Requests</span>
                <span className="span-right-answer">&#60; 1 of 245 &#62;</span>
              </div>
            ) : (
              <IconButton onClick={() => history.push("/allrequest")}>
                <ArrowBackIosIcon fontSize="small" color="primary" /> Back to
                request
              </IconButton>
            )}

            <Divider />
            <Box pt={1}></Box>
            <p class="fade-text left">Open request</p>
            <Box pt={1}></Box>
            <span className="bold-text">Request for an answer</span>
            <Box pt={2}></Box>
            <div className="jss155 jss113">
              <div className="jss156">
                <div>
                  <LmAvatar alt="Bilbo Baggins" className="jss162" />
                </div>
              </div>
              <div className="jss157">
                <div>
                  {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                  <span id="name">Kathy Last name</span>
                </div>
                <div>
                  <p class="fade-text left"> Role</p>
                </div>
              </div>
            </div>
            <Box pt={1}></Box>
            <Divider />
            <Box pt={1}></Box>
            <LMAssignSME assignProps={(e) => setAssignee(e)} />

            <p
              className="fade-text seld-assign-text"
              onClick={() => setAssignee("self")}
            >
              ASSIGN TO ME
            </p>
          </div>
          <div className="request-main" style={{ backgroundColor: "#f2f2f2" }}>
            {isEdit ? (
              <div>
                <EditCard setisEdit={setisEdit} />
                <Box pt={10}></Box>
              </div>
            ) : null}
            {!isEdit ? (
              <div>
                {openSearch ? (
                  <SearchExistingAnswer />
                ) : (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <span className="request-title">
                          Recomended answers
                        </span>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <SearchOutlinedIcon
                          onClick={() => setOpenSearch(true)}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>

                    <Grid container spacing={1}>
                      <Grid item xs={12} md={12}>
                        <Grid container spacing={1}>
                          <Grid item xs={12} md={4}>
                            <Paper
                              style={{ height: "100%" }}
                              className="req-answer-paper"
                              onClick={() => history.push("/previewAnswer")}
                            >
                              <p class="fade-text card">
                                What is Track & Trace
                              </p>

                              <p class="fade-text sub-card">
                                Sometimes you hear people say questions were
                                "hard"
                              </p>
                            </Paper>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Paper
                              style={{ height: "100%" }}
                              className="req-answer-paper"
                              onClick={() => history.push("/previewAnswer")}
                            >
                              <p class="fade-text card">
                                What does Track & Trace do?
                              </p>
                              <p class="fade-text sub-card">
                                Sometimes you hear people say questions were
                                "hard"
                              </p>
                            </Paper>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Paper
                              style={{ height: "100%" }}
                              className="req-answer-paper"
                              onClick={() => history.push("/previewAnswer")}
                            >
                              <p class="fade-text card">
                                What is the standard implementation
                              </p>
                              <p class="fade-text sub-card">
                                Sometimes you hear people say questions were
                                "hard"
                              </p>
                            </Paper>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Box pt={1}></Box>

                    <Grid container spacing={0}>
                      <Grid item xs={12}>
                        <Paper className="req-answer-paper">
                          <span className="request-title">
                            What is track and trace?
                          </span>
                          <Tooltip
                            title={
                              assigned === null ? (
                                <div>
                                  <BlockOutlinedIcon />
                                  <span className="tolltip-msg">
                                    Please assign task to yourself first
                                  </span>
                                </div>
                              ) : (
                                ""
                              )
                            }
                          >
                            <div className="compose-answer">
                              <button
                                className="btn-compose"
                                disabled={assigned === null ? true : false}
                                onClick={() => setisEdit(true)}
                              >
                                COMPOSE ANSWER
                              </button>
                            </div>
                          </Tooltip>
                          <Grid container spacing={0}>
                            <Grid item xs={6}>
                              <Grid container spacing={0}>
                                <Grid item xs={1}>
                                  <Skeleton
                                    variant="circle"
                                    width={40}
                                    height={40}
                                  />
                                </Grid>

                                <Grid item xs={3}>
                                  <Skeleton variant="text" />
                                  <Skeleton variant="text" width={80} />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                    </Grid>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
});

export default RequestForAnswer;
