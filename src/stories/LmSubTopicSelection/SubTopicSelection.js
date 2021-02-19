import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import './SubTopicSelection.css'
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

export const SubTopicSelection = () => {
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
         
            <div className="align-items-start">
                    <TreeItem className="jss6" nodeId="5" label="Artificial Inteligence">
                    <TreeItem nodeId="6" label="General" />
                    <TreeItem nodeId="6" label="Types" />
                    <TreeItem nodeId="6" label="Uses" />
                    </TreeItem>    
            </div>
            {/* <div className="align-items-end">   
                <IconButton color="default">
                    <input type="checkbox" />
                </IconButton>
          </div>    */}

          {/* </div> */}
      </TreeView>
    </div>
  );
}