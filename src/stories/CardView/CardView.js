import React from 'react';
import { LmTypography } from '../Typography/LmTypography';
import { LmAvatar } from '../Avatar/LmAvatar';
import { articles } from '../../../src/modules/main_dashboard/components/MyRequests/components/constants/dummy_data';
import Tooltip from '@material-ui/core/Tooltip';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import Grid from '@material-ui/core/Grid';
import { LmTypographyGrey } from '../TypographyGrey/LmTypographyGrey';
import { LmTabs } from '../Tabs/LmTabs' 
import Button from '@material-ui/core/Button';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import Box from '@material-ui/core/Box';

const Article = ({userName, salutation, content1, content2, content3, content4, content5}) => {
    return (
      <div>
        <div className="jss110">
          <div className="jss155 jss113">
            <div className="jss156">
              <div>
                <LmAvatar alt="Bilbo Baggins" className="jss162" />
              </div>
            </div>
            <div className="jss157">
              <div>
                <span className="jss128 jss138 jss158 jss153">
                  {userName}
                </span>
                {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                <span className="jss128 jss147 jss164 jss153">00-00</span>
              </div>
              <div>
                <span color="default">
                  {salutation}
                </span>
              </div>
            </div>
          </div>
          <div className="jss114">
            <Tooltip title="Views">
              <div className="jss118">
                <VisibilityOutlinedIcon className="jss117" />
                {/* <span className="jss128 jss147 jss164 jss153">{numberConvert(views)}</span> */}
                <span className="jss128 jss147 jss164 jss153">12</span>
              </div>
            </Tooltip>
            
          </div>
          <div className="jss171">
            <div className="jss115">
              <div
                className="jss167"
                data-automation-key="ui-topic-subtopic-topic"
                data-automation-value="customer-ops"
              >
               Main
              </div>
              <div
                className="jss169"
                data-automation-key="ui-topic-subtopic-subtopic"
                data-automation-value="pre-sales"
              >
               Sub Topic
              </div>
            </div>
          </div>
         
          
        </div>
         {/* text content */}
        <LmTypography  variant="body2" component="h2">
         {content1}<br /><br />
         {content2}<br /><br />
         {content3}<br /><br />
         {content4}<br /><br />
         {content5}<br />
        </LmTypography>
      </div>
    );
}
export const CardView = ({ onChange }) => {
    return (
        <div 
        // style={{marginTop: '30px', marginLeft: '130px'}}
        >
          
            {/* 2 columns cards and requests */}
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
            <Grid item xs={12} md={9} lg={3}></Grid>
           

    </div>
        );
    }