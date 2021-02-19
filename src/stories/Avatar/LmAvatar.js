import React from "react";
import PropTypes from "prop-types";

import { Avatar } from "@material-ui/core";

/**
 * Primary UI component for Avatar from Materials-UI
 */

export const LmAvatar = ({
  variant,
  alt,
  src,
  size,
  color,
  shape,
  char1,
  backgroundColor,
  ...props
}) => {
  // you can add constants here
  return (
    <Avatar
      className={[`classes.${size}`, `classes.${color}`].join(" ")}
      variant={variant}
      alt={alt}
      src={src}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {char1}sdf
    </Avatar>
  );
};

// This area goes to docummentation
LmAvatar.propTypes = {
  /**
   * Alt message for the image / avatar
   */
  alt: PropTypes.string,
  /**
   * TextField contents
   */
  src: PropTypes.string.isRequired,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What size to use for the avatar?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * What variants are available?
   */
  variant: PropTypes.oneOf(["round", "square"]),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Character if Character Avatar
   */
  char1: PropTypes.string,
};

LmAvatar.defaultProps = {
  backgroundColor: null,
  src: "https://www.thispersondoesnotexist.com/image",
  size: "medium",

  onClick: undefined,
  char1: "",
};
