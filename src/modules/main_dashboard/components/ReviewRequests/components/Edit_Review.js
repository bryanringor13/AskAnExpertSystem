import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Header from '../../../../../shared/Header'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import Divider from '@material-ui/core/Divider';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

import '../style.css';

import { ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LmTypography } from '../../../../../stories/Typography/LmTypography';
import { LmButton } from '../../../../../stories/LmButton/LmButton';
import { LmTypographyGrey } from '../../../../../stories/TypographyGrey/LmTypographyGrey';
import { LmRTE } from '../../../../../stories/RTE/LmRTE'
import { LmTextField } from '../../../../../stories/TextField/LmTextField';
import { Popover } from "@material-ui/core";
import { InputAdornment } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { OutlinedInput } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  
    root: {
      display: 'flex',
    },
  
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
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
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Edit_Review = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
  
    const handleAddQuestion = () => {
        console.log('Click Button add');
    }

    const handleShowPreview = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);

    const id = open ? 'simple-popover' : undefined;

    const handleOptions = (event) => {
      setAnchorEl2(event.currentTarget);
    };

    const handleClose = ({checked, handleChange,}) => {
        setAnchorEl(null);
      };

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          {/* <Container maxWidth="xl" className={classes.container}>
            <Grid container spacing={1} justify="space-between">
              <Grid container item xs={6} justify="flex-start">
                <Box component="span" m={2} />
                <LmTypographyGrey variant="h5" size="large">
                  {" "}
                  Edit Card
                </LmTypographyGrey>
              </Grid>
              <Grid container item xs={6} spacing={2} justify="flex-end">
                <LmButton color="secondary">
                  <a style={{ textDecoration: "none" }} href="./review">
                    CANCEL
                  </a>
                </LmButton>
                <Box m={1} />
                <LmButton size="small" variant="outlined" primary="true">
                  SAVE{" "}
                </LmButton>
                <Divider />
                <LmButton
                  size="small"
                  variant="outlined"
                  primary="true"
                  onClick={handleShowPreview}
                >
                  <KeyboardArrowDownOutlinedIcon
                    style={{ paddingTop: 8 }}
                  />
                </LmButton>
                <Box m={1} />
              </Grid>
            </Grid>
          </Container> */}
          <Grid container
            justify='center' lg={12}>
              <Grid item container 
              justify="center" xs={1} md={1} lg={1}></Grid>
                
              <Grid item container spacing={4}
              justify="space-between" xs={10} md={10} lg={10}>
                <div style={{marginTop: '40px'}}>
                {/* <CreateCardForm addToCardContent={addCardContent}/> */}
                <EditCardForm/>
                </div>
              </Grid>

              <Grid item container 
                justify="center" xs={1} md={1} lg={1}>
                </Grid>
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
                <a style={{ textDecoration: "none", color: '#e31c79'}} href="/show_card_view">
                  {" "}
                  PREVIEW
                </a>
              </li>
            </ul>
          </Popover>
          

          <Container maxWidth="lg" className={classes.container}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              lg={8}
            >
              <FormControl
                fullWidth
                className={classes.margin}
                variant="filled"
              >
                <LmTypographyGrey>Visible Question</LmTypographyGrey>
                <LmTextField
                  variant="outlined"
                  size="large"
                  value=""
                ></LmTextField>
              </FormControl>
              <Box mt={8} mb={8} />
              <Grid item container justify="space-between">
                <Grid item>
                  <LmButton size="small">
                    Select Topic <ArrowRightAltIcon color="primary" />
                  </LmButton>
                </Grid>
                <Grid item>
                  <LmButton color="default">Main </LmButton>
                  <ArrowForwardIosIcon
                    color="secondary"
                    style={{ paddingTop: "12px" }}
                    size="medium"
                  />
                  <LmButton variant="outlined">Sub Topic</LmButton>
                </Grid>
              </Grid>
            </Grid>

            <Box mt={2} mb={2} />
            <Grid container alignItems="center">
              {/* <LmTypographyGrey variant="h6">Answer</LmTypographyGrey> */}
              <LmRTE />
            </Grid>
          </Container>
          <Container maxWidth="md">
            <Grid container>
              <Grid item>
                <LmTypographyGrey variant="h6">
                  Invisible questions
                </LmTypographyGrey>
              </Grid>
              {/* <LmTextField fullWidth variant="outlined">
                What is Track and Trace
              </LmTextField> */}

              <FormControl
                variant="outlined"
                className="MuiTextField-root MuiFormControl-fullWidth"
              >
                  <OutlinedInput
                    startAdornment={
                      <InputAdornment
                        position="start"
                        className="MuiOutlinedInput-inputAdornedStart MuiOutlinedInput-inputAdornedEnd"
                      ></InputAdornment>
                    }
                    fullWidth={true}
                    placeholder="What is trace and track"
                    endAdornment={
                      <InputAdornment
                        position="end"
                        className="MuiOutlinedInput-inputAdornedStart MuiOutlinedInput-inputAdornedEnd"
                      >
                        {/* <CreateOutlinedIcon color="primary" /> */}
                        <IconButton onClick={handleOptions}>
                          <MoreVertOutlinedIcon  />
                        </IconButton>
                      </InputAdornment>
                    }
                  ></OutlinedInput>
              </FormControl>




              <Box mt={4} mb={4} />
              {/* <LmTextField fullWidth variant="outlined">
                What is Track and Trace
              </LmTextField> */}
              <FormControl
                variant="outlined"
                className="MuiTextField-root MuiFormControl-fullWidth"
              >
                  <OutlinedInput
                    startAdornment={
                      <InputAdornment
                        position="start"
                        className="MuiOutlinedInput-inputAdornedStart MuiOutlinedInput-inputAdornedEnd"
                      ></InputAdornment>
                    }
                    fullWidth={true}
                    placeholder="What is trace and track"
                    endAdornment={
                      <InputAdornment
                        position="end"
                        className="MuiOutlinedInput-inputAdornedStart MuiOutlinedInput-inputAdornedEnd"
                      >
                        {/* <CreateOutlinedIcon color="primary" /> */}
                        <IconButton onClick={handleOptions}>
                          <MoreVertOutlinedIcon  />
                        </IconButton>
                      </InputAdornment>
                    }
                  ></OutlinedInput>
              </FormControl>
            </Grid>

            <Box mb={8} mt={8} />
            <Grid container justify="flex-start">
              <ButtonBase centerRipple="true" onClick={handleAddQuestion}>
                <AddIcon color="primary" />
                <LmTypographyGrey>Add invisible question</LmTypographyGrey>
              </ButtonBase>
            </Grid>
            <Box mb={8} />
            {/* Invisible Questions */}
          </Container>
        </main>
      </div>
    );
}

const EditCardForm = () => {
  
}
export default Edit_Review;