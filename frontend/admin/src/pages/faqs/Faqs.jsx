import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";

import { useNavigate } from "react-router-dom";
import back from "../../assets/icons/back.svg";
import FaqsCard from "./Cards";
import AddContent from "./AddContent";

const faqs = [
  {
    question: " Street rate Frequently asked questions",
    answer:
      "Hi, I noticed that it’s a bit hard for me to toggle between currencies when using the convert feature, please can this be checked and possibly worked on? I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.",
  },
  {
    question: " Shrimp and Chorizo Paella",
    answer:
      "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
  },
  {
    question: " Street rate Frequently asked questions",
    answer:
      "Hi, I noticed that it’s a bit hard for me to toggle between currencies when using the convert feature, please can this be checked and possibly worked on? I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.",
  },
  {
    question: " Street rate Frequently asked questions",
    answer:
      "Hi, I noticed that it’s a bit hard for me to toggle between currencies when using the convert feature, please can this be checked and possibly worked on? I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.",
  },
];

function Faqs() {
  const navigate = useNavigate();
  const [openAsk, setOpenAsk] = React.useState(false);
  const handleOpenAsk = () => setOpenAsk(true);
  const handleCloseAsk = () => setOpenAsk(false);
  return (
    <Container>
      <Box
        className="header"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: "1rem",
          m: "2rem 0",
          alignItems: { sm: "center" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button onClick={() => navigate("/admin")}>
            <img src={back} alt="Go back" />
          </Button>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: 700, fontSize: { xs: "1.2rem", md: "2.1rem" } }}
          >
            Frequently Asked Questions
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            ml: { sm: "auto" },
            p: "1rem",
            width: { xs: "100%", sm: "auto" },
          }}
          onClick={handleOpenAsk}
        >
          Add Question
        </Button>
      </Box>

      {faqs.map((faq) => (
        <FaqsCard faq={faq} />
      ))}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openAsk}
        onClose={handleCloseAsk}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <AddContent cancel={handleCloseAsk} />
      </Modal>
    </Container>
  );
}

export default Faqs;
