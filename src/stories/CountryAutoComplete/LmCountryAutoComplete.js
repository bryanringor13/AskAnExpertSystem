import React from 'react';
//import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
//import SearchIcon from '@material-ui/icons/Search';

  
export const LmCountryAutoComplete = ({ id, autoComplete, params, label, variant, style, option, getOptionLabel, renderInput, options, ...props }) => {
    return ( 
        <Autocomplete
        options={countries}
        autoComplete={autoComplete}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} label="Select a Country" variant="outlined" />}
       
      />
      
    );
  };
  const countries = [
    { title: 'Afghanistan'},
    { title: 'Albania'},
    { title: 'Algeria'},
    { title: 'Andorra'},
    { title: 'AAngola'},
    { title: 'Antigua and Barbuda'},
    { title: 'Argentina'},
    { title: 'Armenia'},
    { title: 'Australia'},
    { title: 'Austria'},
    { title: 'Azerbaijan'},
    { title: 'Bahamas'},
    { title: 'Bahamas'},
    { title: 'Bangladesh'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},
    { title: 'Arizona'},

  ]
