import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { LmDateRange } from '../LmDateRange/LmDateRange';
import "./style.css";

export const LmCalendarModal = ({ children, action }) => {
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
        maxWidth='lg'
  
      >

       <LmDateRange>
           </LmDateRange>

      </Dialog>
      </div>
 
  );
};
