import React from "react";
import { LMDataGrid } from "./LMDataGrid";

export default {
  title: "Lamarck/LMDataGrid",
  component: LMDataGrid,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
const options = {
  selectableRows: "none",
  download: true,
  print: false,
  filter: true,
  viewColumns: false,
  responsive: "stacked",
};
const columns = [
  {
    name: "firstName",
    label: "First Name",
  },
  {
    name: "lastName",
    label: "Last Name",
  },
];

const data = [{ firstName: "Joe", lastName: "James" }];
const Template = (args) => (
  <LMDataGrid
    title={"LMDataGrid"}
    options={options}
    columns={columns}
    data={data}
  />
);

export const Base = Template.bind({});
Base.args = {
  color: "textSecondary",
  variant: "h5",
};
