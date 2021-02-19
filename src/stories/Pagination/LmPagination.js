import React from 'react';
// import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';


export const LmPagination = ({  count, color, boundaryCount, ...props }) => {
    return ( 
    
<Pagination count={20} color="primary" />
    );
  };