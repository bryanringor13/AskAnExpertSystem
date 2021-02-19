import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../../../../shared/Header";
import "./style.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import { LmAvatar } from "../../../../../stories/Avatar/LmAvatar";
import Box from "@material-ui/core/Box";
import { dummy_data } from "../constants/dummy_data";
import Skeleton from "@material-ui/lab/Skeleton";
import RoomServiceOutlinedIcon from "@material-ui/icons/RoomServiceOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import { RichTextEditor } from "../../../../../stories/RichTextEditor/RichTextEditor";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { LmButtonDropdown } from "../../../../../stories/LmButtonDropdown/LmButtonDropdown";
import { withRouter } from "react-router-dom";

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

const ContentFooter = () => {
  return (
    <div>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <div className="jss110">
              <div className="jss155 jss113">
                <div className="jss156">
                  <div>
                    <LmAvatar alt="Bilbo Baggins" className="jss162" />
                  </div>
                </div>
                <div className="jss157">
                  <div>
                    {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                    <span id="name">SME name</span>
                  </div>
                  <div>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{ width: "310px" }}
                      style={{ fontSize: "smaller" }}
                    >
                      22 days ago
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="jss114"></div>
              <div className="jss114">
                <Tooltip title="Views">
                  <div className="jss118">
                    <VisibilityOutlinedIcon className="jss117" />
                    <span className="jss128 jss147 jss164 jss153">0</span>
                  </div>
                </Tooltip>
              </div>
              <div className="jss114">
                <Tooltip title="Views">
                  <div className="jss118">
                    <RoomServiceOutlinedIcon className="jss117" />
                    <span className="jss128 jss147 jss164 jss153">0</span>
                  </div>
                </Tooltip>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const CreateCard = ({ data, setisCreate }) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Paper className="req-answer-paper">
          <div className="edit-card">
            <IconButton onClick={() => setisCreate(false)}>
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
            <button onClick={() => setisCreate(false)} className="btn-save">
              SAVE AND CLOSE
            </button>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

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
          <div className="review-btn">
            <LmButtonDropdown
              label1={"PUBLISH AND CLOSE REQUEST"}
              label2={"PUBLISH AS DRAFT"}
              label3={"CANCEL"}
              cancel={() => setisEdit(false)}
              widthProps="100%"
            />
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

const AccurateComment = withRouter(({ history }) => {
  const classes = useStyles();
  const [isCreate, setisCreate] = React.useState(false);
  const [isEdit, setisEdit] = React.useState(false);
  const [accurateClicked, setAccurateClicked] = React.useState(false);
  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className="main-container">
          <div className="main-content">
            <Grid container spacing={0}>
              <Grid item xs={3} className="left-content">
                <div>
                  <IconButton onClick={() => history.push("/allrequest")}>
                    <ArrowBackIosIcon fontSize="small" color="primary" /> Back
                    to request
                  </IconButton>
                  <div className="left-container">
                    <Box pt={1}></Box>
                    <p class="fade-text left">Open request</p>
                    <Divider />
                    <Box pt={1}></Box>
                    <span className="bold-text">
                      Request for an confirmation
                    </span>
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
                    <Box pt={2}></Box>
                    <Divider />
                    <Box pt={2}></Box>
                    <p className="p-assign-to">Assign to</p>
                    <div className="jss155 jss113">
                      <div className="jss156">
                        <div>
                          <LmAvatar alt="Bilbo Baggins" className="jss162" />
                        </div>
                      </div>
                      <div className="jss157">
                        <div>
                          {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                          <span id="name">Abraham Lincoln</span>
                        </div>
                        <div>
                          <p class="fade-text left"> Role</p>
                        </div>
                      </div>
                    </div>

                    <div className="answer-box">
                      <p className="fade-text seld-assign-text-answer">Kathy</p>
                      <p className="lbl-note">
                        Hi team, is this information still valid?
                      </p>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={9} className="right-content">
                <div className="right-container">
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Paper className={classes.paper}>
                        <Grid container spacing={0}>
                          <Grid item xs={6}>
                            <div className="paper-accurate">
                              <span
                                className="paper-accurate-text"
                                onClick={() => setAccurateClicked(true)}
                                style={{
                                  cursor: "pointer",
                                  background: accurateClicked
                                    ? "whitesmoke"
                                    : "none",
                                  padding: "5px",
                                }}
                              >
                                THIS INFORMATION IS ACCURATE
                              </span>
                            </div>
                          </Grid>
                          <Grid item xs={6}>
                            <div className="paper-accurate">
                              <span
                                className="paper-accurate-text"
                                onClick={() => setAccurateClicked(false)}
                                style={{
                                  cursor: "pointer",
                                  background: !accurateClicked
                                    ? "whitesmoke"
                                    : "none",
                                  padding: "5px",
                                }}
                              >
                                THIS INFORMATION IS NOT ACCURATE
                              </span>
                            </div>
                          </Grid>

                          <Grid item xs={12}>
                            <div
                              className="paper-accurate comment"
                              style={{
                                display: accurateClicked ? "block" : "none",
                              }}
                            >
                              <span className="paper-accurate-text add-comment">
                                Add a comment so the rquester can better
                                understand:
                              </span>
                              <div>
                                <textarea
                                  id="textarea-accurate"
                                  rows="5"
                                  style={{ width: "100%", resize: "none" }}
                                ></textarea>
                              </div>
                              <div style={{ textAlign: "right" }}>
                                <button
                                  className="btn-compose"
                                  onClick={() => setAccurateClicked(false)}
                                >
                                  CONFIRM AND CLOSE
                                </button>
                              </div>
                              <Box pt={2}></Box>
                            </div>
                          </Grid>
                          <Grid item xs={5}>
                            <div
                              className="paper-accurate btn1"
                              style={{
                                display:
                                  isCreate || isEdit || accurateClicked
                                    ? "none"
                                    : "block",
                              }}
                            >
                              <button
                                className="btn-compose"
                                onClick={() => setisCreate(true)}
                              >
                                CREATE NEW CARD
                              </button>
                            </div>
                          </Grid>
                          <Grid item xs={1}>
                            <div
                              className="paper-accurate"
                              style={{
                                display:
                                  isCreate || isEdit || accurateClicked
                                    ? "none"
                                    : "block",
                              }}
                            >
                              or
                            </div>
                          </Grid>
                          <Grid item xs={5}>
                            <div
                              className="paper-accurate btn2"
                              style={{
                                display:
                                  isCreate || isEdit || accurateClicked
                                    ? "none"
                                    : "block",
                              }}
                            >
                              <button
                                className="btn-compose"
                                onClick={() => setisEdit(true)}
                              >
                                EDIT INFORMATION
                              </button>
                            </div>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  </Grid>

                  {isEdit ? (
                    <EditCard
                      data={dummy_data[0].content}
                      setisEdit={setisEdit}
                    />
                  ) : null}
                  {isCreate ? <CreateCard setisCreate={setisCreate} /> : null}
                  <Box pt={2}></Box>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Paper
                        className="req-answer-paper"
                        style={{
                          display: isCreate || isEdit ? "none" : "block",
                        }}
                      >
                        <div>
                          <span class="jss128 jss147 jss164 jss153">
                            23 days ago
                          </span>
                        </div>

                        <span
                          className="request-title"
                          style={{ color: "#270f49" }}
                        >
                          What is track and trace?
                        </span>
                        <div>
                          <span id="left-span-label">Name </span>
                          <span id="left-span">asked</span>
                          <span id="right-span">
                            <Skeleton variant="circle" width={25} height={25} />
                          </span>
                        </div>

                        {dummy_data.map((item, index) => (
                          <div
                            className="requestContent"
                            dangerouslySetInnerHTML={{ __html: item.content }}
                          />
                        ))}

                        <div className="jss171 main">
                          <div className="jss115">
                            <div
                              className="jss167"
                              data-automation-key="ui-topic-subtopic-topic"
                              data-automation-value="customer-ops"
                            >
                              Main
                            </div>
                            <div
                              className="testtest"
                              data-automation-key="ui-topic-subtopic-subtopic"
                              data-automation-value="pre-sales"
                            >
                              Sub Topic
                            </div>
                          </div>
                        </div>
                        <Box pt={2}></Box>
                        <ContentFooter />
                        <Box pt={5}></Box>
                      </Paper>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </main>
    </div>
  );
});

export default AccurateComment;
