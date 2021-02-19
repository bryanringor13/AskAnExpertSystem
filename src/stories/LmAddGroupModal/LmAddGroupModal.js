import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { LmDateRange } from '../LmDateRange/LmDateRange';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import "./LmAddGroupModal.css";

export const LmAddGroupModal = ({ children, action }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleConfirm = () => {
    setOpen(false);
    console.log("confirm");
    action(true);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        {children}
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth="true"
        // style={{ padding: "10px 15px" }}
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h5">Create Access Group</Typography>
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description"> */}
          <TextField
          id="filled-full-width"
          label="Name"
          style={{ margin: 8 }}
        //   placeholder="Placeholder"
        //   helperText="Full width!"
          fullWidth
       
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          color="secondary"
        />
          {/* </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            color="secondary"
            variant="contained"
            autoFocus
          >
            Save
          </Button>
        </DialogActions>

      </Dialog>
      </div>
  
  );
};
