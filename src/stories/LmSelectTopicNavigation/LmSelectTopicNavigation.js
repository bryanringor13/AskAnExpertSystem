import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { Divider, TextareaAutosize } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { LmButton } from "../LmButton/LmButton";
import { LmTypographyGrey } from "../TypographyGrey/LmTypographyGrey";
import LmTextField from "../TextField/LmTextField";

import { dummy_data_sub_Topic, dummy_data_topic } from "./constants/dum_data";
import { LmTypography } from "../Typography/LmTypography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function AddTopicForm({ topicForm, addToForm, addSubForm }) {
  const [value, setValue] = React.useState("");
  const [valueSub, setSubValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addToForm(value);
    setValue("");
  };

  const handleSubmitSub = (e) => {
    e.preventDefault();
    if (!valueSub) return;
    addSubForm(valueSub);
    setSubValue("");
  };
  return (
    <form onSubmit={topicForm ? handleSubmit : handleSubmitSub}>
      <LmTextField
        input
        type="text"
        variant="outlined"
        value={topicForm ? value : valueSub}
        onChange={(e) => {
          topicForm ? setValue(e.target.value) : setSubValue(e.target.value);
        }}
      ></LmTextField>
    </form>
  );
}

const GridTopics = ({ topicName, index, key }) => {
  const [isShowAddTopic, setisShowAddTopic] = React.useState(false);

  const handleClick = () => {
    setisShowAddTopic(true);
  };
  return (
    <Grid key={index} container direction="column" spacing={2}>
      <Grid item container justify="flex-start">

        <LmButton variant="outlined" color="default" onClick={handleClick}>
          {topicName}
        </LmButton>
      </Grid>
      <Divider />
    </Grid>
  );
};

export const LmSelectTopicNavigation = ({ children }) => {
  const [isShowAddTopic, setisShowAddTopic] = React.useState(false);
  const [isShowTextField, setisShowTextField] = React.useState(false);
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    open: false,
  });
  const [topics, setTopics] = React.useState(dummy_data_topic);
  const [subTopics, setSubTopics] = React.useState(dummy_data_sub_Topic);
  const [topicForm, setTopicForm] = React.useState(true);

  const handleClick = () => {
    setisShowAddTopic(true);
  };
  const handleShowTextField = () => {
    setisShowTextField(true);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleTopicForm = () => {
    setTopicForm(true);
  };
  const handleSubForm = () => {
    setTopicForm(false);
  };

  const addTopic = (topicName) => {
    const NewTopic = [...topics, { topicName }];
    setTopics(NewTopic);
  };
  const addSubTopic = (subTopic) => {
    const NewSubTopic = [...subTopics, { subTopic }];
    setSubTopics(NewSubTopic);
  };

  let placeholdertext;
  placeholdertext = "Enter Topic";
  return (
    <div className={classes.root}>
      <div>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              style={{
                fontWeight: "500",
                lineHeight: "1.75",
                fontSize: "16px",
                letterSpacing: "0.02857em",
              }}
              onClick={toggleDrawer(anchor, TextareaAutosize)}
            >
              {children}
            </Button>

            <Drawer anchor={anchor} open={state[anchor]}>
              <div
                style={{ width: "400px" }}
                role="presentation"
                onKeyDown={toggleDrawer(anchor, false)}
              >
                <div>
                  <Grid container>
                    <Grid item container justify="flex-start">
                      <Box mt={2} ml={2}>
                        <Typography variant="h6">Select Topic</Typography>
                      </Box>
                    </Grid>

                  </Grid>
                </div>
                <div style={{ height: "300px", overflow: 'scroll'}}>
                  <Divider />
                  <Box margin={2}>
                    {subTopics.map((subTopic, index, key) => (
                      <GridTopics topicName={subTopic.subTopic}/>
                   
                    ))}
                  </Box>
                </div>
              </div>
              {/* <LmTypography>{topicForm ? 'New Topic Name' : 'New Sub Topic Name'}</LmTypography> */}
              {isShowAddTopic ? (
              <div style={{display: 'flex', flexDirection: 'row'}} onClick={handleShowTextField}>
                        <AddIcon
                          style={{ marginLeft: "8px", color: '#ed1d7c', marginTop: '21px' }}
                          fontSize="small"
                        />
                        <p  style={{ color: 'grey', marginTop: '20px' }}>Add subtopic</p>
               </div>
                  ) : null}

{isShowTextField ? (
              <Box mt={1} mb={1} p={2}>
                <AddTopicForm
                  addToForm={addSubTopic}
                  onSubmit={handleTopicForm}
                  topicForm={topicForm}
                ></AddTopicForm>
              </Box>
                ) : null}
              {/* <Box mt={1} mb={1} p={2}>
                <AddTopicForm
                  addToForm={addTopic}
                  onSubmit={handleSubForm}
                  topicForm={handleSubForm}
                ></AddTopicForm>
              </Box> */}
              <Divider />
              <div>
                <div onClick={handleClick}>
                <Box margin={2}>
                  {topics
                    .sort(function (a, b) {
                      return b - a;
                    })
                    .map((topic, index, key) => (
                      <GridTopics
                        topicName={topic.topicName}
                        index={index}
                   
                      />
                    ))}

                </Box>
                </div>
                  <Grid container justify="space-between">
                    <Grid item container justify="flex-start" />
                    <Grid item container justify="flex-end">
                      <LmButton
                        onClick={toggleDrawer(anchor, false)}
                        primary="true"
                        size="small"
                        style={{position: 'fixed', bottom: '1%' }}
                      >
                        Done
                      </LmButton>
                    </Grid>
                  </Grid>
              </div>
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
