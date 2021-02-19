import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import "./style.css";
const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

//   function valuetext(value) {
//     return `${value} hrs`;
//   }

export const RequestHandlingTime = ({ children, onChange }) => {
  const [values, setValues] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setValues(newValue);
  };
  const handleInputChange = (event) => {
    setValues(event.target.value === "" ? "" : event.target.value);
  };
  const handleBlur = () => {
    if (values < 0) {
      setValues(0);
    } else if (values > 100) {
      setValues(100);
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Set your request handling time
      </Typography>
      {/* <div className="outputText">
      {values.content}
          </div> */}

      <Input
        className="outputText"
        value={`${values} hrs`}
        margin="dense"
        onChange={handleInputChange}
        onBlur={handleBlur}
        inputProps={{
          step: 10,
          min: 0,
          max: 100,
          type: "text",
          "aria-labelledby": "input-slider",
        }}
      ></Input>

      <Slider
        value={typeof values === "number" ? values : 0}
        aria-labelledby="discrete-slider"
        onChange={handleSliderChange}
        marks
      />
    </div>
  );
};
