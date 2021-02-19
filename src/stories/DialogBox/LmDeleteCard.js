import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./LmDialog.css";
import { dum_data } from "./constants/dum.data";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CheckIcon from "@material-ui/icons/Check";
import { LmAvatar } from "../Avatar/LmAvatar";
import { LmTypography } from "../Typography/LmTypography";
import { AuthorWithMainSubTopic } from "../AuthorInfoWithMainSubTopic/AuthorWithMainSubTopic";
import { LmTypographyGrey } from "../TypographyGrey/LmTypographyGrey";
import { IconButton } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import BarChartOutlinedIcon from "@material-ui/icons/BarChartOutlined";
import OpenInNewOutlinedIcon from "@material-ui/icons/OpenInNewOutlined";

export const LmDeleteCardModal = ({ children, Items, del }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");

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
    del("test");
    console.log("set route based on history");
  };

  console.log("Items", Items);
  const withAsscociated = Items.filter((x) => x.hasConflict === true);
  const withoutAsscociated = Items.filter((x) => x.hasConflict === false);

  const filteredItems =
    Items.filter((x) => x.hasConflict === true).length > 0
      ? Items.filter((x) => x.hasConflict === true)
      : Items;

  const hasConflicts =
    Items.filter((x) => x.hasConflict === true).length > 0 ? true : false;
  const WithoutAssociated = () => {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <span id="delete-alert">
            Please confirm you want to delete this card. Once its gone, its gone
            forever!
          </span>
        </div>
        <Box mt={1} />
        {withoutAsscociated.map((value) => (
          <Paper style={{ padding: "10px" }}>
            <span id="conflict-title">What is Track & Trace</span>
            <Box mt={3} />
            <div className="jss110">
              <div
                className="jss155 jss113"
                style={{ padding: "0px 0px 0px 0px" }}
              >
                <div className="jss156">
                  <div>
                    <LmAvatar alt="Bilbo Baggins" className="jss162" />
                  </div>
                </div>
                <div className="jss157">
                  <div>
                    <span
                      className="jss128 jss138 jss158 jss153"
                      chars1="Billy Bo"
                    >
                      Lisa,Lastname
                    </span>
                    <span className="jss128 jss147 jss164 jss153">2d</span>
                  </div>
                  <div>
                    <span className="jss128 jss139 jss159 jss153">
                      sme role
                    </span>
                  </div>
                </div>
              </div>
              <div className="jss114">
                <Tooltip title="Views">
                  <div className="jss118">
                    <VisibilityOutlinedIcon className="jss117" />
                    <span className="jss128 jss147 jss164 jss153">2</span>
                  </div>
                </Tooltip>
                <Tooltip title="Open requests">
                  <div className="jss118">
                    <ContactSupportOutlinedIcon className="jss117" />
                    <span className="jss128 jss147 jss164 jss153">2</span>
                  </div>
                </Tooltip>
                <Tooltip title="Open requests">
                  <div className="jss118">
                    <BarChartOutlinedIcon className="jss117" />
                    <span className="jss128 jss147 jss164 jss153">99</span>
                  </div>
                </Tooltip>
              </div>

              <div className="jss171" style={{ padding: "0px 0px 0px 0px" }}>
                <div className="jss115">
                  <div
                    className="jss167"
                    data-automation-key="ui-topic-subtopic-topic"
                    data-automation-value="customer-ops"
                  >
                    Customer Ops
                  </div>
                  <span className="jss172">&gt;</span>
                  <div
                    className="jss169"
                    data-automation-key="ui-topic-subtopic-subtopic"
                    data-automation-value="pre-sales"
                  >
                    Pre Sales
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
        <Box mt={1} />
        <div style={{ textAlign: "right" }}>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            CANCEL
          </Button>
          &nbsp;
          <Button
            onClick={handleConfirm}
            color="primary"
            variant="contained"
            autoFocus
          >
            DELETE
          </Button>
        </div>
        <Box mt={3} />
      </div>
    );
  };
  const WithAssociated = () => {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <ErrorOutlineOutlinedIcon style={{ fill: "red" }} />
          <span id="delete-alert">
            Unable to delete. there are open requests associated with this
            cards.
          </span>
        </div>

        {withAsscociated.map((value) => (
          <Paper style={{ padding: "10px" }}>
            <span id="conflict-title">What is Track & Trace</span>
            <Box mt={3} />
            <div className="jss110">
              <div
                className="jss155 jss113"
                style={{ padding: "0px 0px 0px 0px" }}
              >
                <div className="jss156">
                  <div>
                    <LmAvatar alt="Bilbo Baggins" className="jss162" />
                  </div>
                </div>
                <div className="jss157">
                  <div>
                    <span
                      className="jss128 jss138 jss158 jss153"
                      chars1="Billy Bo"
                    >
                      Lisa,Lastname
                    </span>
                    <span className="jss128 jss147 jss164 jss153">2d</span>
                  </div>
                  <div>
                    <span className="jss128 jss139 jss159 jss153">
                      sme role
                    </span>
                  </div>
                </div>
              </div>
              <div className="jss114">
                <Tooltip title="Views">
                  <div className="jss118">
                    <VisibilityOutlinedIcon className="jss117" />
                    <span className="jss128 jss147 jss164 jss153">2</span>
                  </div>
                </Tooltip>
                <Tooltip title="Open requests">
                  <div className="jss118">
                    <ContactSupportOutlinedIcon className="jss117" />
                    <span className="jss128 jss147 jss164 jss153">2</span>
                  </div>
                </Tooltip>
                <Tooltip title="Open requests">
                  <div className="jss118">
                    <BarChartOutlinedIcon className="jss117" />
                    <span className="jss128 jss147 jss164 jss153">99</span>
                  </div>
                </Tooltip>
              </div>

              <div className="jss171" style={{ padding: "0px 0px 0px 0px" }}>
                <div className="jss115">
                  <div
                    className="jss167"
                    data-automation-key="ui-topic-subtopic-topic"
                    data-automation-value="customer-ops"
                  >
                    Customer Ops
                  </div>
                  <span className="jss172">&gt;</span>
                  <div
                    className="jss169"
                    data-automation-key="ui-topic-subtopic-subtopic"
                    data-automation-value="pre-sales"
                  >
                    Pre Sales
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}

        <Box mt={1} />
        {withoutAsscociated.length === 0 ? (
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button onClick={handleClose} color="secondary" variant="outlined">
              CANCEL
            </Button>
            &nbsp;
            <Button
              onClick={handleConfirm}
              color="primary"
              variant="contained"
              autoFocus
            >
              RESOLVE REQUEST
            </Button>
          </div>
        ) : (
          <div style={{ display: "flex", float: "right" }}>
            <span id="txt-mngReq">Manage request</span>
            <OpenInNewOutlinedIcon style={{ fill: "#e31c79" }} />
          </div>
        )}
      </div>
    );
  };
  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen}>
        {children}
      </Button>
      <Dialog
        open={open}
        // open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ padding: "10px 15px" }}
        fullScreen={fullScreen}
        maxWidth={maxWidth}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {withoutAsscociated.length > 0 ? <WithoutAssociated /> : null}
            {withAsscociated.length > 0 ? <WithAssociated /> : null}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};
