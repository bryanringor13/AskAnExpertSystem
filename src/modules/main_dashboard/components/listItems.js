import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeviceHubOutlinedIcon from "@material-ui/icons/DeviceHubOutlined";
// import BarChartIcon from '@material-ui/icons/BarChart';
import PeopleIcon from "@material-ui/icons/People";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import FolderSharedOutlinedIcon from "@material-ui/icons/FolderSharedOutlined";

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/dashboard">
      <ListItemIcon>
        <DeviceHubOutlinedIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="Flamingo Hub" />
    </ListItem>
    <ListItem button component="a" href="/askanexpert">
      <ListItemIcon>
        <PeopleIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="The Brain" />
    </ListItem>
    <ListItem button component="a" href="/requests">
      <ListItemIcon>
        <FolderSharedOutlinedIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="Requests" />
    </ListItem>
    <ListItem button component="a" href="/myRequests">
      <ListItemIcon>
        <LayersIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="My requests" />
    </ListItem>
    <ListItem button href="/askanexpert">
      <ListItemIcon>
        <LayersIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="Topics" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset color="primary">Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);
