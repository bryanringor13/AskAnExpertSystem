import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { action } from "@storybook/addon-actions";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { LmInfoAlert } from "../LmInfoAlert/LmInfoAlert";
import { LmSingleAccordion } from "../LmSingleAccordion/LmSingleAccordion";

/**
 * Primary UI component for user interaction
 */
export const LmButtonDropdown = ({
  primary,
  secondary,
  backgroundColor,
  size,
  label,
  variant,
  label1,
  label2,
  label3,
  cancel,
  widthProps,
  publishedClicked,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--LmButtonDropdown"
    : "storybook-button";

  const [isClicked, setIsClicked] = React.useState(false);

  const publishedClick = () => {
    setIsClicked(isClicked ? false : true);
  };
  return (
    <div className="btn-container">
      <Grid
        container
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        spacing={0}
      >
        <Grid item xs={3}>
          <Paper>
        
            <button className="btn-cancel" onClick={cancel}>
              {label3}
            </button>
 
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <div>
            <button
              type="button"
              className="btn-dropdown"
              style={backgroundColor && { backgroundColor }}
              style={{ width: widthProps }}
              {...props}
              onClick={publishedClicked}
            >
              <div>
                <span id="left-children"> {label1}</span>
                <span id="right-children">
                  <ExpandMoreOutlinedIcon />
                </span>
              </div>
            </button>
          </div>

          <div>
            {isClicked ? (
              <button
                type="button"
                className="btn-dropdown child"
                style={backgroundColor && { backgroundColor }}
                {...props}
                onClick={() => setIsClicked(false)}
              >
                <div>{label2}</div>
              </button>
            ) : null}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
LmButtonDropdown.propTypes = {
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

LmButtonDropdown.defaultProps = {
  backgroundColor: null,
  primary: false,
  secondary: false,
  default: false,
  size: "large",
  onClick: undefined,
  variant: "contained",
};
