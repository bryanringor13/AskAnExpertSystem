import React from "react";
import { LmButton } from "../LmButton/LmButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Icon, Popover } from "@material-ui/core";
// import PropTypes from 'prop-types';
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import IconButton from "@material-ui/core/IconButton";
import Alert from "@material-ui/lab/Alert";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";
import { LmDeleteCardModal } from "../DialogBox/LmDeleteCard";
import { LmMoveCardsModal } from "../DialogBox/LmMoveCardsModal";

export const LmRequestsPopOver = ({ children, editClicked, ...props }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = ({ checked, handleChange }) => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Icon className="jss239">
        <MoreVertIcon onClick={handleClick} />
      </Icon>
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
          horizontal: "center",
        }}
      >
        <ul
          className="MuiList-root MuiMenu-list MuiList-padding"
          role="menu"
          tabindex="-1"
        >
          <li
            className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
            tabindex="0"
            role="menuitem"
            aria-disabled="false"
          >
            {/* {children} */}
            <ul
              className="MuiList-root MuiMenu-list MuiList-padding"
              role="menu"
              tabindex="-1"
            >
              <li
                className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="0"
                role="menuitem"
                aria-disabled="false"
              >
                Share{" "}
                <span style={{ padding: "2px" }}>
                  <ShareOutlinedIcon />
                </span>
              </li>
              <li
                className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="0"
                role="menuitem"
                aria-disabled="false"
              >
                Edit{" "}
                <span style={{ padding: "2px" }}>
                  <CreateOutlinedIcon onClick={editClicked} />
                </span>
              </li>
              <li
                className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="0"
                role="menuitem"
                aria-disabled="false"
              >
                <LmMoveCardsModal moveItems={[]}>
                  Move{" "}
                  <span style={{ padding: "2px" }}>
                    <ArrowRightAltOutlinedIcon />
                  </span>
                </LmMoveCardsModal>
              </li>
              <li
                className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="0"
                role="menuitem"
                aria-disabled="false"
              >
                Copy{" "}
                <span style={{ padding: "2px" }}>
                  <FileCopyOutlinedIcon />
                </span>
              </li>
              <li
                className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="0"
                role="menuitem"
                aria-disabled="false"
              >
                <LmDeleteCardModal Items={[]}>
                  Delete{" "}
                  <span style={{ padding: "2px" }}>
                    <RemoveCircleOutlineOutlinedIcon />
                  </span>
                </LmDeleteCardModal>
              </li>
            </ul>
            <span className="MuiTouchRipple-root"></span>
          </li>
        </ul>
      </Popover>{" "}
    </div>
  );
};

LmRequestsPopOver.propTypes = {
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

LmRequestsPopOver.defaultProps = {
  // backgroundColor: null,
  // primary: false,
  // size: 'large',
  // onClick: undefined,
  // variant: 'contained'
};
