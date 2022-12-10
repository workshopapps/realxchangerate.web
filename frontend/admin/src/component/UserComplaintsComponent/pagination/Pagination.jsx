import * as React from "react";
// import Typography from '@mui/material/Typography';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationXD({
  postsPerPage,
  totalPosts,
  paginate,
  setCurrentPage,
  currentPage,
  handlePage,
}) {
  //   const [page, setPage] = React.useState(1);
  const PageNumber = Math.ceil(totalPosts / postsPerPage);
  const handleClick = (event, value) => {
    setCurrentPage(value);
    // console.log(page);

    handlePage(totalPosts, value);
    paginate(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={PageNumber}
        // variant="outlined"
        color="primary"
        shape="rounded"
        onChange={handleClick}
        page={currentPage}
      />
    </Stack>
  );
}
