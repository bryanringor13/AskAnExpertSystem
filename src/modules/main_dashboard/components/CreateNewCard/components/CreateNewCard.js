import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Header from "../../../../../shared/Header";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import { LmButtonDropdown } from "../../../../../stories/LmButtonDropdown/LmButtonDropdown";
import { LmSearchBarQuestion } from "../../../../../stories/SearchBarQuestion/LmSearchBarQuestion";
import { LmSelectTopicNavigation } from "../../../../../stories/LmSelectTopicNavigation/LmSelectTopicNavigation";
import { LmTopicNavigations } from "../../../../../stories/TopicNavigation/LmTopicNavigations";
import { LmSelectTopicButton } from "../../../../../stories/LmSelectTopicButton/LmSelectTopicButton";
import { LmMainTopicAndSubTopic } from "../../../../../stories/LmMainTopicAndSubTopic/LmMainTopicAndSubTopic";
import { RichTextEditor } from "../../../../../stories/RichTextEditor/RichTextEditor";
import { LmTextField } from "../../../../../stories/TextField/LmTextField";
import Box from "@material-ui/core/Box";
import { LMModal } from "../../../../../stories/LMModal/LMModal";
import { LmAvatar } from "../../../../../stories/Avatar/LmAvatar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import { withRouter } from "react-router-dom";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { ButtonBase } from "@material-ui/core";
import { LmTypographyGrey } from "../../../../../stories/TypographyGrey/LmTypographyGrey";
import AddIcon from "@material-ui/icons/Add";
import { FormControl } from "@material-ui/core";
import { LmInfoAlert } from "../../../../../stories/LmInfoAlert/LmInfoAlert";
import { LmCreateCardModal } from "../../../../../stories/DialogBox/LmCreateCardModal"
import { LmTypography } from "../../../../../stories/Typography/LmTypography";
import { LmDiscardModal } from "../../../../../stories/DialogBox/LmDiscardModal";

require("./style.css");



const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(LmTypography);
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
  icon: {
    marginTop: "40px",
  },
}));

const CreateNewCard = withRouter(({ history }) => {
  const classes = useStyles();

  const [openFilter, setOpenFilter] = React.useState(false);
  const [showModal, setshowModal] = React.useState(false);

  const redirect = () => {
    history.push({
      pathname: "/allRequest",
      state: { detail: "test" },
    });
  };
  const handleAddQuestion = () => {
    console.log("Click Button add");
  };
  const openSelectTopic = () => {
    setOpenFilter(true);
  };

  function closeModal() {
    setshowModal(false);
  }

  const Modal = () => {
    return (
      <LMModal
        openModal={showModal}
        title={<HeaderModal />}
        footer={<FooterModal />}
        closeModal={closeModal}
        body={<BodyModal />}
        hasStyle={true}
      />
    );
  };

  const HeaderModal = () => {
    return (
      <div className="modal-header">
        <span className="modal-header-title">Request Details</span>

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

        <div style={{ fontSize: "13px" }}>
          Where's the documentation on this topic please and is it renewed?
        </div>
      </div>
    );
  };
  const BodyModal = () => {
    return (
      <div className="modal-Body">
        <IconButton
          style={{ paddingLeft: "0px" }}
          onClick={() => alert("test")}
        >
          <ArrowBackIosIcon fontSize="small" color="primary" />{" "}
          <span className="small-text">View all similar cards</span>
        </IconButton>

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

          <div style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    );
  };

  const FooterModal = () => {
    return (
      <div className="modal-footer-btns">
        <button className="btn-white-btn" onClick={() => setshowModal(false)}>
          BACK TO SIMILAR CARDS
        </button>
        <button className="btn-pink-btn" onClick={() => setshowModal(false)}>
          LINK THIS CARD
        </button>
      </div>
    );
  };
  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Modal />
          <div className="main-content">
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <Typography
                  component="div"
                  variant="h5"
                  fontWeight="fontWeightBold"
                >
                  Add an answer
                </Typography>
              </Grid>
              <Grid item xs={10} style={{ textAlign: "right" }}>
              
                <button className="backButton" >
                <LmDiscardModal>
                {/* <a  style={{textDecoration: 'none', color: '#868080'}}
                    href="/myRequestsEdit"
                    > */}
                     DISCARD 
                     {/* </a> */}
               </LmDiscardModal>
                </button>

                
                <button
                  className="publishButton"
                 
                >
                   <LmCreateCardModal >
                   <WhiteTextTypography>PUBLISH</WhiteTextTypography>
                  </LmCreateCardModal>
                </button>
              </Grid>
            
            </Grid>

            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={12} style={{ width: "145vh" }}>
            
            <Tooltip placement="right" title="Visible Questions are questions that are displayed to the chat user when the brain is not confident that it has an answer to the question, it provides the user with alternative questions that may be what the user is asking for.">
                <span className="subTitle">Visible Question <InfoOutlinedIcon color="primary" fontSize="small"/></span>
                </Tooltip>
          
          <div style={{marginTop: '10px'}}>
                <LmSearchBarQuestion
                  isSubmit={false}
                  onClick={() => setshowModal(true)}
                />
</div>
                <Grid item container justify="space-between">
                  <Grid item>
                    <LmTopicNavigations>
                      <LmSelectTopicButton
                        color="primary"
                        size="small"
                        onClick={openSelectTopic}
                      >
                        Select Topic
                      </LmSelectTopicButton>
                    </LmTopicNavigations>
                  </Grid>
                  <Grid item>
                    <LmMainTopicAndSubTopic />
                  </Grid>
                </Grid>
                <span className="subTitle-newcard">Answer</span>
                <RichTextEditor />
                <Tooltip placement="right" title="Invisible Questions are paraphrases added to a Visible question. Invisible questions improve the brain response and are never shown to chat users.">
                <span className="subTitle-newcard">Invisible question  <InfoOutlinedIcon className={classes.icon} color="primary" fontSize="small"/> </span>
               </Tooltip>
                <FormControl
                variant="outlined"
                className="MuiTextField-root MuiFormControl-fullWidth"
              >
             <div style={{marginTop: '10px'}}>
                <LmTextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter invisible question"
                ></LmTextField>
                <Box mt={2} mb={2} />
                <LmTextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter invisible question"
                >
                  What is Track and Trace
                </LmTextField>
                </div>
                </FormControl>
                <Box mt={2} />
              </Grid>
              <Grid container justify="flex-start" style={{marginLeft: '35px'}}>
              <Box mt={2} mb={2} />
              <ButtonBase centerRipple="true" onClick={handleAddQuestion}>
                <AddIcon color="primary" />
                <LmTypographyGrey>Add invisible question</LmTypographyGrey>
              </ButtonBase>
            </Grid>
            </Grid>

          </div>
        </Container>
      </main>
    </div>
  );
});

export default CreateNewCard;
