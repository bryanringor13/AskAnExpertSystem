/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

export const LmLink = ( {label, children, ...props}) => {
  
  return (
    <Link
      component="button"
      variant="body2"
      color="primary"
      onClick={() => {
        console.info("I'm a button.");
      }}
      {...props}
    >
        { label }
      { children }
    </Link>
  );
}
LmLink.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}