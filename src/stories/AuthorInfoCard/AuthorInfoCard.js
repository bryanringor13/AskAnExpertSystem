import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { AuthorWithMainSubTopic } from "../AuthorInfoWithMainSubTopic/AuthorWithMainSubTopic";
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import { LmAvatar } from '../Avatar/LmAvatar';
import { articles } from '../../modules/main_dashboard/components/MyRequests/components/constants/dummy_data';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { LmMainTopicAndSubTopic } from '../LmMainTopicAndSubTopic/LmMainTopicAndSubTopic';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import "./style.css";
const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width: '70%',


    },
  }));

  const Article = ({userName, salutation, content1, content2, content3, content4, content5}) => {
    return (
        <div>
      <div className="jss110">
        <div className="jss155 jss113">
          <div className="jss156">
            <div>
              <LmAvatar alt="Bilbo Baggins" className="jss162" />
            </div>
          </div>
          <div className="jss157">
            <div className="name">
              {/* <span className="jss128 jss147 jss164 jss153">{dateFormat(dateTimeStamp)}</span> */}
              <span id="name">{userName}</span>
              &nbsp;
              <span className="jss128 jss147 jss164 jss153">2d</span>
            </div>
            <div>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ width: "100px", fontSize: "smaller" }}
            
              >
                {salutation}
              </Typography>
            </div>
          </div>
        </div>

        <div className="jss114">
          <Tooltip title="Views">
            <div className="jss118">
              <VisibilityOutlinedIcon className="jss117" />
              {/* <span className="jss128 jss147 jss164 jss153">{numberConvert(views)}</span> */}
              <span className="jss128 jss147 jss164 jss153">12</span>
            </div>
          </Tooltip>
          <Tooltip title="Views">
            <div className="jss118">
              <ContactSupportOutlinedIcon className="jss117" />
              {/* <span className="jss128 jss147 jss164 jss153">{numberConvert(views)}</span> */}
              <span className="jss128 jss147 jss164 jss153">10</span>
            </div>
          </Tooltip>
          <Tooltip title="Views">
            <div className="jss118">
              <BarChartOutlinedIcon className="jss117" />
              {/* <span className="jss128 jss147 jss164 jss153">{numberConvert(views)}</span> */}
              <span className="jss128 jss147 jss164 jss153">26</span>
            </div>
          </Tooltip>
        </div>
        <LmMainTopicAndSubTopic></LmMainTopicAndSubTopic>
      </div>
     
    </div>
  );
};
export const AuthorInfoCard = ({ children, onChange, link }) => {
    const classes = useStyles();
  return (
    <Paper className={classes.paper}>

    <Grid item xs={12} md={9} lg={9}>
    <Typography variant="h4" style={{ color: "#636e8b" }}>
                What is Track and Trace?
              </Typography>
              {articles.map((item, index) => (
                <Article
                  userName={item.userName}
                  content1={item.content1}
                  content2={item.content2}
                  content3={item.content3}
                  content4={item.content4}
                  content5={item.content5}
                  salutation={item.salutation}
                />
              ))}
            </Grid>
        </Paper>
  );
};
