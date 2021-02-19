import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import CancelIcon from '@material-ui/icons/Cancel';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";




const top100Films = [

  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  
];

export const LmMultipleSelectChip = ({ children, onChange, link }) => {
    const [val, setVal] = useState([]);
      const valHtml = val.map((option, index) => {
    // This is to handle new options added by the user (allowed by freeSolo prop).
    const label = option.title || option;
    return (
      <Chip
       color="secondary"
        key={label}
        label={label}
        deleteIcon={<CancelIcon />}
        onDelete={() => {
          setVal(val.filter(entry => entry !== option));
        }}
      />
    );
  });
    
    return (
          <div style={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        freeSolo
        filterSelectedOptions
        options={top100Films}
        onChange={(e, newValue) => setVal(newValue)}
        getOptionLabel={option => option.title}
        renderTags={() => {}}
        value={val}
        renderInput={params => (
          <TextField
            {...params}
            variant="standard"
            placeholder="*Choose which access groups have permission"
            margin="normal"
            fullWidth
          />
        )}
      />
      <div className="selectedTags">{valHtml}</div>
    </div>
    );
  };