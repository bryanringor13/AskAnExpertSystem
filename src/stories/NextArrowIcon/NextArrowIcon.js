import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { LmTypographyGrey } from '../TypographyGrey/LmTypographyGrey';

export const NextArrowIcon = ({ onChange }) => {
    return (
        <div style={{display: 'flex'}}>
<IconButton>
                  <ArrowForwardIosIcon fontSize="small" color="secondary" /> 
    </IconButton>
    <LmTypographyGrey
            chars1='Next'
            size="large"
            variant="body2"
            style={{marginTop: '13px', marginLeft: '0px'}}
          >
          </LmTypographyGrey>
    </div>
        );
    }