import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';



export const LmSelectTopicButton = ({  children, variant, color, endIcon, style,label,  ...props }) => {
    return ( 
        // <div style={{display: 'flex', backgroundColor: '#ffffff', alignItems: 'center', borderRadius: '4px', flexDirection: 'row'}}>
        <Button
        variant="contained"
        // style={{backgroundColor: '#F2F2F4', textTransform: 'none', fontSize: '6px', fontWeight: '400', letterSpacing: '0.5px', color: '#363e53'}}
        endIcon={<ArrowRightAltIcon color="secondary"/>}
      >
       {label}
       {children}
      </Button>
  
// </div>
 

    );
  };