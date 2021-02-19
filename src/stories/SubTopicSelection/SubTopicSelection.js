import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}
export const SubTopicSelection = ({  children, anchor, open, useStyles, onClick, onClose, onOpen,className,headCells,key,align,padding,sortDirection,headCell,active,direction,heading,handleChange,expanded1,TransitionComponent1,gilad,antoine,jason,...props }) => {
    const mode = heading ? 'storybook-accordian--heading' : 'storybook-accordian--secondary';
    // const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2,]);
  const [right, setRight] = React.useState([0, 1, 2, 3]);
  const [up, setUp] = React.useState([0]);
  const [down, setDown] = React.useState([0, 1]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items ) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

 

  const customList = (title, items ) => (
    <Card>
      <CardHeader
        // className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
            disabled={items.length === 0}
            inputProps={{ 'aria-label': 'all items selected' }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List  dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-all-item--label`;

          return (
           
            <ListItem  role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  
                />
             
               
              </ListItemIcon>
             
            </ListItem>
             
          );
        })}
      
       
      </List>
    </Card>
  );
    return (
        <div style={{width: '400px'}}>
<Accordion
className={[''].join(' ')}
onChange={handleChange}
expanded={expanded1}
TransitionComponent={TransitionComponent1}
TransitionProps={{ unmountOnExit: true }}

>
     
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1bh-content"
  id="panel1bh-header"
  
>
 <Typography className={['storybook-accordian', 'storybook-accordian--heading' ,mode].join(' ')}>Artificial Intelligence</Typography> 

</AccordionSummary>
<AccordionDetails>
<Grid container spacing={2} justify="center" alignItems="center" >
      <Grid item style={{width: '300px'}}>{customList('Select All', left)}</Grid>
      <Grid >   
          <Typography style={{position:'absolute', top: '54.5%', left: '30%'}}>General</Typography>
          <Typography style={{position:'absolute', top: '68.3%', left: '30%'}}>Types</Typography>
          <Typography style={{position:'absolute', top: '83.3%', left: '30%'}}>Uses</Typography>
          
      </Grid>

    </Grid>
</AccordionDetails>
</Accordion>

<Accordion
className={[''].join(' ')}
onChange={handleChange}
expanded={expanded1}
TransitionComponent={TransitionComponent1}
TransitionProps={{ unmountOnExit: true }}

>
     
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1bh-content"
  id="panel1bh-header"
  
>
 <Typography className={['storybook-accordian', 'storybook-accordian--heading' ,mode].join(' ')}>Culture</Typography> 

</AccordionSummary>
<AccordionDetails>
<Grid container spacing={2} justify="center" alignItems="center" >
      <Grid item style={{width: '300px'}}>{customList('Select All', up)}</Grid>
      <Grid >   
      <Typography style={{position:'absolute', top: '73.5%', left: '30%'}}>Social Committee</Typography>
          
      </Grid>

    </Grid>
</AccordionDetails>
</Accordion>

<Accordion
className={[''].join(' ')}
onChange={handleChange}
expanded={expanded1}
TransitionComponent={TransitionComponent1}
TransitionProps={{ unmountOnExit: true }}

>
     
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1bh-content"
  id="panel1bh-header"
  
>
 <Typography className={['storybook-accordian', 'storybook-accordian--heading' ,mode].join(' ')}>Customer Ops</Typography> 

</AccordionSummary>
<AccordionDetails>
<Grid container spacing={2} justify="center" alignItems="center" >
      <Grid item style={{width: '300px'}}>{customList('Select All', right)}</Grid>
      <Grid >   
      <Typography style={{position:'absolute', top: '44.5%', left: '30%'}}>Darwin Release</Typography>
      <Typography style={{position:'absolute', top: '58.5%', left: '30%'}}>Lamarck Release</Typography>
      <Typography style={{position:'absolute', top: '71.5%', left: '30%'}}>Pre Sales</Typography>
      <Typography style={{position:'absolute', top: '84.5%', left: '30%'}}>Process and Procedure</Typography>
      </Grid>

    </Grid>
</AccordionDetails>
</Accordion>



<Accordion
className={[''].join(' ')}
onChange={handleChange}
expanded={expanded1}
TransitionComponent={TransitionComponent1}
TransitionProps={{ unmountOnExit: true }}

>
     
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1bh-content"
  id="panel1bh-header"
  
>
 <Typography className={['storybook-accordian', 'storybook-accordian--heading' ,mode].join(' ')}>Engineering</Typography> 

</AccordionSummary>
<AccordionDetails>
<Grid container spacing={2} justify="center" alignItems="center" >
      <Grid item style={{width: '300px'}}>{customList('Select All', left)}</Grid>
      <Grid >   
      <Typography style={{position:'absolute', top: '51.9%', left: '30%'}}>Hosting</Typography>
      <Typography style={{position:'absolute', top: '66.5%', left: '30%'}}>Team</Typography>
      <Typography style={{position:'absolute', top: '81.5%', left: '30%'}}>Technology</Typography>
     
          
      </Grid>

    </Grid>
</AccordionDetails>
</Accordion>


<Accordion
className={[''].join(' ')}
onChange={handleChange}
expanded={expanded1}
TransitionComponent={TransitionComponent1}
TransitionProps={{ unmountOnExit: true }}

>
     
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1bh-content"
  id="panel1bh-header"
  
>
 <Typography className={['storybook-accordian', 'storybook-accordian--heading' ,mode].join(' ')}>General</Typography> 

</AccordionSummary>
<AccordionDetails>
<Grid container spacing={2} justify="center" alignItems="center" >
      <Grid item style={{width: '300px'}}>{customList('Select All', down)}</Grid>
      <Grid >   
      <Typography style={{position:'absolute', top: '60.9%', left: '30%'}}>Flamingo</Typography>
      <Typography style={{position:'absolute', top: '78.5%', left: '30%'}}>Onboarding</Typography>
     
          
      </Grid>

    </Grid>
</AccordionDetails>
</Accordion>


<Accordion
className={[''].join(' ')}
onChange={handleChange}
expanded={expanded1}
TransitionComponent={TransitionComponent1}
TransitionProps={{ unmountOnExit: true }}

>
     
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1bh-content"
  id="panel1bh-header"
  
>
 <Typography className={['storybook-accordian', 'storybook-accordian--heading' ,mode].join(' ')}>Machine Learning</Typography> 

</AccordionSummary>
<AccordionDetails>
<Grid container spacing={2} justify="center" alignItems="center" >
      <Grid item style={{width: '300px'}}>{customList('Select All', up)}</Grid>
      <Grid >   
      <Typography style={{position:'absolute', top: '75.9%', left: '30%'}}>Algorithms</Typography>
      
          
      </Grid>

    </Grid>
</AccordionDetails>
</Accordion>



<Accordion
className={[''].join(' ')}
onChange={handleChange}
expanded={expanded1}
TransitionComponent={TransitionComponent1}
TransitionProps={{ unmountOnExit: true }}

>
     
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1bh-content"
  id="panel1bh-header"
  
>
 <Typography className={['storybook-accordian', 'storybook-accordian--heading' ,mode].join(' ')}>Marketing</Typography> 

</AccordionSummary>
<AccordionDetails>
<Grid container spacing={2} justify="center" alignItems="center" >
      <Grid item style={{width: '300px'}}>{customList('Select All', up)}</Grid>
      <Grid >   
      <Typography style={{position:'absolute', top: '73.9%', left: '30%'}}>Assets</Typography>
      
          
      </Grid>

    </Grid>
</AccordionDetails>
</Accordion>


<Accordion
className={[''].join(' ')}
onChange={handleChange}
expanded={expanded1}
TransitionComponent={TransitionComponent1}
TransitionProps={{ unmountOnExit: true }}

>
     
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1bh-content"
  id="panel1bh-header"
  
>
 <Typography className={['storybook-accordian', 'storybook-accordian--heading' ,mode].join(' ')}>Sales</Typography> 

</AccordionSummary>
<AccordionDetails>
<Grid container spacing={2} justify="center" alignItems="center" >
      <Grid item style={{width: '300px'}}>{customList('Select All', down)}</Grid>
      <Grid >   
      <Typography style={{position:'absolute', top: '60.9%', left: '30%'}}>Collateral</Typography>
      <Typography style={{position:'absolute', top: '79.5%', left: '30%'}}>Features</Typography>
          
      </Grid>

    </Grid>
</AccordionDetails>
</Accordion>

<Accordion
className={[''].join(' ')}
onChange={handleChange}
expanded={expanded1}
TransitionComponent={TransitionComponent1}
TransitionProps={{ unmountOnExit: true }}

>
     
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1bh-content"
  id="panel1bh-header"
  
>
 <Typography className={['storybook-accordian', 'storybook-accordian--heading' ,mode].join(' ')}>Security</Typography> 

</AccordionSummary>
<AccordionDetails>
<Grid container spacing={2} justify="center" alignItems="center" >
      <Grid item style={{width: '300px'}}>{customList('Select All', down)}</Grid>
      <Grid >   
          {/* <Typography style={{position:'fixed', top: '29%', left: '47%'}}>General</Typography>
          <Typography>Types</Typography>
          <Typography>Uses</Typography> */}
          
      </Grid>

    </Grid>
</AccordionDetails>
</Accordion>


<Accordion
className={[''].join(' ')}
onChange={handleChange}
expanded={expanded1}
TransitionComponent={TransitionComponent1}
TransitionProps={{ unmountOnExit: true }}

>
     
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1bh-content"
  id="panel1bh-header"
  
>
 <Typography className={['storybook-accordian', 'storybook-accordian--heading' ,mode].join(' ')}>UX</Typography> 

</AccordionSummary>
<AccordionDetails>
<Grid container spacing={2} justify="center" alignItems="center" >
      <Grid item style={{width: '300px'}}>{customList('Select All', left)}</Grid>
      <Grid >   
      <Typography style={{position:'absolute', top: '51.9%', left: '30%'}}>Feedback</Typography>
      <Typography style={{position:'absolute', top: '66.5%', left: '30%'}}>UI</Typography>
      <Typography style={{position:'absolute', top: '81.7%', left: '30%'}}>Usability Testing</Typography>
          
          
      </Grid>

    </Grid>
</AccordionDetails>
</Accordion>
</div>
);
}
