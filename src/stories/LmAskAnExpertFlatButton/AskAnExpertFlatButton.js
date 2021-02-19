import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Box from "@material-ui/core/Box";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

export const AskAnExpertFlatButton = ({ children, onChange, link }) => {
  return (
    <button
    // onClick={() => {
    //   history.push({
    //     pathname: "/askanexpert",
    //   });
    // }}
    className="anex"
    style={{
      padding: "15px",
      color: "#fff",
      background: "#e31c79",
      border: "none",
      outline: "none",
      borderRadius: "7px",
    }}
  >
    <div style={{ display: "flex" }}>
      <ContactSupportIcon />
      <span style={{ fontSize: "15px" }}> ASK THE EXPERTS</span>
    </div>
  </button>
  );
};
