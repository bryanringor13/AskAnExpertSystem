import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../../../../shared/Header";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";
import HeaderSlide from "../../../../../shared/HeaderSlide";
import { Breadcrumbs, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, FormControl, FormControlLabel, Grid, InputLabel, Toolbar, Typography } from "@material-ui/core";
import { LmButton } from "../../../../../stories/LmButton/LmButton";
import { LmSelectTopicNavigation } from "../../../../../stories/LmSelectTopicNavigation/LmSelectTopicNavigation";
import LMSelect from "../../../../../stories/LMSelect/LMSelect";
import LmTextField from "../../../../../stories/TextField/LmTextField";
import "./style.css";
import { LmSwitch } from "../../../../../stories/LmSwitch/LmSwitch";

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

const UpdateDetails = withRouter(({ history }) => {
  const classes = useStyles();
  const [role, setRole] = useState([
    { value: 0, text: 'Administrator' },
    { value: 1, text: 'Customer' },
    { value: 2, text: 'Assistant' }
  ])

  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header menuList="usermenu" menu={false}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Breadcrumbs aria-label="breadcrumb" style={{paddingBottom: 20}}>
            <Typography color="textPrimary">Profile</Typography>
          </Breadcrumbs>
          <Toolbar style={{ paddingLeft: 0}}>
            <Typography variant="h4" style={{color: "#000000", fontWeight: '300'}}>Update Details</Typography>
          </Toolbar>
          <Grid container>
            <Grid item xs={4}>
              <Grid container direction="column" justify="center" alignItems="center">
                <div style={{width: '50%', marginTop: '5em'}}>
                  <Typography style={{color: 'gray', textAlign: 'left', marginBottom: 20}}>
                    Update Avatar
                  </Typography>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        style={{height: 200}}
                        image="https://prod-media-storage-us-01.s3.amazonaws.com/flamingo/image/e41b8dbefeb7b946e62f190943b6a2a7786b91fb.png?AWSAccessKeyId=AKIAIPZRJPZA76KZTRAQ&Expires=1616067723&Signature=RYcPTIk4HqbDW4ICY5b74KWzrRs%3D"
                        title="Contemplative Reptile"
                      />
                    </CardActionArea>
                  </Card>
                  <LmButton label="SELECT FILE" style={{ width: '100%', marginTop: 20}} />
                </div>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid container direction="column" justify="center" alignItems="center">
                <div style={{width: '80%', marginTop: '5em'}}>
                  <FormControl style={{width: '100%', marginBottom: 10}}>
                    <InputLabel id="role-label" style={{color: 'gray'}}>Role</InputLabel>
                    <LMSelect items={role} labelId="role-label"/>
                  </FormControl>
                  <FormControl style={{width: '100%', marginBottom: 10}}>
                    <LmTextField label="First Name" variant="standard"/>
                  </FormControl>
                  <FormControl style={{width: '100%', marginBottom: 10}}>
                    <LmTextField label="Last Name" variant="standard"/>
                  </FormControl>
                  <FormControl style={{width: '100%', marginBottom: 10}}>
                    <LmTextField label="Display Name" variant="standard"/>
                  </FormControl>
                  <FormControl style={{width: '100%', marginBottom: 10}}>
                    <LmTextField label="Email" variant="standard"/>
                  </FormControl>
                  <FormControl style={{width: '100%', marginBottom: 10}}>
                    <LmTextField label="Phone" variant="standard"/>
                  </FormControl>
                  <FormControl style={{width: '100%', marginBottom: 10}}>
                    <LmTextField label="Username" variant="standard"/>
                  </FormControl>
                  <div style={{marginTop: 20}}>
                    <h2 className="jss1483">Email Notifications</h2>
                    <div className="jss1484">
                      <div className="jss1486">
                        <Typography component="p" style={{color: "#000000"}}>
                          Emails are used to send notifications to subject matter experts for any new requests.
                        </Typography>
                        <Typography component="p" style={{color: "#000000"}}>
                          If you turn this off, this person will not receive these notifications.
                        </Typography>
                      </div>
                      <Divider orientation="vertical" flexItem />
                      <div className="jss1488">
                        <FormControlLabel
                          value="receive_emails"
                          control={<LmSwitch color="primary"/>}
                          label="Receive emails"
                          labelPlacement="start"
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: 50, marginBottom: 50 }}>
                    <LmButton label="UPDATES DETAILS" style={{ float: "right" }} size="small" disabled/>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
});

export default UpdateDetails;
