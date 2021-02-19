import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../../../../../shared/Header";
import "./style.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import { LMDataGrid } from "../../../../../stories/LMDataGrid/LMDataGrid";
import { dummy_data, dummy_data_miro } from "./constants/dummy_data";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";
import Box from "@material-ui/core/Box";

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

const options = {
  selectableRows: "none",
  download: true,
  print: false,
  filter: true,
  viewColumns: false,
  responsive: "stacked",
  rowsPerPage: 100,
};

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
const columns = [
  {
    name: "title",
    label: "Title",
  },
  {
    name: "links",
    label: "Links",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <div style={{ display: "flex" }}>
            <p style={{ background: "#dcfffe", color: "#7f8184" }}>
              {value == "in progress" ? (
                value
              ) : (
                <a target="_blank" href={value}>
                  {value}
                </a>
              )}
            </p>
          </div>
        );
      },
    },
  },
  {
    name: "note",
    label: "note",
  },
];

const AvailableLinks = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <div className="main-content">
            <LMDataGrid
              options={options}
              columns={columns}
              data={dummy_data}
              theme={theme}
              title="Figma"
            />
            <Box pt={2}> </Box>
            <LMDataGrid
              options={options}
              columns={columns}
              data={dummy_data_miro}
              theme={theme}
              title="other links(miro)"
            />
          </div>
        </Container>
      </main>
    </div>
  );
};

export default AvailableLinks;
