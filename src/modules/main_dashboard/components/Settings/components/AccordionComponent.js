import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: '50%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },  
    label: {
        color:  "#0000008A",
    },
    value: {
        marginBottom: theme.spacing(2),
    },
    subheading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color:  "#0000008A",
    marginLeft: '359px'
  }

}));



const AccordionComponent = (props) => {
    const classes = useStyles();
    const topUsers = [
        { user: 'Sheldon' },
        { user: 'Raj' },
        { user: 'Leonard' },
        { user: 'Howard' }
    ];

    return (
        <div className="accordionStyle">
            <Accordion>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Unique URL for Hub</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <Typography className={classes.label} variant="caption" display="block" gutterBottom>Unique URL</Typography>
                        <Typography className={classes.value}>https://qa.flamingo.io/hubs/84d29d41-0860-4925-be75-a8754ace74dc/search</Typography>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Restrict Search Access</Typography>
                    <Typography className={classes.subheading}>Choose who can access your hub</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.root} >
                        <FormControlLabel
                            control={<Switch checked={true} name="restictAccess" color="secondary" />}
                            label="Restrict Access"
                        />
                        <br/>
                        <br/>
                        <Autocomplete
                            multiple
                            options={topUsers}
                            size="medium"
                            getOptionLabel={(option) => option.user}
                            renderInput={(params) => (
                            <TextField {...params} variant="standard" label="Choose which access groups have permission" placeholder="Search and Select" />
                            )}
                        />
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Technical Information</Typography>
                    <Typography className={classes.subheading}>UUID, Hub Key &amp; Created Date</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <Typography className={classes.label} variant="caption" display="block" gutterBottom>UUID</Typography>
                        <Typography className={classes.value}>84d29d41-0860-4925-be75-a8754ace74dc</Typography>
                        <Typography className={classes.label} variant="caption" display="block" gutterBottom>Hub Key</Typography>
                        <Typography className={classes.value}>7771f44b-9763-4cbf-8c26-88ae32ab2616</Typography>
                        <Typography className={classes.label} variant="caption" display="block" gutterBottom>Date Created</Typography>
                        <Typography className={classes.value}>2019-11-11T05:51:11.000Z</Typography>
                        <Typography className={classes.label} variant="caption" display="block" gutterBottom>Brain</Typography>
                        <Typography className={classes.value}>flamingo</Typography>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AccordionComponent;