import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import React from "react";
import Header from "../../../../../shared/Header";
import { LmRequestsPopOver } from "../../../../../stories/Popovers/LmRequestsPopOver";
import { LmTabs } from "../../../../../stories/Tabs/LmTabs";
import { LmTypography } from "../../../../../stories/Typography/LmTypography";
import { articles } from "./constants/dummy_data";
import { request } from "./constants/dummy_data_tabs";

import "./style.css";

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

const CommentsAndRepliesRequests = () => {
  const classes = useStyles();

  const tabs = [
    {
      label: "REQUEST",
      hasIcon: true,
      content: request,
    },
  ];
  const Article = ({
    userName,
    salutation,
    content1,
    content2,
    content3,
    content4,
    content5,
  }) => {
    return (
      <div>
        {/* text content */}
        <LmTypography variant="body2" component="h2">
          <div
            id="inputText"
            className="requestContent"
            dangerouslySetInnerHTML={{ __html: content1 }}
          />
        </LmTypography>
      </div>
    );
  };

  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className="main-container">
          <div className="main-content">
            <Grid container spacing={0}>
              <Grid
                item
                xs={3}
                className="left-content"
                style={{
                  padding: "0px 0px 0px 15px",
                  borderRightStyle: "solid",
                  borderRightWidth: "thin",
                  borderRightColor: "#c3c3c3",
                  height: "134vh",
                }}
              >
                <div id="left-inquiry">
                  <IconButton onClick={() => alert("false")}>
                    <ArrowBackIosIcon fontSize="small" color="primary" /> Back
                  </IconButton>

                  <LmTabs
                    tabs={tabs}
                    badgeContent={request.length}
                    onClicked={(e) => alert(e)}
                    hasExpertButton={false}
                    isRequest={true}
                  />
                </div>
                <IconButton
                  onClick={() => alert("false")}
                  style={{ float: "right" }}
                >
                  Next request
                  <ChevronRightOutlinedIcon fontSize="small" color="primary" />
                </IconButton>
              </Grid>
              <Grid
                item
                xs={9}
                className="right-content"
                style={{ padding: "0px 20px 0px 20px" }}
              >
                <div>
                  <div style={{ width: "100%", float: "right" }}>
                    <Box display="flex" p={1} style={{ float: "right" }}>
                      <IconButton>
                        <ShareOutlinedIcon />
                      </IconButton>
                      <IconButton>
                        <CreateOutlinedIcon />
                      </IconButton>
                      <IconButton>
                        <FileCopyOutlinedIcon />
                      </IconButton>

                      <IconButton>
                        <LmRequestsPopOver></LmRequestsPopOver>
                      </IconButton>
                    </Box>
                  </div>

                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="start"
                    spacing={3}
                  >
                    <Grid item xs={12} md={12} lg={12}>
                      <Typography variant="h6" style={{ color: "#000000" }}>
                        What is Track and Trace?
                      </Typography>
                      {articles.map((item, index) => (
                        <Article
                          userName={item.userName}
                          content1={item.content1}
                          content2={item.content2}
                          content3={item.content3}
                          content4={item.content4}
                          content5={item.content5}
                          salutation={item.salutation}
                        />
                      ))}
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default CommentsAndRepliesRequests;
