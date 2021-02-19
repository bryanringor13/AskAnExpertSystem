import React from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import Box from "@material-ui/core/Box";

export const LmDateRange = ({ children, onChange, link }) => {
    const [state, setState] = React.useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);
  return (
    <Box>
      <DateRangePicker
  onChange={item => setState([item.selection])}
  showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  months={2}
  editableDateInputs={true}
  ranges={state}
  direction="horizontal"
/>
  </Box>
  );
};
