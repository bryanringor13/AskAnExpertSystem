import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Box from '@material-ui/core/Box';
import './style.css'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export const LmMainTopicAndSubTopic = ({ onChange }) => {
    return (
      
        <div className="jss171">
        <div className="jss115">
          <div
            className="jss167"
            data-automation-key="ui-topic-subtopic-topic"
            data-automation-value="customer-ops"
          >
           Main
          </div>
          <NavigateNextIcon fontSize='small' style={{color: '#686F8A', marginTop: '5px'}}/>
          <div
            className="jss169"
            data-automation-key="ui-topic-subtopic-subtopic"
            data-automation-value="pre-sales"
          >
           Sub Topic
          </div>
        </div>
      </div>
 
        );
    }
    