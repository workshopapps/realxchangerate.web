import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { fetchPartners } from "./database";

function Referrals() {
  const [referrals, setReferrals] = React.useState([]);
  React.useEffect(() => {
    fetchPartners("referral")
      .then((data) => {
        setReferrals(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h3" component="h1">
        Referrals
      </Typography>
      <Box>
        {" "}
        {referrals?.map((referral) => (
          <Typography key={referral.id}>
            {referral.firstname} {referral.lastname}
          </Typography>
        ))}
      </Box>
    </Container>
  );
}

export default Referrals;
