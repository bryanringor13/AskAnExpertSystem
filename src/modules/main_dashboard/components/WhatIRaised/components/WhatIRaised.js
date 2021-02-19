import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../../../../../shared/Header";
import "./style.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import { LMDataGrid } from "../../../../../stories/LMDataGrid/LMDataGrid";
import { LmAvatar } from "../../../../../stories/Avatar/LmAvatar";
import { dummy_data } from "../constants/dummy_data";
import AddBoxIcon from "@material-ui/icons/AddBox";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";
import moment from "moment";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { LmSearchBar } from "../../../../../stories/SearchBar/LmSearchBar";
import { LMSelect } from "../../../../../stories/LMSelect/LMSelect";

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
      MuiInput: {
        root: {
          width: "100%",
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
const WhatIRaised = () => {
  const classes = useStyles();
  const options = {
    selectableRows: "none",
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
      name: "created",
      label: "CREATED",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return moment(value).format("DD MMM YY");
        },
      },
    },
    {
      name: "type",
      label: "TYPE",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div style={{ display: "flex" }}>
              {value ? <FlagOutlinedIcon /> : <HighlightOffOutlinedIcon />}
            </div>
          );
        },
      },
    },
    {
      name: "topic",
      label: "TOPIC",
    },
    {
      name: "question",
      label: "QUESTION",
    },
  ];
  const [data, setData] = React.useState(dummy_data);
  const optionsItems = [
    { value: "1", text: "text1" },
    { value: "2", text: "text2" },
  ];
  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <div className="main-content">
            <Breadcrumbs aria-label="breadcrumb" style={{ fontWeight: "bold" }}>
              <Link color="inherit" href="/" onClick={() => alert("test")}>
                <span style={{ color: "#e31c79" }}>Hubs</span>
              </Link>
              <Link
                color="inherit"
                href="/getting-started/installation/"
                onClick={() => alert("test")}
                style={{ fontWeight: "bold" }}
              >
                ...
              </Link>
              <Typography color="textPrimary" style={{ fontWeight: "bold" }}>
                What I Raised
              </Typography>
            </Breadcrumbs>
            <Box pt={3}> </Box>
            <Typography
              component="div"
              variant="h5"
              fontWeight="fontWeightBold"
            >
              What I Raised
            </Typography>

            <Box pt={3}> </Box>
            <LMDataGrid
              title={
                <div>
                  <Box pt={2}> </Box>

                  <Grid container spacing={1}>
                    <Grid item xs>
                      <LmSearchBar placeholder="Filter by topic" />
                    </Grid>
                    <Grid item xs>
                      <LMSelect
                        items={optionsItems}
                        placeholder={"Any request type"}
                      />
                    </Grid>
                    <Grid item xs>
                      <LMSelect
                        items={optionsItems}
                        placeholder={"Any status"}
                      />
                    </Grid>
                  </Grid>

                  <Box pt={2}> </Box>
                </div>
              }
              options={options}
              columns={columns}
              data={data}
            />
          </div>
        </Container>
      </main>
    </div>
  );
};

export default WhatIRaised;
