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

function FaqOverview() {
  const { t } = useTranslation();
  const [faqData, setFaqData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.streetrates.hng.tech/api/faq/get_all_faqs`)
      .then(({ data }) => setFaqData(data.faqs));
  }, []);

  return (
    <Box
      sx={{
        maxWidth: { xs: "90%", lg: "84%" },
        marginInline: "auto",
      }}
    >
      <StyledWrapper>
        <StyledGrid>
          <StyledFaq id="mainXD">
            <h3>FAQ</h3>
            <p>{t("got_que")}</p>
            <div className="searchWrapper">
              <div className="icon">
                <SearchIcon />
              </div>
              <StyledInput
                id="search"
                name="search"
                placeholder={`${t("search")} FAQs`}
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
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<PlusIcon />}
                  aria-controls="panella-content"
                  id="panella-header"
                >
                  <h3 className="faqQuestion">
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
                  <p className="faqAnswer">{item?.answer}</p>
                </AccordionDetails>
              </Accordion>
            ))}
        </>

        <StyledFaqBottom>
          <div>
            <h4>{t("still_got_quw")}</h4>
            <p>{t("cant_find_answer")}</p>
          </div>
          <button onClick={() => navigate("/get-in-touch")}>
            {t("get_in_touch")}
          </button>
        </StyledFaqBottom>
      </StyledWrapper>
    </Box>
  );
}

export default FaqOverview;
