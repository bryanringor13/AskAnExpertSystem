import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../../../../shared/Header";
import "./style.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { dum_data } from "../constants/dummy.data";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_TOPICS } from "../../../../../redux/actions/topicActions";
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

const generateColor = () => {
  return "#" + Math.random().toString(16).substr(-6);
};
const Topics = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const topics = useSelector(state => state.topic);

  useEffect(() => {
    dispatch({
      type: GET_ALL_TOPICS
    })
  }, [])
  
  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <div className="main-content">
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/" onClick={() => alert("test")}>
                Hubs
              </Link>
              <Link
                color="inherit"
                // href="/getting-started/installation/"
                onClick={() => alert("test")}
              >
                Flamingo
              </Link>
              <Typography color="textPrimary">The Brain</Typography>
            </Breadcrumbs>
            <Typography
              component="div"
              variant="h5"
              fontWeight="fontWeightBold"
            >
              [HSBC] Topics
            </Typography>
            <Box p={2}></Box>

            {!!topics.topics ? topics.topics.map((topic, index) => (
              <div className="parent-topic" key={index}>
                <div className="child-topic">
                  <p id="p-topic-name">{topic.name}</p>
                  <p style={{ color: generateColor() }}>
                    {/* {!!topic.subTopic && topic.subTopic.map((subValue) => (
                      <span className="topics-sub">{subValue.name}</span>
                    ))} */}
                    {[{'name': 'sample1'}, {'name': 'sample2'}, {'name': 'sample3'}, {'name': 'sample4'}, {'name': 'sample5'}, {'name': 'sample6'}, {'name': 'sample7'}, {'name': 'sample8'}, {'name': 'sample9'}, {'name': 'sample10'}].map((subValue, index) => (
                      <span className="topics-sub" key={index}>{subValue.name}</span>
                      ))}
                  </p>
                </div>
              </div>
            )) : null}
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Topics;
