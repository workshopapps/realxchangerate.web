import React from "react";
import {
  StyledAccountCoverPic,
  StyledAccountWrapper,
  StyledUserInfo1,
  StyledUserInfo2,
  StyledUserInfoWrapper,
} from "./AccountComponent.styled";
import { ReactComponent as CompassIcon } from "../../assets/icons/compass.svg";
import CoverPic from "../../assets/images/account_cover.png";
import UserPreview from "../shared/CardComponent/UserPreview";
import Person3 from "../../assets/images/person3.png";

const userData = {
  name: "Mikey Doe",
  email: "bessie.cooper@example.com",
  coverPic: CoverPic,
  pfp_url: Person3,
};

const AccountLayout = () => {
  return (
    <StyledAccountWrapper>
      <StyledAccountCoverPic>
        <img alt="cover" src={userData.coverPic} />

        <h1>{userData.name.toLocaleUpperCase()}</h1>
      </StyledAccountCoverPic>

      <StyledUserInfoWrapper>
        <StyledUserInfo1>
          <UserPreview userData={userData} />

          <div className="info">
            <p>@{userData.name.toLocaleUpperCase()}</p>
            <p>Parallel Currency Admin</p>
          </div>
        </StyledUserInfo1>

        <StyledUserInfo2>
          <div className="top">
            <p>Location</p>
            <div>
              <div className="icon">
                <CompassIcon />
              </div>
              <p>Lagos, Nigeria</p>
            </div>
          </div>

          <div className="bottom"></div>
        </StyledUserInfo2>
      </StyledUserInfoWrapper>
    </StyledAccountWrapper>
  );
};

export default AccountLayout;
