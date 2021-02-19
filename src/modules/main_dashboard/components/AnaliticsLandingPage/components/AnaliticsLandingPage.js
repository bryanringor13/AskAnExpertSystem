import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../../../../shared/Header";
import "./style.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import { LMRequestGraph } from "../../../../../stories/LMRequestGraph/LMRequestGraph";
import { LMRequestHandlingGraph } from "../../../../../stories/LMRequestHandlingGraph/LMRequestHandlingGraph";
import { LMBrainGrowthGraph } from "../../../../../stories/LMBrainGrowthGraph/LMBrainGrowthGraph";
import Box from "@material-ui/core/Box";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import DateRangeIcon from '@material-ui/icons/DateRange';
import IconButton from "@material-ui/core/IconButton";
import { LmCalendarModal } from "../../../../../stories/LmCalendarModal/LmCalendarModal";
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

const AnaliticsLandingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
        
          <div className="main-content">
          <div style={{ width: "100%" }}>
          <Box display="flex">
            <Typography
              component="div"
              variant="h5"
              fontWeight="fontWeightBold"
            >
              Hub 360 overview
            </Typography>
  
         
            <IconButton style={{position: 'absolute', right: '2%', top: '8%'}} >
   
                <DateRangeIcon />
                <Typography component="div">
                        <Box fontWeight="fontWeightRegular" m={1}>
                          {" "}
                          <LmCalendarModal>Date Ranges</LmCalendarModal>
                        </Box>
                      </Typography>
              </IconButton>
    
         
           
            </Box>
        
            </div>
            {/* <Box p={1} /> */}
            <div className="grid-main">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <span className="Card-Title">Hub Traffic</span>
                  <Paper className={classes.paper}>
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={4}>
                        <div className="grid-group">
                          <div>
                            <ArrowUpwardIcon style={{ fill: "green" }} />
                            <span>450</span>
                          </div>
                          Hub activity
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4} className="grid-group">
                        <div className="grid-group">
                          <div>
                            <ArrowUpwardIcon style={{ fill: "green" }} />
                            <span>12</span>
                          </div>
                          Searching the hub
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4} className="grid-group">
                        <div className="grid-group">
                          <div>
                            <ArrowUpwardIcon style={{ fill: "green" }} />
                            <span>5/12</span>
                          </div>
                          Active Experts
                        </div>
                      </Grid>
                    </Grid>

                    <Box p={1} />

                    <Grid container spacing={1}>
                      <Grid item xs={12} md={4}>
                        <div className="grid-group">
                          <div>
                            <div className="sub-title">
                              Hot subtopics (list)
                            </div>
                          </div>
                          <div className="sub-content">
                            Bar List of topic &#62; Subtopic = sum request (open
                            and closed in the period) and views asscociated with
                            subtopic
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4} className="grid-group">
                        <div className="grid-group">
                          <div>
                            <div className="sub-title">Top users (list)</div>
                          </div>
                          <div className="sub-content">
                            Bar = Sum request created + Search + views - Mouse
                            over gives values breakdown per topic / subtopic
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={4} className="grid-group">
                        <div className="grid-group">
                          <div>
                            <div className="sub-title">Top experts (list)</div>
                          </div>
                          <div className="sub-content">
                            List of experts &#62; Number of requests closed over
                            the period for each expert
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                {/* brain maturity */}
                <Grid item xs={12} md={6}>
                  <span className="Card-Title">Brain Maturity</span>
                  <Paper className={classes.paper} id="paper-maturity">
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={6}>
                        <div className="grid-group">
                          Brain coverage
                          <div>
                            <ArrowUpwardIcon style={{ fill: "green" }} />
                            <span>65%</span>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={6} className="grid-group">
                        <div className="grid-group">
                          Content performance
                          <div>
                            <ArrowUpwardIcon style={{ fill: "green" }} />
                            <span>90%</span>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </div>
            {/* request */}
            <Box p={1} />
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <span className="Card-Title">Expert community performance</span>
                <Paper className={classes.paper}>
                  <div className="LMRequestGraph-content">
                    <LMRequestGraph />
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <span className="Card-Title">Expert community performance</span>
                <Paper className={classes.paper}>
                  <div className="LMRequestGraph-content">
                    <LMRequestHandlingGraph />
                  </div>
                </Paper>
              </Grid>
            </Grid>

            <Box p={1} />
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <span className="Card-Title">Brain evolution</span>
                <Paper className={classes.paper}>
                  <div className="LMRequestGraph-content">
                    <LMBrainGrowthGraph />
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <span className="Card-Title">&nbsp;</span>

                <Paper className="LMRequestGraph-content-none">&nbsp;</Paper>
              </Grid>
            </Grid>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default AnaliticsLandingPage;
