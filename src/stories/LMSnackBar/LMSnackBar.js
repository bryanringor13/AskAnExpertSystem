import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MuiAlert from "@material-ui/lab/Alert";

export const LMSnackBar = ({
  children,
  message,
  state,
  severity,
  ...props
}) => {
  const [open, setOpen] = React.useState(state);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

LMSnackBar.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  // primary: PropTypes.bool,
  /**
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
};

LMSnackBar.defaultProps = {
  // backgroundColor: null,
  // primary: false,
  // size: 'large',
  // onClick: undefined,
  // variant: 'contained'
};
