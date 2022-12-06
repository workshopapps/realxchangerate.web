import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import { toast, ToastContainer } from "react-toastify";

import { useNavigate } from "react-router-dom";
import back from "../../assets/icons/back.svg";
import FaqsCard from "./Cards";
import AddContent from "./AddContent";
import FaqSkeleton from "./FaqSkeleton";
function Faqs() {
  const navigate = useNavigate();
  const [openAsk, setOpenAsk] = React.useState(false);
  const handleOpenAsk = () => setOpenAsk(true);
  const handleCloseAsk = () => setOpenAsk(false);
  const [faqs, setFaqs] = React.useState([]);
  const [newdata, setNewdata] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const endpoint =
      process.env.NODE_ENV === "production"
        ? "https://api.streetrates.hng.tech/api/faq/get_all_faqs"
        : process.env.NODE_ENV === "development"
        ? "http://localhost:8000/api/faq/get_all_faqs"
        : "";
    setLoading(true);
    const fetchFaqs = async () => {
      const response = await fetch(endpoint);
      return await response.json();
    };
    fetchFaqs()
      .then((data) => {
        console.log(data);
        setFaqs(data.faqs);
        setLoading(false);
      })
      .catch((e) => {
        console.log("COULD NOT GET DATA AT THE MOMENT", e);
        toast("COULD NOT GET DATA AT THE MOMENT");
      });
  }, [newdata]);

  return (
    <Container>
      <ToastContainer />
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
            sx={{ fontWeight: 700, fontSize: { xs: "1rem", md: "2.1rem" } }}
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

      {faqs &&
        faqs.map((faq) => <FaqsCard faq={faq} setNewdata={setNewdata} />)}

      {loading && <FaqSkeleton />}
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
        <AddContent cancel={handleCloseAsk} setNewdata={setNewdata} />
      </Modal>
    </Container>
  );
}

export default Faqs;
