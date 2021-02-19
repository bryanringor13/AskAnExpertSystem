import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import VerifiedUserTwoToneIcon from "@material-ui/icons/VerifiedUserTwoTone";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItems from "../ListItems";
import "../Header/style.css";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { LmAvatar } from "../../stories/Avatar/LmAvatar";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import logo from "./img/flamingo-logo-new.png";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ProfileItems from "../ProfileItems";
import UserMenu from "../UserMenu";
import HubMenu from "../HubMenu";
import AccessMenu from "../AccessMenu";
import { Fab, ListItem } from "@material-ui/core";
import HeaderSlide from "../HeaderSlide";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    marginTop: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 300,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    color: "#f2f2f4",
    background: "#21222e",
    width: drawerWidth,
    overflowY: "visible",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "visible",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    // [theme.breakpoints.up("sm")]: {
    //   width: theme.spacing(9),
    // },
  },
  buttonStyle: { 
    backgroundColor: "#e54a79",
    zIndex: 1200,
    width: 50
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  buttonAction: {
    top: '75%',
    position: "absolute",
    right: -19,
  }
}));

const Header = withRouter(({ menuList = null, menu = true, position, color, history }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(menu);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

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

  let histories = useHistory();
  const role =
    histories.location.state === undefined
      ? localStorage.getItem("role")
      : histories.location.state.role;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const [view, setView] = React.useState(12);
  // const [isLoading, setisLoading] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const logout = () => {
    localStorage.setItem("askAnExpertSuccess", false);
    localStorage.removeItem("role");
    history.push("/");
  };

  return (
    <div>
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawer()}
            className={clsx(
              classes.menuButton
            )}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Flamingo Ai
          </Typography> */}
          <div className={classes.title}>
           <img src={logo} className="logoStyle"/>
          </div>
          <IconButton color="inherit" onClick={handleClick}>
            <LmAvatar alt="Bilbo Baggins" className="jss162" />
          </IconButton>

          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem button component="a" href="/updateDetails">
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Profile"/>
            </StyledMenuItem>
            <StyledMenuItem onClick={() => logout()} >
              <ListItemIcon>
                <ExitToAppOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </StyledMenuItem>
          </StyledMenu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={"persistent"}
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={true}
      >
        <List style={{marginTop: 60}}>{
                // !!menuList ? menuList === 'usermenu' &&  <UserMenu /> : <ListItems />
          !!menuList ? menuList === 'usermenu' ?   <UserMenu /> : menuList === 'hubmenu' ? <HubMenu/> : menuList === 'accessmenu'  && <AccessMenu/> : <ListItems />
        }
        </List>
        {/* <IconButton size="medium"
          className={classes.buttonStyle}
          onClick={open ? handleDrawerClose : handleDrawerOpen}
          tabIndex="1"
        >
          {open ? (
            <ChevronLeftIcon style={{color: "#FFFFFF"}} />
          ) : (
            <ChevronRightIcon style={{color: "#FFFFFF"}} />
          )}
        </IconButton> */}
        <Fab size="small" className={classes.buttonAction} color="primary" onClick={open ? handleDrawerClose : handleDrawerOpen}>
          {open ? (
              <ChevronLeftIcon style={{color: "#FFFFFF"}} />
            ) : (
              <ChevronRightIcon style={{color: "#FFFFFF"}} />
            )}
        </Fab>
      </Drawer>
      <HeaderSlide slideOpen={openDrawer} setSlideOpen={handleDrawer}/>
    </div>
  );
});

export default Header;
