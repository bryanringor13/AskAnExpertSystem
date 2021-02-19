import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../../../../shared/Header";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";
import HeaderSlide from "../../../../../shared/HeaderSlide";
import { Breadcrumbs, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, FormControl, FormControlLabel, Grid, IconButton, InputLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@material-ui/core";
import { LmButton } from "../../../../../stories/LmButton/LmButton";
import { LmSelectTopicNavigation } from "../../../../../stories/LmSelectTopicNavigation/LmSelectTopicNavigation";
import LMSelect from "../../../../../stories/LMSelect/LMSelect";
import LmTextField from "../../../../../stories/TextField/LmTextField";
import "./style.css";
import { LmSwitch } from "../../../../../stories/LmSwitch/LmSwitch";
import GetAppIcon from '@material-ui/icons/GetApp';
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_USER } from "../../../../../redux/actions/userActions";

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
    backgroundColor: "#e0dfdf",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    flexGrow: 1,
  },

  table: {
    minWidth: 650,
  },
}));

const UserManagement = withRouter(({ history }) => {
  const classes = useStyles();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [role, setRole] = useState([
    { value: 0, text: 'Administrator' },
    { value: 1, text: 'Customer' },
    { value: 2, text: 'Assistant' }
  ])

  useEffect(() => {
    dispatch({
      type: GET_ALL_USER
    })
  }, [])

  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header menuList="usermenu" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
              <Toolbar style={{ paddingLeft: 0, marginBottom: 20, justifyContent: "space-between"}}>
                  <Typography variant="h4" style={{color: "#000000", fontWeight: '300'}}>User Management</Typography>
                  <div>
                    <IconButton size="medium" style={{ marginRight: 10 }}>
                      <GetAppIcon />
                    </IconButton>
                    <IconButton size="medium" style={{ marginRight: 10 }}>
                      <GetAppIcon />
                    </IconButton>
                    <LmButton size="small" label="Add User" style={{ backgroundColor: "#e54a79", color: "#FFFFFF"}}/>
                  </div>
              </Toolbar>
            <Grid container>
                <Grid item xs={12}>
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Role</TableCell>
                          <TableCell align="right">Display Name</TableCell>
                          <TableCell align="right">Username</TableCell>
                          <TableCell align="right">First Name</TableCell>
                          <TableCell align="right">Last Name</TableCell>
                          <TableCell align="right">Last Login</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {
                          user.users.map((data, index) => (
                            <TableRow key={index}>
                              <TableCell component="th" scope="row">
                                {data.role}
                              </TableCell>
                              <TableCell align="right">{data.first_name}</TableCell>
                              <TableCell align="right">{data.username}</TableCell>
                              <TableCell align="right">{data.first_name}</TableCell>
                              <TableCell align="right">{data.last_name}</TableCell>
                              <TableCell align="right">{"No data"}</TableCell>
                            </TableRow>
                          ))
                        }
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
            </Grid>
        </Container>
      </main>
    </div>
  );
});

export default UserManagement;
