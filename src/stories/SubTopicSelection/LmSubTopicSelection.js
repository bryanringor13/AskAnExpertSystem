import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TreeItem from '@material-ui/lab/TreeItem';
import './LmSubTopicSelection.css'
import { Divider } from '@material-ui/core';
import { ButtonBase } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
// const useStyles = makeStyles({
//   root: {
//     height: 216,
//     flexGrow: 1,
//     maxWidth: 400,
//   },
// });

export const LmSubTopicSelection = () => {
//   const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  return (
    <div className="jss1">
      <div className="jss2 jss3">
        <ButtonBase
          className="jss4"
          tabindex="0"
          type="button"
          aria-label="delete"
        >
          Unselect 1 sub-topics
          <span class="MuiIconButton-label">
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </span>
        </ButtonBase>
      </div>
      <TreeView
        className="jss5"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={null}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
      >
        <div className="jss21">
          <Divider className="jss20 jss22" />
          <div className="jss23"></div>
        </div>
       
          {/* <div className="jss13"> */}
          {/* <p class="MuiTypography-root jss15 MuiTypography-body2">Artificial Intelligence</p> */}
          <div className="d-flex justify-content-space-between">
            <div className="align-items-start">
                    <TreeItem className="jss6" nodeId="5" label="Artificial Inteligence">
                    <TreeItem nodeId="6" label="General" />
                    <TreeItem nodeId="6" label="Types" />
                    <TreeItem nodeId="6" label="Uses" />
                    </TreeItem>    
            </div>
            <div className="align-items-end">   
                <IconButton color="default">
                    <input type="checkbox" />
                </IconButton>
          </div>   
          </div>

          {/* </div> */}
     
        <div className="jss21">
          <Divider className="jss20 jss22" />
          <div class="jss23"></div>
        </div>
        <div className="jss13">
          <TreeItem className="jss6" nodeId="5" label="Culture">
            <TreeItem nodeId="6" label="Social committee" />
          </TreeItem>
        </div>
        <div className="jss21">
          <Divider className="jss20 jss22" />
          <div class="jss23"></div>
        </div>
        <div className="jss13">
          <TreeItem className="jss6" nodeId="8" label="Customer Ops">
            <TreeItem nodeId="9" label="Darwin Release" />
            <TreeItem nodeId="10" label="Lamark Release" />
            <TreeItem nodeId="11" label="Pre Sales" />
            <TreeItem nodeId="12" label="Process & Procedure" />
          </TreeItem>
        </div>

        <div className="jss21">
          <Divider className="jss20 jss22" />
          <div class="jss23"></div>
        </div>
        <div className="jss13">
          <TreeItem className="jss6" nodeId="13" label="Engineering">
            <TreeItem nodeId="14" label="Hosting" />
            <TreeItem nodeId="15" label="Team" />
            <TreeItem nodeId="16" label="Technology" />
          </TreeItem>
        </div>
        <div className="jss21">
          <Divider className="jss20 jss22" />
          <div class="jss23"></div>
        </div>
        <div className="jss13">
          <TreeItem className="jss6" nodeId="17" label="General">
            <TreeItem nodeId="18" label="Flamingo" />
            <TreeItem nodeId="19" label="Onboarding" />
          </TreeItem>
        </div>
        <div className="jss21">
          <Divider className="jss20 jss22" />
          <div class="jss23"></div>
        </div>
        <div className="jss13">
          <TreeItem className="jss6" nodeId="20" label="Machine Learning">
            <TreeItem nodeId="21" label="Algorithms" />
          </TreeItem>
        </div>
        <div className="jss21">
          <Divider className="jss20 jss22" />
          <div class="jss23"></div>
        </div>
        <div className="jss13">
          <TreeItem className="jss6" nodeId="22" label="Marketing">
            <TreeItem nodeId="23" label="Assets" />
          </TreeItem>
        </div>
        <div className="jss21">
          <Divider className="jss20 jss22" />
          <div class="jss23"></div>
        </div>
        <div className="jss13">
          <TreeItem className="jss6" nodeId="24" label="Sales">
            <TreeItem nodeId="25" label="Collateral" />
            <TreeItem nodeId="26" label="Features" />
          </TreeItem>
        </div>
        <div className="jss21">
          <Divider className="jss20 jss22" />
          <div class="jss23"></div>
        </div>
        <div className="jss13">
          <TreeItem className="jss6" nodeId="27" label="Security"></TreeItem>
        </div>
        <div className="jss21">
          <Divider className="jss20 jss22" />
          <div class="jss23"></div>
        </div>
        <div className="jss13">
          <TreeItem className="jss6" nodeId="28" label="UX">
            <TreeItem nodeId="29" label="Feedback" />
            <TreeItem nodeId="30" label="UI" />
            <TreeItem nodeId="31" label="Usability Testing" />
          </TreeItem>
        </div>
      </TreeView>
    </div>
  );
}