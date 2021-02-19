import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../../../../../shared/Header";

import Container from "@material-ui/core/Container";
import { LMDataGrid } from "../../../../../stories/LMDataGrid/LMDataGrid";
import { LmAvatar } from "../../../../../stories/Avatar/LmAvatar";
import { dummy_data } from "../constants/dummy_data";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

import AddBoxIcon from "@material-ui/icons/AddBox";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import cyan from "@material-ui/core/colors/cyan";
import "./style.css";
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

const onRowClick = (rowData, rowMeta) => {
  alert(rowData[0]);
};
const OpenRequest = () => {
  const classes = useStyles();
  const options = {
    download: true,
    print: false,
    filter: true,
    viewColumns: false,
    responsive: "stacked",
    filterType: "checkbox",
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
      name: "t",
      label: "T",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div style={{ display: "flex" }}>
              {value === true ? (
                <AddBoxIcon style={{ fill: "green" }} />
              ) : (
                <LiveHelpIcon style={{ fill: "#eb9649" }} />
              )}
            </div>
          );
        },
      },
    },
    {
      name: "p",
      label: "P",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div style={{ display: "flex" }}>
              {value === true ? (
                <ArrowUpwardIcon style={{ fill: "red" }} />
              ) : (
                <ArrowDownwardIcon style={{ fill: "green" }} />
              )}
            </div>
          );
        },
      },
    },
    {
      name: "components",
      label: "Components",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div style={{ display: "flex" }}>
              <span style={{ color: "#0f54c8" }}>{value}</span>
            </div>
          );
        },
      },
    },
    {
      name: "key",
      label: "key",
    },
    {
      name: "summary",
      label: "Summary",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div style={{ display: "flex" }}>
              <span style={{ color: "#0f54c8" }}>{value}</span>
            </div>
          );
        },
      },
    },
    {
      name: "reporter",
      label: "Reporter",
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
            <LMDataGrid
              title={"All open"}
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
};

export default OpenRequest;
