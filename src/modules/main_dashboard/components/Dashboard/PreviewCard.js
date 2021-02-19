import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Popover } from "@material-ui/core";

import { LmTypography } from '../../../../stories/Typography/LmTypography';
import { LmAvatar } from '../../../../stories/Avatar/LmAvatar';
import { articles } from './constants/dummy_data'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { LmTypographyGrey } from '../../../../stories/TypographyGrey/LmTypographyGrey';
import { LmButton } from '../../../../stories/LmButton/LmButton';
import { LmCreateCardModal } from '../../../../stories/DialogBox/LmCreateCardModal';


import Header from '../../../../shared/Header'
import { cards_content_data } from './constants/contentCard.data'

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(LmTypography);

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
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    flexGrow: 1,
    // marginLeft: 20,
    marginRight: 2,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Article = ({userName, salutation, content1, content2, content3, content4, content5}) => {
    return (
      <div>
        <div className="jss110">
          <div className="jss155 jss113">
            <div className="jss156">
              <div>
                <LmAvatar alt="Bilbo Baggins" className="jss162" />
              </div>
            </div>
            <div className="jss157">
              <div>
                <span className="jss128 jss138 jss158 jss153">
                <LmTypography Body16Med variant="subtitle1">{userName}  <span className="jss128 jss147 jss164 jss153">1223</span></LmTypography>
                </span>
                {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
               
              </div>
              <div>
                <span color="default">
                <LmTypography Body16Med variant="subtitle1">{salutation}</LmTypography>
                </span>
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
        
        <Box mb={2} />
         {/* text content */}
        <LmTypography  variant="body2" component="h2">
         {content1}<br /><br />
         {content2}<br /><br />
         {content3}<br /><br />
         {content4}<br /><br />
         {content5}<br />
        </LmTypography>
      </div>
    );
}

const HeaderHelper = ({content, index, key}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [confirmModal, setConfirmModal] = React.useState(null);
    const handleShowPreview = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const handleClose = ({checked, handleChange,}) => {
      setAnchorEl(null);
    };

    const openModal = Boolean(confirmModal);
    const handleConfirmModal = () => {
      setConfirmModal(openModal);
      console.log('Open Modal');
    }
    let NewTitle;
    
    if (content.createCardView) {
      NewTitle =  'Preview your card';
    }

    let ShowDiscard;
    let path;

    if (content.showDiscardButton) {
      ShowDiscard =  'BACK TO EDIT';
      path = './create_card'
    }

    let ShowPublish;
    
    if (content.showDiscardButton) {
      ShowPublish =  'PUBLISH';
    }

    // let ShowPreview;

    // if (content.ShowPreviewButton) {
    //   ShowPreview =  <KeyboardArrowDownOutlinedIcon style={{ paddingTop: 8 }}
    // />;
    // }

    return (
      
      <Grid container spacing={1} justify="space-between">
                <Grid container item xs={6} justify="flex-start">
                  <Box component="span" m={2} />
                  <LmTypographyGrey variant="h5" size="large">
                    {" "}
                    {/* Preview View createCardView Title*/}
                    {/* changes to Preview a Card */}
                    {/* {title} */}
                    {NewTitle}
                  </LmTypographyGrey>
                </Grid>
                <Grid container item xs={6} spacing={2} justify="flex-end">
                    {ShowDiscard ?
                    <LmButton color="secondary">
                    <a style={{ textDecoration: "none" }} href={ content.createCardView ? path : path}>
                    {ShowDiscard}
                    </a>
                    </LmButton>
                    : ''}
                    <Box m={1} />
                      {ShowPublish ? 
                      <LmButton size="small" variant="outlined" primary="true" onClick={handleConfirmModal}>
                        <LmCreateCardModal >
                          <WhiteTextTypography>{ShowPublish}</WhiteTextTypography></LmCreateCardModal>
                        </LmButton>: ''}{" "}
                      <Divider />
                </Grid>
                      
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
                    horizontal: "left",
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
                      <a style={{ textDecoration: "none", color: '#e31c79'}} href={path}>
                        {" "}
                        PREVIEW
                      </a>
                    </li>
                  </ul>
          </Popover>
              </Grid>
    )
}

const PreviewCard = () => {
  const classes = useStyles();
  const [content_data, set_content_data] = React.useState(cards_content_data);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>         
          {content_data.map((content, index) => (
          <HeaderHelper index={index} key={index} content={content}
          />
            ))}
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            spacing={3}
          >            
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Box mt={8}/>
            <Grid item xs={12} md={9} lg={6}>
                <Grid item container xs={12} md={9} lg={12}
                justify='flex-start'>
                <LmTypographyGrey variant="h4">
                    What is Track and Trace?
                </LmTypographyGrey>
                </Grid>
                <Box mt={2}/>
              {articles.map((item, index) => (
                <Article
                  userName={item.userName}
                  content1={item.content1}
                  content2={item.content2}
                  content3={item.content3}
                  salutation={item.salutation}
                />
              ))}
            </Grid>
            <Grid item xs={12} md={9} lg={3}></Grid>
            
          
          </Grid>
    
        </Container>
      </main>
    </div>
  );
}
export default PreviewCard;