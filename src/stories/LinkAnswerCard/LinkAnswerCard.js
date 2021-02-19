import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { LmTypography } from '../Typography/LmTypography';
import { LmTypographyGrey } from '../TypographyGrey/LmTypographyGrey';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 700,
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      // height: 300,

    },
    section1: {
      margin: theme.spacing(3, 2),
    },
    section2: {
      margin: theme.spacing(2),
      marginBottom: '40px',
      marginTop: '25px',
      textAlign: "justify",
      marginLeft: '35px',
      marginRight: '35px'
    },
    cardTitle: {
        marginLeft: '20px',
        marginTop: '30px',
        marginBottom: '-10px',
    },
   
  }));
//   root: {
//     width: 'fit-content',
//     border: `1px solid ${theme.palette.divider}`,
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: theme.palette.background.paper,
//     color: theme.palette.text.secondary,
//     '& svg': {
//       margin: theme.spacing(1.5),
//     },
//     '& hr': {
//       margin: theme.spacing(0, 0.5),
//     },
//   },
// }));

export const LinkAnswerCard = ({title}) => {
    const classes = useStyles();
    return (
      
<div className={classes.root}>
      <div className={classes.section1}>
      <span style={{marginTop: '0px', marginLeft: '20px'}} className="jss128 jss147 jss164 jss153">23 days ago</span>
        <Grid container alignItems="center">
          <Grid>
            <LmTypography className={classes.cardTitle} gutterBottom variant="h5">
             What is Track and Trace?
            </LmTypography>
          </Grid>
          <Grid item>
            {/* <LmTypography gutterBottom variant="h6">
              $4.50
            </LmTypography> */}
          </Grid>
        </Grid>
        {/* <LmTypography color="textSecondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
          hall.
        </LmTypography> */}
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        {/* <LmTypographyGrey gutterBottom variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus sit amet lorem ut malesuada. Maecenas tellus ex, pharetra non purus a, sagittis facilisis nibh. Morbi sit amet justo sapien. Praesent luctus malesuada ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent enim nunc, maximus eget ornare sit amet, faucibus in purus. Donec et sem sit amet ex sodales auctor. Pellentesque
        </LmTypographyGrey> */}
       
      </div>
     
    </div> 
 
        );
    }
    