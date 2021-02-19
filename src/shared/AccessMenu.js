import React, { useState, useEffect } from "react";
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
import SettingsIcon from "@material-ui/icons/Settings";
import FolderSharedOutlinedIcon from "@material-ui/icons/FolderSharedOutlined";
import LinkOutlinedIcon from "@material-ui/icons/LinkOutlined";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import DnsOutlinedIcon from "@material-ui/icons/DnsOutlined";
import ExtensionIcon from '@material-ui/icons/Extension';
import GroupIcon from '@material-ui/icons/Group';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import TodayIcon from '@material-ui/icons/Today';
import { Divider } from "@material-ui/core";
import LockIcon from '@material-ui/icons/Lock';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const AccessMenu = withRouter(({ history }) => {
  const role =
    history.location.state === undefined
      ? localStorage.getItem("role")
      : history.location.state.role;

  return (
    <div className="menuCollapsedStyle">
      <ListItem>
        <ListItemIcon>
          <LockIcon  style={{color: "#ffffff70"}} color="#604e79" />
        </ListItemIcon>
        <ListItemText style={{color: "#ffffff70"}} primary="Access Groups" />
      </ListItem>
      <Divider style={{backgroundColor: "rgb(255 255 255 / 50%)"}} />
      <ListItem
        button
        component="a"
        onClick={() => history.push("/accessGroup")}
        style={{
          display: role === "sme" || role === "customer" ? "flex" : "none",
        }}
      >
        <ListItemIcon>
          <FormatListBulletedIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Group List" />
      </ListItem>
    </div>
  );
});
export default AccessMenu;