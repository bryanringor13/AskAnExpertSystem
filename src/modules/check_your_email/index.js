import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';

  
const useStyles = makeStyles((theme) => ({
    root: {
        background: 'white',
        padding: '40px 50px',
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CheckEmail = () => {
    const classes = useStyles();
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
            <Typography component="div" variant="h6" fontWeight="fontWeightBold">
            <Box fontWeight="fontWeightBold" m={1}>
                Check your email    
            </Box>
            </Typography>
            <p>If you are an existing user, we will immediately send you an <br />email
            with a link and the instructions to reset your password</p>
          </Paper>
        </Container>
        <Container component="main" maxWidth="sm">
        <Paper
            style={{ borderRadius: "15px", marginTop: '20px' }}
            elevation={1}
            variant="outlined"
            square={false}
            className={classes.root}
          >
        <Typography component="div" fontWeight="fontWeightBold">
            <Box m={1}>
               If for some reason you are not able to reset your password you may contact <a href="/form_confirm"> Flamingo Customer Service</a>
               for help. Our team can help you restore access to your account
            </Box>
            </Typography>
          </Paper>
        </Container>
      </React.Fragment>
    );
}

export default CheckEmail