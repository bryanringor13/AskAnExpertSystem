import React from "react";
import PropTypes from "prop-types";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
// import "./LmTabs.css";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { LmButtonAskTheExpert } from "../../stories/LmButtonAskTheExpert/LmButtonAskTheExpert";
import { LmAvatar } from "../../stories/Avatar/LmAvatar";
import { RequestFieldText } from "../../stories/RequestFieldText/RequestFieldText";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import { LMAssignSME } from "../../stories/LMAssignSME/LMAssignSME";

require("./LmTabs.css");

const StyledBadge = withStyles((theme) => ({
  badge: {
    top: 0,
    backgroundColor: "#e31c79",
    color: "#ffffff",
    border: "none",
  },
}))(Badge);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({}));

export const LmTabs = ({
  tabs,
  badgeContent,
  onClicked,
  hasExpertButton,
  isRequest,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [isClickedAskTheExpert, setisClickedAskTheExpert] = React.useState(
    false
  );
  const [assigned, setassigned] = React.useState(null);
  const setAssignee = () => {
    setassigned("test");
    const interval = setInterval(() => {
      setassigned(null);
      clearInterval(interval);
    }, 3000);
  };

  const onClicks = (val) => {
    onClicked(val);
    setisClickedAskTheExpert(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = () => {
    let theme = createMuiTheme({
      overrides: {
        MuiBox: {
          root: {
            padding: "0px",
          },
        },
      },
    });

    return theme;
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        style={{ boxShadow: "none", background: "none" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {tabs.map((tab, index) => {
            return (
              <Tab
                label={
                  <div>
                    <span>{tab.label}</span>
                    {tab.hasIcon ? (
                      <span id="tablIcon">
                        <IconButton>
                          <StyledBadge
                            badgeContent={badgeContent}
                            color="secondary"
                          ></StyledBadge>
                        </IconButton>
                      </span>
                    ) : null}
                  </div>
                }
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>
      </AppBar>
      <Box pt={3}> </Box>
      {tabs.map((tab, mainIndex) => {
        return (
          <TabPanel value={value} index={mainIndex} className="tabContent">
            {!isClickedAskTheExpert ? (
              <div class="FixedHeightContainer">
                <div className="top">&nbsp;</div>
                <div class="Content">
                  {tab.content.map((value, index) => {
                    return (
                      <div>
                        {!hasExpertButton && isRequest ? (
                          <span
                            style={{ fontSize: "small", fontWeight: "bold" }}
                          >
                            Where is the documentation of this topic please?
                          </span>
                        ) : null}
                        {mainIndex === 1 || !hasExpertButton ? (
                          <div className="jss155 jss113">
                            <div className="jss156">
                              <div>
                                <LmAvatar
                                  alt="Bilbo Baggins"
                                  className="jss162"
                                />
                              </div>
                            </div>
                            <div className="jss157">
                              <div>
                                <Box p={2}></Box>
                                <Divider />
                                <Box p={2}></Box>

                                {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                                <span id="name">{value.user}</span>
                              </div>
                              <div>
                                <Typography
                                  variant="body2"
                                  color="textSecondary"
                                  style={{ width: "100px" }}
                                  style={{ fontSize: "smaller" }}
                                >
                                  {value.salutation}
                                </Typography>
                              </div>
                            </div>
                          </div>
                        ) : null}

                        <div className="tabItems">{value.value}</div>
                      </div>
                    );
                  })}
                  <div>
                    {!hasExpertButton && isRequest ? (
                      <div id="assign-sme">
                        <Box p={10} flexGrow={10}></Box>
                        <LMAssignSME assignProps={(e) => setAssignee(e)} />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}

            {isClickedAskTheExpert ? (
              <div style={{ position: "relative" }}>
                <div style={{ float: "right", top: "0", right: "0" }}>
                  <IconButton onClick={() => setisClickedAskTheExpert(false)}>
                    <ClearOutlinedIcon style={{ fill: "#717171" }} />
                  </IconButton>
                </div>
                <div id="reqField">
                  <RequestFieldText onClick={(e) => onClicks(e)} />
                </div>
              </div>
            ) : null}
            <div style={{ display: hasExpertButton ? "block" : "none" }}>
              <div
                style={{
                  display: isClickedAskTheExpert ? "none" : "block",
                }}
              >
                &nbsp;
                <Divider />
                <p style={{ fontSize: "small", fontWeight: "bold" }}>
                  Do you have a question or comment about this card?
                </p>
                <LmButtonAskTheExpert
                  style={{ color: "#ffffff" }}
                  onClick={() => setisClickedAskTheExpert(true)}
                />
              </div>
            </div>
          </TabPanel>
        );
      })}
    </div>
  );
};
