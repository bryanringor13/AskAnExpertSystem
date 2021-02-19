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
import AccessAlarmOutlinedIcon from "@material-ui/icons/AccessAlarmOutlined";
import { PercentageCircularProgress } from "../PercentageCircularProgress/PercentageCircularProgress";
import { RequestHandlingTime } from "../RequestHandlingTime/RequestHandlingTime";

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

export const LMRequestHandlingGraph = ({ value, children, onChange, link }) => {
  const Bar = () => {
    return <div></div>;
  };
  const percentageRequest = 77;
  const percentageClose = 94;
  const prctRiders = 73;
  const prctTrade = 73;
  const prctLicencing = 67;
  const prctIncome = 65;
  const prctCares = 48;

  const classes = useStyles();
  return (
    <div className="main-card">
      <div className="card-title">Request handling performance</div>
      <div className="container-text-graph">
        <div className="tRow">
          <div className="left">
            <div className="left-title-header">
              <AccessAlarmOutlinedIcon />{" "}
              <span className="left-title-text">
                Average request waiting time
              </span>
              <div className="open-request-total">
                <span className="open-request-text">45 hrs</span>
              </div>
              <div className="request-open-in-title">
                <span className="request-open-in-text">
                  Average waiting time per topic (hrs)
                </span>
              </div>
              <Box p={1} />
              <div className="progress-container">
                <Grid container spacing={0}>
                  <Grid item xs={7}>
                    <span style={{ color: "#ffffff", fontSize: "small" }}>
                      Riders
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <div
                      className="child-progress-perf"
                      style={{ width: `${prctRiders}%` }}
                    ></div>
                  </Grid>
                  <Grid item xs={1}>
                    <span style={{ color: "#ffffff", fontSize: "small" }}>
                      {prctRiders}
                    </span>
                  </Grid>
                </Grid>
                <Box p={0.1} />
                <Grid container spacing={0}>
                  <Grid item xs={7}>
                    <span style={{ color: "#ffffff", fontSize: "11px" }}>
                      Trade/Exchange/Funds
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <div
                      className="child-progress-perf"
                      style={{ width: `${prctTrade}%` }}
                    ></div>
                  </Grid>
                  <Grid item xs={1}>
                    <span style={{ color: "#ffffff", fontSize: "small" }}>
                      {prctTrade}
                    </span>
                  </Grid>
                </Grid>
                <Box p={0.1} />
                <Grid container spacing={0}>
                  <Grid item xs={7}>
                    <span style={{ color: "#ffffff", fontSize: "10px" }}>
                      Licensing/Broker Changes
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <div
                      className="child-progress-perf"
                      style={{ width: `${prctLicencing}%` }}
                    ></div>
                  </Grid>
                  <Grid item xs={1}>
                    <span style={{ color: "#ffffff", fontSize: "small" }}>
                      {prctLicencing}
                    </span>
                  </Grid>
                </Grid>

                <Box p={0.1} />
                <Grid container spacing={0}>
                  <Grid item xs={7}>
                    <span style={{ color: "#ffffff", fontSize: "small" }}>
                      Income Products
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <div
                      className="child-progress-perf"
                      style={{ width: `${prctIncome}%` }}
                    ></div>
                  </Grid>
                  <Grid item xs={1}>
                    <span style={{ color: "#ffffff", fontSize: "small" }}>
                      {prctIncome}
                    </span>
                  </Grid>
                </Grid>

                <Box p={0.1} />
                <Grid container spacing={0}>
                  <Grid item xs={7}>
                    <span style={{ color: "#ffffff", fontSize: "9px" }}>
                      CARES Act / COVID-19 Impact
                    </span>
                  </Grid>
                  <Grid item xs={4}>
                    <div
                      className="child-progress-perf"
                      style={{ width: `${prctCares}%` }}
                    ></div>
                  </Grid>
                  <Grid item xs={1}>
                    <span style={{ color: "#ffffff", fontSize: "small" }}>
                      {prctCares}
                    </span>
                  </Grid>
                </Grid>
              </div>
              <Box p={1} />
              <div className="legend-container">
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6}>
                    <span className="legend-text">
                      <div className="less-color">Less than 24 hours</div>
                    </span>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <span className="legend-text">
                      <div className="more-color">More than 24 hours</div>
                    </span>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-title-header">
              <span className="left-title-text right">Request Activity</span>

              <Box p={1} />
              <div className="progress-container">
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <div className="circular-chart">
                      <PercentageCircularProgress />
                    </div>
                    <div className="req-handling-time">
                      <RequestHandlingTime />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
