/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { LmActionBars } from "../../../../stories/ActionBars/LmActionBars";
import { LmSearchBar } from "../../../../stories/SearchBar/LmSearchBar";
import { LmSearchView } from "../../../../stories/SearchView/LmSearchView";
import { LmTypographyGrey } from "../../../../stories/TypographyGrey/LmTypographyGrey";
import { LmTypography } from "../../../../stories/Typography/LmTypography";
import { LmCard } from "../../../../stories/Card/LmCard";
import { LmPagination } from "../../../../stories/Pagination/LmPagination";
import { LmSuccessAlert } from "../../../../stories/LmSuccessAlert/LmSuccessAlert";
import { LmCreateCardButton } from "../../../../stories/CreateCardButton/LmCreateCardButton";
import { cards_dum_data } from "./constants/cards.data";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import Pagination from "@material-ui/lab/Pagination";
// import SideDrawer from '../../../../shared/Sidebar';
import Header from "../../../../shared/Header";

const drawerWidth = 240;

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(LmTypography);

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
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    color: "#f2f2f4",
    background: "#21222e",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
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
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const Dashboard = withRouter(({ history }) => {
  console.log("history", history.location.state);
  const classes = useStyles();
  let histories = useHistory();
  const role =
    histories.location.state === undefined
      ? localStorage.getItem("role")
      : histories.location.state.role;
  const [openSuccess, setSuccessOpen] = useState(false);
  const [openSuccessDelete, setopenSuccessDelete] = useState(false);
  const [open, setOpen] = useState(true);
  const [view, setView] = React.useState(12);
  const [isLoading, setisLoading] = React.useState(true);

  const [cardsData, setCardsData] = useState(cards_dum_data);
  const [sort, setSort] = React.useState("");
  const [sortClicked, setsortClicked] = React.useState(false);
  // const [sort, setSort] = React.useState(12);
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [isDelete, setisDelete] = useState(false);
  const [isMoved, setisMoved] = useState(true);
  const [isAskanExperSuccess, setIsAskanExperSuccess] = useState(false);

  const itemsPerPage = 5;
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(
    Math.ceil(cardsData.length / itemsPerPage)
  );

  const paghandleChange = (event, value) => {
    setPage(value);
  };

  const handleSort = (event) => {
    setSort(event.currentTarget.title);
    setsortClicked(true);
  };

  useEffect(() => {
    var sortedCards = "";
    switch (sort) {
      case "mostView":
        sortedCards = cardsData.sort((a, b) => a.views - b.views).reverse();
        setCardsData(sortedCards);
        setsortClicked(false);
        break;
      case "leastView":
        sortedCards = cardsData.sort((a, b) => a.views - b.views);
        setCardsData(sortedCards);
        setsortClicked(false);
        break;
      case "newestFirst":
        sortedCards = cardsData
          .sort(
            (a, b) =>
              new Date(a.dateTimeStamp).getTime() -
              new Date(b.dateTimeStamp).getTime()
          )
          .reverse();
        setCardsData(sortedCards);
        setsortClicked(false);
        break;
      case "oldestFirst":
        sortedCards = cardsData.sort(
          (a, b) =>
            new Date(a.dateTimeStamp).getTime() -
            new Date(b.dateTimeStamp).getTime()
        );
        setCardsData(sortedCards);
        setsortClicked(false);
        break;
    }
  }, [sortClicked === true]);

  const handleSelectCards = (e, val, card_content) => {
    if (e.currentTarget.checked) {
      setSelectedCards([...selectedCards, val]);
      setSelectedCard([...selectedCard, card_content]);
    } else {
      let filteredData = selectedCards.filter((x) => x !== val);
      setSelectedCards(filteredData);

      let filteredData2 = selectedCard.filter((x) => x.id !== val);
      setSelectedCard(filteredData2);
    }
  };
  const handleDelete = () => {
    setisDelete(true);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleView = (event) => {
    setView(event.currentTarget.value);
  };

  const handleCards = (event) => {
    console.log("Call action bars");
  };
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const CardData = ({ cardDatas, index, key }) => {
    return (
      <div button component="a" 
      href="/updateDetails"
      style={{textDecoration: 'none', color: '#868080', width: '100%'}}>
      
        <LmCard
          index={index}
          key={index}
          isShow={true}
          title={cardDatas.title}
          description={cardDatas.description}
          userName={cardDatas.userName}
          salutation={cardDatas.salutation}
          checked={cardDatas.isChecked}
          views={cardDatas.views}
          dateTimeStamp={cardDatas.dateTimeStamp}
          
        
        >

        </LmCard>
        <Box mt={2} />
      </div>
    );
  };

  useEffect(() => {
    if (isDelete) {
      for (var i = 0; i < selectedCards.length; i++) {
        var CData = cardsData;
        var dataIndex = CData.findIndex((x) => x.id === selectedCards[i]);
        CData.splice(dataIndex, 1);

        setCardsData(CData);
        setSelectedCards([]);
      }
      setisDelete(false);
    }
  }, [isDelete]);

  const openAlert = () => {
    setSuccessOpen(true);
    const interval = setInterval(() => {
      setSuccessOpen(false);
      clearInterval(interval);
    }, 3000);
  };
  const openAlertDelete = () => {
    setopenSuccessDelete(true);
    const interval = setInterval(() => {
      setopenSuccessDelete(false);
      clearInterval(interval);
    }, 3000);
  };
  const openAlertANEx = () => {
    setIsAskanExperSuccess(true);
    const interval = setInterval(() => {
      setIsAskanExperSuccess(false);
      clearInterval(interval);
    }, 3000);
  };

  useEffect(() => {
    if (localStorage.getItem("askAnExpertSuccess") === "true") {
      openAlertANEx();
    }
  }, [localStorage.getItem("askAnExpertSuccess") === "true"]);

  const test = (x) => {
    localStorage.setItem("search", x);
    history.push({
      pathname: "/search",
    });
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header  

      />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container maxWidth="xl" className={classes.container}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-end"
            spacing={3}
          >
            {openSuccess ? (
              <LmSuccessAlert
                onClose={() => {
                  setSuccessOpen(false);
                }}
              >
                {" "}
                Your cards has been successfully moved.
              </LmSuccessAlert>
            ) : null}
            {openSuccessDelete ? (
              <LmSuccessAlert
                onClose={() => {
                  setopenSuccessDelete(false);
                }}
              >
                {" "}
                Your cards has been successfully deleted.
              </LmSuccessAlert>
            ) : null}
            {isAskanExperSuccess ? (
              <LmSuccessAlert
                onClose={() => {
                  setSuccessOpen(false);
                }}
              >
                Your question is sent to the expert successfully
              </LmSuccessAlert>
            ) : null}
            <Grid item xs={12} md={9} lg={10}>
              {/* <Paper className={fixedHeightPaper}> */}

              <LmTypographyGrey variant="h4">
                Hi Sandra! welcome to [HSBC] hub
              </LmTypographyGrey>

              <LmTypographyGrey>
                Here's what's happening today. You can search for any topic you
                need answer for
              </LmTypographyGrey>
            </Grid>

            {role === "sme" ? (
              <Grid item xs={12} md={9} lg={2}>
                {/* <LmButtonAskTheExpert color="primary"/> */}
                <LmCreateCardButton size="small" color="secondary">
                  <a style={{ textDecoration: "none" }} href="/create_card">
                    <WhiteTextTypography>Create a card</WhiteTextTypography>
                  </a>
                </LmCreateCardButton>
              </Grid>
            ) : null}

            <Grid container item spacing={1}>
              <Grid item xs={role === "sme" ? 12 : 10}>
                <LmSearchBar propsKeydown={(e) => test(e)} />
              </Grid>

              <Grid
                item
                xs={2}
                style={{ display: role === "sme" ? "none" : "inline" }}
              >
                <button
                  onClick={() => {
                    history.push({
                      pathname: "/askanexpert",
                    });
                  }}
                  className="anex"
                  style={{
                    padding: "15px",
                    color: "#fff",
                    background: "#e31c79",
                    border: "none",
                    outline: "none",
                    borderRadius: "7px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <ContactSupportIcon />
                    <span style={{ fontSize: "15px" }}> ASK THE EXPERTS</span>
                  </div>
                </button>
              </Grid>
            </Grid>
          </Grid>
          {/* end search bar and filters*/}
          <Box mt={4} />
          <Grid container xs={12} md={12} lg={12} spacing={1}>
            <Grid
              container
              item
              alignItems="flex-start"
              alignContent="center"
              xs={6}
              md={9}
              lg={9}
            >
              {role === "sme" ? (
                <LmActionBars
                  // handleDelete={handleDelete}
                  selectedCards={selectedCards}
                  allCards={selectedCard}
                  // handleSubmit={handleSort}
                  msg={(x) => openAlert()}
                  del={(x) => openAlertDelete()}
                />
              ) : null}
            </Grid>

            <Grid container item alignItems="flex-end" xs={6} md={3} lg={3}>
              <LmSearchView
                handleSubmit={handleView}
                handleSort={handleSort}
                cards={cardsData}
              />
            </Grid>
            {isLoading
              ? cardsData
                  .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                  .map((card_content, index) => (
                    <Grid item xs={6} lg={view} key={card_content.id}>
                      <LmCard
                        content={[card_content]}
                        title={card_content.title}
                        description={card_content.description}
                        userName={card_content.userName}
                        salutation={card_content.salutation}
                        checked={card_content.isChecked}
                        views={card_content.views}
                        dateTimeStamp={card_content.dateTimeStamp}
                        checkboxName={`chk-${index}`}
                        handleChange={(event) =>
                          handleSelectCards(
                            event,
                            card_content.id,
                            card_content
                          )
                        }
                      />
                    </Grid>
                  ))
              : null}
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={3}
          >
            <Grid item></Grid>
            <Grid item>
              <Pagination
                count={noOfPages}
                page={page}
                onChange={paghandleChange}
                defaultPage={1}
                color="primary"
                size="large"
                showFirstButton
                showLastButton
                classes={{ ul: classes.paginator }}
              />
            </Grid>
          </Grid>

          <Box pt={4}>{/* <Copyright /> */}</Box>
        </Container>
      </main>
    </div>
  );
});
export default Dashboard;
