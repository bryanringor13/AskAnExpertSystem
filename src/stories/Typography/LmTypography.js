import React from 'react';
import PropTypes from 'prop-types';
import './LmTypography.css';
import { Typography} from '@material-ui/core';

/**
 * Primary UI component for TextField
 */

export const LmTypography = ({ primary, backgroundColor, size, label, variant, children, chars1, ...props }) => {
  const mode = variant ? 'storybook-typography--h1' : 'storybook-typography--subtitle1';
  return (
    <Typography 
      type = "text" 
      className={[`storybook-typography--${variant}`, mode].join(' ')} 
      label={label} 
      style={backgroundColor && {backgroundColor}} 
      variant={variant} 
      {...props}
    >{chars1} { children }
    </Typography>
  );
};

// This area goes to docummentation
LmTypography.propTypes = {
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
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline']),
  /**
   * TextField contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,

};

LmTypography.defaultProps = {
  backgroundColor: null,
  size: 'small',
  variant: 'subtitle1',
  chars1: '',
  onClick: undefined,
};