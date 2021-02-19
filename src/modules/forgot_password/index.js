import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Grid, Paper, TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { LmButton } from "../../stories/LmButton/LmButton";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    padding: "40px 50px",
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    // alignItems: 'center',
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ForgotPassword = () => {
  const classes = useStyles();
  const handleSubmit = (event) => {};
  return (
    <React.Fragment>
      <Container component="main" maxWidth="sm">
        <CssBaseline />

        <Paper
          style={{ borderRadius: "15px" }}
          elevation={1}
          variant="outlined"
          square={false}
          className={classes.root}
        >
          <Grid direction="row" justify="center" container>
            <Grid item container>
              <Typography
                component="div"
                variant="h6"
                fontWeight="fontWeightBold"
              >
                <Box fontWeight="fontWeightBold" m={1}>
                  Reset your password
                </Box>
              </Typography>
              <p>
                Please enter the email address associated with your Flamingo{" "}
                <br />
                account. We will send you a password reset link
              </p>
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <FormLabel component="legend">Email Address</FormLabel>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  autoFocus
                />
                <Box mt={4} />
                <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                  <div>
                    <LmButton size="small" type="submit" primary>
                      <a
                        style={{ textDecoration: "none", color: "white" }}
                        href="/set_new_password"
                      >
                        SEND PASSWORD RESET LINK
                      </a>
                    </LmButton>
                  </div>
                  <Box m={0.5} />
                  <div>
                    <LmButton type="submit" size="small">
                      <a style={{ textDecoration: "none" }} href="/">
                        CANCEL
                      </a>
                    </LmButton>
                  </div>
                </div>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Container component="main" maxWidth="sm">
        <Paper
          style={{ borderRadius: "15px" }}
          elevation={1}
          variant="outlined"
          square={false}
          className={classes.root}
        >
          <Typography component="div" fontWeight="fontWeightBold">
            <Box m={1}>
              If for some reason you are not able to reset your password you may
              contact <a href="/forgot_password"> Flamingo Customer Service</a>
              for help. Our team can help you restore access to your account
            </Box>
          </Typography>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default ForgotPassword;
