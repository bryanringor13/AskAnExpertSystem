import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Box from '@material-ui/core/Box';
import { LmAvatar } from '../Avatar/LmAvatar';
import { LmTypography } from '../Typography/LmTypography';
import { LmTypographyGrey } from '../TypographyGrey/LmTypographyGrey';
import { ticket } from '../../modules/main_dashboard/components/NewRequests/components/constants/dummy_data';

const Ticket = ({userName, questionTitle, key}) => {
  
    return (
      <div>
        <div className="">
          <div className="jss155 jss113">
            <div className="jss156">
              <div>
                <Box mt={1}/>
                <LmAvatar alt="Bilbo Baggins" className="jss162" />
              </div>
            </div>
            <div>
              <div>
                <span>
                  <LmTypography Body16Med variant="subtitle1">{userName}</LmTypography>
                </span>
               
              </div>
              <div>
                 {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                 <span className="jss128 jss147 jss164 jss153">asked 23d ago</span>
                {/* <span color="default">
                  {salutation}
                </span> */}
              </div>
            </div>
          </div>
         
          
        </div>
        <Box mt={3}/>
         {/* text content */}
         
         <LmTypographyGrey variant="body1">
           {questionTitle}
         </LmTypographyGrey>
        
      </div>
    );
}

export const SideBarAuthorInfo = ({ onChange }) => {
    return (
      
<Box>
        {ticket.map((item, index) => (
            <Ticket
              key={index}
              userName={item.userName}
              salutation={item.salutation}
              questionTitle={item.questionTitle}
            />
          ))}
          </Box>
 
        );
    }
    