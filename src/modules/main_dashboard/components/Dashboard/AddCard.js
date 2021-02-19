import { Grid } from "@material-ui/core";

import React, { useState } from "react";
import Header from "../../../../shared/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import Divider from "@material-ui/core/Divider";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";

import "../style.css";
import { cards_content_data } from "./constants/contentCard.data";

import { LmMainTopicAndSubTopic } from "../../../../stories/LmMainTopicAndSubTopic/LmMainTopicAndSubTopic";
import { LmSelectTopicButton } from "../../../../stories/LmSelectTopicButton/LmSelectTopicButton";
import { ButtonBase } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { LmTypography } from "../../../../stories/Typography/LmTypography";
import { LmButton } from "../../../../stories/LmButton/LmButton";
import { LmTypographyGrey } from "../../../../stories/TypographyGrey/LmTypographyGrey";
import { LmRTE } from "../../../../stories/RTE/LmRTE";
import { LmTextField } from "../../../../stories/TextField/LmTextField";
// import { LmSelectTopicButton } from '../../../../stories/LmSelectTopicButton/LmSelectTopicButton'
import { LmSelectTopicNavigation } from "../../../../stories/LmSelectTopicNavigation/LmSelectTopicNavigation";

import { Popover } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { LmDiscardModal } from "../../../../stories/DialogBox/LmDiscardModal";

const DarkTextTypography = withStyles({
  root: {
    color: "#000",
  },
})(LmTypography);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
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
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const AddCard = () => {
  const classes = useStyles();
  const [content_data, set_content_data] = React.useState(cards_content_data);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const addCardContent = (text) => {
    const NewCardText = [...content_data, { text }];
    set_content_data(NewCardText);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        {/* <Container maxWidth="lg" className={classes.container}> */}
        {/* {content_data.map((content, index) => (
            <WhatIstheQuestion index={index} key={index} content={content}
            />
            ))} */}
        <Grid container justify="center" lg={12}>
          <Grid item container justify="center" xs={1} md={1} lg={1}></Grid>

          <Grid
            item
            container
            spacing={4}
            justify="space-between"
            xs={10}
            md={10}
            lg={10}
          >
            <div style={{ marginTop: "40px" }}>
              {/* <CreateCardForm addToCardContent={addCardContent}/> */}
              <CreateCardForm />
            </div>
          </Grid>

          <Grid item container justify="center" xs={1} md={1} lg={1}></Grid>
        </Grid>
      </main>
    </div>
  );
};

const CreateCardForm = ({ addToCardContent }) => {
  const classes = useStyles();
  const [openFilter, setOpenFilter] = React.useState(false);
  const [content_data, set_content_data] = React.useState(cards_content_data);
  const [values, setValues] = React.useState({
    content1: "",
    desc: "",
    charLimit: 20,
    charLimit2: 1,
  });
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    if (!content_data) return;
    addToCardContent(content_data);
    set_content_data("");
  };
  const addCardTextContent = (text) => {
    const NewCardContent = [...content_data, { text }];
    set_content_data(NewCardContent);
  };
  const openSelectTopic = () => {
    setOpenFilter(true);
  };
  const handleAddQuestion = () => {
    console.log("Click Button add");
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container item justify="center">
        {content_data.map((content) => (
          <TitleHeaderHelper content={content} />
        ))}
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          lg={6}
        >
          <FormControl fullWidth className={classes.margin} variant="filled">
            {/* {content_data.map((datas, index, key) => ( */}
            <div style={{ marginTop: "65px", marginBottom: "20px" }}>
              <LmTypographyGrey>What is the question?</LmTypographyGrey>
              <LmTextField
                required
                name="card_question"
                value={content_data.card_question}
                variant="outlined"
                size="large"
                placeholder="What is Track and Trace?"
              />
            </div>
          </FormControl>

          <Box mt={8} mb={8} />
          <Grid item container justify="space-between">
            <Grid item>
              <LmSelectTopicNavigation>
                <LmSelectTopicButton
                  color="primary"
                  size="small"
                  onClick={openSelectTopic}
                >
                  Select Topic
                </LmSelectTopicButton>
              </LmSelectTopicNavigation>
            </Grid>
            <Grid item>
              {/*  shows during Preview Card*/}
              <LmMainTopicAndSubTopic />
              {/* <LmButton color="default">Main </LmButton>
            <ArrowForwardIosIcon
              color="secondary"
              style={{ paddingTop: "12px" }}
              size="medium"
            />
            <LmButton variant="outlined">Sub Topic</LmButton> */}
              {/*  */}
            </Grid>
          </Grid>
          <Divider />
          <Grid item container justify="flex-start">
            <div style={{ marginTop: "25px", marginBottom: '15px' }}>
              <LmTypographyGrey variant="h6">Answer</LmTypographyGrey>
            </div>
          </Grid>
          {/* text RTE */}
          <Grid item container justify="flex-start" lg={12}>
            <Box mt={2} />
            {content_data.map((content, index, key) => (
              <DarkTextTypography>
                <Answerform addToCard={addCardTextContent}></Answerform>
              </DarkTextTypography>
            ))}
          </Grid>
          <Box mb={2} />
          <Grid item container justify="center">
            <Grid item container justify="flex-start" alignContent="flex-start">
            <div style={{ marginTop: "25px", marginBottom: '15px' }}>
              <LmTypographyGrey variant="h6">
                Invisible questions
              </LmTypographyGrey>
              </div>
            </Grid>
            <Grid item container lg={12} justify="center">
              <Box mt={6} mb={6} />
              <FormControl
                variant="outlined"
                className="MuiTextField-root MuiFormControl-fullWidth"
              >
                <LmTextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter invisible question"
                  value={values.content1}  
                  onChange={handleChange("content")}
                  error={values.content1.length < values.charLimit ? true : false}
                  helperText="This Field is Required!"
                ></LmTextField>
                <Box mt={2} mb={2} />
                <LmTextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter invisible question"
                >
                  What is Track and Trace
                </LmTextField>
              </FormControl>
              <Box mt={2} />
            </Grid>
            <Grid container justify="flex-start">
              <Box mt={2} mb={2} />
              <ButtonBase centerRipple="true" onClick={handleAddQuestion}>
                <AddIcon color="primary" />
                <LmTypographyGrey>Add invisible question</LmTypographyGrey>
              </ButtonBase>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

const TitleHeaderHelper = ({ content, index, key }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [content_data, set_content_data] = React.useState(cards_content_data);

  const handleShowPreview = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleClose = ({ checked, handleChange }) => {
    setAnchorEl(null);
  };

  const handleChangeToPrevPage = () => {
    const newContent = [...content_data];
    newContent[index].createCardView = false;
    set_content_data(newContent);
  };
  const handleDiscard = () => {};

  let NewTitle;

  if (content.createCardView) {
    NewTitle = content.title;
  }

  let ShowDiscard;
  let path;

  if (content.showDiscardButton) {
    ShowDiscard = "DISCARD";
    path = content.discardPath;
  }

  let ShowPublish;

  if (content.showDiscardButton) {
    ShowPublish = "PUBLISH";
  }

  let ShowPreview;

  if (content.ShowPreviewButton) {
    ShowPreview = <KeyboardArrowDownOutlinedIcon style={{ paddingTop: 8 }} />;
  }

  return (
    <Grid item container spacing={1} justify="space-between">
      <Grid container item xs={12} lg={6} justify="flex-start">
        <Box component="span" mt={4} />
        <LmTypographyGrey variant="h5" size="large">
          {" "}
          {/* Preview View createCardView Title*/}
          {/* changes to Preview a Card */}
          {/* {title} */}
          {NewTitle}
        </LmTypographyGrey>
      </Grid>
      <Grid container item xs={12} lg={6} justify="flex-end">
        {ShowDiscard ? (
          <LmButton color="default" onClick={handleDiscard}     
       >
         
            <LmDiscardModal>{ShowDiscard}</LmDiscardModal>

          </LmButton>
        ) : (
          ""
        )}
        <Box m={1} />
        {ShowPublish ? (
          <LmButton
            size="small"
            variant="outlined"
            color="black"
            primary="true"
            onClick={handleShowPreview}
            disabled="true"
          >
            {ShowPublish}
          </LmButton>
        ) : (
          ""
        )}{" "}
        <Divider />
        {ShowPreview ? (
          <LmButton
            size="small"
            variant="outlined"
            primary="true"
            onClick={handleShowPreview}
          >
            {ShowPreview}
          </LmButton>
        ) : (
          ""
        )}
        <Box m={1} />
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
            <a
              style={{ textDecoration: "none", color: "#e31c79" }}
              onclick={handleChangeToPrevPage}
              href={content.createCardView ? "./preview_card" : path}
            >
              {" "}
              PREVIEW
            </a>
          </li>
        </ul>
      </Popover>
    </Grid>
  );
};

const Answerform = ({ addToCard, Question, createCardView }) => {
  const [cardContent, setCardContent] = useState("");

  // const handleFormSubmit = e => {
  //   e.preventDefault();
  //   if(!cardContent) return;
  //   addToCard(cardContent);
  //   setCardContent('');
  // }
  return (
    <Grid item container justify="flex-start">
      <LmRTE
        input
        type="text"
        value={cardContent}
        onChange={(e) => {
          setCardContent(e.target.value);
        }}
      ></LmRTE>
    </Grid>
  );
};

export default AddCard;
