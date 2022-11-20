import PropTypes from "prop-types";
import AvatarLoader from "../AvatarLoader/AvatarLoader";
import {
  StyledAvatarProfile,
  StyledAvatarProfilePreview,
} from "./UserPreview.styled";

function UserPreview({ userData }) {
  return (
    <StyledAvatarProfile>
      <AvatarLoader alt={userData.name} image={userData.pfp_url} />

      <StyledAvatarProfilePreview>
        <h4>{userData.name}</h4>
        <p>{userData.email}</p>
      </StyledAvatarProfilePreview>
    </StyledAvatarProfile>
  );
}

UserPreview.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default UserPreview;
