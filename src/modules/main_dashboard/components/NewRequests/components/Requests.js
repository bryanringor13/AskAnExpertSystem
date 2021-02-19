import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import { LmTypography } from "../../../../../stories/Typography/LmTypography";
import { LmAvatar } from "../../../../../stories/Avatar/LmAvatar";

import { LmTypographyGrey } from "../../../../../stories/TypographyGrey/LmTypographyGrey";
import { LmTypographyPink } from "../../../../../stories/TypographyPink/LmTypographyPink";
import { LmDialog } from "../../../../../stories/DialogBox/LmDialog";
import { LmTextFieldWicon } from "../../../../../stories/TextFieldWithIcon/LmTextFieldWicon";
import { LmButton } from "../../../../../stories/LmButton/LmButton";
import { PreviousAndNextBar } from "../../../../../stories/PreviousAndNextBar/PreviousAndNextBar";
import { LmSubTopicNavigations } from "../../../../../stories/LmSubTopicNavigations/LmSubTopicNavigations";
import Header from "../../../../../shared/Header";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Paper from "@material-ui/core/Paper";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";

import { Avatar } from "@material-ui/core";
import { ticket } from "./constants/dummy_data";
import "./style.css";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Ticket = ({ userName, questionTitle, key }) => {
  return (
    <div>
      <div className="">
        <div className="jss155 jss113">
          <div className="jss156">
            <div>
              <Box mt={1} />
              <LmAvatar alt="Bilbo Baggins" className="jss162" />
            </div>
          </div>
          <div>
            <div>
              <span>
                <LmTypography Body16Med variant="subtitle1">
                  {userName}
                </LmTypography>
              </span>
            </div>
            <div>
              <span className="jss128 jss147 jss164 jss153">asked 23d ago</span>
            </div>
          </div>
        </div>
      </div>
      <Box mt={3} />
      {/* text content */}

      <LmTypographyGrey variant="body1">{questionTitle}</LmTypographyGrey>
    </div>
  );
};

const Requests = withRouter(({ history }) => {
  const classes = useStyles();
  const [openFilter, setOpenFilter] = React.useState(false);

  const openSubTopic = () => {
    console.log("Open Navigation");
    setOpenFilter(true);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <div style={{ width: "100%" }}>
            <Box display="flex" p={1}>
              <Box p={1} mr={23}>
                <IconButton onClick={() => history.push("/allRequest")}>
                  <ArrowBackIosIcon fontSize="small" color="primary" /> Back to
                  requests
                </IconButton>
              </Box>
              <Box p={1}></Box>

              <Box p={1} m={2} direction="column">
                <LmTypographyGrey>
                  {" "}
                  Assignee: Unassigned
                  <Link
                    component="button"
                    variant="body2"
                    style={{ marginLeft: "7px", fontStyle: "oblique" }}
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                  >
                    Assign to me
                  </Link>
                </LmTypographyGrey>
              </Box>
            </Box>
          </div>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="start"
            spacing={3}
          >
            {/* Title */}
            <Grid item xs={12} md={3} lg={3}>
              {/* question title */}
              <LmTypographyGrey variant="h6" component="div">
                <Box fontWeight="fontWeightBold">Requests for answer</Box>
              </LmTypographyGrey>
              <Box mt={2} />
              {ticket.map((item, index) => (
                <Ticket
                  key={index}
                  userName={item.userName}
                  salutation={item.salutation}
                  questionTitle={item.questionTitle}
                />
              ))}
            </Grid>
            <Grid item xs={12} md={9} lg={9}>
              {/* question title */}
              <LmTypographyGrey variant="h6">
                Where's the documentation on this please?
              </LmTypographyGrey>

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
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="start"
            spacing={3}
          >
            {/* 2 columns cards and requests */}
            <Grid item xs={12} md={9} lg={3}></Grid>
            <Grid item xs={12} md={9} lg={9}>
              {/* end 2 colums */}

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <IconButton>
                      <RateReviewOutlinedIcon color="primary" />
                      <LmTypographyPink component="div">
                        <Box fontWeight="fontWeightRegular" m={1}>
                          {" "}
                          <LmDialog>ANSWER KATHY'S QUESTION</LmDialog>
                        </Box>
                      </LmTypographyPink>
                    </IconButton>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  {/* textbox reply*/}
                  <LmTextFieldWicon />
                </Grid>
                <Grid container justify="flex-end" item xs={12}>
                  <Grid item xs={10}></Grid>
                  <Grid container justify="flex-end" item xs={2}>
                    <LmButton>Close Request</LmButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={9} lg={3}></Grid>
            <Grid item xs={12} md={9} lg={9}></Grid>
          </Grid>
          <PreviousAndNextBar></PreviousAndNextBar>
        </Container>
      </main>
    </div>
  );
});
export default Requests;
