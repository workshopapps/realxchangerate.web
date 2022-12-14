import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  StyledCardButton,
  StyledCardMessage,
  StyledCardTitle,
  StyledCardWrapper,
} from "./Card.styled";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// interface CardData {
//     id: number;
//     full_name: string;
//     complaint: string;
//      email: string
//     status: 'resolved' | 'unresolved' | 'in Review';
// }

export function Card({ data }) {
  const navigate = useNavigate();

  return (
    <StyledCardWrapper>
      <StyledCardTitle>{data?.full_name}</StyledCardTitle>
      <StyledCardMessage>{data?.complaint}</StyledCardMessage>

      <StyledCardButton
        $complaintButton={data?.status ? data?.status.toLowerCase() : "resolve"}
        onClick={() => navigate(`/admin/complaints/${data.id}`)}
      >
        {data?.status &&
          (data?.status === "resolved"
            ? "Resolved"
            : data?.status === "unresolved"
            ? "Unresolved"
            : data?.status === "in review"
            ? "Still In Review"
            : "Resolve")}
        {!data.status && "Resolve"}
      </StyledCardButton>
    </StyledCardWrapper>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export function CardSkeleton() {
  return (
    <StyledCardWrapper>
      <Stack spacing={1.5}>
        <Skeleton width="30%" variant="text" sx={{ fontSize: "1.5rem" }} />
        <Skeleton variant="rounded" height={100} />

        <Stack>
          <Skeleton
            sx={{ marginLeft: "auto", marginTop: "10px" }}
            variant="rounded"
            width="25%"
            height={30}
          />
        </Stack>
      </Stack>
    </StyledCardWrapper>
  );
}
