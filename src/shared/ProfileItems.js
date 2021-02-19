import React, { useState, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import { withRouter } from "react-router-dom";
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import LockIcon from '@material-ui/icons/Lock';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import './styles.css';

const ProfileItems = withRouter(({ history }) => {
  const role =
    history.location.state === undefined
      ? localStorage.getItem("role")
      : history.location.state.role;

  return (
    <>
      <ListItem
        button
        component="a"
        onClick={() => history.push("allHubs")}
        style={{
          display: role === "sme" || role === "customer" ? "flex" : "none",
        }}
      >
        <ListItemIcon>
          <DeviceHubIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Your Hubs" />
      </ListItem>
      <ListItem
        button
        component="a"
        onClick={() => history.push("/userManagement")}
        style={{ display: role === "sme" ? "flex" : "none" }}
      >
        <ListItemIcon>
          <RecentActorsIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="User Admin" />
      </ListItem>

      <ListItem
        button
        component="a"
        onClick={() => history.push("/accessGroup")}
        style={{ display: role === "sme" ? "flex" : "none" }}
      >
        <ListItemIcon>
          <LockIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Access Groups" />
      </ListItem>
      


      <ListItem
        button
        component="a"
        onClick={() => history.push("/allrequest")}
        style={{ display: role === "sme" ? "flex" : "none" }}
      >
        <ListItemIcon>
          <SchoolOutlinedIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="The Brain" />
      </ListItem>
    </>
  );
});
export default ProfileItems;
