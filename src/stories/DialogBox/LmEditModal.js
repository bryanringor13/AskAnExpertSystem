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

export const LmEditModal = ({children
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
      <Box mt={2}/>
          <LmTypography variant="h6">{"You will be redirected to Request Management to edit this card."}
          </LmTypography>
          <br/>
          <LmTypography variant="h6">{"Are you sure you want to proceed?"}
          </LmTypography>
          </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          
         


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
            CANCEL
          </Button>
          <Button onClick={handleConfirm} color="primary" variant="contained" href={data.ModalconfirmEditRoute} autoFocus>
            EDIT CARD
          </Button>
        </DialogActions>
        </Box>
      </Dialog>
       ))}
    </div>
  );
}