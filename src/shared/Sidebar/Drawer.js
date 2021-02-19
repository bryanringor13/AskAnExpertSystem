import React, { useState } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import { mainListItems, secondaryListItems } from '../listItems';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    // appBar: {
    //   zIndex: theme.zIndex.drawer + 1,
    //   transition: theme.transitions.create(['width', 'margin'], {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.leavingScreen,
    //   }),
    // },
    // appBarShift: {
    //   marginLeft: drawerWidth,
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   transition: theme.transitions.create(['width', 'margin'], {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.enteringScreen,
    //   }),
    // },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      color: '#f2f2f4',
      background: '#21222e',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }));

const SideDrawer = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    const handleDrawerClose = () => {
        setOpen(false);
      };
    return (
        <div>
            <Drawer
                variant="permanent"
                classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                
                </IconButton>
                </div>
                <Divider />
                <List onClick={handleDrawerOpen}>{mainListItems}</List>
                <div
                className={classes.toolbarIcon}
                onClick={open ? handleDrawerClose : handleDrawerOpen}
                >
                <IconButton size="medium" style={{ marginLeft: "auto" }}>
                    {open ? <ChevronRightIcon color="primary" /> : <ChevronLeftIcon color="primary"/>}
                </IconButton>
                </div>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
        </div>
    )
}

export default SideDrawer