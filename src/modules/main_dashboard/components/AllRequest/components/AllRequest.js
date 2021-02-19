import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../../../../../shared/Header";
import "./style.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import { LMDataGrid } from "../../../../../stories/LMDataGrid/LMDataGrid";
import { LmAvatar } from "../../../../../stories/Avatar/LmAvatar";
import { dummy_data } from "../constants/dummy_data";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";
import moment from "moment";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Box from "@material-ui/core/Box";
import { withRouter } from "react-router-dom";

moment.updateLocale("en", { weekdaysMin: "U_M_T_W_R_F_S".split("_") });

function dateFormat(input) {
  return moment(input).fromNow();
}
const theme = () => {
  let theme = createMuiTheme({
    palette: {
      primary: cyan,
      contrastThreshold: 3,
      tonalOffset: 0.2,
      type: "light",
    },
    overrides: {
      MuiButton: {
        raisedPrimary: {
          color: "white",
        },
      },
      MUIDataTableHeadCell: {
        data: {
          fontWeight: "bold",
        },
      },
    },

    typography: {
      useNextVariants: true,
      suppressDeprecationWarnings: true,
    },
  });

  theme.overrides.MuiTableCell = {
    root: {
      padding: "0px 0px 0px 20px",
    },
    head: {
      fontSize: "14px",
      fontWeight: "400",
    },
    body: {
      fontSize: "12px",
    },
  };

  theme.overrides.MUIDataTableBodyCell = {
    cellStacked: {
      [theme.breakpoints.down("sm")]: {
        "white-space": "unset",
        "word-break": "break-word",
        height: "unset",
        width: "40%",
      },
    },
    responsiveStacked: {
      [theme.breakpoints.down("sm")]: {
        width: "60%",
        "white-space": "unset",
        height: "unset",
        "word-break": "break-word",
      },
    },
  };

  return theme;
};
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

const AllRequest = withRouter(({ history }) => {
  const classes = useStyles();

  const onRowClick = (rowData, rowMeta) => {
    if (rowData[1] === "Answer") {
      history.push("/requestForAnswerLM");
    } else if (rowData[1] === "Review") {
      history.push("/requestForReviewLM1");
    }
  };

  const options = {
    selectableRows: "none",
    download: true,
    print: false,
    filter: true,
    viewColumns: false,
    responsive: "stacked",
    rowsPerPage: 20,
    onRowClick: onRowClick,
  };
  const color = (value) => {
    switch (value) {
      case "Answer":
        return "#fef6fa";

      case "Review":
        return "#dcfffe";

      case "Confirm":
        return "#e8e8e8";
    }
  };
  const columns = [
    {
      name: "id",
      options: {
        display: false,
      },
    },
    {
      name: "status",
      options: {
        display: false,
      },
    },
    {
      name: "date",
      label: "Date",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div style={{ display: "flex" }}>
              <p style={{ background: "#dcfffe", color: "#7f8184" }}>
                {dateFormat(value)}
              </p>
            </div>
          );
        },
      },
    },
    {
      name: "assignedTo",
      label: "Assigned To",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div style={{ display: "flex" }}>
              <LmAvatar size={"medium"} />
              <div style={{ margin: "10px 1px 0px 10px" }}>{value}</div>
            </div>
          );
        },
      },
    },

    {
      name: "question",
      label: "Question",
    },
    {
      name: "reporter",
      label: "Reported",
    },
    {
      name: "askedBy",
      label: "Asked By",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div style={{ display: "flex" }}>
              <LmAvatar size={"medium"} />
              <div style={{ margin: "10px 1px 0px 10px" }}>{value}</div>
            </div>
          );
        },
      },
    },

    {
      name: "status",
      label: "Status",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div style={{ display: "flex" }}>
              <span style={{ color: "#7f8184" }}>
                <p style={{ background: color(value) }}>{value}</p>
              </span>
            </div>
          );
        },
      },
    },
    {
      name: "icon",
      label: "",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div style={{ display: "flex" }} className={classes.testdd}>
              <KeyboardArrowRightIcon
                style={{
                  fill: "#e31c79",
                }}
              />
            </div>
          );
        },
        customHeadRender: () => <th key={0} style={{ visibility: "hidden" }} />,
      },
    },
  ];
  const [data, setData] = React.useState(dummy_data);
  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <div className="main-content">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3}>
                <Paper className={classes.paper} className="reqGrid">
                  <span className="reqText">Open Request</span>
                  <div>
                    <span className="reqCountText">{data.length}</span>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper className={classes.paper} className="reqGrid">
                  <span className="reqText">Weekly Avg. Response Time</span>
                  <div className="cardContentDiv">
                    <span className="cardContentText">Coming soon</span>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper className={classes.paper} className="reqGrid">
                  <span className="reqText">Average Handling Time</span>
                  <div className="cardContentDiv">
                    <span className="cardContentText">Coming soon</span>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper className={classes.paper} className="reqGrid">
                  <span className="reqText">
                    Total requests closed this week
                  </span>
                  <div className="cardContentDiv">
                    <span className="cardContentText">Coming soon</span>
                  </div>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={3}>
                <Paper className={classes.paper} className="reqGrid">
                  <span className="reqTextBot">Select topics</span>

                  <div className="container-text">
                    <div className="tRow">
                      <div className="left">All topics</div>
                      <div className="right">
                        <ArrowRightAltIcon style={{ fill: "#e31c79" }} />
                      </div>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper className={classes.paper} className="reqGrid">
                  <span className="reqTextBot">Status type</span>
                  <div className="container-text">
                    <div className="tRow">
                      <div className="left">All request</div>
                      <div className="right">
                        <ArrowRightAltIcon style={{ fill: "#e31c79" }} />
                      </div>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Paper className={classes.paper} className="reqGrid">
                  <span className="reqTextBot">Assigned to</span>
                  <div className="container-text">
                    <div className="tRow">
                      <div className="left">Anyone</div>
                      <div className="right">
                        <ArrowRightAltIcon style={{ fill: "#e31c79" }} />
                      </div>
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
            <Box p={1} m={0}></Box>
            <LMDataGrid
              options={options}
              columns={columns}
              data={data}
              theme={theme}
            />
          </div>
        </Container>
      </main>
    </div>
  );
});

export default AllRequest;
