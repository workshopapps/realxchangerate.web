import React from "react";
import { StyledTeam } from "../About";
import { useTheme, Typography, Box } from "@mui/material";

const TeamMember = (props) => {
  const theme = useTheme();

  const textColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  return (
    <>
      <StyledTeam>
        <img src={props.image} alt="" />
        <Box display="flex" flexDirection="column" gap="4px" textAlign="center">
          <Typography
            fontWeight="600"
            color={textColor}
            sx={{
              fontSize: { xs: "22px", sm: "24px" },
              lineHeight: { xs: "28px", sm: "32px" },
            }}
          >
            {props.name}
          </Typography>
          <Typography
            fontWeight="400"
            color="#64748B"
            sx={{
              fontSize: { xs: "16px", sm: "16px" },
              lineHeight: { xs: "24px", sm: "24px" },
            }}
          >
            {props.designation}
          </Typography>
        </Box>
      </StyledTeam>
    </>
  );
};

export default TeamMember;
