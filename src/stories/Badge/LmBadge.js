import React from 'react';
import PropTypes from 'prop-types';
import './LmBadge.css';

import { Badge } from '@material-ui/core';

/**
 * Primary UI component for user interaction
 */
export const LmBadge = ({ backgroundColor, color1,  badgeContent1, shape1, max1, overlap1, variant1, tagText, ...props }) => {
  return (
    <Badge
      className={[''].join(' ')}
      color={color1}
      badgeContent={badgeContent1}
      style={backgroundColor && { backgroundColor }}
      max={max1}
      overlap={overlap1}  
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      variant={variant1}
      {...props}
    >{tagText}</Badge>
  );
};

LmBadge.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Dot or not dot badge?
   */
  variant: PropTypes.oneOf(['','dot']),
  /**
   * Color
   */
  color: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Max size in number, maximum to use X+
   */
  max: PropTypes.number,
  /**
   * badgeContent contents in number
   */
  badgeContent: PropTypes.string,
  /***
   * Overlap
   */
  overlap: PropTypes.oneOf([null, 'circle']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

LmBadge.defaultProps = {
  backgroundColor: null,
  badgeContent: 100,
  color: 'secondary',
  onClick: undefined,
};
