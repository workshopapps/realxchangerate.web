import React from "react";
import { Link } from "react-router-dom";
import Introduction from "./component/Introduction";
import PersonalData from "./component/PersonalData";
import { useTheme } from "@mui/material";

import { Container, List } from "./style/Privacy.styled";

const PrivacyPolicy = () => {
  const theme = useTheme();
  const DarkMode = theme.palette.mode === "dark";
  const textColor = DarkMode ? "#fff" : "#1e293b";

  return (
    <Container textColor={textColor}>
      <section style={{ marginBottom: "48px" }}>
        <h1>Privacy Policy</h1>
        <p>Version 2.0 (effective up to and including 4 August 2022)</p>
        <p>Version 3.0 (Effective from 5 August 2023)</p>
      </section>

      <Introduction />
      <PersonalData />

      <section>
        <h2>Our Data Protection Officer</h2>
        <div>
          <p>
            In accordance with data protection legislation, StrreetRates has
            appointed a Data Protection Officer (DPO). You can contact our DPO
            in a number of ways:
          </p>
          <List>
            <li>
              In writing. FAO: The DPO, StreetRates App Limited, 6 Blakeville
              Street, London, England, BSF 45FG, United Kingdom.
            </li>
            <li>
              By email.
              <a href="mailto: DPO@StreetRates.io"> DPO@StreetRates.io</a>
            </li>
          </List>
          <p>
            The DPO is there to assist data subjects generally. However, the
            most efficient way to exercise your rights under data protection
            legislation is by emailing privacyrequests@StreetRates.io
          </p>
        </div>
      </section>

      <section>
        <h3>Cookie Policy</h3>
        <span>
          Check out our cookie <Link to="/#/Cookie-policy">policy page</Link>
        </span>
      </section>

      <section>
        <h3>Terms and Condition</h3>
        <span>
          Check out our <Link to="/#/terms">Terms and condition page</Link>
        </span>
      </section>
    </Container>
  );
};

export default PrivacyPolicy;
