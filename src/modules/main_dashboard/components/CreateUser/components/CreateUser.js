import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../../../../shared/Header";
import "./style.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { withRouter } from "react-router-dom";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { LmAvatar } from "../../../../../stories/Avatar/LmAvatar";
// import { articles } from "./constants/dummy_data2";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
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
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

const CreateUser = withRouter(({ history }) => {
  const classes = useStyles();


  return (
        <div className={classes.root} style={{ position: "relative" }}>
        <CssBaseline />
        <Header />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="xl" className="main-container">
            <div className="main-content">
              <Grid container spacing={3}>
                <div className={classes.root}>
                  <div className="mainDiv">
                    <div className="breadcrumbsStyle">
                      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        <Link className="linkColor" href="/getting-started/installation/" onClick={handleClick}>
                        Users
                        </Link>
                        <Typography color="textPrimary">Create</Typography>
                      </Breadcrumbs>
                      <Typography variant="h4" className="headingStyle">Create User</Typography>
                                      
                    </div>
                                  
                  </div>
                </div>     
                </Grid>
                <Grid container spacing={3}>
                </Grid>
            </div>
          </Container>
        </main>
        </div>
  );
});

export default CreateUser;
