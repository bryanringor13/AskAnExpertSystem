import React, { useState } from "react";
import PropTypes from "prop-types";
import { action } from "@storybook/addon-actions";
import Icon from "@material-ui/core/Icon";
import { Box, Button } from "@material-ui/core";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import "./style.css";
/**
 * Primary UI component for user interaction
 */
export const LmButtonAskTheExpert = ({
  primary,
  backgroundColor,
  size,
  label,
  variant,
  children,
  onClick,
  ...props
}) => {
  const mode = primary ? "storybook-button--LmButton" : "storybook-button";
  const [isShown, setIsShown] = useState(false);

  return (
    <Button
      type="button"
      // className={['storybook-button', `storybook-button--${size}`, `storybook-button-${variant}`, mode].join(' ')}
      className="jss238"
      style={backgroundColor && { backgroundColor }}
      {...props}
      onClick={onClick}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {/* { children }
      {<ContactSupportOutlinedIcon />}
      {'ASK THE EXPERTS'} */}

      <Icon className="jss239">
        <QuestionAnswerOutlinedIcon />
      </Icon>
      {/* {label} */}
      {children}
      {isShown && (
        <Box direction="row" style={{ color: "#ffffff" }}>
          ASK THE EXPERTS
        </Box>
      )}
    </Button>
  );
};
LmButtonAskTheExpert.propTypes = {
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
  size: PropTypes.oneOf(["small", "medium", "large"]),
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
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
};

LmButtonAskTheExpert.defaultProps = {
  backgroundColor: null,
  primary: true,
  size: "large",
  onClick: undefined,
  variant: "contained",
};
