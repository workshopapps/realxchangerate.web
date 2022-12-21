import { Button } from "@mui/material";
import React, { useState } from "react";
import Input from "../../shared/Input";
import { Container } from "./formstyles";
import axios from "axios";

const Form = ({ handleClose }) => {
  const [country, setCountry] = useState("");
  const [isocode, setIsocode] = useState("");
  const [symbol, setSymbol] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      country: country,
      isocode: isocode,
      symbol: symbol,
      name: name,
    };
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://api.streetrates.info//api/admin/add_currency",

        JSON.stringify(form),
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("Currency Added");
      window.location.reload();
      return response;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h2>Add Currency</h2>
        <div className="inputs">
          <div className="select">
            <Input text="Country" value={country} handleChange={setCountry} />
          </div>
          <div>
            <Input text="Isocode" value={isocode} handleChange={setIsocode} />
          </div>
          <div>
            <Input text="Symbol" value={symbol} handleChange={setSymbol} />
          </div>
          <div>
            <Input text="Name" value={name} handleChange={setName} />
          </div>
        </div>
        <div class="addCurr">
          <Button
            variant="outlined"
            sx={{ fontSize: 13 }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            className="add"
            sx={{ fontSize: 13 }}
          >
            Add currency
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Form;
