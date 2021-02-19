import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../../../../shared/Header";
import "./style.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { RichTextEditor } from "../../../../../stories/RichTextEditor/RichTextEditor";
import { LmButton } from "../../../../../stories/LmButton/LmButton";
import { LmAvatar } from "../../../../../stories/Avatar/LmAvatar";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import NoteAddIconOutlined from "@material-ui/icons/NoteAddOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import { LMAssignSME } from "../../../../../stories/LMAssignSME/LMAssignSME";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import { CardView } from "../../../../../stories/CardView/CardView";
import { LmCreateCardModal } from "../../../../../stories/DialogBox/LmCreateCardModal";
import { LmTypography } from "../../../../../stories/Typography/LmTypography";
import { withStyles } from '@material-ui/core/styles';


const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
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
    paddingBottom: "0px !important",
    flexGrow: 1,
  },
}));

const AddAnswer = () => {
  const classes = useStyles();

  const [ckContent, setckContent] = React.useState("");
  const [isPreview, setisPreview] = React.useState(false);
  const [isSuccess, setisSuccess] = React.useState(false);
  const [assigned, setassigned] = React.useState(null);

  const setAssignee = () => {
    setassigned("test");
    const interval = setInterval(() => {
      setassigned(null);
      clearInterval(interval);
    }, 3000);
  };

  useEffect(() => {
    if (isSuccess) {
      setAssignee();
    }
  }, [isSuccess === true]);

  const previewCard = (event) => {
    event.preventDefault();

    if (isPreview) {
      setisSuccess(true);
      return;
    }

    var html = document.querySelector(".ck-content").innerHTML;
    setckContent(html);

    setisPreview(true);
  };
  const cancelPreview = (event) => {
    setisPreview(false);
  };

  const PreviewHeader = ({ title }) => {
    return (
      <div>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <div className="jss110" style={{ padding: "0px" }}>
                <div className="jss155 jss113">
                  <div className="jss157">
                    <div>
                      <h3>{title}</h3>
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

  const ModalFooter = () => {
    return (
      <div>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <div
                className="jss110 footer"
                style={{ background: "rgb(237, 252, 255) !important" }}
              >
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

  const Preview = ({ header, body }) => {
    return (
      <div>
        <PreviewHeader title={header} />
        <Divider />

        <div dangerouslySetInnerHTML={{ __html: ckContent }} />

        <ModalFooter />
      </div>
    );
  };

  const Success = ({}) => {
    return (
      <div className="container-text" style={{ height: "100%" }}>
        <div className="tRow">
          <div className="Successleft">
            <IconButton>
              <ArrowBackIosIcon fontSize="small" color="primary" /> Back
            </IconButton>
            <Divider />

            <LMAssignSME assignProps={(e) => setAssignee(e)} />
          </div>
          <div className="Successright">
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
            <div className="success-preview">
              <span class="jss128 jss147 jss164 jss153">23 days ago</span>
              <Preview header={"What is Track & Trace?"} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header />
      <main className={classes.content} style={{ position: "relative" }}>
        <div className={classes.appBarSpacer} />
        {assigned !== null ? (
          <Alert variant="filled" severity="success">
            You answer has been saved and published
          </Alert>
        ) : null}
        {isSuccess ? <Success /> : null}

        <Container maxWidth="xl" className={classes.container}>
          {/* success */}

          {/* Preview */}
          <div
            className="preview-content"
            style={{ display: !isPreview && !isSuccess ? "block" : "none" }}
          >
              <Grid container spacing={3}>
             <Grid item xs={2}>
            <Typography
              component="div"
              variant="h5"
              fontWeight="fontWeightBold"
            >
              Preview your card
            </Typography>
            </Grid>
            <Grid item xs={10} style={{ textAlign: "right" }}>
              
                <button className="backButton">
                <a  style={{textDecoration: 'none', color: '#868080'}}
                    href="/myRequestsEdit"
                    >
                     BACK TO EDIT </a>
                </button>

                
                <button
                  className="publishButton"
                 
                >
                   <LmCreateCardModal >
                   <WhiteTextTypography>PUBLISH</WhiteTextTypography>
                  </LmCreateCardModal>
                </button>
              </Grid>
              </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={12} style={{ width: "145vh" }}>
                {/* <Preview header={"What is Track & Trace?"} /> */}
                <div className="headerStyle">
                <Typography
              component="div"
              variant="h6"
              fontWeight="fontWeightBold"
            >
              What is Track and Trace?
            </Typography>
            </div>
            <div className="cardStyle">
                <CardView> 
                  </CardView> 
                  </div>
              </Grid>
            </Grid>
            <Box pt={1}> </Box>
          </div>

          {/* Main Content */}
          <div
            className="main-content"
            style={{ display: !isPreview ? "block" : "none" }}
          >
            {/* <Typography
              component="div"
              variant="h5"
              fontWeight="fontWeightBold"
            >
              Add an answer
            </Typography> */}

            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={12} style={{ width: "145vh" }}>
                {/* <p className="subTitle">Visible Question</p>
                <div className="text-container">
                  <p className="subTitleText">What is Track & Trace</p>
                </div> */}

                {/* <p className="subTitle"></p>
                <div className="text-container">
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
                </div> */}

                {/* RTE */}
                {/* <p className="subTitle">Answer</p> */}
                {/* <form onSubmit={previewCard} id="myform">
                  <RichTextEditor data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet volutpat consequat mauris. Amet consectetur adipiscing elit pellentesque. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Amet venenatis urna cursus eget nunc. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Nulla facilisi cras fermentum odio eu feugiat. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Pretium nibh ipsum consequat nisl. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Integer vitae justo eget magna fermentum iaculis." />
                </form> */}

              

                

                
               
              </Grid>
            </Grid>
          </div>
        </Container>

        {/* <div
          class="sme_footer"
          style={{ display: !isSuccess ? "block" : "none" }}
        >
          <div className="jss110" style={{ paddingLeft: "30px" }}>
            <div className="jss155 jss113">
              <div className="jss156">
                <div>
                  <LmAvatar alt="Bilbo Baggins" className="jss162" />
                </div>
              </div>
              <div className="jss157">
                <div>
            
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

            <div className="jss171">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item xs={12} sm={6}>
                  <LmButton
                    secondary
                    type="submit"
                    size="small"
                    style={{ width: "100%", fontSize: "11px" }}
                    onClick={() => cancelPreview()}
                  >
                    CANCEL
                  </LmButton>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LmButton
                    primary
                    type="submit"
                    size="small"
                    style={{ fontSize: "11px", width: "100%" }}
                    form="myform"
                  >
                    {!isPreview ? "PUBLISH" : "PREVIEW"}
                  </LmButton>
                </Grid>
                <Grid item xs={12} sm={6}></Grid>
                <Grid item xs={12} sm={6}>
                  <LmButton
                    secondary
                    type="submit"
                    size="small"
                    style={{
                      backgroundColor: "#ffff",
                      color: "#e31c79",
                      fontSize: "11px",
                    }}
                  >
                    SAVE AS DRAFT
                  </LmButton>
                </Grid>
              </Grid>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default AddAnswer;
