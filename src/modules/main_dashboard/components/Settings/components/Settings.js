import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../../../../shared/Header";
import "./style.css";
import Container from "@material-ui/core/Container";
// import TextField  from "@material-ui/core/TextField ";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { dum_data } from "../constants/dummy.data";
import { LmTextField } from "../../../../../stories/TextField/LmTextField";
import Grid from "@material-ui/core/Grid";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Accordion from './AccordionComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%"
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
  ml: {
    marginLeft: theme.spacing(4),
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    flexGrow: 1,
  },
}));

const generateColor = () => {
  return "#" + Math.random().toString(16).substr(-6);
};

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Settings = () => {
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
                  <Grid direction="row">
                    <div className="breadcrumbsStyle">
                      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        <Link className="linkColor" href="/" onClick={handleClick}>
                          Hubs
                        </Link>
                        <Link className="linkColor" href="/getting-started/installation/" onClick={handleClick}>
                          Flamingo
                        </Link>
                        <Typography color="textPrimary">Settings</Typography>
                      </Breadcrumbs>

                      <Typography variant="h4" className="headingStyle">Settings</Typography>
                    </div>
                  </Grid>
                  <Grid container direction="row" className={classes.ml}>
                    <Grid xs={6}>
                      <Box mt={1}/>
                        <LmTextField placeholder="Hub Name"  label="Hub name" variant="filled" value="Flamingo"/>
                      <Box mt={2} />
                      <Box mt={1} />
                        <LmTextField placeholder="Description" label="Description" variant="filled" value="Test hub for us to learn the new platform"/>
                      <Box mt={2} />
                    </Grid>
                  </Grid>
                  <Grid direction="row">
                  {/* Accordion */}
                  <Accordion/>
                  {/* Accordion */}
                  </Grid>
                  </div>
                </div>
            </Grid>
          </div>
        </Container> 
        <div style={{marginTop: '60px', marginRight: '20px'}}>
        <button className="btn-pink">SAVE CHANGES</button>
        </div>
      </main>
     
    </div>
  );
  // return (
  //   <div className={classes.root} style={{ position: "relative" }}>
  //     <CssBaseline />
  //     <Header />
  //     <main className={classes.content}>
  //       <div className={classes.appBarSpacer} />
  //       <Container maxWidth="xl" className={classes.container}>
  //         <div className="main-content">
  //           <Breadcrumbs aria-label="breadcrumb">
  //             <Link color="inherit" href="/" onClick={() => alert("test")}>
  //               Hubs
  //             </Link>
  //             <Typography color="textPrimary">
  //               <ArrowForwardIos fontSize="small" /> The Brain</Typography>
  //           </Breadcrumbs>
  //           <Typography
  //             component="div"ou
  //             variant="h5"
  //             fontWeight="fontWeightBold"
  //           >
  //           Settings
  //           </Typography>
  //           <Box p={2}></Box>

  //           <Box mt={1} />
  //             <LmTextField placeholder="Hub Name"  label="Hub name" variant="filled" />
  //           <Box mt={2} />
  //           <Box mt={1} />
  //             <LmTextField placeholder="Description" label="Description" variant="filled" />
  //           <Box mt={2} />
  //           <Box mt={1} />
  //             <LmExpansion />
  //           <Box mt={2} />
  //         </div>
  //       </Container>
  //     </main>
  //   </div>
  // );
};

export default Settings;
