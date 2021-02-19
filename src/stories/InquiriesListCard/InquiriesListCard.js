import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { LmAvatar } from '../Avatar/LmAvatar';
import { LmTypography } from '../Typography/LmTypography';
import { LmTypographyGrey } from '../TypographyGrey/LmTypographyGrey';
import { ticket } from '../../modules/main_dashboard/components/NewRequests/components/constants/dummy_data';
import './style.css';
const Ticket = ({userName, questionTitle, key, role1}) => {
  
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
            <div style={{display: 'flex'}}>
              <div>
                <span>
    <LmTypography  className="userNameLabel" Body16Med variant="subtitle1">{userName}{role1}</LmTypography>
                </span>
               
              </div>
              <div>
                 {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                 <span className="timeStamp">23d</span>
                {/* <span color="default">
                  {salutation}
                </span> */}
              </div>
            </div>
          </div>
         
          
        </div>
     
        
      </div>
    );
}
const Ticket1 = ({userName, questionTitle, key, role1}) => {
  
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
            <div style={{display: 'flex'}}>
              <div>
                <span>
    <LmTypography  className="userNameLabel" Body16Med variant="subtitle1">{userName}</LmTypography>
                </span>
               
              </div>
              <div>
                 {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                 <span className="timeStamp2">23d</span>
                {/* <span color="default">
                  {salutation}
                </span> */}
              </div>
            </div>
          </div>
         
          
        </div>
     
        
      </div>
    );
}
const Ticket2 = ({userName, questionTitle, key, role2}) => {
  
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
            <div style={{display: 'flex'}}>
              <div>
                <span>
    <LmTypography  className="userNameLabel" Body16Med variant="subtitle1">{userName}{role2}</LmTypography>
                </span>
                <i
              className="timeStamp4"
              >action 2 mins ago</i>
              </div>
             
              <div>
                 {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
                 <span 
                 className="timeStamp3"
                 >23d</span>
                {/* <span color="default">
                  {salutation}
                </span> */}
              </div>
            </div>
          </div>
         
          
        </div>
     
        
      </div>
    );
}
const Question = ({userName, questionTitle, title, key}) => {
  
    return (
      <div>
        <div className="">
          <div className="jss155 jss113">
            
            <div>
              <div>
                <span>
                  <LmTypography Body16Med variant="subtitle1">{userName}</LmTypography>
                </span>
               
              </div>
            </div>
          </div>
         
          
        </div>
        <Box/>
         {/* text content */}
         
         <LmTypographyGrey className="textStyle" variant="body1">
           {questionTitle}
         </LmTypographyGrey>
        
      </div>
    );
}

const Answer = ({userName, questionTitle, title, key}) => {
  
    return (
      <div>
        <div className="">
          <div className="jss155 jss113">
            
            <div>
              <div>
                <span>
                  <LmTypography Body16Med variant="subtitle1">{userName}</LmTypography>
                </span>
               
              </div>
            </div>
          </div>
         
          
        </div>
        <Box/>
         {/* text content */}
         
         <LmTypographyGrey className="textStyle" variant="body1">
           {title}
         </LmTypographyGrey>
        
      </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '45ch',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #E8E8E8',
    },
    inline: {
      display: 'inline',
    },
  }));
  
export const InquiriesListCard = ({ onChange }) => {
    const classes = useStyles();
    return (
      
<List 
className={classes.root}
>
      <ListItem>
     
          {ticket.map((item, index) => (
            <Ticket1
              key={index}
              userName={item.userName}
            />
          ))}
         
      </ListItem>
        <Divider variant="middle" component="li" />
      <ListItemText>  
      {ticket.map((item, index) => (
            <Question
              key={index}
            //   userName={item.userName}
            //   salutation={item.salutation}
            questionTitle={item.questionTitle}
            />
          ))}
          </ListItemText>
      <Divider variant="middle" component="li" />
      <ListItem>
           {ticket.map((item, index) => (
            <Ticket
              key={index}
              userName={item.userName}
              role1={item.role1}
            />
          ))}
      </ListItem>
      <ListItemText> 
      {ticket.map((item, index) => (
            <Answer
              key={index}
            //   userName={item.userName}
            //   salutation={item.salutation}
              title={item.title}
            />
          ))}
      </ListItemText>
      <Divider variant="middle" component="li" />
      <ListItem >
      {ticket.map((item, index) => (
            <Ticket2
              key={index}
              userName={item.userName}
              role2={item.role2}
            />
          ))}
         
    
      </ListItem>

      <ListItemText> 
      {ticket.map((item, index) => (
            <Answer
              key={index}
            //   userName={item.userName}
            //   salutation={item.salutation}
              title={item.title}
            />
          ))}
      </ListItemText>
   
    </List>
 
        );
    }
    
   