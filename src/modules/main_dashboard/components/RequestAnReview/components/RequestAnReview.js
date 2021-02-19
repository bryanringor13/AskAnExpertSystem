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
import { HeaderIcon } from "../../../../../stories/HeaderIcon/HeaderIcon";
import Skeleton from "@material-ui/lab/Skeleton";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Tooltip from "@material-ui/core/Tooltip";
import BlockOutlinedIcon from "@material-ui/icons/BlockOutlined";
import { dummy_data } from "../constants/dummy_data";
import RoomServiceOutlinedIcon from "@material-ui/icons/RoomServiceOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import NoteAddIconOutlined from "@material-ui/icons/NoteAddOutlined";
import { RichTextEditor } from "../../../../../stories/RichTextEditor/RichTextEditor";
import { LmButtonDropdown } from "../../../../../stories/LmButtonDropdown/LmButtonDropdown";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { withRouter } from "react-router-dom";
import { LmRequestsPopOver } from "../../../../../stories/Popovers/LmRequestsPopOver";
import React, { useEffect } from "react";
import { LMModal } from "../../../../../stories/LMModal/LMModal";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
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

const EditCard = ({ data, setisEdit }) => {
  const [showModal, setshowModal] = React.useState(false);

  function closeModal() {
    setshowModal(false);
  }

  const alertTest = () => {
    var html = document.querySelector(".ck-content").innerHTML;

    const t1 = data.replace(/<\/?[^>]+(>|$)/g, "").replace(/\s/g, "");
    const t2 = html.replace(/<\/?[^>]+(>|$)/g, "").replace(/\s/g, "");
    if (t1 !== t2) {
      setshowModal(true);
    } else {
      setisEdit(false);
    }
  };
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Paper className="req-answer-paper">
          <div className="edit-card">
            {showModal ? (
              <LMModal
                openModal={true}
                title={<ErrorOutlineOutlinedIcon style={{ fill: "red" }} />}
                footer={
                  <div style={{ textAlign: "right" }}>
                    <button id="btnBack" onClick={() => setshowModal(false)}>
                      BACK TO EDIT
                    </button>
                    <button id="btnExit" onClick={() => setisEdit(false)}>
                      EXIT WITHOUT SAVE
                    </button>
                  </div>
                }
                closeModal={closeModal}
                body={
                  <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                    You havent saved your changed yet.
                  </p>
                }
              />
            ) : null}

            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Typography
                  component="div"
                  variant="h5"
                  fontWeight="fontWeightBold"
                >
                  Edit card
                </Typography>
              </Grid>
              <Grid item xs={10} style={{ textAlign: "right" }}>
                <button className="btn-white-btn" onClick={() => alertTest()}>
                  CANCEL
                </button>
                <button
                  className="btn-pink-btn"
                  onClick={() => setisEdit(false)}
                >
                  PUBLISH
                </button>
              </Grid>
            </Grid>
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
        </Paper>
      </Grid>
    </Grid>
  );
};

const RequestAnReview = withRouter(({ history }) => {
  const classes = useStyles();
  const [assigned, setassigned] = React.useState(null);
  const [isEdit, setisEdit] = React.useState(false);

  const setAssignee = (e) => {
    setassigned(e);
  };

  const test = (e) => {
    console.log(e);
  };
  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <div id="mains">
          <div className="request-left" style={{ backgroundColor: "#ffffff" }}>
            <IconButton onClick={() => history.push("/allrequest")}>
              <ArrowBackIosIcon fontSize="small" color="primary" /> Back to
              request
            </IconButton>
            <Divider />
            <Box pt={1}></Box>
            <p class="fade-text left">Open request</p>
            <Box pt={1}></Box>
            <span className="bold-text">Request for review</span>
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
            <p>
              Where's the documentation on this topic please and is it renewed?
            </p>
          </div>
          <div className="request-main" style={{ backgroundColor: "#f2f2f2" }}>
            <div className="header-icon">
              {/* <HeaderIcon
                create={true}
                share={false}
                file={false}
                more={true}
                editClicked={(e) => setisEdit(true)}
              /> */}
            </div>

            <Box pt={1}></Box>

            {isEdit ? (
              <div>
                <EditCard data={dummy_data[0].content} setisEdit={setisEdit} />{" "}
                <Box pt={10}></Box>
              </div>
            ) : null}

            {!isEdit ? (
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Paper className="req-answer-paper">
                    <div id="pointpoint">
                      {" "}
                      <IconButton>
                        <LmRequestsPopOver
                          editClicked={() => setisEdit(true)}
                        ></LmRequestsPopOver>
                      </IconButton>
                    </div>
                    <span
                      className="request-title"
                      style={{ color: "#270f49" }}
                    >
                      What is track and trace?
                    </span>
                    {/* <div>
                        <span id="left-span-label">Name </span>
                        <span id="left-span">asked</span>
                        <span id="right-span">
                          <Skeleton variant="circle" width={25} height={25} />
                        </span>
                      </div> */}
                    <div>
                      <div className="jss110">
                        <div className="jss155 jss113">
                          <div className="jss156">
                            <div>
                              <LmAvatar
                                alt="Bilbo Baggins"
                                className="jss162"
                              />
                            </div>
                          </div>
                          <div className="jss157">
                            <div>
                              {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                              <span id="name">Dominic Khoo</span>
                              &nbsp;
                              <span className="jss128 jss147 jss164 jss153">
                                2d
                              </span>
                            </div>
                            <div>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                style={{
                                  width: "100px",
                                  fontSize: "smaller",
                                }}
                              >
                                Corporate product manager
                              </Typography>
                            </div>
                          </div>
                        </div>

                        <div className="jss114">
                          <Tooltip title="Views">
                            <div className="jss118">
                              <VisibilityOutlinedIcon className="jss117" />
                              {/* <span className="jss128 jss147 jss164 jss153">{numberConvert(views)}</span> */}
                              <span className="jss128 jss147 jss164 jss153">
                                12
                              </span>
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
                      {/* text content */}
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
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
});

export default RequestAnReview;
