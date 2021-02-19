import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { Box, Button } from '@material-ui/core';
import './LmCreateCardButton.css';
import { action } from '@storybook/addon-actions';
import { IconButton } from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';
import './LmCreateCardButton.css';


import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

export const LmCreateCardButton = ({ children, primary, backgroundColor, size, label, ...props }) => {

  const mode = primary ? 'storybook-button--LmCreateCardButton' : 'storybook-button';
  
  const [isShown, setIsShown] = useState(false);

  return (
    <Button
      type="button"
      className="jss238"
      style={backgroundColor && { backgroundColor }}
      {...props}
      onClick={action('onClick')}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <AddIcon className="jss239" />
        {/* {label} */}
       
        {isShown && (
          <Box direction="row" ml={1}>
            { children }
          </Box>
        )}
    </Button>
  );
};

LmCreateCardButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

 
