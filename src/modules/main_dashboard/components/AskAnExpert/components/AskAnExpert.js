import { Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LmButton } from "../../../../../stories/LmButton/LmButton";
import { LmSelectTopicButton } from "../../../../../stories/LmSelectTopicButton/LmSelectTopicButton";
import { LmSelectTopicNavigation } from "../../../../../stories/LmSelectTopicNavigation/LmSelectTopicNavigation";
import { LmSearchBarQuestion } from "../../../../../stories/SearchBarQuestion/LmSearchBarQuestion";
import { LmTypographyGrey } from "../../../../../stories/TypographyGrey/LmTypographyGrey";
import SubdirectoryArrowLeftIcon from "@material-ui/icons/SubdirectoryArrowLeft";
import Header from "../../../../../shared/Header";
import "./style.css";
import { withRouter } from "react-router-dom";
import { LmTopicNavigations } from "../../../../../stories/TopicNavigation/LmTopicNavigations";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

const AskAnExpert = withRouter(({ history }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
            spacing={3}
          >
            {/* Chart */}
            <Grid item xs={12} md={9} lg={12}>
              {/* <Paper className={fixedHeightPaper}> */}

              <div class="border d-table w-100">
                <LmTypographyGrey variant="h5">Ask an expert </LmTypographyGrey>
                <div class="d-table-cell tar">
                  <LmButton
                    primary
                    type="submit"
                    size="small"
                    onClick={() => {
                      localStorage.setItem("askAnExpertSuccess", false);
                      history.push({
                        pathname: "/dashboard",
                      });
                    }}
                  >
                    Discard
                  </LmButton>
                  &nbsp;
                  <LmButton
                    primary
                    type="submit"
                    size="small"
                    onClick={() => {
                      localStorage.setItem("askAnExpertSuccess", true);
                      history.push({
                        pathname: "/dashboard",
                      });
                    }}
                  >
                    Submit
                  </LmButton>
                </div>
              </div>
            </Grid>
          </Grid>

          <Box pt={2}> </Box>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={9}>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item>
                    <WbIncandescentIcon
                      color="primary"
                      style={{ transform: "rotate(180deg)" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          Hi Lisa
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          <h1>What question would you like to ask?</h1>
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          style={{ width: "310px" }}
                        >
                          Everytime a question is sent to the expers, you are
                          actually contributing towards the brain knowledge and
                          making it smarter, Enter your question and press enter{" "}
                          {<SubdirectoryArrowLeftIcon color="primary" />} on you
                          keyboard to start
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              <Box pt={2}> </Box>
              <LmSearchBarQuestion isSubmit={false} />
              <LmTopicNavigations >
                <LmSelectTopicButton>Select Topic</LmSelectTopicButton>
              </LmTopicNavigations >
            </Grid>
          </Grid>
          {/* <Box pt={4}>
            Pagination on the right
            <Copyright />
          </Box> */}
        </Container>
      </main>
    </div>
  );
});
export default AskAnExpert;
