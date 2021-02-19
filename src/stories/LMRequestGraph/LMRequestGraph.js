import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import { LmLineGraph } from "../LmLineGraph/LmLineGraph";

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(4),
  },
  rail: {
    height: theme.spacing(4),
  },
  track: {
    height: theme.spacing(4),
  },
  mark: {
    height: theme.spacing(4),
    backgroundColor: "none",
    display: "none",
  },
  thumb: {
    display: "none",
  },
}));

export const LMRequestGraph = ({ value, children, onChange, link }) => {
  const Bar = () => {
    return <div></div>;
  };
  const percentageRequest = 77;
  const percentageClose = 94;

  const classes = useStyles();
  return (
    <div className="main-card">
      <div className="card-title">Request</div>
      <Box p={1} />
      <div className="container-text">
        <div className="tRow">
          <div className="left">
            <div className="left-title-header">
              <ListOutlinedIcon />{" "}
              <span className="left-title-text">Open Request</span>
              <div className="open-request-total">
                <span className="open-request-text">2</span>
              </div>
              <div className="request-open-in-title">
                <span className="request-open-in-text">Request open in</span>
              </div>
              <Box p={1} />
              <div className="progress-container">
                <Grid container spacing={0}>
                  <Grid item xs={7}>
                    <span style={{ color: "#ffffff", fontSize: "small" }}>
                      Income Products
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="child-progress"></div>
                  </Grid>
                  <Grid item xs={1}>
                    <span style={{ color: "#ffffff", fontSize: "small" }}>
                      1
                    </span>
                  </Grid>
                </Grid>
                <Box p={0.1} />
                <Grid container spacing={0}>
                  <Grid item xs={7}>
                    <span style={{ color: "#ffffff", fontSize: "small" }}>
                      Fraud/Security Checks
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="child-progress"></div>
                  </Grid>
                  <Grid item xs={1}>
                    <span style={{ color: "#ffffff", fontSize: "small" }}>
                      1
                    </span>
                  </Grid>
                </Grid>
              </div>
              <Box p={6.5} />
              <div className="legend-container">
                <span className="legend-text">
                  <div className="legend-color">Request Answer</div>
                </span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-title-header">
              <span className="left-title-text right">Request Activity</span>

              <Box p={1} />
              <div className="progress-container">
                <Grid container spacing={0}>
                  <Grid item xs={7}>
                    <span style={{ color: "#ffffff", fontSize: "small" }}>
                      Request Raised
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="parent-progress right1">
                      <div
                        className="child-progress right1"
                        style={{ width: `${percentageRequest}%` }}
                      ></div>
                    </div>
                  </Grid>
                  <Grid item xs={1}>
                    <span style={{ color: "#ffffff", fontSize: "small" }}>
                      {percentageRequest}
                    </span>
                  </Grid>
                </Grid>
                <Box p={0.1} />
                <Grid container spacing={0}>
                  <Grid item xs={7}>
                    <span style={{ color: "#ffffff", fontSize: "small" }}>
                      Request Closed
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="parent-progress right1">
                      <div
                        className="child-progress right1"
                        style={{
                          width: `${percentageClose}%`,
                          background: "#6ab4ac",
                        }}
                      ></div>
                    </div>
                  </Grid>
                  <Grid item xs={1}>
                    <span style={{ color: "#ffffff", fontSize: "small" }}>
                      {percentageClose}
                    </span>
                  </Grid>
                </Grid>
              </div>
              <div className="request-open-in-title">
                <span className="request-open-in-text">Open Request Trend</span>
              </div>
              <div className="line-graph">
                <LmLineGraph />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
