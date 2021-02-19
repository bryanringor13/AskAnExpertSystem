import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './LmDialog.css'
import { dum_data } from './constants/dum.data';

import CheckIcon from '@material-ui/icons/Check';
import { LmAvatar } from '../Avatar/LmAvatar';
import { LmTypography } from '../Typography/LmTypography';
import { LmTypographyGrey } from '../TypographyGrey/LmTypographyGrey';
import { IconButton } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

export const LmCreateCardModal = ({children
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleConfirm = () => {
    setOpen(false);
    console.log("set route based on history")
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
      {children}
      </Button>
      {dum_data.map((data, index, key)=> (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{padding: '10px 15px'}}
        fullScreen={fullScreen}
        maxWidth={maxWidth}
      >
       
        <DialogTitle id="alert-dialog-title">
        <IconButton>
        <CheckIcon color="success"/>
        </IconButton>
      <Box mt={2}/>
          <LmTypography variant="h6">{"Your card's been added to the brain! Thanks for making Smart Hub better for everyone."}
          </LmTypography>
          </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          
          {/* start header with title component */}
           
              <Paper>
        <div>
          <Box p={2}>
          <LmTypographyGrey variant="h5">{data.card_title} </LmTypographyGrey></Box>
        <Box mt={2}/>
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
            <LmTypography variant="subtitle1">{data.firstName}, {data.lastName}  <span className="jss128 jss147 jss164 jss153">{data.duration}</span></LmTypography>
                
                </span>
                {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
               
              </div>
              <div>
                <span color="default">
                <LmTypographyGrey variant="subtitle1">{data.salutation}</LmTypographyGrey>
                </span>
              </div>
            </div>
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
        </div></Paper>
           
          
            {/* end header modal card */}
            


          </DialogContentText>
          
          {/* <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              </FormControl>
            </form> */}
        </DialogContent>
        <Box pt={2} pb={5} px={2}>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            BACK TO EDIT
          </Button>
          <Button onClick={handleConfirm} color="primary" variant="contained" href={data.ModalconfirmRoute} autoFocus>
            OK
          </Button>
        </DialogActions>
        </Box>
      </Dialog>
       ))}
    </div>
  );
}