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
import Switch from '@material-ui/core/Switch';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 702,
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

export const LmSingleAccordion5 = ({ children, onChange, link, className, color, }) => {
    const classes = useStyles();
    const [pass, setPass] = React.useState();
    const [age, setAge] = React.useState('Prompt to update password next login');
    const [open, setOpen] = React.useState(false);
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
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
          <Typography className={classes.heading}>Enforce Password Update</Typography>
        </div>
        <div className={classes.column}>
          <Typography className={classes.secondaryHeading}>Users will be prompted to update their password on next login, and on a recurring schedule(if you choose)</Typography>
        </div>
        </div>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
       
       
        <div style={{width: '60%'}}>
          {/* <TextField id="standard-basic" label="*New Password" fullWidth="true"  size='medium' />
          <Typography className={classes.helper} variant="caption">
          Password strength
          </Typography>
          <PasswordStrengthBar password={pass}/> */}
          <div style={{display: 'flex', flexDirection: 'column'}}>
          <Typography>Enabled</Typography>
           <Switch inputProps={{ 'aria-label': 'primary checkbox' }} color="primary" />
           </div>
          <div style={{marginTop: '20px'}}>
      {/* <TextField id="standard-basic" label="*Confirm Password" fullWidth="true"  size='medium' /> */}
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="demo-controlled-open-select-label">Age</InputLabel> */}
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          disabled
        >
          
          <MenuItem value={10}>Prompt to update password next login</MenuItem>
          <MenuItem value={20}>Prompt to update password next login, then every 30 days</MenuItem>
          <MenuItem value={30}>Prompt to update password next login, then every 60 days</MenuItem>
          <MenuItem value={40}>Prompt to update password next login, then every 90 days</MenuItem>
        </Select>
      </FormControl>
       </div>
      </div>


      </AccordionDetails>

      <AccordionActions>
        <Button size="small" color="primary">
         Save Changes
        </Button>
      </AccordionActions>
    </Accordion>
  </div>
);

};
