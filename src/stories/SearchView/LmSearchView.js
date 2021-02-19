import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ViewStreamSharpIcon from '@material-ui/icons/ViewStreamSharp';
import ViewModuleSharpIcon from '@material-ui/icons/ViewModuleSharp';
import ViewQuiltSharpIcon from '@material-ui/icons/ViewQuiltSharp';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import Radio from '@material-ui/core/Radio';

export const LmSearchView = ({ id, variant, color, endIcon, style, label, edge, size, chars1, keepMounted, open,onClick,primary,handleChange,selectedValue,handleSubmit,handleSort,cards = [],...props }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 
      return ( 
       <div>
        <Typography variant="caption" style={{color: '#7E7E7E', marginRight: '10px', fontStyle: 'italic'}} >
        {cards.length} cards found
      </Typography>
       <IconButton value="12" size="small" onClick={handleSubmit}>
              <ViewStreamSharpIcon />
            </IconButton>
            <IconButton size="small" value="4"  onClick={handleSubmit}>
      
              <ViewModuleSharpIcon/>
            </IconButton>
            <IconButton size="small" value="3"  onClick={handleSubmit}>
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
                  <ListItemText title="mostView" primary="Most Views" style={{marginTop: '10px'}} onClick={handleSort} />
                </ListItemIcon></MenuItem>
              <MenuItem onClick={handleClose}><ListItemIcon>
              <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      
      />
                  <ListItemText title="leastView" primary="Least Views"  style={{marginTop: '10px'}} onClick={handleSort}/>
                </ListItemIcon></MenuItem>
              <MenuItem onClick={handleClose}><ListItemIcon>
              <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      
      />
                  <ListItemText title="newestFirst" primary="Newest First"  style={{marginTop: '10px'}} onClick={handleSort}/>
                </ListItemIcon>
               
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <ListItemIcon>
                <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      
      />
                  <ListItemText title="oldestFirst" primary="Oldest First"  style={{marginTop: '10px'}} onClick={handleSort}/>
                </ListItemIcon></MenuItem>
            </Menu> 
          
  </div>
              );
            };
          
