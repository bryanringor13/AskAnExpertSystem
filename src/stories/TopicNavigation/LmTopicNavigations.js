import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { TextareaAutosize } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import { SubTopicSelection } from "../SubTopicSelection/SubTopicSelection";

export const LmTopicNavigations = ({  children, anchor, open, useStyles, onClick, onClose, onOpen,className,headCells,key,align,padding,sortDirection,headCell,active,direction,heading,handleChange,expanded1,TransitionComponent1,gilad,antoine,jason,...props }) => {
  const mode = heading ? 'storybook-accordian--heading' : 'storybook-accordian--secondary';
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    open: false,
  });

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
  // const { onRequestSort } = props;
  // const createSortHandler = (property => (event) => {
  //   onRequestSort(event, property);
  // });

  

  return (
    <div>
      {(['right']).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{fontWeight: '500', lineHeight: '1.75', fontSize: '16px', letterSpacing: '0.02857em'}} onClick={toggleDrawer(anchor, TextareaAutosize)}>{children}</Button>
         
          <Drawer anchor={anchor} open={state[anchor]} style={{zIndex: 1600 }}>
          <div 
      // className={clsx(classes.list, {
      //   [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      // })}
      style={{marginBottom: '250px', width: '400px'}}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
       <Typography style={{fontSize: '25px', marginBottom: '30px', marginTop: '20px', marginLeft: '15px'}}>Filter by Topic<IconButton  onClick={toggleDrawer(anchor, false)} aria-label="close" style={{marginLeft: '180px'}}>
          <ClearIcon fontSize="small" />
        </IconButton></Typography> 
        <div style={{height: '350px', overflow: 'scroll'}}>
      <SubTopicSelection></SubTopicSelection>
     </div>
      </div>
    </div>
    <div style={{marginLeft: '20px'}}>
    <Switch onChange={handleChange} name="checkedA"  label="Secondary"/>
    <Button variant="contained" color="secondary" style={{marginLeft: '170px'}}>
  APPLY FILTER
</Button>
    </div>
    <Typography style={{marginLeft: '30px'}}>My cards only</Typography>
          </Drawer>
        
        </React.Fragment>
      ))}
    </div>
  );
}
