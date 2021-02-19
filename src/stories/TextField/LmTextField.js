import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';

/**
 * Primary UI component for TextField
 */

export const LmTextField = ({ multiline, children, primary, backgroundColor, size, label, variant, fullWidth, onChange, error, disabled, value, ...props }) => {
  const mode = primary ? 'storybook-textfield--primary' : 'storybook-textfield--secondary'
  return (
    <TextField 
      type = "text" 
      className={['storybook-textfield', `storybook-textfield--${size}`, mode].join(' ')} 
      label={label} 
      style={backgroundColor && {backgroundColor}} 
      variant={variant} 
      fullWidth={true}
      multiline={false}
      {...props}
    >
      { children }
    </TextField>
  );
};

export default LmTextField;

// This area goes to docummentation
LmTextField.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What size to use for the textfield?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * What variants are available?
   */
  variant: PropTypes.oneOf(['standard', 'filled', 'outlined']),
  /**
   * TextField contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,

};

LmTextField.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
  fullWidth: true,
  multiline: false
  
};