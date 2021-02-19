import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Popover } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../style.css';

import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// import { LmCard } from '../../../../../stories/Card/LmCard'
import { LmTypographyGrey } from '../../../../../stories/TypographyGrey/LmTypographyGrey';
import { LmTypographyPink  } from '../../../../../stories/TypographyPink/LmTypographyPink';
import { LmDialog } from '../../../../../stories/DialogBox/LmDialog';
import { LmTextFieldWicon } from '../../../../../stories/TextFieldWithIcon/LmTextFieldWicon' 
import { LmButton } from '../../../../../stories/LmButton/LmButton' 
import { LmTypography } from '../../../../../stories/Typography/LmTypography';
import Header from '../../../../../shared/Header'
import Link from '@material-ui/core/Link';
import { ticket } from './constants/dummy_data'
import { Avatar } from '@material-ui/core';
import { LmAvatar } from '../../../../../stories/Avatar/LmAvatar';
import Paper from '@material-ui/core/Paper';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
// import ShareIcon from '@material-ui/icons/Share';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import TrendingFlatOutlinedIcon from '@material-ui/icons/TrendingFlatOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';


const useStyles = makeStyles((theme) => ({
  
    root: {
      display: 'flex',
    },
  
  
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const Ticket = ({userName, questionTitle, content}) => {
  
    return (
      <div>
        <div className="">
          <div className="jss155 jss113">
            <div className="jss156">
              <div>
                <Box mt={1}/>
                <LmAvatar alt="Bilbo Baggins" className="jss162" />
              </div>
            </div>
            <div>
              <div>
                <span>
                  <LmTypography variant="subtitle1">{userName}</LmTypography>
                </span>
               
              </div>
              <div>
                 {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                 <span className="jss128 jss147 jss164 jss153">asked 23d ago</span>
                {/* <span color="default">
                  {salutation}
                </span> */}
              </div>
            </div>
          </div>
         
          
        </div>
        <Box mt={3}/>
         {/* text content */}
         
         <LmTypographyGrey variant="body1">
           {questionTitle}
         </LmTypographyGrey>
        
      </div>
    );
}



const Review = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
    const handleOptions = (event) => {
        setAnchorEl(event.currentTarget);
      };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleEdit = () => {
      console.log('Edit');
    };
    const handleClose = ({checked, handleChange,}) => {
        setAnchorEl(null);
      };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <div style={{ width: "100%" }}>
            <Box display="flex" p={1}>
              <Box p={1} mr={26}>
                <IconButton>
                  <ArrowBackIosIcon fontSize="small" color="primary" /> <a href="/requests">Back to
                  requests</a>
                </IconButton>
              </Box>
              <Box p={1}></Box>

              <Box p={1} mr={95} direction="column">
                <LmTypographyGrey>
                  {" "}
                  Assignee: Unassigned
                  <Link
                    component="button"
                    variant="body2"
                    style={{ marginLeft: "7px", fontStyle: "oblique" }}
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                  >
                    Assign to me
                  </Link>
                </LmTypographyGrey>
              </Box>
              <Box p={1} ml={2} direction="column">
                <IconButton>
                  <CreateOutlinedIcon />
                </IconButton>
                <IconButton>
                  <QuestionAnswerOutlinedIcon />
                </IconButton>
                <IconButton onClick={handleOptions}>
                  <MoreVertOutlinedIcon  />
                </IconButton>
              </Box>
            </Box>
          </div>
          <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <ul
                className="MuiList-root MuiMenu-list MuiList-padding"
                role="menu"
                tabIndex="-1"
              >
                <li
                  className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                  tabIndex="0"
                  role="menuitem"
                  aria-disabled="false"
                >
                  
                  Share <ShareOutlinedIcon />
                  {/* <span class="MuiTouchRipple-root"></span> */}
                </li>
                <li
                  className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                  tabIndex="0"
                  role="menuitem"
                  aria-disabled="false"
                  // onClick={handleEdit}
                  // href="/edit_review"
                >
                  {/* <Link to={"/edit_review"+alb_id}>Review : { alb_id }</Link> */}
                  <a href="/edit_review"> Edit <CreateOutlinedIcon /> </a>
                 
                  {/* <span class="MuiTouchRipple-root"></span> */}
                </li>
                <li
                  className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                  tabIndex="0"
                  role="menuitem"
                  aria-disabled="false"
                >
                  
                  Move <TrendingFlatOutlinedIcon />
                  {/* <span class="MuiTouchRipple-root"></span> */}
                </li>
                <li
                  className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                  tabIndex="0"
                  role="menuitem"
                  aria-disabled="false"
                >
                  
                
                  Copy <FileCopyOutlinedIcon />
                  {/* <span class="MuiTouchRipple-root"></span> */}
                </li>
                <li
                  className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                  tabIndex="0"
                  role="menuitem"
                  aria-disabled="false"
                >
                  
                  Delete <RemoveCircleOutlineRoundedIcon />
                  {/* <span class="MuiTouchRipple-root"></span> */}
                </li>
              </ul>
            </Popover>
          <Grid
            container
            direction="row"
            justify="space-between"
            // alignItems="start"
            spacing={3}
          >
            {/* Title */}
            <Grid item xs={12} md={3} lg={3}>
              {/* question title */}
              <LmTypographyGrey variant="h6" component="div">
                <Box fontWeight="fontWeightBold">Requests for review</Box>
              </LmTypographyGrey>
              <Box mt={2} />
              {ticket.map((item, index) => (
                <Ticket
                  key={index}
                  userName={item.userName}
                  salutation={item.salutation}
                  questionTitle={item.questionTitle}
                  content={item.content}
                />
              ))}
            </Grid>
            <Grid item xs={12} md={9} lg={9}>
              {/* question title */}
              <LmTypographyGrey variant="h6">
                What is track and trace?
              </LmTypographyGrey>

              <div className="jss110">
                <div className="jss155 jss113">
                  <div className="jss156">
                    <Box mt={1} />
                    <div>
                      <Avatar alt="Bilbo Baggins" className="jss162" />
                    </div>
                  </div>
                  <div className="jss157">
                    <div>
                      <span
                        className="jss128 jss138 jss158 jss153"
                        chars1="Billy Bo"
                      ></span>
                      {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                    </div>
                    <div>
                      <span className="jss128 jss139 jss159 jss153"></span>
                    </div>
                  </div>
                </div>

                <div className="jss171">
                  <div className="jss115">
                    <div
                      className="jss167"
                      data-automation-key="ui-topic-subtopic-topic"
                      data-automation-value="customer-ops"
                    >
                      Main
                    </div>
                    <span className="jss172">&gt;</span>
                    <div
                      className="jss169"
                      data-automation-key="ui-topic-subtopic-subtopic"
                      data-automation-value="pre-sales"
                    >
                      Sub Topic
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
            alignItems="flex-start"
            spacing={3}
          >
            {/* 2 columns cards and requests */}
            <Grid item xs={12} md={9} lg={3}></Grid>
            <Grid item xs={12} md={9} lg={9}>
              {/* end 2 colums */}

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    
                  </Paper>
                </Grid>
                {/* <Grid item xs={12}>
                  textbox reply
                  <LmTextFieldWicon />
                </Grid> */}
                
              </Grid>
            </Grid>
            {/* <Grid item xs={12} md={9} lg={3}></Grid>
            <Grid item xs={12} md={9} lg={9}></Grid> */}
          </Grid>
        </Container>
      </main>
    </div>
    )
}

export default Review;