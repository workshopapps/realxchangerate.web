import { useState, useEffect } from "react";
import axios from "axios";
import {
  StyledWrapper,
  StyledGrid,
  StyledFaq,
  StyledFaqImage,
  StyledFaqBottom,
  StyledInput,
} from "./FaqOverview.styled";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "./assets/icons/search.svg";
import FAQ_image from "./assets/images/faq_image.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import { ReactComponent as PlusIcon } from "./assets/icons/plus.svg";
import Skeleton from "@mui/material/Skeleton";

import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";


function FaqOverview() {
  const { t } = useTranslation();
  const [faqData, setFaqData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.streetrates.hng.tech/api/faq/get_all_faqs`)
      .then(({ data }) => setFaqData(data.faqs));
  }, []);


  const theme = useTheme();
  const dark = theme.palette.mode === "dark";

  return (
    <Box style={{ backgroundColor: `${dark ? "#131825" : "white"}` }}>
      <Box
        sx={{
          maxWidth: { xs: "90%", lg: "84%" },
          marginInline: "auto",
        }}
      >
        <StyledWrapper>
          <StyledGrid>
            <StyledFaq id="mainXD">
              <h3 style={{ color: `${dark ? "#FAFAFA" : "#161C2C"}` }}>FAQ</h3>
              <p style={{ color: `${dark ? "#FAFAFA" : "#161C2C"}` }}>
                {t("got_que")}
              </p>
              <div
                className="searchWrapper"
                style={{ backgroundColor: `${dark ? "#161C2C" : ""}` }}
              >
                <div className="icon">
                  <SearchIcon
                    style={{
                      filter: `${
                        dark
                          ? "invert(100%) sepia(0%) saturate(14%) hue-rotate(114deg) brightness(103%) contrast(96%)"
                          : ""
                      }`,
                    }}
                  />
                </div>
                <StyledInput
                  id="search"
                  name="search"
                  placeholder={`${t("search")} FAQs`}
                  style={{
                    backgroundColor: `${dark ? "#161C2C" : ""}`,
                    color: `${dark ? "#FAFAFA" : "#161C2C"}`,
                  }}
                />
                <button>{t("search")}</button>
              </div>
            </StyledFaq>

            <StyledFaqImage id="imageXD">
              <img src={FAQ_image} alt="FAQ" />
            </StyledFaqImage>
          </StyledGrid>

          <>
            {faqData &&
              faqData.map((item, index) => (
                <Accordion
                  key={index}
                  elevation={0}
                  style={{ backgroundColor: `${dark ? "#131825" : "white"}` }}
                >
                  <AccordionSummary
                    expandIcon={
                      <PlusIcon
                        style={{
                          filter: `${
                            dark
                              ? "invert(100%) sepia(0%) saturate(14%) hue-rotate(114deg) brightness(103%) contrast(96%)"
                              : ""
                          }`,
                        }}
                      />
                    }
                    aria-controls="panella-content"
                    id="panella-header"
                  >
                    <h3
                      className="faqQuestion"
                      style={{ color: `${dark ? "#FAFAFA" : ""}` }}
                    >
                      {item.question ? (
                        item.question
                      ) : (
                        <Skeleton
                          variant="text"
                          sx={{ fontSize: "18px", width: "70%" }}
                        />
                      )}
                    </h3>
                  </AccordionSummary>

                  <AccordionDetails>
                    <p
                      className="faqAnswer"
                      style={{ color: `${dark ? "#FAFAFA" : ""}` }}
                    >
                      {item?.answer}
                    </p>
                  </AccordionDetails>
                </Accordion>
              ))}
          </>

          <StyledFaqBottom
            style={{ backgroundColor: `${dark ? "#161C2C" : ""}` }}
          >
            <div>
              <h4 style={{ color: `${dark ? "#FAFAFA" : ""}` }}>
                {t("still_got_que")}
              </h4>
              <p style={{ color: `${dark ? "#FAFAFA" : ""}` }}>
               {t("cant_find_answer")}
              </p>
            </div>
            <button onClick={() => navigate("/get-in-touch")}>
               {t("get_in_touch")}
            </button>
          </StyledFaqBottom>
        </StyledWrapper>
      </Box>
    </Box>
  );
}

export default FaqOverview;
