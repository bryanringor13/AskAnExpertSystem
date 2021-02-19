import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


export const LmTopicsSubTopics = ({  variant, color, endIcon, style, ...props }) => {
   
    return (

        <div style={{backgroundColor: 'white', width: '150px'}}> 
        <TreeView
        
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem nodeId="1" label="Topics" >
            <TreeItem nodeId="2" label="Sub Topic 1" />
            <TreeItem nodeId="3" label="Sub Topic 2" />
            <TreeItem nodeId="4" label="Sub Topic 3" />
          </TreeItem>
        </TreeView>
        </div>
      );
    }




