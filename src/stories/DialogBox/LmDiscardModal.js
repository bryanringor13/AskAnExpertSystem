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
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
        
import { LmAvatar } from '../Avatar/LmAvatar';
import { LmTypography } from '../Typography/LmTypography';
import { LmTypographyGrey } from '../TypographyGrey/LmTypographyGrey';
import { IconButton, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { LmInfoAlert } from "../../stories/LmInfoAlert/LmInfoAlert";

export const LmDiscardModal = ({children
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
        <ErrorOutlineIcon color="error"/>
        </IconButton>
      <Box mt={2}/>
          <LmTypography variant="h6" style={{fontWeight: 'bold'}}>{"Your card has not been created yet. Are you sure you would like to discard this card?"}
          </LmTypography>
          </DialogTitle>
        <Box pt={2} pb={5} px={2}>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            BACK TO EDIT
         
          </Button>
          <Button onClick={handleConfirm} color="primary" variant="contained" href={data.ModalconfirmRoute} autoFocus>
            DISCARD
            <LmInfoAlert></LmInfoAlert>
          </Button>
        </DialogActions>
        </Box>
      </Dialog>
       ))}
    </div>
  );
}