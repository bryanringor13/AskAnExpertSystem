import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { LmAvatar } from '../Avatar/LmAvatar';
import { LmTypography } from '../Typography/LmTypography';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import RoomServiceOutlinedIcon from '@material-ui/icons/RoomServiceOutlined';
import { articles } from '../../modules/main_dashboard/components/MyRequests/components/constants/dummy_data';
import { LmMainTopicAndSubTopic } from '../LmMainTopicAndSubTopic/LmMainTopicAndSubTopic';
import './style.css';
const Article = ({userName, salutation, content1, content2, content3, content4, content5}) => {
    return (
      <div style={{width: '700px', backgroundColor: '#F5FAFF', height: '65px'}}>
        <div className="jss110">
          <div className="jss155 jss113">
            <div className="jss156">
              {/* <div>
                <LmAvatar alt="Bilbo Baggins" className="jss162" />
              </div> */}
                <div className="buttonStyle">
           <LmMainTopicAndSubTopic></LmMainTopicAndSubTopic>
        </div>
            </div>
            {/* <div className="jss157">
              <div>
                <span className="jss128 jss138 jss158 jss153">
                <LmTypography Body16Med variant="subtitle1">{userName}  </LmTypography>
                </span>
             
               
              </div>
              <div>
              <span className="timestamp">22 days ago</span>
              </div>
            </div> */}
          </div>
          <div className="jss114" style={{marginTop: '8px'}}>
            <Tooltip title="Views">
              <div className="jss118">
                <VisibilityOutlinedIcon className="jss117" />
                {/* <span className="jss128 jss147 jss164 jss153">{numberConvert(views)}</span> */}
                <span className="iconStyle">12</span>
              </div>
            </Tooltip>
            <Tooltip title="Open Requests">
              <div className="jss118">
                <RoomServiceOutlinedIcon className="jss117" />
                {/* <span className="jss128 jss147 jss164 jss153">{numberConvert(views)}</span> */}
                <span className="iconStyle">12</span>
              </div>
            </Tooltip>
            
          </div>
         
          
        </div>
         
      </div>
    );
}

export const MainSubTopicHeader = ({ }) => {
    return (

<Grid item xs={12} md={9} lg={9}>
              {articles.map((item, index) => (
                <Article
                  userName={item.userName}
                  content1={item.content1}
                  content2={item.content2}
                  content3={item.content3}
                  content4={item.content4}
                  content5={item.content5}
                //   salutation={item.salutation}
                />
              ))}
            </Grid>

);
}