import { Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
// import { Breadcrumbs } from '@material-ui/core';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import LinkIcon from "@material-ui/icons/Link";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import RoomServiceOutlinedIcon from "@material-ui/icons/RoomServiceOutlined";
import NoteAddIconOutlined from "@material-ui/icons/NoteAddOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Alert from "@material-ui/lab/Alert";
import React, { useEffect } from "react";
import Header from "../../../../../shared/Header";
import { LmAvatar } from "../../../../../stories/Avatar/LmAvatar";
import { LMAssignSME } from "../../../../../stories/LMAssignSME/LMAssignSME";
import { LmButton } from "../../../../../stories/LmButton/LmButton";
import { LMModal } from "../../../../../stories/LMModal/LMModal";
import { dummy_cards_data } from "./constants/dummy_cards_data";
import { articles } from "./constants/dummy_data";
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
    backgroundColor: "#f9f9f9",
  },
}));

const Article = ({ userName, salutation, event }) => {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);

  const handleBoxToggle = () => {
    setShow(true);
    // console.log("hovered");
  };
  function handleBox() {
    setShow(false);
    // console.log("hidden");
  }

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={11}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item></Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <span class="jss128 jss147 jss164 jss153">23 days ago</span>
                    <h3>What is Track and Trace?</h3>

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
                              {userName}
                            </span>
                            {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                            <span id="name">Kathy Last Name</span>
                          </div>
                          <div>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              style={{ width: "310px" }}
                              style={{ fontSize: "smaller" }}
                            >
                              {salutation}
                            </Typography>
                          </div>
                        </div>
                      </div>
                      <div className="jss114">
                        <Tooltip title="Views">
                          <div className="jss118">
                            <VisibilityOutlinedIcon className="jss117" />
                            {/* <span className="jss128 jss147 jss164 jss153">{numberConvert(views)}</span> */}
                            <span className="jss128 jss147 jss164 jss153">
                              12
                            </span>
                          </div>
                        </Tooltip>
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
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <Box pt={5}> </Box>
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ width: "310px" }}
            style={{ fontSize: "large", fontWeight: "600" }}
          >
            RECOMENDED RELATED CARDS
          </Typography>

          <div className={classes.root}>
            <Grid container spacing={3}>
              {dummy_cards_data.map((item, index) => (
                <Grid item xs={12} sm={6}>
                  <Paper
                    id={item.id}
                    className={classes.paper}
                    onMouseEnter={handleBoxToggle}
                    onMouseLeave={handleBox}
                  >
                    <div className={classes.root}>
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={10}
                          style={{
                            fontSize: "small",
                            fontWeight: "bold",
                            padding: "18px",
                          }}
                        >
                          {item.title}
                        </Grid>
                        <Grid item xs={2}>
                          <div className="jss263 jss228">
                            <div
                              className="jss120"
                              style={{
                                visibility: show ? "visible" : "hidden",
                              }}
                            >
                              <IconButton
                                onClick={() => event(item.title, item.content)}
                              >
                                <LinkIcon />
                              </IconButton>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </div>

                    <Box p={1} flexGrow={1}></Box>

                    <Typography
                      variant="body2"
                      color="textSecondary"
                      id="cardContent"
                    >
                      {item.content}
                    </Typography>
                    <Box pt={2}> </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

const AssignSME = () => {
  const classes = useStyles();
  const [assigned, setassigned] = React.useState(null);

  const setAssignee = (e) => {
    setassigned(e);
    const interval = setInterval(() => {
      setassigned(null);
      clearInterval(interval);
    }, 3000);
  };

  const ModalHeader = (e) => {
    return (
      <div>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <span class="jss128 jss147 jss164 jss153">23 days ago</span>
              &nbsp;
              <span class="jss128 jss147 jss165 jss153">Draft</span>
              <div className="jss110">
                <div className="jss155 jss113">
                  <div className="jss157">
                    <div>
                      {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                      <h3>{e.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="jss171">
                  <div className="jss115">
                    <div
                      className="jss166"
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
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };

  const [showModal, setshowModal] = React.useState(false);
  const [isLinked, setisLinked] = React.useState(false);
  const [isLinkedAlert, setisLinkedAlert] = React.useState(false);

  const [modalContent, setModalContent] = React.useState({
    title: "",
    body: "",
  });

  const setisAlertLinked = () => {
    setisLinkedAlert(true);
    const interval = setInterval(() => {
      setisLinkedAlert(false);
      clearInterval(interval);
    }, 3000);
  };

  function linkedCard() {
    setisLinked(true);
    setshowModal(false);
    setisAlertLinked();
  }
  const modalShow = (title, body) => {
    setModalContent((prevState) => ({
      ...prevState,
      title: title,
      body: body,
    }));
    setshowModal(true);
  };

  const ModalFooter = () => {
    return (
      <div>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
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
                        style={{ width: "310px" }}
                        style={{ fontSize: "smaller" }}
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
                      <span className="jss128 jss147 jss164 jss153">0</span>
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
                <div className="jss114">
                  <Tooltip title="Views">
                    <div className="jss118">
                      <NoteAddIconOutlined className="jss117" />
                      <span className="jss128 jss147 jss164 jss153">0</span>
                    </div>
                  </Tooltip>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };

  useEffect(() => {
    if (showModal) {
      setshowModal(true);
    }
  }, [showModal === true]);
  function closeModal() {
    setshowModal(false);
  }
  const Modal = () => {
    return (
      <LMModal
        openModal={showModal}
        title={<ModalHeader title={modalContent.title} />}
        footer={<ModalFooter />}
        closeModal={closeModal}
        body={modalContent.body}
      />
    );
  };

  const CardLinked = () => {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={11}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item></Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <span class="jss128 jss147 jss164 jss153">23 days ago</span>

                    <div className="jss110">
                      <div className="jss155 jss113">
                        <div className="jss157">
                          <div>
                            {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                            <h3>What is Track and Trace?</h3>
                          </div>
                        </div>
                      </div>

                      <div className="jss171">
                        <div className="jss115">
                          <div
                            className="jss166"
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
                    <div>
                      <Divider />
                      <span
                        style={{
                          fontSize: "small",
                          fontWeight: "bold",
                          color: "#3e4242",
                        }}
                      >
                        Lisa S. linked this answer to this card.
                      </span>
                    </div>
                    <Box pt={2}> </Box>
                    <Paper style={{ padding: "10px 30px 10px 30px" }}>
                      <span class="jss128 jss147 jss164 jss153">
                        23 days ago
                      </span>
                      <div>
                        <h3>Card Title</h3>
                      </div>
                      <Divider />
                      <Box pt={1}> </Box>
                      <span
                        style={{
                          fontSize: "small",
                          fontWeight: "bold",
                          color: "#3e4242",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum tempus sit amet lorem ut malesuada. Maecenas
                        tellus ex, pharetra non purus a, sagittis facilisis
                        nibh. Morbi sit amet justo sapien. Praesent luctus
                        malesuada ipsum. Orci varius natoque penatibus et magnis
                        dis parturient montes, nascetur ridiculus mus. Praesent
                        enim nunc, maximus eget ornare sit amet, faucibus in
                        purus. Donec et sem sit amet ex sodales auctor.
                        Pellentesque fringilla fermentum dui et aliquam. Integer
                        imperdiet sem vel nunc aliquam, eu interdum neque
                        pellentesque. Proin gravida, erat sed ultricies
                        vulputate, dui massa viverra lacus, eu consequat risus
                        ligula quis felis. Duis malesuada convallis lectus sit
                        amet porttitor. Duis viverra, eros et vestibulum
                        sagittis, diam ex finibus tellus, in laoreet diam erat
                        dignissim sem. Aenean lobortis mi eu elit pretium
                        dapibus. Cras iaculis augue nunc, varius viverra eros
                        eleifend vitae.
                      </span>
                    </Paper>
                    <Box pt={5}> </Box>
                    <div>
                      <div className="jss110">
                        <div className="jss155 jss113">
                          <div className="jss156">
                            <div>
                              <LmAvatar
                                alt="Bilbo Baggins"
                                className="jss162"
                              />
                            </div>
                          </div>
                          <div className="jss157">
                            <div>
                              <span id="name">Lisa, Last name (You)</span>
                            </div>
                            <div>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                style={{ width: "310px" }}
                                style={{ fontSize: "smaller" }}
                              >
                                20 mins ago
                              </Typography>
                            </div>
                          </div>
                        </div>
                        <div className="jss114">
                          <Tooltip title="Views">
                            <div className="jss118">
                              <VisibilityOutlinedIcon className="jss117" />
                              {/* <span className="jss128 jss147 jss164 jss153">{numberConvert(views)}</span> */}
                              <span className="jss128 jss147 jss164 jss153">
                                12
                              </span>
                            </div>
                          </Tooltip>
                        </div>
                        <div className="jss114">
                          <Tooltip title="Views">
                            <div className="jss118">
                              <RoomServiceOutlinedIcon className="jss117" />
                              <span className="jss128 jss147 jss164 jss153">
                                12
                              </span>
                            </div>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <Box pt={5}> </Box>
        </Grid>
      </Grid>
    );
  };
  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header />
      <Modal />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {assigned !== null ? (
          <Alert variant="filled" severity="success">
            You have assigned [{assigned}] to this card
          </Alert>
        ) : null}

        {isLinkedAlert ? (
          <Alert variant="filled" severity="success">
            "card title" is now linked to this card
          </Alert>
        ) : null}

        <Container maxWidth="xl" maxHeight="xl" className={classes.container}>
          <Grid container spacing={0}>
            <Grid
              item
              xs={12}
              md={9}
              lg={3}
              style={{ backgroundColor: "#ffffff" }}
            >
              <IconButton>
                <ArrowBackIosIcon fontSize="small" color="primary" /> Back
              </IconButton>
              <div>
                <Divider />
                <Box pt={1}> </Box>
              </div>
              <LMAssignSME assignProps={(e) => setAssignee(e)} />
            </Grid>
            <Grid item xs={12} md={9} lg={9}>
              <div style={{ width: "100%" }}>
                <Box
                  display="flex"
                  p={1}
                  style={{ paddingTop: "0px", height: "54px" }}
                >
                  <Box p={1} flexGrow={1}></Box>
                  <Box p={1} m={0}>
                    <IconButton>
                      <CreateOutlinedIcon />
                    </IconButton>
                  </Box>
                  <Box p={1} m={0}>
                    <IconButton>
                      <ShareOutlinedIcon />
                    </IconButton>
                  </Box>
                  <Box p={1} m={0}>
                    <IconButton>
                      <FileCopyOutlinedIcon />
                    </IconButton>
                  </Box>
                  <Box p={1} m={0}>
                    <IconButton>
                      <MoreVertOutlinedIcon />
                    </IconButton>
                  </Box>
                </Box>
              </div>
              {isLinked ? <CardLinked /> : null}

              {!isLinked
                ? articles.map((item, index) => (
                    <Article
                      userName={item.userName}
                      content1={item.content1}
                      event={(title, body) => modalShow(title, body)}
                    />
                  ))
                : null}
            </Grid>
          </Grid>
          <Box pt={1}> </Box>
          <Divider />
          <Box pt={1}> </Box>
          {!isLinked ? (
            <div class="sme_footer">
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
                        SME user job title
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className="jss171" style={{ marginRight: "66px" }}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={6}>
                      <Paper className={classes.paper}>
                        <LmButton
                          secondary
                          onClick={() => alert("test")}
                          type="submit"
                          size="small"
                          style={{ width: "100%", fontSize: "11px" }}
                        >
                          CANCEL
                        </LmButton>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Paper className={classes.paper}>
                        <div className="jss115">
                          <LmButton
                            primary
                            onClick={() => alert("test")}
                            type="submit"
                            size="small"
                            style={{ width: "100%", fontSize: "11px" }}
                          >
                            ANSWER
                          </LmButton>
                        </div>
                        <LmButton
                          secondary
                          onClick={() => alert("test")}
                          type="submit"
                          size="small"
                          style={{
                            backgroundColor: "#ffff",
                            color: "#e31c79",
                            fontSize: "11px",
                          }}
                        >
                          LINK AN ANSWER
                        </LmButton>
                      </Paper>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          ) : null}
        </Container>
      </main>

      {showModal ? (
        <div id="footerModal">
          <Paper>
            <Box pt={3}> </Box>

            <div class="sme_footer">
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
                        SME user job title
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className="jss171" style={{ marginRight: "66px" }}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} sm={6}>
                      <LmButton
                        secondary
                        onClick={() => alert("test")}
                        type="submit"
                        size="small"
                        style={{ fontSize: "11px" }}
                      >
                        CANCEL
                      </LmButton>
                      <LmButton
                        primary
                        onClick={() => linkedCard()}
                        type="submit"
                        size="small"
                        style={{ fontSize: "11px" }}
                      >
                        LINK THIS CARD
                      </LmButton>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </Paper>
        </div>
      ) : null}
    </div>
  );
};

export default AssignSME;
