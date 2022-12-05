import { useEffect, useState } from "react";
import { Card, CardSkeleton } from "./card/Card";
import {
  StyledCardsWrapper,
  StyledFilter,
  StyledPaginationWrapper,
  StyledWrapper,
} from "./UserComplaints.styled";
import { useDispatch, useSelector } from "react-redux";
import { getComplaints } from "../../store/actions/complaintsActions";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Pagination from "@mui/material/Pagination";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";

export default function UserComplaintsLayout() {
  const [filterState, setFilterState] = useState("all");
  const [filteredComplaints, setFilteredComplaints] = useState(null);
  const [pageInfo, setPageInfo] = useState({
    currTotal: filteredComplaints?.length || 3,
    startCount: filteredComplaints?.length === 0 ? 0 : 1,
  });

  // when api, set filteredComplaintsas null then update on fullfil

  const dispatch = useDispatch();
  const { complaints, loading } = useSelector((state) => state.complaints);

  // get complaints
  useEffect(() => {
    dispatch(getComplaints());
  }, [dispatch]);

  // filter the complaints
  useEffect(() => {
    if (complaints) {
      setFilteredComplaints(complaints.complaints);
    }
  }, [complaints]);

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

  const handlePage = (total) => {
    let ab = total === 0 ? 0 : 1;
    let bc = total;
    setPageInfo((prev) => ({
      ...prev,
      currTotal: bc,
      startCount: ab,
    }));
  };

  const onFilterChange = (e) => {
    setFilterState(e.target.value);

    if (e.target.value !== "all") {
      let arr = complaints?.complaints.filter(
        (item) => item.status === e.target.value
      );
      setFilteredComplaints(arr);

      //

      handlePage(arr.length);
    } else {
      setFilteredComplaints(complaints?.complaints);
      handlePage(complaints?.complaints.length);
    }
  };

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
        {filteredComplaints?.map((item, index) => (
          <Card key={index} data={item} />
        ))}

        {filteredComplaints?.length === 0 && (
          <p style={{ fontSize: "14px" }}>No complaints found</p>
        )}
      </StyledCardsWrapper>

      <StyledPaginationWrapper>
        <p className="page">
          {`Showing ${pageInfo.startCount} - ${pageInfo.currTotal} results of ${pageInfo.currTotal} records`}
        </p>

        <Pagination count={1} shape="rounded" />
      </StyledPaginationWrapper>
    </StyledWrapper>
  );
}
