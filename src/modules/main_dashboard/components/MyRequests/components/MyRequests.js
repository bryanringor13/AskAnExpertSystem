import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Grid from "@material-ui/core/Grid";
import { LmTypography } from "../../../../../stories/Typography/LmTypography";
import { LmAvatar } from "../../../../../stories/Avatar/LmAvatar";
import { articles } from "./constants/dummy_data";
import { related, request } from "./constants/dummy_data_tabs";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { PreviousAndNextBar } from "../../../../../stories/PreviousAndNextBar/PreviousAndNextBar";
import { HeaderIcon } from "../../../../../stories/HeaderIcon/HeaderIcon";
import { BackIcon } from "../../../../../stories/BackIcon/BackIcon";
import { SurveySection } from "../../../../../stories/SurveySection/SurveySection";
import { LmTypographyGrey } from "../../../../../stories/TypographyGrey/LmTypographyGrey";
import { LmTabs } from "../../../../../stories/Tabs/LmTabs";
import Header from "../../../../../shared/Header";
import IconButton from "@material-ui/core/IconButton";
import Alert from "@material-ui/lab/Alert";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import { LmRequestsPopOver } from "../../../../../stories/Popovers/LmRequestsPopOver";
// import { Breadcrumbs } from '@material-ui/core';import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { LmButton } from "../../../../../stories/LmButton/LmButton";
import { LmEditModal } from "../../../../../stories/DialogBox/LmEditModal";
import { Paper } from "@material-ui/core";
import { LMModal } from "../../../../../stories/LMModal/LMModal";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import { RichTextEditor } from "../../../../../stories/RichTextEditor/RichTextEditor";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { useHistory } from "react-router-dom";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  overrides: {
    MuiTabs: {
      root: {
        display: "block",
      },
    },
    MUIDataTableHeadCell: {
      data: {
        fontWeight: "bold",
      },
    },
  },

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

const Article = ({
  userName,
  salutation,
  content1,
  content2,
  content3,
  content4,
  content5,
}) => {
  return (
    <div>
      <div className="jss110">
        <div 
        className="jss155 jss113"
        >
          <div className="jss156">
            <div>
              <LmAvatar alt="Bilbo Baggins" className="jss162" />
            </div>
          </div>
          <div className="jss157">
            <div>
              {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
              <span id="name">{userName}</span>
              &nbsp;
              <span className="jss128 jss147 jss164 jss153">1 month ago</span>
            </div>
            <div>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ width: "100px", fontSize: "smaller" }}
              >
                {salutation}
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
              Acccounting
            </div>
            <div
              className="jss169"
              data-automation-key="ui-topic-subtopic-subtopic"
              data-automation-value="pre-sales"
            >
              Basic Acccounting
            </div>
          </div>
        </div>
      </div>
      {/* text content */}
      <LmTypography variant="body2" component="h2">
        <div
          className="requestContent"
          dangerouslySetInnerHTML={{ __html: content1 }}
        />
      </LmTypography>
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
                  <p className="subTitleText">What is General Ledger</p>
                </div>

                <p className="subTitle">Topic/Subtopics</p>
                <div className="text-container">
                  <div className="jss115">
                    <div
                      className="jss167"
                      data-automation-key="ui-topic-subtopic-topic"
                      data-automation-value="customer-ops"
                    >
                      Acccounting
                    </div>
                    <div
                      className="jss169"
                      data-automation-key="ui-topic-subtopic-subtopic"
                      data-automation-value="pre-sales"
                    >
                      Basic Acccounting
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

const MyRequests = () => {
  let histories = useHistory();
  const role =
  histories.location.state === undefined
    ? localStorage.getItem("role")
    : histories.location.state.role;
  const tabs = [
    {
      label: "RELATED",
      hasIcon: false,
      content: related,
    },
    {
      label: "REQUEST",
      hasIcon: true,
      content: request,
    },
  ];
  const [isEdit, setisEdit] = React.useState(false);
  const classes = useStyles();
  const [isSubmitted, setisSubmitted] = React.useState(false);

  const submitClicked = (e) => {
    setisSubmitted(true);
    const interval = setInterval(() => {
      setisSubmitted(false);
      clearInterval(interval);
    }, 3000);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        {isSubmitted ? (
          <Alert variant="filled" severity="success">
            Your request has been sent.
          </Alert>
        ) : null}

        <Container maxWidth="xl" className={classes.container}>
          <div style={{ width: "100%" }}>
            <Box display="flex" p={1}>
              <BackIcon link="/dashboard">
                <span>Brain Page</span>
              </BackIcon>
              <IconButton>
                <ShareOutlinedIcon />
              </IconButton>
              {role === "sme" ? (

<LmEditModal>
              <IconButton>
                <CreateOutlinedIcon />
              </IconButton>

      
              </LmEditModal>
  ) : null}

{role === "sme" ? (
              <IconButton>
                <FileCopyOutlinedIcon />
              </IconButton>
    ) : null}
             
             {role === "sme" ? (
              <IconButton>
                <LmRequestsPopOver></LmRequestsPopOver>
              </IconButton>
          ) : null}
         
            </Box>
          </div>
          <Box pt={1}></Box>

{isEdit ? (
  <div>
    <EditCard data={articles[0].content1} setisEdit={setisEdit} />{" "}
    <Box pt={10}></Box>
  </div>
) : null}

          {!isEdit ? (
<div>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="start"
            spacing={3}
          >
            {/* 2 columns cards and requests */}
            <Grid item xs={12} md={9} lg={3} style={{ padding: "0px" }}>
              <LmTabs
                tabs={tabs}
                badgeContent={request.length}
                onClicked={(e) => submitClicked(e)}
                hasExpertButton={true}
              />
            </Grid>
            <Grid item xs={12} md={9} lg={9}>
              <Typography variant="h6" style={{ color: "#000000" }}>
              What is General Ledger
              </Typography>
              {articles.map((item, index) => (
                <Article
                  userName={item.userName}
                  content1={item.content1}
                  content2={item.content2}
                  content3={item.content3}
                  content4={item.content4}
                  content5={item.content5}
                  salutation={item.salutation}
                />
              ))}
            </Grid>
            <Grid item xs={12} md={9} lg={3}></Grid>
            {/* <CardView></CardView> */}
            <Grid item xs={12} md={9} lg={9}>
              <div style={{ width: "100%", display: "flex" }}>
                <SurveySection></SurveySection>
              </div>
            </Grid>
            <Grid item xs={12} md={9} lg={9}></Grid>
          </Grid>
          <PreviousAndNextBar></PreviousAndNextBar>
          </div>
            ) : null}
        </Container>
      </main>
    </div>
  );
};
export default MyRequests;
