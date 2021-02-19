import { Paper, FormControl } from "@material-ui/core";
import React from "react";
import { dum_data } from "./constants/dum.data";
import "./style.css";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing.unit * 1,
    top: theme.spacing.unit * 1,
    color: theme.palette.grey[500],
  },
});

export const LMModal = ({
  closeModal,
  openModal,
  body,
  title,
  footer,
  hasStyle,
  ...props
}) => {
  const [modalOpen, setModalOpen] = React.useState(openModal);

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;

    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: "10px",
      maxWidth: "100%",
    },
  }))(MuiDialogContent);

  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing.unit * 1,
    },
  }))(MuiDialogActions);

  return (
    <div>
      <FormControl
        variant="outlined"
        className="MuiTextField-root MuiFormControl-fullWidth"
      >
        <Dialog
          onClose={closeModal}
          aria-labelledby="customized-dialog-title"
          open={modalOpen}
        >
          <DialogTitle
            style={{
              borderBottomStyle: hasStyle ? "solid" : "none",
              borderBottomColor: "#8c8c8c",
            }}
            id="customized-dialog-title"
            onClose={closeModal}
          >
            {title}
          </DialogTitle>
          <DialogContent dividers>
            <p style={{ fontSize: "small" }}>{body}</p>
          </DialogContent>
          <DialogActions>
            <div style={{ width: "100%" }}>{footer}</div>
          </DialogActions>
        </Dialog>
      </FormControl>
    </div>
  );
};
