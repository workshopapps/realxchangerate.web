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

// const complaints = [
//   {
//     id: "08213",
//     full_name: "Rapha Paula",
//     complaint: `Hi, I noticed that it’s a bit hard for me to toggle between currencies when using
//         the convert feature, please can this be checked and possibly worked on?
//         I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.`,
//     status: "Resolve",
//   },
//   {
//     id: "08213",
//     full_name: "Rapha Paula",
//     complaint: `Hi, I noticed that it’s a bit hard for me to toggle between currencies when using
//         the convert feature, please can this be checked and possibly worked on?
//         I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.`,
//     status: "Still in Review",
//   },
//   {
//     id: "08213",
//     full_name: "Rapha Paula",
//     complaint: `Hi, I noticed that it’s a bit hard for me to toggle between currencies when using
//         the convert feature, please can this be checked and possibly worked on?
//         I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.`,
//     status: "Resolved",
//   },
// ];

export default function UserComplaintsLayout() {
  const [filterState, setFilterState] = useState("All");
  const [filteredComplaints, setFilteredComplaints] = useState(null);
  // const [pageInfo, setPageInfo] = useState({
  //   currTotal: complaints?.complaints.length,
  //   startCount: complaints?.complaints.length === 0 ? 0 : 1,
  // });

  // when api, set filteredComplaintsas null then update on fullfil

  const dispatch = useDispatch();
  const { complaints } = useSelector((state) => state.complaints);

  useEffect(() => {
    dispatch(getComplaints());
  }, [dispatch]);

  useEffect(() => {
    if (complaints) {
      setFilteredComplaints(complaints.complaints);
    }
  }, [complaints]);

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

  // const handlePage = (total) => {
  //   let ab = total === 0 ? 0 : 1;
  //   let bc = total;
  //   setPageInfo((prev) => ({
  //     ...prev,
  //     currTotal: bc,
  //     startCount: ab,
  //   }));
  // };

  const onFilterChange = (e) => {
    setFilterState(e.target.value);

    // if (e.target.value !== "All") {
    //   let arr = complaints.filter((item) => item.status === e.target.value);
    //   setFilteredComplaints(arr);

    //   // handlePage(arr.length);
    // } else {
    //   setFilteredComplaints(complaints);
    //   // handlePage(complaints.length);
    // }
  };

  return (
    <StyledWrapper>
      <h2>Users’ Complaints</h2>

      <StyledFilter>
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
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Resolved">Resolved</MenuItem>
          <MenuItem id="status" value="Still in Review">
            Still in Review
          </MenuItem>
          <MenuItem id="status" value="Unresolved">
            Unresolved
          </MenuItem>
        </Select>
      </StyledFilter>

      <StyledCardsWrapper>
        {!complaints ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : null}
        {/* {filteredComplaints.map((item, index) => (
          <Card key={index} data={item} />
        ))}

        {filteredComplaints.lenght === 0 ? <p>No complaints found</p> : null} */}
        {complaints?.complaints.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </StyledCardsWrapper>

      <StyledPaginationWrapper>
        {/* <p className="page">
          {`Showing ${pageInfo.startCount} - ${pageInfo.currTotal} results of ${pageInfo.currTotal} records`}
        </p> */}
        <p className="page">{`Showing 1 - 3 results of 3 records`}</p>
        <Pagination color="primary" count={1} shape="rounded" />
      </StyledPaginationWrapper>
    </StyledWrapper>
  );
}
