import React, { useState, useEffect } from "react";
import RateService from "../../../redux/features/Utils/Axios/apis";
import Container from "../style/ApplyToAdvertisement.style";
import { Snackbar, Alert, Typography } from "@mui/material";

const ApplicationForm = () => {
  const [email, setEmail] = useState("");
  const [pixelSize, setPizelSize] = useState("");
  const [noOfImpressions, setNumberOfImpressions] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [bannerId, setBannerId] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [successMessage, setMessage] = useState(null);
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  useEffect(() => {
    const EmailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (
      !EmailRegex.test(email) ||
      pixelSize === "" ||
      noOfImpressions === "" ||
      isNaN(parseInt(referenceNumber)) ||
      bannerId === ""
    ) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [email, pixelSize, noOfImpressions, referenceNumber, bannerId]);

  const SubmitForm = async (e) => {
    const formBody = {
      email,
      pixel_size: pixelSize,
      number_of_impressions: noOfImpressions,
      ref_number: parseInt(referenceNumber),
      link_to_banner_image: bannerId,
    };

    try {
      const res = await RateService.ApplyToAdvertise(formBody);
      setMessage(res.data.message);
      setState({ open: true, vertical: "top", horizontal: "center" });

      setEmail("");
      setBannerId("");
      setReferenceNumber("");
      setPizelSize("");
      setNumberOfImpressions("");
    } catch (err) {
      setMessage("An Error Occoured");
      console.log(err);
    }
  };
  return (
    <Container>
      <div className="app-wrapper">
        <h3>Application Form</h3>
        <div className="inputs--container">
          <div className="input--item">
            <label htmlFor="email--id">Email</label>
            <input
              type="email"
              id="email--id"
              placeholder="Enter email-address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input--item">
            <label htmlFor="pixel--id">Pixel Size</label>
            <input
              type="text"
              id="pixel--id"
              placeholder="Enter pixel Size"
              value={pixelSize}
              onChange={(e) => setPizelSize(e.target.value)}
            />
          </div>
          <div className="input--item">
            <label htmlFor="impression--id">Number of Impressions</label>
            <input
              type="text"
              id="impression--id"
              placeholder="Enter number of impressions"
              value={noOfImpressions}
              onChange={(e) => setNumberOfImpressions(e.target.value)}
            />
          </div>
          <div className="input--item">
            <label htmlFor="referrance--id">Referrance Number</label>
            <input
              type="text"
              id="referrance--id"
              placeholder="Enter referrence number"
              value={referenceNumber}
              onChange={(e) => setReferenceNumber(e.target.value)}
            />
          </div>
          <div className="input--item">
            <label htmlFor="banner--id">Link to banner image</label>
            <input
              type="text"
              id="banner--id"
              placeholder="Enter link to banner image"
              value={bannerId}
              onChange={(e) => setBannerId(e.target.value)}
            />
          </div>
          <button disabled={btnDisabled} onClick={(e) => SubmitForm(e)}>
            Submit
          </button>
        </div>
      </div>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={() => setState({ ...state, open: false })}
        key={vertical + horizontal}
        color="success"
      >
        <Alert  severity="success" sx={{ width: "100%" }}>
          <Typography fontSize="14px">{successMessage}</Typography>
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ApplicationForm;
