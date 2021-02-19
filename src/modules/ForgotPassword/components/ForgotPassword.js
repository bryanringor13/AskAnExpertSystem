import React, { useState } from "react";
import { db } from "../constants/dummyData.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  Grid,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FormLabel from "@material-ui/core/FormLabel";
import { LmButton } from "../../../stories/LmButton/LmButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { dummy_users } from "./constants/dummy_data";
import { withRouter } from "react-router-dom";

require("./style.css");
const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    padding: "40px 50px",
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const handleSubmit = () => {};

const ForgotPassword = withRouter(({ history }) => {
  const [validated, setValidated] = useState(false);
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isIncorrect, setisIncorrect] = useState(false);
  const [isSubmit, setisSubmit] = useState(false);
  const handleMouseDownPassword = () => {
    setShowPassword(!showPassword);
    console.log("Hide Password");
  };

  const checkUser = (e) => {
    e.preventDefault();
    let filter = dummy_users.filter(
      (x) => x.username === email && x.password === password
    );
    console.log(filter);
    if (filter.length > 0) {
      setisIncorrect(false);
      localStorage.setItem("role", filter[0].role);
      history.push({
        pathname: "/dashboard",
        state: { role: filter[0].role },
      });
    } else {
      setisIncorrect(true);
    }
    setValidated(true);
  };

  const someChangeHandler = () => {
    setShowPassword((prev) => !prev);
    console.log("Show Password");
  };

  const ResetField = () => {
    return (
      <Grid direction="row" justify="center" container>
        <Grid item container>
          <Typography component="div" variant="h6" fontWeight="fontWeightBold">
            <span className="login-text-gray">Reset your password</span>
          </Typography>

          <Grid direction="row" justify="center" container>
            <Grid item container>
              {/* <Avatar className={classes.avatar} align="center">
      <LockOutlinedIcon />
    </Avatar> */}
              <Typography
                component="div"
                variant="h5"
                fontWeight="fontWeightBold"
                fontStyle="italic"
              >
                <Box fontWeight="fontWeightBold" m={1}></Box>
              </Typography>
              <form
                className={classes.form}
                noValidate
                validated="true"
                onSubmit={checkUser}
                style={{ color: "#000" }}
              >
                <Grid container spacing={0}>
                  <Grid item md={12} xs={12}>
                    <FormLabel component="legend">
                      <span className="login-text">
                        Please enter the email address associated with your
                        Flamingo account. We will send you a password reset
                        link.
                      </span>
                    </FormLabel>
                  </Grid>
                </Grid>

                <Box mt={3} />

                <Grid container spacing={1}>
                  <Grid item md={12} xs={12}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <FormLabel component="legend" className="login-text">
                          <span className="login-text">Email</span>
                        </FormLabel>
                      </div>
                    </div>

                    <TextField
                      value={email}
                      onChange={(evt) => setEmail(evt.target.value)}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      // label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      placeholder="Enter your email"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={1}>
                  <Grid item md={12} xs={12}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div id="forgot-pass">&nbsp;</div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row-reverse",
                        }}
                      >
                        <div>
                          <LmButton
                            size="small"
                            type="submit"
                            onClick={() => setisSubmit(true)}
                            primary
                          >
                            SEND PASSWORD RESET LINK
                          </LmButton>
                        </div>
                        <Box m={0.5} />
                        <div>
                          <LmButton
                            type="submit"
                            size="small"
                            onClick={() => {
                              history.push({
                                pathname: "/",
                              });
                            }}
                          >
                            CANCEL
                          </LmButton>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const SuccessField = () => {
    return (
      <Grid direction="row" justify="center" container>
        <Grid item container>
          <Typography component="div" variant="h6" fontWeight="fontWeightBold">
            <span className="login-text-gray">
              We&lsquo;ve sent you a password reset link
            </span>
          </Typography>

          <Grid direction="row" justify="center" container>
            <Grid item container>
              {/* <Avatar className={classes.avatar} align="center">
      <LockOutlinedIcon />
    </Avatar> */}
              <Typography
                component="div"
                variant="h5"
                fontWeight="fontWeightBold"
                fontStyle="italic"
              >
                <Box fontWeight="fontWeightBold" m={1}></Box>
              </Typography>
              <form
                className={classes.form}
                noValidate
                validated="true"
                onSubmit={checkUser}
                style={{ color: "#000" }}
              >
                <Grid container spacing={0}>
                  <Grid item md={12} xs={12}>
                    <FormLabel component="legend">
                      <span className="login-text">
                        Please check your email and follow the instructions to
                        reset your password.
                      </span>
                    </FormLabel>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
  return (
    <React.Fragment>
      {/* <SectionContainer> */}
      <Container
        component="main"
        maxWidth="sm"
        className="main-container"
        style={{
          background: `url("https://i.imgur.com/R0kTwIS.jpg")`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          color: "white",
          maxWidth: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <CssBaseline />
        <div>
          <div className="logo">
            <Grid
              container
              spacing={0}
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item md={2} xs={12}>
                <img
                  src="https://i.imgur.com/cDk0vQ3.png"
                  style={{ width: "100%" }}
                  id="img-logo"
                />
              </Grid>
            </Grid>

            <p className="login-sub-Title">
              The smarter way to share information
            </p>
          </div>

          <Container component="main" maxWidth="sm">
            <CssBaseline />

            <Paper
              style={{ borderRadius: "15px", marginTop: "0px" }}
              variant="outlined"
              square={false}
              className={classes.root}
            >
              {isSubmit ? <SuccessField /> : <ResetField />}
            </Paper>
          </Container>
        </div>
      </Container>
    </React.Fragment>
  );
});

export default ForgotPassword;
