import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { FaShareAlt } from "react-icons/fa";
import IconButton from '@material-ui/core/IconButton';  
const useStyles = makeStyles({

    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
  const CoffeeCard = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    // const { avatarSrc, title, subtitle, description, imgSrc } = props;
    const { avatarSrc, title, subtitle } = props;
    return (
      <Card className={classes.root}>
        <CardHeader
        avatar={ avatarSrc }
        action={
          <IconButton aria-label="settings">
            
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
  export default CoffeeCard;