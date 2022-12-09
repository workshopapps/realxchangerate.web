import { useEffect, useState, useCallback } from "react";
import { Card, CardSkeleton } from "./card/Card";
import {
  StyledCardsWrapper,
  StyledFilter,
  StyledPaginationWrapper,
  StyledWrapper,
} from "./UserComplaints.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  getComplaints,
  resetLoading,
} from "../../store/actions/complaintsActions";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import PaginationXD from "./pagination/Pagination";

export default function UserComplaintsLayout() {
  const { complaints, loading } = useSelector((state) => state.complaints);
  const [filterState, setFilterState] = useState("all");
  const [filteredComplaints, setFilteredComplaints] = useState(null);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const indexOfLastComplaint = currentPage * postsPerPage;
  const indexOfFirstComplaint = indexOfLastComplaint - postsPerPage;
  const currentComplaints = filteredComplaints?.slice(
    indexOfFirstComplaint,
    indexOfLastComplaint
  );

  const [pageInfo, setPageInfo] = useState({
    start: 1,
    currShown: 3,
    total: 3,
  });

  const dispatch = useDispatch();

  const handlePage = useCallback((totalItems, currPage) => {
    let startPage;
    let endPage;

    if (currPage <= 1) {
      startPage = 1;
    } else {
      startPage = (currPage - 1) * 4 + 1;
    }

    let ab = totalItems - currPage * 4;
    if (ab === 0) {
      endPage = totalItems;
    } else if (ab > 0) {
      endPage = currPage * 4;
    } else if (ab < 0) {
      endPage = currPage * 4 + ab;
    }

    setPageInfo((prev) => ({
      ...prev,
      start: startPage,
      currShown: endPage,

      total: totalItems,
    }));
  }, []);

  // get complaints
  useEffect(() => {
    dispatch(getComplaints());

    return () => {
      dispatch(resetLoading());
    };
  }, [dispatch]);

  // pass complaints to filteredComplaints
  useEffect(() => {
    if (complaints) {
      setFilteredComplaints(complaints?.items);

      handlePage(complaints?.items.length, 1);
    }
  }, [complaints, handlePage]);

  if (!complaints && loading === "failed") {
    toast.error("error fetching complaints");
  }

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: "fit-content",
      },
    },
  };

  // update complaints / filter
  const onFilterChange = (e) => {
    setCurrentPage(1);
    setFilterState(e.target.value);

    if (e.target.value !== "all") {
      let arr = complaints?.items.filter(
        (item) => item.status === e.target.value
      );
      setFilteredComplaints(arr);
      handlePage(arr?.length, 1);
    } else {
      setFilteredComplaints(complaints?.items);
      handlePage(complaints?.items.length, 1);
    }
  };

  // change page FIX THIS PAGINATE!
  const paginate = (value) => setCurrentPage(value);

  return (
    <StyledWrapper>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <h2 style={{ marginBottom: "32px" }}>Users’ Complaints</h2>
      </Box>

      <StyledFilter>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <h2>Users’ Complaints</h2>
        </Box>

        <Select
          displayEmpty
          size="small"
          sx={{ border: "1px solid #CBD5E120" }}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Filter" }}
          id="filter"
          name="filter"
          value={filterState}
          onChange={onFilterChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="resolved">Resolved</MenuItem>
          <MenuItem value="in review">Still in Review</MenuItem>
          <MenuItem value="unresolved">Unresolved</MenuItem>
        </Select>
      </StyledFilter>

      <StyledCardsWrapper>
        {!filteredComplaints && (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
        {currentComplaints?.map((item, index) => (
          <Card key={index} data={item} />
        ))}

        {filteredComplaints?.length === 0 && (
          <p style={{ fontSize: "14px" }}>No complaints found</p>
        )}
      </StyledCardsWrapper>

      <StyledPaginationWrapper>
        <p className="page">
          {`Showing ${pageInfo.start} - ${pageInfo.currShown} results of ${pageInfo.total} records`}
        </p>

        {/* <Pagination count={1} shape="rounded" /> */}
        <PaginationXD
          postsPerPage={postsPerPage}
          totalPosts={filteredComplaints?.length || 0}
          paginate={paginate}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          handlePage={handlePage}
        />
      </StyledPaginationWrapper>
    </StyledWrapper>
  );
}
