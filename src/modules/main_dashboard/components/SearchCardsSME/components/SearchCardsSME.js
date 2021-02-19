import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../../../../shared/Header";
import "./style.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { LmSearch } from "../../../../../stories/LmSearch/LmSearch";
import { LmButtonAskTheExpert } from "../../../../../stories/LmButtonAskTheExpert/LmButtonAskTheExpert";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { dummy_related_data } from "./constants/dummy_related_data";
import { dummy_answer_data } from "./constants/dummy_answer_data";
import { LmTypographyGrey } from "../../../../../stories/TypographyGrey/LmTypographyGrey";
import { LmCreateCardButton } from "../../../../../stories/CreateCardButton/LmCreateCardButton";
import AccessTimeIconOutlined from "@material-ui/icons/AccessTimeOutlined";
import MUIDataTable from "mui-datatables";
import Divider from "@material-ui/core/Divider";

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

const SearchCardsSME = () => {
  const [searchKey, sesearchKey] = React.useState("");
  const [relatedResult, setrelatedResult] = React.useState([]);
  const [answerResult, setanswerResult] = React.useState([]);
  const [isViewAllClicked, setisViewAllClicked] = React.useState(false);
  const [isViewRecentClicked, setisisViewRecentClicked] = React.useState(false);
  const [isSearched, setisSearched] = React.useState(false);
  const [recentSeach, setrecentSeach] = React.useState(
    JSON.parse(localStorage.getItem("recentSearch")) === null
      ? []
      : JSON.parse(localStorage.getItem("recentSearch"))
          .sort(function (a, b) {
            return b.id - a.id;
          })
          .slice(0, 2)
  );
  const classes = useStyles();

  const getUpdatedValue = (updatedValue) => {
    setisSearched(true);
    if (updatedValue !== "") {
      addRecent(updatedValue);
      sesearchKey(updatedValue);
      search(updatedValue);
    } else {
      setisSearched(false);
    }
  };

  const search = (processParam) => {
    var filterAnswer = dummy_answer_data.filter(
      (condition) =>
        typeof condition.title == "string" &&
        condition.title.indexOf(processParam) > -1
    );

    var filterRelated = dummy_related_data.filter(
      (condition) =>
        typeof condition.title == "string" &&
        condition.title.indexOf(processParam) > -1
    );

    setanswerResult(filterAnswer);
    if (filterRelated.length > 3) {
      filterRelated = filterRelated.slice(2, filterRelated.length);
    }

    setrelatedResult(filterRelated);
  };
  const viewMoreRelated = () => {
    var filterRelated = dummy_related_data.filter(
      (condition) =>
        typeof condition.title == "string" &&
        condition.title.indexOf(searchKey) > -1
    );
    setrelatedResult(filterRelated);
    setisViewAllClicked(true);
  };

  const viewMoreRecent = () => {
    const viewAll = JSON.parse(localStorage.getItem("recentSearch")).sort(
      function (a, b) {
        return b.id - a.id;
      }
    );
    setrecentSeach(viewAll);
    setisisViewRecentClicked(true);
  };
  const clearRecentCache = () => {
    localStorage.clear();
  };
  const addRecent = (value) => {
    var prevData = JSON.parse(localStorage.getItem("recentSearch"));
    var id = prevData === null ? 1 : prevData.length + 1;
    var val = [{ id: id, recent: value }];

    if (prevData !== null) {
      prevData.push(val[0]);
    } else {
      prevData = val;
    }

    setrecentSeach((searches) => searches.concat(val));

    localStorage.setItem("recentSearch", JSON.stringify(prevData));
  };
  const Discover = ({ topicCount }) => {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper} id="discoverPaper">
              <p className="small">DISCOVER</p>
              <div id="topicRow">
                <p className="small topic">
                  TOPIC<strong id="countTopic"> {topicCount.length} </strong>
                </p>
              </div>
              <Box p={2} flexGrow={2}></Box>
              <p className="small" onClick={() => clearRecentCache()}>
                RECENT SEARCHES
              </p>
              {recentSeach.map((value) => (
                <div className="recentSearches">
                  <AccessTimeIconOutlined
                    style={{ position: "relative", top: "6px" }}
                  />
                  <span className="recentResult" style={{ marginLeft: "5px" }}>
                    {value.recent}
                  </span>
                </div>
              ))}
              <Box p={1} flexGrow={1}></Box>
              {!isViewRecentClicked && recentSeach.length > 0 ? (
                <div className="viewAllRecentDiv">
                  <span onClick={() => viewMoreRecent()} className="viewrecent">
                    <span className="recentIcon">+</span>
                    <span className="recentText">All Recent Searches</span>
                  </span>
                </div>
              ) : null}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  };
  const SearchResult = () => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} id="discoverPaper">
            <p className="small">
              {/* {answerResult.length} */}
              There are no results for
              <p>"{searchKey.toUpperCase()}"</p>
              <Divider />
              <p>
                Ask the experts to answer your question and add it to the hub
              </p>
            </p>
            {answerResult.length === 0 ? (
              <LmButtonAskTheExpert href="/askanexpert" />
            ) : null}

            {answerResult.map((value, i) => (
              <div>
                <div className="container-text">
                  <div className="tRow">
                    <div className="left">
                      <p id={`myText-${i}`} className="small">
                        {value.title}
                      </p>
                    </div>
                    <div className="right">
                      <div className="jss115">
                        <div
                          className="jss169"
                          data-automation-key="ui-topic-subtopic-subtopic"
                          data-automation-value="pre-sales"
                          id="resultBubble1"
                        >
                          UX
                        </div>
                        &nbsp;
                        <div
                          className="jss169"
                          data-automation-key="ui-topic-subtopic-subtopic"
                          data-automation-value="pre-sales"
                          id="resultBubble2"
                        >
                          Usability Testing
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Box p={1} flexGrow={1}></Box>
              </div>
            ))}

            <Box p={1} flexGrow={1}></Box>
            <p className="small">Related</p>

            {relatedResult.map((value, i) => (
              <div>
                <div className="container-text">
                  <div className="tRow">
                    <div className="left">
                      <p id={`myText-${i}`} className="small">
                        {value.title}
                      </p>
                    </div>
                    <div className="right">
                      <div className="jss115">
                        <div
                          className="jss167"
                          data-automation-key="ui-topic-subtopic-topic"
                          data-automation-value="customer-ops"
                          id="bubble1"
                        >
                          Marketing
                        </div>
                        <div
                          className="jss169"
                          data-automation-key="ui-topic-subtopic-subtopic"
                          data-automation-value="pre-sales"
                          id="bubble2"
                        >
                          Campaigns
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Box p={1} flexGrow={1}></Box>
              </div>
            ))}
            {relatedResult.length > 1 && !isViewAllClicked ? (
              <div className="viewAllrelatedLinkDiv">
                <span
                  onClick={() => viewMoreRelated()}
                  className="viewAllrelatedLink"
                >
                  VIEW ALL RELATED
                </span>
              </div>
            ) : null}
          </Paper>
        </Grid>
      </Grid>
    );
  };
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
                href="/getting-started/installation/"
                onClick={() => alert("test")}
              >
                Flamingo
              </Link>
              <Typography color="textPrimary">The Brain</Typography>
            </Breadcrumbs>

            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-end"
              spacing={3}
            >
              {/* Chart */}
              <Grid item xs={12} md={9} lg={10}>
                {/* <Paper className={fixedHeightPaper}> */}
                <LmTypographyGrey variant="h4">
                  Hi Sandra! welcome to [HSBC] hub
                </LmTypographyGrey>
                <LmTypographyGrey>
                  Here's what's happening today. You can search for any topic
                  you need answer for
                </LmTypographyGrey>
              </Grid>

              <Grid item xs={12} md={9} lg={2}>
                {/* <LmButtonAskTheExpert color="primary"/> */}
                <LmCreateCardButton size="small" color="secondary">
                  Create a card
                </LmCreateCardButton>
              </Grid>
              <Grid container item xs={6} md={9} lg={12}>
                <LmSearch propsKeydown={(e) => getUpdatedValue(e)} />
              </Grid>
            </Grid>

            <Box p={1} flexGrow={1}></Box>
            {!isSearched ? <Discover topicCount={[]} /> : null}

            {isSearched ? <SearchResult found={[]} /> : null}
          </div>
        </Container>
      </main>
    </div>
  );
};

export default SearchCardsSME;
