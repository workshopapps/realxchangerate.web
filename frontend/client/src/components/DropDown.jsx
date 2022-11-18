import {
    Accordion,
    Stack,
    Link,
    AccordionSummary,
    AccordionDetails,
    Typography,
  } from "@mui/material";
  import React from "react";
  
  const DropDown = ({ title, Items }) => {
    return (
      <>
        <Accordion
          style={{
            "background-color": "inherit",
            "box-shadow": "none",
            color: "#F8FAFC",
            width: "200px",
            border: "none",
          }}
        >
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            expandIcon={<img src="assets/svg/DownArrow.svg" alt="down_arrow" />}
          >
            <Typography
              marginRight="5px"
              sx={{
                fontSize: { xs: "19px" },
                lineHeight: { xs: "23px" },
                fontWeight: { xs: "700" },
              }}
            >
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              direction="column"
              alignItems="center"
              display="flex"
              gap="16px"
              fontSize="14px"
              fontWeight="400"
              lineHeight="20px"
              color="#F8FAFC"
              letterSpacing="0.001em"
            >
              {Items.map((item) => (
                <Link href="#" color="inherit">
                  {item}
                </Link>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      </>
    );
  };
  
  export default DropDown;