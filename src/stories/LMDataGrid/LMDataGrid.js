import MUIDataTable from "mui-datatables";
import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";

export const LMDataGrid = ({ columns, data, options, title, ref, theme }) => {
  // const [checkedItems, setCheckedItems] = useState({});

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <MUIDataTable
          ref={ref}
          columns={columns}
          data={data}
          options={options}
          title={title}
          rowsPerPage={5}
        />
      </MuiThemeProvider>
    </div>
  );
};

export default LMDataGrid;
