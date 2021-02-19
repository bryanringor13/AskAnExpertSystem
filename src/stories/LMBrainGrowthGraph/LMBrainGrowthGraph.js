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

export const LMBrainGrowthGraph = ({ value, children, onChange, link }) => {
  const Bar = () => {
    return <div></div>;
  };
  const percentageRequest = 77;
  const percentageClose = 94;
  const prctRiders = 90;
  const prctRiders2 = 5;
  const prctTrade = 73;
  const prctLicencing = 67;
  const prctIncome = 65;
  const prctCares = 48;

  const percentageWithdraw = 100;
  const percentageBenefeciary = 100;
  const percentageNewBusiness = 100;
  const percentageNewHeights = 100;
  const percentageTax = 100;

  const percentageNewWithdraw = 48;
  const percentageNewBenefeciary = 42;
  const percentageNewNewBusiness = 41;
  const percentageNewNewHeights = 44;
  const percentageNewTax = 46;

  const classes = useStyles();
  return (
    <div className="main-card">
      <div className="card-title">Brain Growth</div>
      <Box p={1} />
      <div className="container-text-brain">
        <div className="tRow">
          <div className="left">
            <div className="left-title-header">
              <AccessAlarmOutlinedIcon />{" "}
              <span className="left-title-text">Total cards</span>
              <div
                className="request-open-in-title"
                style={{ textAlign: "center" }}
              >
                <span className="request-open-in-text">&nbsp;</span>
              </div>
              <div className="open-request-total">
                <span className="open-request-text">416</span>
              </div>
              <div className="request-open-in-title">
                <span className="request-open-in-text">
                  Cards count by subtopic
                </span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-title-header">
              <span className="left-title-text">New cards</span>
              <div
                className="request-open-in-title"
                style={{ textAlign: "center" }}
              >
                <span className="request-open-in-text">
                  (Over the last 4 weeks)
                </span>
              </div>
              <div className="open-request-total">
                <span className="open-request-text">74</span>
              </div>
              <Box p={3} />
            </div>
          </div>
        </div>
      </div>
      <div className="progress-container-brain-main">
        <div className="progress-container-brain">
          <Grid container spacing={0}>
            <Grid item xs={3}>
              <p
                style={{ color: "#ffffff", fontSize: "small" }}
                id="title-overFlow"
              >
                Withdrawals/Outgoing trasdasd
              </p>
            </Grid>
            <Grid item xs={8}>
              <div
                className="child-progress-perf1"
                style={{
                  width: `${
                    percentageWithdraw === 0 ? 0 : percentageWithdraw - 35
                  }%`,
                }}
              ></div>
              <div
                className="child-progress-perf2"
                style={{
                  width: `${
                    percentageNewWithdraw === 0 ? 0 : percentageNewWithdraw - 35
                  }%`,
                }}
              ></div>
            </Grid>
            <Grid item xs={1}>
              <span style={{ color: "#ffffff", fontSize: "small" }}>
                {percentageWithdraw}
              </span>
            </Grid>
          </Grid>
          <Box p={0.1} />
          <Grid container spacing={0}>
            <Grid item xs={3}>
              <p
                style={{ color: "#ffffff", fontSize: "small" }}
                id="title-overFlow"
              >
                Benefeciary claims
              </p>
            </Grid>
            <Grid item xs={8}>
              <div
                className="child-progress-perf1"
                style={{
                  width: `${
                    percentageBenefeciary === 0 ? 0 : percentageBenefeciary - 35
                  }%`,
                }}
              ></div>
              <div
                className="child-progress-perf2"
                style={{
                  width: `${
                    percentageNewBenefeciary === 0
                      ? 0
                      : percentageNewBenefeciary - 35
                  }%`,
                }}
              ></div>
            </Grid>
            <Grid item xs={1}>
              <span style={{ color: "#ffffff", fontSize: "small" }}>
                {percentageBenefeciary}
              </span>
            </Grid>
          </Grid>
          <Box p={0.1} />

          <Grid container spacing={0}>
            <Grid item xs={3}>
              <p
                style={{ color: "#ffffff", fontSize: "small" }}
                id="title-overFlow"
              >
                New business incoming trasdasd
              </p>
            </Grid>
            <Grid item xs={8}>
              <div
                className="child-progress-perf1"
                style={{
                  width: `${
                    percentageNewBusiness === 0 ? 0 : percentageNewBusiness - 35
                  }%`,
                }}
              ></div>
              <div
                className="child-progress-perf2"
                style={{
                  width: `${
                    percentageNewNewBusiness === 0
                      ? 0
                      : percentageNewNewBusiness - 35
                  }%`,
                }}
              ></div>
            </Grid>
            <Grid item xs={1}>
              <span style={{ color: "#ffffff", fontSize: "small" }}>
                {percentageNewBusiness}
              </span>
            </Grid>
          </Grid>
          <Box p={0.1} />

          <Grid container spacing={0}>
            <Grid item xs={3}>
              <p
                style={{ color: "#ffffff", fontSize: "small" }}
                id="title-overFlow"
              >
                New heights
              </p>
            </Grid>
            <Grid item xs={8}>
              <div
                className="child-progress-perf1"
                style={{
                  width: `${
                    percentageNewHeights === 0 ? 0 : percentageNewHeights - 35
                  }%`,
                }}
              ></div>
              <div
                className="child-progress-perf2"
                style={{
                  width: `${
                    percentageNewNewHeights === 0
                      ? 0
                      : percentageNewNewHeights - 20
                  }%`,
                }}
              ></div>
            </Grid>
            <Grid item xs={1}>
              <span style={{ color: "#ffffff", fontSize: "small" }}>
                {percentageNewHeights}
              </span>
            </Grid>
          </Grid>
          <Box p={0.1} />

          <Grid container spacing={0}>
            <Grid item xs={3}>
              <p
                style={{ color: "#ffffff", fontSize: "small" }}
                id="title-overFlow"
              >
                Tax information
              </p>
            </Grid>
            <Grid item xs={8}>
              <div
                className="child-progress-perf1"
                style={{
                  width: `${percentageTax === 0 ? 0 : percentageTax - 35}%`,
                }}
              ></div>
              <div
                className="child-progress-perf2"
                style={{
                  width: `${
                    percentageNewTax === 0 ? 0 : percentageNewTax - 35
                  }%`,
                }}
              ></div>
            </Grid>
            <Grid item xs={1}>
              <span style={{ color: "#ffffff", fontSize: "small" }}>
                {percentageTax}
              </span>
            </Grid>
          </Grid>
        </div>
        <Box p={2} />
        <div className="legend-container">
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <span className="legend-text">
                <div className="less-color-brain">New Cards</div>
              </span>
            </Grid>
            <Grid item xs={12} md={6}>
              <span className="legend-text">
                <div className="more-color-brain">Existing Cards</div>
              </span>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
