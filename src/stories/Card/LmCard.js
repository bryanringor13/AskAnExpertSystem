import React, { useState } from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { Checkbox, Divider, Icon, Paper, Popover } from "@material-ui/core";
import "./LmCard.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import { CheckBox } from '@material-ui/icons';
import { LmAvatar } from "../Avatar/LmAvatar";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import RoomServiceOutlinedIcon from "@material-ui/icons/RoomServiceOutlined";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import moment from "moment";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import { withStyles } from "@material-ui/core/styles";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import TrendingFlatOutlinedIcon from "@material-ui/icons/TrendingFlatOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import { withRouter } from "react-router-dom";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import BarChartOutlinedIcon from "@material-ui/icons/BarChartOutlined";
import { LmDeleteCardModal } from "../DialogBox/LmDeleteCard";
import { LmMoveCardsModal } from "../DialogBox/LmMoveCardsModal";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

export const LmCard = withRouter(
  ({
    history,
    checked,
    handleChange,
    title,
    description,
    avatarUrl,
    altText,
    userName,
    salutation,
    views,
    dateTimeStamp,
    checkboxName,
    content,
    msg,
  }) => {
    // const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [actionBars, setActionBars] = React.useState(false);
    const [isChecked, setIsCheck] = React.useState(checked);
    const [checkedItems, setCheckedItems] = useState({});

    const role =
      history.location.state === undefined
        ? localStorage.getItem("role")
        : history.location.state.role;

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = ({ checked, handleChange }) => {
      setAnchorEl(null);
    };
    const [show, setShow] = useState(false);
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const handleBoxToggle = () => {
      setShow(true);
      // console.log("hovered");
    };
    function handleBox() {
      setShow(false);
      // console.log("hidden");
    }

    function numberConvert(num) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
    }
    function dateFormat(date) {
      return moment(date).fromNow();
    }

    const StyledMenu = withStyles({
      paper: {
        border: "1px solid #d3d4d5",
      },
    })((props) => (
      <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        {...props}
      />
    ));

    const StyledMenuItem = withStyles((theme) => ({
      root: {
        "&:focus": {
          backgroundColor: theme.palette.primary.main,
          "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
            color: theme.palette.common.white,
          },
        },
      },
    }))(MenuItem);

    return (
      <div     
      >
      <Paper
        variant="outlined"
        square={false}
        onMouseEnter={handleBoxToggle}
        onMouseLeave={handleBox}
        // button component="a" 
        // href="/updateDetails"
        // style={{textDecoration: 'none', color: '#868080'}}
      >
        <div className="jss108">
          <div className="jss120" style={{ visibility: "visible" }}>
            {/* <div className="jss120" > */}
            <span
              className="MuiButtonBase-root MuiIconButton-root jss789 MuiCheckbox-root Mui-checked MuiIconButton-colorPrimary"
              aria-disabled="false"
            >
              <span className="MuiIconButton-label">
                <input
                  type="checkbox"
                  checked={checkedItems[checkboxName]}
                  onChange={handleChange}
                  style={{ marginBottom: "5px", filter: "hue-rotate(130deg)" }}
                />
              </span>
            </span>

            <span className="MuiTouchRipple-root"></span>
          </div>
          <Tooltip title="Click card title to view Question">
          <div className="jss128 jss132 jss111 jss153">
          <a style={{ textDecoration: "none", color: '#7E7E7E' }} href="/myRequests">
    
            {title}
       
            </a>
            </div>     
            </Tooltip>
          <div>
            <div>
              <Button
                className="jss119"
                type="button"
                aria-label="more"
                aria-controls="card-menu"
                onClick={handleClick}
              >
                <Icon className="jss239">
                  <MoreVertIcon />
                </Icon>
              </Button>
            </div>

            <StyledMenu
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
              <StyledMenuItem>
                <ListItemIcon>
                  <ShareOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Share" />
              </StyledMenuItem>



              <StyledMenuItem
                style={{ display: role === "customer" ? "none" : "flex" }}
                button component="a" href="/myRequestsEdit"
              >
                <ListItemIcon > 
                  <EditOutlinedIcon fontSize="small" >
                    
                    </EditOutlinedIcon>
                </ListItemIcon>
               {/* <a  style={{textDecoration: 'none', color: '#868080'}}
                    href="/myRequestsEdit"
                    >
                     EDIT </a> */}
                
                <ListItemText primary="Edit" />
              </StyledMenuItem>
              
           <div    
           style={{ display: role === "customer" ? "none" : "flex" }}
           >

              <LmMoveCardsModal
            
                moveItems={content}
                msg={(x) => alert(" Your cards has been successfully moved.")}
              >
                <StyledMenuItem
                  style={{ display: role === "customer" ? "none" : "flex" }}
                >
                  <ListItemIcon>
                    <TrendingFlatOutlinedIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Move" />
                </StyledMenuItem>
              </LmMoveCardsModal>
</div>
              <StyledMenuItem
                style={{ display: role === "customer" ? "none" : "flex" }}
              >
                <ListItemIcon>
                  <FileCopyOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Copy" />
              </StyledMenuItem>

              <div    
           style={{ display: role === "customer" ? "none" : "flex" }}
           >

              <LmDeleteCardModal
               
                Items={content}
                del={(x) => alert(" Your cards has been successfully deleted.")}
              >
                <StyledMenuItem
                  style={{ display: role === "customer" ? "none" : "flex" }}
                >
                  <ListItemIcon>
                    <RemoveCircleOutlineOutlinedIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Delete" />
                </StyledMenuItem>
              </LmDeleteCardModal>
              </div>
            </StyledMenu>
          </div>
        </div>

        <div className="jss109">
          <Divider className="jss777" />
          <div className="jss128 jss137 jss153">{description}</div>
        </div>

        <div className="jss110">
          <div
            className="jss155 jss113"
            style={{ padding: "0px 0px 0px 36px" }}
          >
            <div className="jss156">
              <div>
                <LmAvatar alt="Bilbo Baggins" className="jss162" />
              </div>
            </div>
            <div className="jss157">
              <div>
                <span className="jss128 jss138 jss158 jss153" chars1="Billy Bo">
                  {userName}
                </span>
                <span className="jss128 jss147 jss164 jss153">
                  {dateFormat(dateTimeStamp)}
                </span>
              </div>
              <div>
                <span className="jss128 jss139 jss159 jss153">
                  {salutation}
                </span>
              </div>
            </div>
          </div>
          <div className="jss114">
            {/* <a style={{ textDecoration: "none" }} href="/myRequests"> */}
              <Tooltip title="Views">
                <div className="jss118">
                  <VisibilityOutlinedIcon className="jss117" />
                  <span className="jss128 jss147 jss164 jss153">
                    {numberConvert(views)}
                  </span>
                </div>
              </Tooltip>
            {/* </a> */}
            <Tooltip title="Open requests">
              <div className="jss118">
                <ContactSupportOutlinedIcon className="jss117" />
                <span className="jss128 jss147 jss164 jss153">2</span>
              </div>
            </Tooltip>
            {role === "sme" ? (
              <Tooltip title="Open requests">
                <div className="jss118">
                  <BarChartOutlinedIcon className="jss117" />
                  <span className="jss128 jss147 jss164 jss153">99</span>
                </div>
              </Tooltip>
            ) : null}
          </div>

          <div className="jss171" style={{ padding: "0px 59px 0px 0px" }}>
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
      </div>
    );
  }
);

export default LmCard;
