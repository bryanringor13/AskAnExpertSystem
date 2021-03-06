import React from 'react';
import PropTypes from 'prop-types';
import './LmAuthorInfo.css';

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
export const LmAuthorInfo = ({ 
  backgroundColor, 
  alt,
  src,
  size,
  overlap1, 
  startIcon,
  chars1,
  subtitle,
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
        subheader={
          <LmTypographyGrey
            chars1={subtitle}
            size="small"
            variant="caption"
          >
          </LmTypographyGrey>
        }
      >
      </CardHeader>
    </Card>
  ]);
};

LmAuthorInfo.propTypes = {
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
   * Size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

LmAuthorInfo.defaultProps = {
  backgroundColor: null,
  src: 'https://www.thispersondoesnotexist.com/image',
  variant: 'circle',
  alt: 'Avatar',
  chars1: 'Billy Bo',
  subtitle: 'Away from keyboard...',
  size: 'medium',
  onClick: undefined,
};
