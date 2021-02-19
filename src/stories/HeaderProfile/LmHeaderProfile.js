import React from 'react';
import PropTypes from 'prop-types';
import './LmHeaderProfile.css';

import { LmAvatar } from '../Avatar/LmAvatar';

//import { LmButton } from '../components/LmButton';

import { LmTypographyGrey } from '../TypographyGrey/LmTypographyGrey';

import { Card } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';

// loading activation gray out as it is loading
// Hover not yet implemented

/**
 * Primary UI component for user interaction
 */
export const LmHeaderProfile = ({ 
  backgroundColor, 
  alt,
  src,
  size,
  overlap1, 
  startIcon,
  chars1, 
  variant, 
  ...props }) => {
  return ([

    <Card
    >
      <CardHeader
        avatar={
        <LmAvatar
          src={src}
          alt={alt}
          variant={variant}
          size={size}
        >
        </LmAvatar>
        }
      
        title={
          <LmTypographyGrey
            chars1={chars1}
          >
          </LmTypographyGrey>
        }
      >
      </CardHeader>
    </Card>
  ]);
};

LmHeaderProfile.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Square, Rounded, Circle avatar
   */
  variant: PropTypes.oneOf(['circle','rounded', 'square']),
  /**
   * Source image
   */
  src: PropTypes.string,
  /**
   * badgeContent contents in number
   */
  badgeContent: PropTypes.string,
  /***
   * Overlap
   */
  overlap: PropTypes.oneOf([null, 'circle']),
  /**
   * Loading
   */
  loading: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

LmHeaderProfile.defaultProps = {
  backgroundColor: null,
  src: 'https://www.thispersondoesnotexist.com/image',
  variant: 'circle',
  alt: 'Avatar',
  chars1: 'Billy Bo',
  size: 'medium',
  onClick: undefined,
};
