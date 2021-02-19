import React from 'react';
import PropTypes from 'prop-types';
import './LmUserInfo.css';

import { LmAvatar } from '../Avatar/LmAvatar';

//import { LmButton } from '../components/LmButton';

import { LmTypographyGrey } from '../TypographyGrey/LmTypographyGrey';

import { LmBadge } from '../Badge/LmBadge';

import { Card } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';

import { Grid } from "@material-ui/core";
import { Box } from '@material-ui/core/';

// loading activation gray out as it is loading
// Hover not yet implemented

/**
 * Primary UI component for user interaction
 */
export const LmUserInfo = ({ 
  backgroundColor, 
  alt,
  src,
  size,
  corlo,
  overlap1, 
  startIcon,
  chars1,
  updates,
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
          <>
          <Grid 
            container
            direction='row'
          >
            <LmTypographyGrey chars1={chars1} />
            <Box
              borderRadius="borderRadius"
              bgcolor='{color}'
              className='leftMargin'

            >
              <LmTypographyGrey chars1={updates} />
            </Box>
          </Grid>
          </>
        }

        subheader={
          <>
            <LmTypographyGrey
              chars1={subtitle}
              size="small"
              variant="caption"
            >
            </LmTypographyGrey>

          </>
        }
      >
      </CardHeader>
    </Card>
  ]);
};

LmUserInfo.propTypes = {
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

LmUserInfo.defaultProps = {
  backgroundColor: null,
  src: 'https://www.thispersondoesnotexist.com/image',
  variant: 'circle',
  alt: 'Avatar',
  chars1: 'Billy Bo',
  subtitle: 'Adventurer',
  updates: 'Updated 1 min(s) ago',
  size: 'medium',
  onClick: undefined,
};
