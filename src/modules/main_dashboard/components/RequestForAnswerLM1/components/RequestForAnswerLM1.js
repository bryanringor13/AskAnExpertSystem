import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../../../../shared/Header";
import "./style.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { LmAvatar } from "../../../../../stories/Avatar/LmAvatar";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { Avatar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { LmSubTopicNavigations } from "../../../../../stories/LmSubTopicNavigations/LmSubTopicNavigations";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import { LmTextFieldWicon } from "../../../../../stories/TextFieldWithIcon/LmTextFieldWicon";
import { LmDialog } from "../../../../../stories/DialogBox/LmDialog";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import { articles } from "./constants/dummy_data2";

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

const RequestForAnswerLM1 = withRouter(({ history }) => {
  const classes = useStyles();
  const [openFilter, setOpenFilter] = React.useState(false);
  const [hasAssignee, sethasAssignee] = React.useState(false);
  const openSubTopic = () => {
    console.log("Open Navigation");
    setOpenFilter(true);
  };

  const setAssignee = (x) => {
    sethasAssignee(x);
    history.push("/createNewCard");
  };
  const Published = () => {
    return (
      <div>
        <h3>What is Track and Trace?</h3>

        <div className="jss110">
          <div className="jss155 jss113">
            <div className="jss156">
              <div>
                <LmAvatar alt="Bilbo Baggins" className="jss162" />
              </div>
            </div>
            <div className="jss157">
              <div>
                <span id="name">Lisa, Last Name</span>
              </div>
              <div>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ width: "310px" }}
                  style={{ fontSize: "smaller" }}
                >
                  SME role
                </Typography>
              </div>
            </div>
          </div>
          <div className="jss114">
            <Tooltip title="Views">
              <div className="jss118">
                <VisibilityOutlinedIcon className="jss117" />
                {/* <span className="jss128 jss147 jss164 jss153">{numberConvert(views)}</span> */}
                <span className="jss128 jss147 jss164 jss153">12</span>
              </div>
            </Tooltip>
          </div>
          <div className="jss171">
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
        </div>

        <div
          style={{ fontSize: "13px" }}
          className="requestContent"
          dangerouslySetInnerHTML={{ __html: articles[0].content1 }}
        />
      </div>
    );
  };
  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className="main-container">
          <div className="main-content">
            <Grid container spacing={0}>
              <Grid
                item
                xs={3}
                className="left-content"
                style={{
                  borderRightStyle: "solid",
                  borderRightWidth: "thin",
                  borderRightColor: "#e8e8e8",
                }}
              >
                <div className="left-req-for-ans">
                  <IconButton onClick={() => history.push("/allRequest")}>
                    <ArrowBackIosIcon fontSize="small" color="primary" />{" "}
                    <span className="small-text">Back to requests</span>
                  </IconButton>

                  <p className="bold-text">Request for answer</p>
                  <div className="jss155 jss113">
                    <div className="jss156">
                      <div>
                        <LmAvatar alt="Bilbo Baggins" className="jss162" />
                      </div>
                    </div>
                    <div className="jss157">
                      <div>
                        {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                        <span id="name">First, Last name</span>
                      </div>
                      <div>
                        <p class="fade-text left"> Asked 23 days ago</p>
                      </div>
                    </div>
                  </div>
                  <p>
                    Where's the documentation on this topic
                    <br /> please and is it renewed?
                  </p>
                </div>
              </Grid>
              <Grid item xs={9} className="right-content-request">
                <div className="left-req-for-ans">
                  {history.location.state !== undefined ? <Published /> : null}

                  {history.location.state === undefined ? (
                    <div>
                      <table>
                        <tr>
                          <td>
                            <span className="small-text">Assignee:</span>
                          </td>
                          <td>
                            <LmAvatar alt="Bilbo Baggins" className="jss162" />
                          </td>
                          <td>
                            <span className="small-text bold-tex">
                              {hasAssignee ? (
                                <span> John, Doe(You)</span>
                              ) : (
                                <span> unassign</span>
                              )}
                            </span>
                          </td>
                          <td>
                            <LmDialog action={(x) => setAssignee(true)}>
                              <span className="assign-link small-text">
                                Assign to me
                              </span>
                            </LmDialog>
                          </td>
                        </tr>
                      </table>

                      <div>
                        <h1>Where's the documentation on this topic please</h1>
                      </div>

                      <div className="jss110">
                        <div className="jss155 jss113">
                          <div className="jss156">
                            <Box mt={1} />
                            <div>
                              <Avatar alt="Bilbo Baggins" className="jss162" />
                            </div>
                          </div>
                          <div className="jss157">
                            <div>
                              <span
                                className="jss128 jss138 jss158 jss153"
                                chars1="Billy Bo"
                              ></span>
                              {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                            </div>
                            <div>
                              <span className="jss128 jss139 jss159 jss153"></span>
                            </div>
                          </div>
                        </div>

                        <div className="jss171">
                          <div className="jss115">
                            <div
                              className="jss167"
                              data-automation-key="ui-topic-subtopic-topic"
                              data-automation-value="customer-ops"
                            >
                              Main
                            </div>
                            <span className="jss172">&gt;</span>
                            <Button onClick={openSubTopic}>
                              {/* <LmTopicNavigations label='Sub Topic'> Sub Topic
                      </LmTopicNavigations> */}
                              <LmSubTopicNavigations label="Sub Topic">
                                Sub Topic
                              </LmSubTopicNavigations>
                            </Button>
                          </div>
                        </div>
                      </div>

                      <Paper className="paper-RFA">
                        <LmDialog action={(x) => setAssignee(true)}>
                          <table
                            style={{ marginLeft: "auto", marginRight: "auto" }}
                          >
                            <tr>
                              <td>
                                <RateReviewOutlinedIcon color="primary" />
                              </td>
                              <td>
                                <span className="span-answer-question bold-text">
                                  ANSWER KATHY'S QUESTION
                                </span>
                              </td>
                            </tr>
                          </table>
                        </LmDialog>
                      </Paper>
                      <Box mt={1} />
                      <LmTextFieldWicon placeholder="Reply to Kathy by adding a comment" />
                      <Box mt={2} />
                      <button className="btn-pink">CLOSE THIS REQUEST</button>
                    </div>
                  ) : null}
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </main>
    </div>
  );
});

export default RequestForAnswerLM1;
