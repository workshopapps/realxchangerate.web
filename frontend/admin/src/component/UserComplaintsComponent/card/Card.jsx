import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  StyledCardButton,
  StyledCardMessage,
  StyledCardTitle,
  StyledCardWrapper,
} from "./Card.styled";

// interface CardData {
//     id: number;
//     title: string;
//     message: string;
//     status: 'Resolve' | 'Resolved' | 'Unresolved' | 'Still in Review';
// }

export default function Card({ data }) {
  const navigate = useNavigate();

  return (
    <StyledCardWrapper>
      <StyledCardTitle>{data.title}</StyledCardTitle>
      <StyledCardMessage>{data.message}</StyledCardMessage>

      <StyledCardButton
        $complaintButton={data.status}
        onClick={() => navigate(`/admin/complaints/${data.id}`)}
      >
        {data.status}
      </StyledCardButton>
    </StyledCardWrapper>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};
