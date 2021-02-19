import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
export const RequestFieldText = ({ onChange, onClick }) => {
  const [values, setValues] = React.useState({
    content: "",
    charLimit: 280,
  });
  const test = (e) => {
    onClick(e);
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div>
      <form>
        <TextField
          className="textFieldStyle"
          id="outlined-multiline-static"
          multiline={true}
          rows={4}
          variant="outlined"
          value={values.content}
          onChange={handleChange("content")}
          name="content"
          label="What would you like to ask?"
          error={values.content.length > values.charLimit ? true : false}
        />

        <div
          className="charStyle"
          style={{
            color:
              values.content.length > values.charLimit ? "#f44336" : "#000000",
          }}
        >
          {values.content.length}/{values.charLimit} characters
        </div>

        <Button
          className="sendButton"
          variant="contained"
          color="primary"
          onClick={() => test(values.content)}
          disabled={values.content.length > values.charLimit ? true : false}
        >
          Send
        </Button>
      </form>
    </div>
  );
};
