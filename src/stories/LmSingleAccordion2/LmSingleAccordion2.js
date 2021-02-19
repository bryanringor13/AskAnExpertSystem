import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    subheading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      color:  "#0000008A",
      marginLeft: '423px'
    }
  }));
  

export const LmSingleAccordion2 = ({ children, onChange, link }) => {
    const classes = useStyles();
  return (
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography className={classes.heading}>AI</Typography>
      <Typography className={classes.subheading}>The Flamingo AI suite</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <div style={{marginLeft: '50px'}}>
    <TextField label="Gini Threshold"  defaultValue="0.2" variant="filled" />
    </div>
    <div style={{marginLeft: '15px'}}>
    <TextField label="Confounding Threshold" id="filled-size-normal" defaultValue="0.2" variant="filled" />
    </div>
    </AccordionDetails>
  </Accordion>
  );
};
