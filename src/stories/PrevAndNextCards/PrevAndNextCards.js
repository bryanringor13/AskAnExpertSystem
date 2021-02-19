import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { TextareaAutosize } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from '@material-ui/core/IconButton';
import { Box} from '@material-ui/core';
import './style.css'
export const PrevAndNextCards = ({  variant,
    gutterBottom, 


    ...props }) => {
        
  return (
        <React.Fragment>
        {/* <CssBaseline /> */}
  
          <div className="wrapper"
          >
             
          <div style={{display: 'flex'}}>
          <Box 
          p={1} flexGrow={1}
          >  
          
                <IconButton disableRipple='false' disableFocusRipple='false'>
               
                  <ArrowBackIosIcon fontSize="small" color="primary" />  
                  <div className="boxWrapper"
                  
                  >
          
                 <span style={{position: 'absolute', top: '30%', left: '15%'}}className="jss128 jss147 jss164 jss153">asked 23d ago</span>
              
         
           <p className="textCard">What is Track and Trace?  </p>
       </div>
                </IconButton>
               
              </Box>
       
       
              <Box 
              p={1} flexGrow={1}
              // style={{marginLeft:'1100px'}}
              >    
                <IconButton disableRipple='false' disableFocusRipple='false'> 
                <div className="boxWrapper">
   
                 <span style={{position: 'absolute', top: '30%', left: '11%'}} className="jss128 jss147 jss164 jss153">asked 23d ago</span>
              
           
                <p className="textCard">  What is Track and Trace?  </p>
       </div>
                  <ArrowForwardIosIcon fontSize="small" color="primary" />
                </IconButton>
              </Box>
              </div>
          </div>
  
      </React.Fragment>

);
}
