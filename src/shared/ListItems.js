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
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import { Divider } from "@material-ui/core";
import './styles.css';

const ListItems = withRouter(({ history }) => {
  const role =
    history.location.state === undefined
      ? localStorage.getItem("role")
      : history.location.state.role;

  return (
    <div className="menuCollapsedStyle">
      <ListItem>
        <ListItemIcon>
          <DeviceHubIcon  style={{color: "#ffffff70"}} color="primary" />
        </ListItemIcon>
        <ListItemText style={{color: "#ffffff70"}} primary="Flamingo Hub" />
      </ListItem>
      <Divider style={{backgroundColor: 'rgb(255 255 255 / 41%)'}}/>
      <ListItem
        button
        component="a"
        onClick={() => history.push("/dashboard")}
        style={{
          display: role === "sme" || role === "customer" ? "flex" : "none",
        }}
      >
        <ListItemIcon>
          <SchoolOutlinedIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="The Brain" />
      </ListItem>
      <ListItem
        button
        component="a"
        onClick={() => history.push("/allrequest")}
        style={{ display: role === "sme" ? "flex" : "none" }}
      >
        <ListItemIcon>
          <ContactSupportOutlinedIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Requests" />
      </ListItem>
      <ListItem
        button
        component="a"
        onClick={() => history.push("/analiticsHome")}
        style={{ display: role === "sme" ? "flex" : "none" }}
      >
        <ListItemIcon>
          <AssessmentOutlinedIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Analytics" />
      </ListItem>
      <ListItem
        button
        component="a"
        onClick={() => history.push("/myRequests")}
        style={{
          display: role === "sme" || role === "customer" ? "flex" : "none",
        }}
      >
        <ListItemIcon>
          <ChatOutlinedIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="My requests" />
      </ListItem>
      <ListItem
        button
        onClick={() => history.push("/topics")}
        style={{ display: role === "sme" ? "flex" : "none" }}
      >
        <ListItemIcon>
          <DnsOutlinedIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Topics" />
      </ListItem>
      <ListItem
        button
        onClick={() => history.push("/settings")}
        style={{ display: role === "sme" ? "flex" : "none" }}
      >
        <ListItemIcon>
          <SettingsIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        
      </ListItem>
      <ListItem button component="a" 
      onClick={() => history.push("/aiSettings")}
      style={{ display: role === "sme" ? "flex" : "none" }}
      >
        <ListItemIcon>
          <ExtensionIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="AI Settings" />

      </ListItem>
      {/* <ListItem button component="a" onClick={() => history.push("/allLinks")}>
        <ListItemIcon>
          <LinkOutlinedIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="All Links" />
      </ListItem> */}
    </div>
  );
});
export default ListItems;
