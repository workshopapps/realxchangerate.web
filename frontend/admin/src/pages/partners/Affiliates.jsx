import React from "react";
import { Box, Container, Typography } from "@mui/material";

import { fetchPartners } from "./database";

function Affiliates() {
  const [affiliates, setAffiliates] = React.useState([]);
  React.useEffect(() => {
    fetchPartners("affiliate")
      .then((data) => {
        console.log(data);
        setAffiliates(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h3" component="h1">
        Affiliates
      </Typography>
      <Box>
        {affiliates?.map((affiliate) => (
          <Typography key={affiliate.id}>
            {affiliate.firstname} {affiliate.lastname}
          </Typography>
        ))}
      </Box>
    </Container>
  );
}

export default Affiliates;
