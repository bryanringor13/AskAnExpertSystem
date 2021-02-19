import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { LmDateRange } from '../LmDateRange/LmDateRange';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import "./LmDialog.css";

export const LmDialog = ({ children, action }) => {
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
        style={{ padding: "10px 15px" }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to assign this request to yourself?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            No

          </Button>
          <Button
            onClick={handleConfirm}
            color="primary"
            variant="contained"
            autoFocus
          >
            Yes, assign it to me
          </Button>
        </DialogActions>

      </Dialog>
    </div>
  );
};
