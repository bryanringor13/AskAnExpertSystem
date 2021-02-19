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
import Typography from '@material-ui/core/Typography';
import './style.css';
const Article = ({userName, salutation, content1, content2, content3, content4, content5}) => {
    return (
      <div style={{width: '700px', backgroundColor: '#F5FAFF', height: '65px'}}>
        <div className="jss110">
          <div className="jss155 jss113">
            <div className="jss156">
              <div>
                <LmAvatar alt="Bilbo Baggins" className="jss162" />
              </div>
            </div>
            <div className="jss157">
            <div>
              {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
              <span id="name">{userName}</span>
              &nbsp;
              <span className="jss128 jss147 jss164 jss153">2d</span>
            </div>
            <div>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ width: "100px" }}
                style={{ fontSize: "smaller" }}
              >
                {salutation}
              </Typography>
            </div>
          </div>
          </div>
          <div className="jss114">
            <Tooltip title="Views">
              <div className="jss118">
                <VisibilityOutlinedIcon className="jss117" />
                {/* <span className="jss128 jss147 jss164 jss153">{numberConvert(views)}</span> */}
                <span className="iconStyle">12</span>
              </div>
            </Tooltip>
            
            
          </div>
         
            <div className="buttonStyle">
           <LmMainTopicAndSubTopic></LmMainTopicAndSubTopic>
        </div>
        </div>
         
      </div>
    );
}

export const AuthorWithMainSubTopic = ({ }) => {
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
                  salutation={item.salutation}
                />
              ))}
            </Grid>

);
}