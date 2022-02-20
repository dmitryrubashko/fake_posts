import {Pagination} from "@mui/material";
import {memo} from 'react';

const CustomPagination = ({currentPage, onPageChange, pageCount}) => {

  return <Pagination
    count={pageCount}
    page={currentPage}
    onChange={(event, page) => onPageChange(page)}
  />
};

export default memo(CustomPagination);

