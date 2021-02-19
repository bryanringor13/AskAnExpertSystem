import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../../../../shared/Header";
import "./style.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import { LmTabs } from "../../../../../stories/Tabs/LmTabs";
import { related, request } from "./constants/dummy_data_tabs";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { BackIcon } from "../../../../../stories/BackIcon/BackIcon";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { LmRequestsPopOver } from "../../../../../stories/Popovers/LmRequestsPopOver";
import Box from "@material-ui/core/Box";
import { LmAvatar } from "../../../../../stories/Avatar/LmAvatar";
import Tooltip from "@material-ui/core/Tooltip";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { LmTypography } from "../../../../../stories/Typography/LmTypography";
import { LmPopOver } from "../../../../../stories/Popovers/LmPopOver";
import { articles } from "./constants/dummy_data";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import RoomServiceOutlinedIcon from "@material-ui/icons/RoomServiceOutlined";

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

const CommentsAndRepliesEnquiries = () => {
  const classes = useStyles();

  const tabs = [
    {
      label: "ENQUIRIES",
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
            className="requestContent"
            dangerouslySetInnerHTML={{ __html: content1 }}
          />
        </LmTypography>
        <div className="jss110">
          <div className="jss155 jss113">
            <div className="jss156">
              <div>
                <LmAvatar alt="Bilbo Baggins" className="jss162" />
              </div>
            </div>
            <div className="jss157">
              <div>
                {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                <span id="name">SME name</span>
              </div>
              <div>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ width: "100px", fontSize: "smaller" }}
                >
                  22 days ago
                </Typography>
              </div>
            </div>
          </div>

          <div className="jss114">
            <Tooltip title="Views">
              <div className="jss118">
                <VisibilityOutlinedIcon className="jss117" />
                {/* <span className="jss128 jss147 jss164 jss153">{numberConvert(views)}</span> */}
                <span className="jss128 jss147 jss164 jss153">12</span>
              </div>
            </Tooltip>
          </div>
          <div className="jss114">
            <Tooltip title="Views">
              <div className="jss118">
                <RoomServiceOutlinedIcon className="jss117" />
                <span className="jss128 jss147 jss164 jss153">0</span>
              </div>
            </Tooltip>
          </div>
        </div>
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
                    isRequest={false}
                  />
                </div>
                <div className="inq-pop-over">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                    className="pop"
                  >
                    <div className="pop-title">
                      <input
                        type="text"
                        placeholder="reply..."
                        style={{ border: "none" }}
                      ></input>
                    </div>
                    <div className="pop-title">
                      <LmPopOver />
                    </div>
                  </div>
                </div>
                <IconButton
                  onClick={() => alert("false")}
                  style={{ float: "right" }}
                >
                  Next enquiry{" "}
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

export default CommentsAndRepliesEnquiries;
