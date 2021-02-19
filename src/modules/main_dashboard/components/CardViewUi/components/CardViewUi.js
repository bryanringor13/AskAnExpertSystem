import React from 'react';
import Header from "../../../../../shared/Header";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from '@material-ui/core';
import { LMAssignSME } from "../../../../../stories/LMAssignSME/LMAssignSME";
import { LmAvatar } from "../../../../../stories/Avatar/LmAvatar";
import Paper from "@material-ui/core/Paper";
import Alert from "@material-ui/lab/Alert";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { articles } from "./constants/dummy_data";

// Button and Icon
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import RoomServiceOutlinedIcon from "@material-ui/icons/RoomServiceOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";

// css
require("./style.css");
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

const RelatedQuestion = ({ items }) => {
  return (
    <div className="div-related-question">
      <div id="div-related-question-title">Related questions</div>
      <div id="div-related-question-content">
        <ul style={{ listStyleType: "none", padding: "0px 0px 0px 13px" }}>
          {items.map((item, index) => (
            <li
              style={{
                fontSize: "12px",
                paddingBottom: "17px",
                color: "#777777",
              }}
            >
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const dummyRelated = [
  {
    value: "What is Track and Trace?",
  },
  {
    value: "Can I integrate wi API?",
  },
  {
    value: "How do you cost an integrated project?",
  },
  {
    value: "Whats an ERP?",
  },
  {
    value: "Whats an ERP?",
  },
];

const highlight = (text) => {
  var inputText = document.getElementById("ask-expert-body");
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text);
  if (index >= 0) {
    innerHTML =
      innerHTML.substring(0, index) +
      "<span class='highlight'>" +
      innerHTML.substring(index, index + text.length) +
      "</span>" +
      innerHTML.substring(index + text.length);
    inputText.innerHTML = innerHTML;
  }
};

const About = ({
  setAssignee,
  setaskExpertClicked,
  assigned,
  inputDisable,
}) => {
  const [input, setInput] = React.useState("");

  return (
    <div>
      <div>
        {inputDisable ? (
          <div>
            <div className="jss155 jss113">
              <div className="jss156">
                <div>
                  <LmAvatar alt="Bilbo Baggins" className="jss162" />
                </div>
              </div>
              <div className="jss157">
                <div>
                  {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                  <span id="name">Kathy(Customer/me)</span>
                </div>
              </div>
            </div>
            <p
              className="highlighted-text showHight"
              onClick={() => highlight(localStorage.getItem("higlight"))}
              style={{ cursor: "pointer" }}
            >
              Show Selected Text
            </p>
            <div id="comment-result">{input}</div>
          </div>
        ) : (
          <div>
            <div>
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                className="pop"
              >
                <div className="ask-left about">
                  What&#8216;s your enquiry about?
                </div>
                <div className="ask-right about">
                  <IconButton onClick={() => setaskExpertClicked(false)}>
                    <ClearOutlinedIcon style={{ fill: "#717171" }} />
                  </IconButton>
                </div>
              </div>

              <textarea
                id="comment-text"
                disabled={inputDisable}
                type="text"
                placeholder="Add you comment"
                rows="5"
                style={{
                  width: "100%",
                  resize: "none",
                  fontSize: "14px",
                  color: "#616161",
                  fontWeight: "bold",
                  outline: "none",
                }}
                onChange={(evt) => setInput(evt.target.value)}
              ></textarea>
            </div>
          </div>
        )}

        <LMAssignSME assignProps={(e) => setAssignee(e)} />
      </div>
    </div>
  );
};

const ContentFooter = () => {
  return (
    <div className="content-footer">
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

const SideContent = ({
  sethighlighedText,
  setaskExpertClicked,
  highlighedText,
}) => {
  return (
    <div>
      <div id="div-how">
        <span id="span-how-title">How to ask an expert?</span>
        <br />
        <span id="span-how-body">
          highlight any part of the answer and "Ask an expert"
        </span>
        <div>
          <p className="highlighted-text">Hightlight</p>
        </div>
      </div>
      <Box p={3}> </Box>
      <RelatedQuestion items={dummyRelated} />
      <Box p={1}> </Box>

      <div className="div-survey">
        Was this answer helpful?
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <Paper>
              <button class="btn-left">
                <ThumbUpAltOutlinedIcon />
                Yes
              </button>
            </Paper>
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper>
              <button class="btn-left">
                <ThumbDownOutlinedIcon />
                No
              </button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const CardViewUi = () => {
  const classes = useStyles();
  const [askExpertClicked, setaskExpertClicked] = React.useState(false);
  const [assigned, setassigned] = React.useState(null);
  const [highlighedText, sethighlighedText] = React.useState("");
  const [inputDisable, setinputDisable] = React.useState(false);

  const setAssignee = (e) => {
    setinputDisable(true);
    setassigned(e);
    const interval = setInterval(() => {
      setassigned(null);
      clearInterval(interval);
    }, 3000);
  };

  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {assigned !== null ? (
          <Alert variant="filled" severity="success">
            You have assigned [{assigned}] to this card
          </Alert>
        ) : null}
        <Container maxWidth="xl" className="main-container">
          <div class="main-content">
            <Grid container spacing={0}>
              {/* LEFT */}
              <Grid
                xs={3}
                className="left-content-container"
                style={{
                  padding: "0px 0px 0px 15px",
                  borderRightStyle: "solid",
                  borderRightWidth: "thin",
                  borderRightColor: "#c3c3c3",
                  height: "134vh",
                }}
              >
                <div className="left-content">
                  <IconButton onClick={() => alert("false")}>
                    <ArrowBackIosIcon fontSize="small" color="primary" /> Back
                  </IconButton>
                  {askExpertClicked ? (
                    <About
                      setAssignee={setAssignee}
                      setaskExpertClicked={setaskExpertClicked}
                      highlighedText={highlighedText}
                      assigned={assigned}
                      inputDisable={inputDisable}
                    />
                  ) : (
                    <SideContent
                      sethighlighedText={sethighlighedText}
                      highlighedText={highlighedText}
                      setaskExpertClicked={setaskExpertClicked}
                      highlighedText={highlighedText}
                    />
                  )}
                </div>
              </Grid>
              {/* RIGHT */}
              <Grid
                item
                xs={9}
                className="right-content"
                style={{ padding: "0px 10px 0px 10px" }}
              >
                <div className="right-contents" style={{ textAlign: "right" }}>
                    <IconButton>
                      <ShareOutlinedIcon />
                    </IconButton>
                  </div>
                  <div>
                    <span class="jss128 jss147 jss164 jss153">23 days ago</span>{" "}
                    <span class="jss128 jss147 jss165 jss153">Draft</span>
                  </div>
                  <div>
                    <div
                      style={{ display: "flex", justifyContent: "space-between" }}
                      className="pop"
                    >
                      <div className="ask-left">What is Track & Trace?</div>
                      <div className="ask-right">
                        <div className="text-container-hightlight">
                          <div className="jss115">
                            <div
                              className="jss167"
                              data-automation-key="ui-topic-subtopic-topic"
                              data-automation-value="customer-ops"
                              style={{
                                padding: "3px 5px 2px 5px",
                                background: "#5A00BE",
                              }}
                            >
                              Main
                            </div>
                            <div
                              className="jss169"
                              data-automation-key="ui-topic-subtopic-subtopic"
                              data-automation-value="pre-sales"
                              style={{ padding: "3px 5px 2px 5px" }}
                            >
                              Sub Topic
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Divider />
                    {articles.map((item, index) => (
                      <div
                        id="ask-expert-body"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    ))}
                  </div>
                  <Box pt={2}></Box>
                    <ContentFooter />
                  <Box pt={5}></Box>
              </Grid>
            </Grid>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default CardViewUi;