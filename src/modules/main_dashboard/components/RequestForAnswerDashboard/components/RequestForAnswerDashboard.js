import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Header from "../../../../../shared/Header";
import "./style.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, Paper } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { LMDataGrid } from "../../../../../stories/LMDataGrid/LMDataGrid";
import { dummy_data } from "../constants/dummy_data";
import cyan from "@material-ui/core/colors/cyan";
import { LmAvatar } from "../../../../../stories/Avatar/LmAvatar";
import { LmTextField } from "../../../../../stories/TextField/LmTextField";
import { LMSelect } from "../../../../../stories/LMSelect/LMSelect";
import { withRouter } from "react-router-dom";
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
  theme.overrides.MuiOutlinedInput = {
    root: {
      height: "30px",
      width: "220px",
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
const options = [
  { value: "1", text: "text1" },
  { value: "2", text: "text2" },
];

const AssigneeFilter = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="text-field">
        <div class="rowtest">
          <div class="columntest">
            <p style={{ margin: "0px" }}>Assignee</p>
            <LmTextField variant="outlined" />
          </div>
          <div class="columntest filter">
            <p style={{ margin: "0px" }}>Status type</p>
            <LMSelect
              variant="outlined"
              items={options}
              placeholder={"Open requests only"}
            />
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

const RequestForAnswerDashboard = withRouter(({ history }) => {
  const classes = useStyles();
  const [data, setData] = React.useState(dummy_data);
  const onRowClick = (rowData, rowMeta) => {
    if (rowData[4] === "Review") {
      history.push("/requestForReview");
    } else if (rowData[4] === "Accurate") {
      history.push("/accurateComment");
    } else {
      history.push("/requestForAnswer");
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

  const columns = [
    {
      name: "id",
      options: {
        display: false,
      },
    },
    {
      name: "created",
      label: "CREATED",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div style={{ display: "flex" }}>
              <span style={{ color: "#ffffff" }}>
                <p id="grid-text" style={{ background: "#000000" }}>
                  {value}
                </p>
              </span>
            </div>
          );
        },
      },
    },
    {
      name: "createdBy",
      label: "BY",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div style={{ display: "flex" }}>
              <div class="rowtest">
                <div class="columntest">
                  <LmAvatar />
                </div>
                <div class="columntest username">{value}</div>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: "question",
      label: "QUESTION",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return <div id="title-overFlow2">{value}</div>;
        },
      },
    },
    {
      name: "assignee",
      label: "ASSIGNEE",
    },
  ];
  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <div className="main-content">
            <Grid container spacing={1}>
              <Grid item md={3} xs={12}>
                <Paper className="dashboard-paper">
                  <p className="paper-title">Open Request</p>
                  <p className="paper-count"> 245</p>
                  <Divider />
                  <p className="paper-title fade">+89 since 9:43AM</p>
                </Paper>
              </Grid>
              <Grid item md={3} xs={12}>
                <Paper className="dashboard-paper">
                  <p className="paper-title">Open Request</p>
                  <p className="paper-count"> 2,809</p>
                  <Divider />
                  <p className="paper-title fade">432 active users right now</p>
                </Paper>
              </Grid>
              <Grid item md={3} xs={12}>
                <Paper className="dashboard-paper">
                  <p className="paper-title">Open Request</p>
                  <p className="paper-count"> 231</p>
                  <Divider />
                  <p className="paper-title fade">89 closes by you</p>
                </Paper>
              </Grid>
              <Grid item md={3} xs={12}>
                <Paper className="dashboard-paper">
                  <p className="paper-title">Open Request</p>
                  <p className="paper-count"> 4</p>
                  <Divider />
                  <p className="paper-title fade">982 active users right now</p>
                </Paper>
              </Grid>
            </Grid>

            <LMDataGrid
              options={options}
              columns={columns}
              data={data}
              theme={theme}
              title={
                <div>
                  <AssigneeFilter />
                </div>
              }
            />
          </div>
        </Container>
      </main>
    </div>
  );
});

export default RequestForAnswerDashboard;
