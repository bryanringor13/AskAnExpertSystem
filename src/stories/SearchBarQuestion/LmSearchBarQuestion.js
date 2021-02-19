import {
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Paper,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import SubdirectoryArrowLeftIcon from "@material-ui/icons/SubdirectoryArrowLeft";
import React from "react";
import "../SearchBarQuestion/style.css";
import { related_dum_data } from "./constants/related.data";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export const LmSearchBarQuestion = ({
  placeholder,
  orientation,
  endIcon,
  primary,
  isSubmit,
  onClick,
  ...props
}) => {
  const [openFilter, setOpenFilter] = React.useState(false);
  const [close, setClose] = React.useState(true);
  const [input, setInput] = React.useState("");
  const [relatedData, setRelated] = React.useState(related_dum_data);

  const openTopic = () => {
    console.log("Open Navigation");
    setOpenFilter(true);
  };

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      setClose(false);
    }
  };

  return (
    <FormControl
      variant="outlined"
      className="MuiTextField-root MuiFormControl-fullWidth"
    >
      <OutlinedInput
        onKeyDown={keyPress}
        value={input}
        onChange={(evt) => setInput(evt.target.value)}
        color="primary"
        autoFocus={true}
        startAdornment={
          <InputAdornment
            position="start"
            className="MuiOutlinedInput-inputAdornedStart MuiOutlinedInput-inputAdornedEnd"
          ></InputAdornment>
        }
        fullWidth
        placeholder="What's your question"
        endAdornment={
          <InputAdornment
            position="end"
            className="MuiOutlinedInput-inputAdornedStart MuiOutlinedInput-inputAdornedEnd"
          >
            <Button onClick={() => setClose(false)}>
              {isSubmit ? (
                <CircularProgress color="primary" />
              ) : (
                <SubdirectoryArrowLeftIcon color="primary" />
              )}
            </Button>
          </InputAdornment>
        }
      ></OutlinedInput>

      {!close ? (
        <div>
          <Paper>
            <div class="border d-table w-100">
              <h3 style={{ paddingLeft: "17px", fontSize: "small" }}>
                There are potential answer cards for your question
              </h3>
              <div class="d-table-cell tar">
                <IconButton onClick={() => setClose(true)}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
          </Paper>
          {relatedData.map((card_content) => (
            <Grid item xs={12} lg={12} key={card_content.id}>
              <Paper>
                <Grid container spacing={2}>
                  <Grid item></Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography
                          variant="body2"
                          gutterBottom
                          style={{ padding: "10px 0px 10px 1px" }}
                        >
                          {card_content.description}
                        </Typography>

                        <div class="border d-table w-100">
                          <div className="jss171">
                            <div className="jss115">
                              <div
                                className="jss167"
                                data-automation-key="ui-topic-subtopic-topic"
                                data-automation-value="customer-ops"
                              >
                                Artificial Inteligence
                              </div>
                              <span className="jss172">&gt;</span>
                              <div
                                className="jss169"
                                data-automation-key="ui-topic-subtopic-subtopic"
                                data-automation-value="pre-sales"
                              >
                                Process & Procedure
                              </div>
                            </div>
                          </div>

                          <div class="d-table-cell tar">
                            <IconButton
                              // onClick={() => onClick()}
                              target="_blank"
                            >
                              <ArrowForwardIosIcon color="primary" />
                            </IconButton>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </div>
      ) : (
        ""
      )}
    </FormControl>
  );
};
