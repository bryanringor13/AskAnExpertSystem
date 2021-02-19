import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
      fontWeight: theme.typography.fontWeightRegular,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: '50%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },  
    subheading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color:  "#0000008A",
    marginLeft: '359px'
  }

  }));

export const LmSingleAccordion = ({ children, onChange, link }) => {
    const classes = useStyles();
    const [assist, setAsssist] = React.useState('');

  const handleChange = (event) => {
    setAsssist(event.target.value);
  };
  return (
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography className={classes.heading}>Automation</Typography>

      <Typography className={classes.subheading}>The Flamingo automation suite</Typography>
    </AccordionSummary>
    <AccordionDetails>

    <FormControl variant="filled" color="primary" className={classes.formControl}>
        <InputLabel>Choose Asistant</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={assist}
          onChange={handleChange}
         
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Flamingo</MenuItem>
          <MenuItem value={20}>IGI Virtual SME</MenuItem>
       
        </Select>
      </FormControl>
    
    </AccordionDetails>
  </Accordion>
  );
};
