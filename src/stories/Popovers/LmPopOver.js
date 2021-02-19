import React from "react";
import { LmButton } from "../LmButton/LmButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Icon, Popover } from "@material-ui/core";
// import PropTypes from 'prop-types';

require("./style.css");
export const LmPopOver = ({ children, ...props }) => {
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
      {/* <Icon 
                className="jss239" 
                >*/}

      <MoreVertIcon onClick={handleClick} />
      {/* </Icon> */}

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
          class="MuiList-root MuiMenu-list MuiList-padding"
          role="menu"
          tabindex="-1"
          style={{ listStyleType: "none", padding: "0px 5px 0px 5px" }}
        >
          <li
            class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button pop"
            tabindex="0"
            role="menuitem"
            aria-disabled="false"
          >
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="pop"
            >
              <div className="pop-title">Create new card to respond</div>
              <div className="pop-title">+</div>
            </div>
            <span class="MuiTouchRipple-root"></span>
          </li>
          <li
            class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button pop"
            tabindex="0"
            role="menuitem"
            aria-disabled="false"
          >
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="pop"
            >
              <div className="pop-title"> Mark as resolve</div>
              <div className="pop-title">+</div>
            </div>
          </li>
          <li
            class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button pop"
            tabindex="0"
            role="menuitem"
            aria-disabled="false"
          >
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="pop"
            >
              <div className="pop-title"> Assign comment to another SME</div>
              <div className="pop-title">+</div>
            </div>
            <span class="MuiTouchRipple-root"></span>
          </li>
          <li
            class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button pop"
            tabindex="0"
            role="menuitem"
            aria-disabled="false"
          >
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="pop"
            >
              <div className="pop-title"> Link an existing card</div>
              <div className="pop-title">+</div>
            </div>
            <span class="MuiTouchRipple-root"></span>
          </li>
        </ul>
      </Popover>
    </div>
  );
};

LmPopOver.propTypes = {
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

LmPopOver.defaultProps = {
  // backgroundColor: null,
  // primary: false,
  // size: 'large',
  // onClick: undefined,
  // variant: 'contained'
};
