import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import IconButton from '@material-ui/core/IconButton';
import ViewStreamSharpIcon from '@material-ui/icons/ViewStreamSharp';
import ViewModuleSharpIcon from '@material-ui/icons/ViewModuleSharp';
import ViewQuiltSharpIcon from '@material-ui/icons/ViewQuiltSharp';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import Radio from '@material-ui/core/Radio';

export const LmActionBars = ({  variant,
   color,
   endIcon,
   style,
   label,
   edge,
   size,
   chars1,
   keepMounted,
   open,
   onClick,
   handleChange,
   selectedValue,
   ...props }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 
    return ( 
    
  <div style={{display: 'flex', padding: '15px', backgroundColor: '#ffffff', alignItems: 'center', borderRadius: '4px', flexDirection: 'row'}}>
    <FormControlLabel
        control={
          <Checkbox
            // checked={state.checkedF}
            onChange={handleChange}
            name="checkedF"
            indeterminate
          />
        }
        // label="Indeterminate"
      />
      <Typography variant="caption" style={{color: '#7E7E7E', marginRight: '950px'}} >
  29 cards selected
</Typography>
        <Button
        variant="contained"
        style={{backgroundColor: '#F2F2F4', textTransform: 'none', fontSize: '14px', fontWeight: '400', letterSpacing: '0.5px', color: '#363e53', marginRight: '8px' }}
        endIcon={<ArrowRightAltIcon color="primary"/>}
      >
        Move cards
      </Button>

<Button
variant="contained"
style={{backgroundColor: '#F2F2F4', textTransform: 'none', fontSize: '14px', fontWeight: '400', letterSpacing: '0.5px', color: '#363e53', marginRight: '8px' }}
endIcon={<ClearSharpIcon color="primary"/>}
>
Delete
</Button>

{/* <div style={{borderStyle: 'solid', borderColor: '#f50057'}}> */}
{/* <IconButton color="secondary" size="small" style={{ marginRight: '10px'}}>
        <RemoveIcon />
      </IconButton> */}
        
{/* <Typography variant="caption" style={{color: '#7E7E7E', marginRight: '10px', fontStyle: 'italic'}} >
        30 cards found
      </Typography>
       <IconButton size="small">
              <ViewStreamSharpIcon />
            </IconButton>
            <IconButton size="small">
      
              <ViewModuleSharpIcon/>
            </IconButton>
            <IconButton size="small">
              <ViewQuiltSharpIcon />
             
            </IconButton>
      
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{fontSize:'16px'}}>
        Sort
        <UnfoldMoreIcon/>
      </Button>
      <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      
      />
                  <ListItemText primary="Most Views" style={{marginTop: '10px'}} />
                </ListItemIcon></MenuItem>
              <MenuItem onClick={handleClose}><ListItemIcon>
              <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      
      />
                  <ListItemText primary="Least Views"  style={{marginTop: '10px'}}/>
                </ListItemIcon></MenuItem>
              <MenuItem onClick={handleClose}><ListItemIcon>
              <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      
      />
                  <ListItemText primary="Newest First"  style={{marginTop: '10px'}}/>
                </ListItemIcon>
               
                </MenuItem> */}
                {/* <MenuItem onClick={handleClose}>
                <ListItemIcon>
                <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      
      />
                  <ListItemText primary="Oldest First"  style={{marginTop: '10px'}}/>
                </ListItemIcon></MenuItem>
            </Menu>  */}
      </div>

// </div>
  
    );
  };
