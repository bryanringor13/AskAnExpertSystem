import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';



export const LmGhostButton = ({  variant, color, endIcon, style,  ...props }) => {
    return ( 
        <div style={{display: 'flex', padding: '15px', backgroundColor: '#ffffff', alignItems: 'center', borderRadius: '4px', flexDirection: 'row', width: '100px',
        height: '100px'}}>
        <Button
        variant="contained"
        style={{backgroundColor: '#F2F2F4', textTransform: 'none', fontSize: '14px', fontWeight: '400', letterSpacing: '0.5px', color: '#363e53'}}
        endIcon={<ArrowRightAltIcon color="secondary"/>}
      >
        Move
      </Button>
  
</div>
 

    );
  };