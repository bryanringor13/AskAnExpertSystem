import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { TextareaAutosize } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { LmButton } from '../LmButton/LmButton';
import { LmTypographyGrey } from '../TypographyGrey/LmTypographyGrey';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export const LmSubTopicNavigations = ({children}) =>  {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    open: false,
  });

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const toggleDrawer = (anchor, open) => 
  event => {
  if (
    event.type === 'keydown' &&
    ((event).key === 'Tab' ||
      (event).key === 'Shift')
  ) {
    return;
  }

  setState({ ...state, [anchor]: open });
};
  return (
    <div className={classes.root}>
        <div>
      {(['right']).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{fontWeight: '500', lineHeight: '1.75', fontSize: '16px', letterSpacing: '0.02857em'}} onClick={toggleDrawer(anchor, TextareaAutosize)}>
            {children}
          </Button>
         
          <Drawer anchor={anchor} open={state[anchor]}>
          <div 
      // className={clsx(classes.list, {
      //   [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      // })}
      style={{width: '400px'}}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
       <Typography style={{fontSize: '25px', marginBottom: '30px', marginTop: '20px', marginLeft: '15px'}}>Filter by Topic<IconButton  onClick={toggleDrawer(anchor, false)} aria-label="close" style={{marginLeft: '180px'}}>
          <ClearIcon fontSize="small" />
        </IconButton></Typography> 
      

      </div>
      <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Accordion off</Typography>
          {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Accordion off</Typography>
          {/* <Typography className={classes.secondaryHeading}>
            You are currently not an owner
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
            diam eros in elit. Pellentesque convallis laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Accordion off</Typography>
          {/* <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Accordion off</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>    
    </div>
    
    <div>
    <Box margin={2}>
    <Grid container direction="column" spacing={2}>
        <Grid item container justify="flex-start">
            <LmButton variant="outlined" color="default">
                Label-off
            </LmButton>
        </Grid>
        <Grid item container justify="flex-start">
            <LmButton variant="outlined" color="default">
                Label-off
            </LmButton>
        </Grid>
        <Grid item container justify="flex-start">
            <LmButton variant="outlined" backgroundColor="blue">
                <LmTypographyGrey>Selected</LmTypographyGrey>
            </LmButton>
        </Grid>
        <Grid item container justify="flex-start">
            <LmButton variant="outlined" color="default">
                Label-off
            </LmButton>
        </Grid>
    </Grid>
    
    <Grid container justify="space-between">
        <Grid item container
        justify="flex-start"/>
        <Grid item container
        justify="flex-end">
            <LmButton primary="true" size="small">Done</LmButton>
        </Grid>
    </Grid>
    </Box>
    </div>
   
          </Drawer>
          
        </React.Fragment>
      ))}
      
    </div>
      
    </div>
  );
}
