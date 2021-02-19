import React, { useState }from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '../../components/LmTextField';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper, TextField, InputAdornment, IconButton, Grid, Button, ButtonBase } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { blue } from '@material-ui/core/colors';
import { LmButton } from '../../stories/LmButton/LmButton';
import FormLabel from '@material-ui/core/FormLabel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// function Copyright() {
//     return (
//       <Typography variant="body2" color="textSecondary" align="center">
//         {'Copyright © '}
//         <Link color="inherit" href="https://material-ui.com/">
//           Lamarck
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//       </Typography>
//     );
//   }
  
const useStyles = makeStyles((theme) => ({
    root: {
        background: 'white',
        padding: '40px 50px',
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
      },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: blue
  },
}));

const handleSubmit =() => {
  console.log('Test');
}
const SetNewPassword = () => {
  const [validated, setValidated] = useState(false);
    const [ showValidation, setShowValidation] = useState(false);

    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    // const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => {
      setShowPassword(!showPassword)
      console.log("Hide Password")
    };

    const someChangeHandler = () => {
      setShowPassword(prev => !prev);
      console.log("Show Password");
    }
    
    const onInputHandler = () => {
      setShowValidation(true);
      console.log("Entering Password");
    }

    const onInputNewPasswordHandler = () => {
      setShowValidation(true);
      console.log("Entering Password");
    }
    const onInputReEnterNewPasswordHandler = () => {
      setShowValidation(true);
      console.log("Entering Password");
    }
    
    return (
      <React.Fragment>
        {/* <SectionContainer> */}
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          {/* <div className={classes.paper}> */}
          <Paper
            style={{ borderRadius: "5px" }}
            elevation={1}
            variant="outlined"
            square={false}
            className={classes.root}
          >
            <Typography
              component="div"
              variant="h5"
              fontWeight="fontWeightBold"
            >
              <Box fontWeight="fontWeightBold" m={1}>
                Set a new Password
              </Box>
            </Typography>
            {/* Enter the email address associated with your Flamingo account */}
            <form className={classes.form} noValidate validated={validated} onSubmit={handleSubmit}>
                <FormLabel component="legend">New Password</FormLabel>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="current-password"
                    placeholder="Enter new password"
                    onChange={onInputNewPasswordHandler}
                    InputProps={{ // <-- This is where the toggle button for show/hide password.
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={showPassword ? handleMouseDownPassword : someChangeHandler}
                          >
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                    <Box mt={0}>                   
                    <Grid
                      container
                      spacing={0}
                    >
                        <Grid Grid item xs={10}>
                            <Typography >
                          <Box fontStyle="oblique" m={1}>
                            Password must be min of 8 letters includes UPPER cases, <br />
                            Lowercases and numbers
                          </Box>
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Box fontStyle="oblique" m={1}></Box>
                          <Typography style={{visibility: 'hidden'}} variant={Text} color="success">strong</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                <Box mt={2} />
                <FormLabel component="legend">Re enter password</FormLabel>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  onChange={onInputReEnterNewPasswordHandler}
                  InputProps={{ // <-- This is where the toggle button for show/hide password.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={showPassword ? handleMouseDownPassword : someChangeHandler}
                        >
                          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
              >
              {" "}
              </TextField>

              <Box mt={4} />
              <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                <div>
                  <LmButton
                    type="submit"
                    primary
                    size="small"
                    variant="contained"
                  >
                    {/* <Typography>Login </Typography> */}
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="/set_new_password"
                    >
                      CONFIRM NEW PASSWORD
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

              <Typography
                color="primary"
                size="large"
                align="center"
                component="h5"
                variant="body2"
              >
                {/* <div>
                    <a className={classes.submit}
                      style={{ textDecoration: "none" }}
                      href="./"
                    > CANCEL </a> </div> */}
              </Typography>
            </form>
          </Paper>
        </Container>
        {/* </SectionContainer> */}
      </React.Fragment>
    );
}

export default SetNewPassword