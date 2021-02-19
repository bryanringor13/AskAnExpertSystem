/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';

import { LmPagination } from "../../../../../stories/Pagination/LmPagination";

import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import RoomServiceOutlinedIcon from "@material-ui/icons/RoomServiceOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import { display } from '@material-ui/system';
// import SideDrawer from '../../../../shared/Sidebar';
import Header from '../../../../../shared/Header'
import { LmTypographyGrey } from "../../../../../stories/TypographyGrey/LmTypographyGrey";
import { Card, TextField, Typography } from "@material-ui/core";

import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import { LmButton } from "../../../../../stories/LmButton/LmButton";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import { PreviousAndNextBar } from "../../../../../stories/PreviousAndNextBar/PreviousAndNextBar";
import { LmAvatar } from "../../../../../stories/Avatar/LmAvatar";
import LmTextField from "../../../../../stories/TextField/LmTextField";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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

const Show_Card = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOptions = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
 

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <Header /> */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-end"
          >
            
            <Grid item xs={12} md={9} lg={12}>
              <IconButton>
                <ArrowBackIosIcon fontSize="small" color="primary" />{" "}
                <a href="./edit_review">Back </a>
              </IconButton>
            </Grid>

            <Grid item xs={6} md={6} lg={5}>
              <IconButton>
                <LmTypographyGrey>23 days ago </LmTypographyGrey>
              </IconButton>
            </Grid>

            <Grid item xs={6} md={6} lg={3} container justify="flex-end">
              <IconButton>
                <LmTypographyGrey>
                  <LmButton>Status</LmButton>{" "}
                </LmTypographyGrey>
              </IconButton>
              <IconButton>
                <CreateOutlinedIcon />
              </IconButton>
              <IconButton>
                <ShareOutlinedIcon />
              </IconButton>
              <IconButton onClick={handleOptions}>
                <MoreVertOutlinedIcon />
              </IconButton>
            </Grid>
            {/* sidebar related quest */}
            {/* <Box mr={2}/> */}
            <Box display={{ xs: 'none', sm: 'none', lg: 'block' }}>
            <Grid item xs={6} md={6} lg={1} >
                   <div style={{position: 'fixed', top: '120px'}} >
                       
                   <LmTypographyGrey>Related Questions</LmTypographyGrey>
                    {/* Later Loop this listItem and replace with data from API */}
                    <List component="nav" aria-label="main mailbox folders">
                {/* 1st title */}
                        <ListItem
                        button
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                        >
                  {/* 2nd title */}           
                            <LmTypographyGrey>What is Track and Trace?</LmTypographyGrey>
                        </ListItem>
                        <ListItem
                        button
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                        >
                          <LmTypographyGrey>Can I integrate with APIs?</LmTypographyGrey>
                        </ListItem>
                 {/* 3rd title */}      
                        <ListItem
                        button
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                        >
                        <LmTypographyGrey>How do you cost and integrated project?</LmTypographyGrey>
                        </ListItem>
                {/* 4th title */}  
                        <ListItem
                        button
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                        >
                        <LmTypographyGrey>What's an ERP?</LmTypographyGrey>
                        </ListItem>
                    </List>
                    </div>
            </Grid></Box>
        {/* end */}
            <Grid container item xs={6} md={9} lg={12}>
              <LmTypographyGrey variant="h6" color="">
                What is Track and Trace
              </LmTypographyGrey>
            </Grid>
          </Grid>

          <Box mt={4} />
          <Grid container direction='row' xs={9} lg={9}>
              
            <Grid container item xs={9} lg={9} 
            direction="column"
            justify="flex-start"
            >
                    <div className="jss171">
                        <div className="jss115">
                            <div
                            className="jss167"
                            data-automation-key="ui-topic-subtopic-topic"
                            data-automation-value="customer-ops"
                            >
                            Main
                            </div>
                            <div
                            className="jss169"
                            data-automation-key="ui-topic-subtopic-subtopic"
                            data-automation-value="pre-sales"
                            >
                            Sub Topic
                            </div>
                        </div>
                    </div>
                    
            </Grid>
            <Grid container item xs={3} lg={3}
            justify="flex-start">
                        <div className="jss114">
                            <Tooltip title="Views">
                                <div className="jss118">
                                <VisibilityOutlinedIcon className="jss117" />
                                <span className="jss128 jss147 jss164 jss153">
                                    {/* {numberConvert(views)} */}12
                                </span>
                                </div>
                            </Tooltip>
                            <Tooltip title="See requests">
                                <div className="jss118">
                                <RoomServiceOutlinedIcon className="jss117" color="primary"/>
                                <span className="jss128 jss147 jss164 jss153">12</span>
                                </div>
                            </Tooltip>
                        </div>
                </Grid>

            <Grid container item lg={9} >
                <LmTextField  variant="standard" fullWidth="true" size="small"
                placeholder="
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut eros nisi. Mauris at ornare lectus. Nullam iaculis suscipit libero, et vestibulum massa. Nullam nec mi ac ante congue blandit. Nam bibendum ante dui, id gravida diam auctor a. Curabitur et lobortis tortor, a ultrices leo. Fusce imperdiet, sapien a malesuada molestie, sapien tellus aliquam nunc, sed sagittis risus odio cursus risus. Suspendisse accumsan suscipit luctus. Pellentesque congue, nisl sit amet vehicula porttitor, ante sem dignissim turpis, nec commodo velit nisi sit amet quam. Praesent in odio a arcu tempor mattis. Aliquam nec ullamcorper felis. Sed sit amet scelerisque enim, ac facilisis dui. Morbi vitae enim dignissim, pretium elit quis, tempor elit.
                Proin congue libero id diam posuere, a varius turpis laoreet. Suspendisse pulvinar efficitur odio, vitae ultrices metus elementum at. Nam eu tristique tortor. Quisque et iaculis nibh. Aenean mauris lacus, sollicitudin id augue quis, posuere iaculis enim. Maecenas vitae lorem tortor. Vestibulum viverra nisl felis, in gravida ex gravida non. Nulla auctor, eros pharetra bibendum elementum, ipsum ex eleifend ante, a scelerisque quam justo eu erat. In eleifend massa risus, in dictum diam volutpat lobortis. Duis fringilla nunc eu ante eleifend, tempor molestie tellus vehicula. Aenean dignissim eleifend quam. Donec viverra ac urna non interdum. Aliquam eget facilisis ipsum. Morbi a sodales dui. Maecenas luctus nulla metus, ut imperdiet tortor iaculis congue."
                >
              </LmTextField>
              <LmTextField  variant="standard" fullWidth="true" size="small"
                placeholder="Vestibulum in lorem sed neque congue semper et vel velit. Curabitur ullamcorper et urna eget sollicitudin. Nullam accumsan auctor est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec mi tempor, auctor eros id, venenatis mauris. Aliquam erat volutpat. Sed ac accumsan augue, id luctus arcu. Vestibulum quis augue in leo ultricies pretium ut sagittis risus. Quisque mollis lacinia placerat. Fusce id dui ut elit vulputate viverra tristique et leo. Proin feugiat pharetra massa, a lacinia diam molestie quis. In lacinia commodo est vel tincidunt. Phasellus vulputate libero urna, in tempor felis bibendum in. Aenean egestas ultricies odio vel euismod.
                Integer ultricies dapibus elit, eu rhoncus sem consequat quis. Phasellus porttitor accumsan blandit. Proin vel est ut massa tincidunt scelerisque. Phasellus magna sem, molestie sodales imperdiet at, convallis a est. Fusce scelerisque arcu at eros viverra, sodales facilisis leo euismod. Integer dignissim eu tortor vitae faucibus. Vestibulum pulvinar iaculis sagittis. Cras ac viverra ante, eu pharetra felis. In hac habitasse platea dictumst. Proin mi velit, sodales eu ante a, luctus tempus justo. Curabitur sollicitudin ex quis nulla rhoncus, id consectetur dui mattis.
               ."
                >    
              </LmTextField>
            </Grid>
            <Box mb={3} p={3} />
            <Grid item container lg={9}>
            <div>
         
            <Box pt={3}> </Box>

            
              <div className="jss110" style={{ paddingLeft: "30px" }}>
                <div className="jss155 jss113">
                  <div className="jss156">
                    <div>
                      <LmAvatar alt="Bilbo Baggins" className="jss162" />
                    </div>
                  </div>
                  <div className="jss157">
                    <div>
                      {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                      <span id="name">Lisa, Last name(You)</span>
                    </div>
                    <div>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        style={{ width: "100px" }}
                        style={{ fontSize: "smaller" }}
                      >
                        22 days ago
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
        </div>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
                <PreviousAndNextBar />
            </Grid>
           
          </Grid>
        </Container>
      </main>
    </div>
  );
}
export default Show_Card;