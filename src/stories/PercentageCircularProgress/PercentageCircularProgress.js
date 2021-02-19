import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./style.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";

function CircularProgressWithLabel(props) {
  const useStylesFacebook = makeStyles((theme) => ({
    root: {
      position: "relative",
    },
    bottom: {
      color: "#9481b5",
    },
    top: {
      animationDuration: "550ms",
      position: "absolute",
      left: 0,
    },
  }));

  const classes = useStylesFacebook();

  return (
    <Box position="relative" display="inline-flex">
      <div className={classes.root}>
        <CircularProgress
          variant="static"
          className={classes.bottom}
          size={150}
          thickness={4}
          value={100}
          style={{ color: "#9481b5" }}
        />
        <CircularProgress
          variant="static"
          color="secondary"
          disableShrink
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
          size={150}
          thickness={4}
          value={props.value}
        />
      </div>

      {/* <CircularProgress
        variant="static"
        color="secondary"
        // size={250}
        {...props}
      /> */}
      <Box
        top={10}
        left={10}
        bottom={10}
        right={10}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexBasis="row"
      >
        {
          <div>
            <p className="prnt">{Math.round(props.value)}%</p>
            <p className="prnt-text">closed in less than 24 hrs</p>
          </div>
        }
        <Typography className="textInsideCircle"></Typography>
      </Box>
    </Box>
  );
}
CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export const PercentageCircularProgress = () => {
  const [progress, setProgress] = React.useState(10);

  return <CircularProgressWithLabel value={56} />;
};
