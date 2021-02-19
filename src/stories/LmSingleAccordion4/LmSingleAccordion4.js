import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import PasswordStrengthBar from 'react-password-strength-bar';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: 'grey',
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20,
    },
    details: {
      alignItems: 'center',
    },
    column: {
      flexBasis: '25.33%',
    },
    helper: {
      padding: theme.spacing(1, 2),
      color: 'grey',
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }));

export const LmSingleAccordion4 = ({ children, onChange, link, className, color, }) => {
    const classes = useStyles();
    const [pass, setPass] = React.useState();
  return (
    <div className={classes.root}>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1c-content"
        id="panel1c-header"
      >
          <div style={{display: 'flex', flexDirection: 'column'}}>
        <div className={classes.column}>
          <Typography className={classes.heading}>Update Password</Typography>
        </div>
        <div className={classes.column}>
          <Typography className={classes.secondaryHeading}>Password security rules will apply</Typography>
        </div>
        </div>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
       
       
        <div style={{width: '60%'}}>
          <TextField id="standard-basic" label="*New Password" fullWidth="true"  size='medium' />
          <Typography className={classes.helper} variant="caption">
          Password strength
          </Typography>
          <PasswordStrengthBar password={pass}/>
          <div style={{marginTop: '20px'}}>
      <TextField id="standard-basic" label="*Confirm Password" fullWidth="true"  size='medium' />
       </div>
      </div>


      </AccordionDetails>
      {/* <Divider /> */}
      <AccordionActions>
        <Button size="small" color="primary">
          Update Password
        </Button>
      </AccordionActions>
    </Accordion>
  </div>
);

};
