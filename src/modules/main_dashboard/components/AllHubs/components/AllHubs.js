import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../../../../../shared/Header";
import "./style.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import { LMDataGrid } from "../../../../../stories/LMDataGrid/LMDataGrid";
import { LMSnackBar } from "../../../../../stories/LMSnackBar/LMSnackBar";
import { LMMenu } from "../../../../../stories/LMMenu/LMMenu";
import { dummy_data, dummy_data_miro } from "./constants/dummy_data";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_HUBS } from "../../../../../redux/actions/hubActions";

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





const AllHubs = () => {
  const classes = useStyles();
  const hub = useSelector(state => state.hub)
  const dispatch = useDispatch()
  const [snackBarState, setSnackBarState] = React.useState(false);
  const options = {
    selectableRows: "none",
    download: false,
    print: false,
    filter: false,
    viewColumns: false,
    responsive: "stacked",
    rowsPerPage: 100,
    customToolbar: () => (
      <Button variant="contained" color="secondary">
      <a  style={{textDecoration: 'none', color: 'white'}}
                    href="/addHub"
                    >
                     ADD HUB </a>
      </Button>
    ),
  };
  const columns = [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "description",
      label: "Description",
    },
    {
      name: "",
      label: "",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <LMMenu copyFunc={(x) => openSnackBar()}>
              <MenuItem>Edit</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem onClick={() => openSnackBar()}>Copy Link</MenuItem>
            </LMMenu>
          );
        },
      },
    },
  ];

  useEffect(() => {
    dispatch({
      type: GET_ALL_HUBS
    })
  }, [])

  const openSnackBar = () => {
    setSnackBarState(true);
    const interval = setInterval(() => {
      setSnackBarState(false);
      clearInterval(interval);
    }, 3000);
  };

  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline/>
      <Header menuList="hubmenu"/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {snackBarState ? (
          <LMSnackBar
            severity="info"
            message="Link copied to clipboard"
            state={snackBarState}
          />
        ) : null}

        <Container maxWidth="xl" className={classes.container}>
        
          <div className="main-content">
          <Typography variant="h4" className="headingStyle">Hubs</Typography>
            <LMDataGrid
              options={options}
              columns={columns}
              data={!!hub.hubs ? hub.hubs : []}
              theme={theme}
        
            />
          </div>
        </Container>
      </main>
    </div>
  );
};

export default AllHubs;
