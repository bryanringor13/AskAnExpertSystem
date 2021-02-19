import React from 'react';
import PropTypes from 'prop-types';
import './LmButton.css';
import { action } from '@storybook/addon-actions';

/**
 * Primary UI component for user interaction
 */
export const LmButton = ({ primary, secondary, backgroundColor, size, label, variant, children, disabled, ...props }) => {
  const mode = primary ? 'storybook-button--LmButton' : 'storybook-button';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, `storybook-button-${variant}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      { children }
      {label}
    </button>
  );
};
LmButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  secondary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * outlined or not
   */
  variant: PropTypes.oneOf(['contained','outlined','text']),
};

LmButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  secondary: false,
  default: false,
  size: 'large',
  onClick: undefined,
  variant: 'contained'
};

