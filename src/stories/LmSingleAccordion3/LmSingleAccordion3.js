import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: '0.9375rem',
      fontWeight: theme.typography.fontWeightRegular,
    },
    subheading: {
      fontSize: '0.9375rem',
      fontWeight: theme.typography.fontWeightRegular,
      color:  "#0000008A",
      marginLeft: '333px'
    },
    enable: {
      marginTop: '7px'
    },
 textField: {
  minWidth: '40%',
 }

  }));
  
  function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value, 
            },
          });
        }}
        isNumericString
       
      />
    );
  }
  
  
  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  function NumberFormatCustom2(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values2) => {
          onChange({
            target: {
              name: props.name,
              value: values2.value, 
            },
          });
        }}
        isNumericString
       
      />
    );
  }
  
  
  NumberFormatCustom2.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
export const LmSingleAccordion3 = ({ children, onChange, link }) => {
    const classes = useStyles();
    // const [state, setState] = React.useState();
  
    // const handleChange = (event) => {
    //   setState({ ...state, [event.target.name]: event.target.checked });
    // };
    const [isShown, setIsShown] = React.useState(false);

    const handleShowFields = () => {
      setIsShown(true);
      
    };

    const handleHideFields = () => {
      setIsShown(false);
    };
    const [values, setValues] = React.useState({
      numberformat: '',
    });
    const [values2, setValues2] = React.useState({
      dafaultNumber: '',
    });
    const handleChange = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
        
      });
    };
    const handleChange2 = (event) => {
      setValues2({
        ...values2,
        [event.target.name]: event.target.value,
        
      });
    };
  

  return (
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography className={classes.heading}>Search Timeout</Typography>
      <Typography className={classes.subheading}>Manage Customer Search Timeout</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <div style={{display: "flex", flexDirection: 'column', width: '100%'}}>
      <div 
      style={{display: 'flex', flexDirection: 'row'}} 
      onClick={isShown ? handleHideFields : handleShowFields}>
    <Switch color="secondary" inputProps={{ 'aria-label': 'primary checkbox' }} />
    
    <Typography className={classes.enable}>Enable Search Timeout</Typography>
    </div>
    {isShown ? (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
    <div style={{marginTop: '20px', marginLeft: '40px'}}>
    <TextField 
    className={classes.textField} 
    label="Timeout Limit (in minutes)*"  
    variant="filled"
    helperText="Please provide number only"
    error={values.numberformat === '' ? true : false}
    value={values.numberformat}
    onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
     />
    </div>
    <div style={{marginTop: '20px', marginLeft: '40px'}}>
    <TextField 
    className={classes.textField} 
    label="Warning Message Limit (in minutes)*"  
    variant="filled" 
    helperText="Please provide number only"
    error={values2.dafaultNumber === '' ? true : false}
    value={values2.dafaultNumber}
    // onChange={handleChange2}
    //     name="numberformat2"
    //     id="formatted-numberformat-input2"
    //     InputProps={{
    //       inputComponent: NumberFormatCustom2,
    //     }}
    />
    </div>
    </div>  
    ) : null}
    </div>
  
    </AccordionDetails>
  </Accordion>
  );
};
