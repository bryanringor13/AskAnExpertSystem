import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Popover, Icon } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import './style.css';
import { LmPopOver } from "../Popovers/LmPopOver";
export const InquiriesResponse = ({ children, onChange, link }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClose = ({ checked, handleChange }) => {
        setAnchorEl(null);
      };

      const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (

     <Paper className="replyBox"  
     variant="outlined"
     square={false}>
         <div className="textStyle">
         <Typography variant="subtitle2">
             Reply...
             </Typography>
             <div>
            
             <LmPopOver>jjjjajajaj
                 sgdhbsfjdsfjdsjf 
                 hsbhfdhfghdshfgd
                 </LmPopOver>

            
          </div>
             </div>
         </Paper>

  );
};
