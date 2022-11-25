import { LeftSection, RightSection, StyledUsage } from "./styled/Usage.styled";

import codes from "../assets/codes.svg";
const Usage = ({textColor}) => {
  return (
    <StyledUsage>
      <LeftSection >
        <p style={{color:textColor}}>The most extensive and direct API for global exchange rate data.</p>
        <p style={{color:textColor}}>
          Street Rates currency exchange API documentation is simple and intuitive to use, written clear and fast to
          implement.
        </p>
        <ul>
          <li>
            <div></div>
            <span style={{color:textColor}}>Fast and easy set up</span>
          </li>
          <li>
            <div></div>
            <span style={{color:textColor}}>Street Rates Data Swagger</span>
          </li>
          <li>
            <div></div>
            <span style={{color:textColor}}>Robust Github Repository</span>
          </li>
        </ul>
        <a href="/#">View Documentation</a>
      </LeftSection>
      <RightSection>
        <img src={codes} alt="codes" />
      </RightSection>
    </StyledUsage>
  );
};

export default Usage;
