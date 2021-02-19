import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../../../../shared/Header";
import "./style.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { withRouter } from "react-router-dom";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from "@material-ui/core/Button";

// import { articles } from "./constants/dummy_data2";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
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
  formControl: {
    margin: theme.spacing(1),
    width: '70%',
  },
  helper: {
    padding: theme.spacing(1, 2),
    color: 'grey',
  },
  createButton: {
    width: '145px',
    marginLeft: '80%',
    height: '55px',
    marginTop: '40px',
  }
}));
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

const CreateHub = withRouter(({ history, onClick }) => {
  const classes = useStyles();
  
  const [values, setValues] = React.useState({
    content: "",
    desc: "",
    charLimit: 20,
    charLimit2: 1,
  });
  // const [value, setValue] = React.useState({
  //   content: "",
  //   charLimit: 1,
  // });
  const test = (e) => {
    onClick(e);
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <div className={classes.root} style={{ position: "relative" }}>
      <CssBaseline />
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className="main-container">
          <div className="main-content">
            <Grid container spacing={3}>
            <div className={classes.root}>
                <div className="mainDiv">
     <div className="breadcrumbsStyle">
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link className="linkColor" href="/" onClick={handleClick}>
          Hubs
        </Link>
        <Typography color="textPrimary">Create</Typography>
      </Breadcrumbs>

      <Typography variant="h4" className="headingStyle">Create Hub</Typography>
      </div>
 
 <div className="accordionStyle">
 <FormControl className={classes.formControl}>
 <TextField id="filled-basic"
  helperText="You've reached the maximum number of characters!"
  label="*Hub Name" 
  variant="filled" 
  value={values.content}  
  onChange={handleChange("content")}
  error={values.content.length < values.charLimit ? false : true}
  disabled={values.content.length < values.charLimit ? false : true}
  />
 <Typography className={classes.helper} variant="caption">
          Maximum 20 characters
          </Typography>
 <TextField id="filled-basic" label="*Description" variant="filled" style={{marginTop: '30px'}}  value={values.desc}   onChange={handleChange("desc")}/>

 </FormControl>
      </div>
    </div>
    </div>
            </Grid>
          </div>
        </Container> 
        <div>
        <Button
          className={classes.createButton}
          variant="contained"
          color="primary"
          // onClick={() => test(values.content)}
          disabled={values.content.length && values.desc.length > values.charLimit2 ? false : true}
          
        >
           <a  style={{textDecoration: 'none', color: 'white'}}
                    href="/allHubs"
                    >
                     CREATE HUB </a>
        </Button>
        </div>
      </main>
     
    </div>
  );
});

export default CreateHub;
