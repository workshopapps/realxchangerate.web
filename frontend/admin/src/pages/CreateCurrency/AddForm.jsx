import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Input from "../../shared/Input";
import BasicSelect from "../../shared/Select";
import { Container } from "./formstyles";
import axios from "axios";

const Form = ({ handleClose }) => {
  const [country, setCountry] = useState("");
  const [isocode, setIsocode] = useState("");
  const [symbol, setSymbol] = useState("");
  const [name, setName] = useState("");
  const [form, setForm] = useState({
    country: "",
    isocode: "",
    symbol: "",
    name: "",
  });
  const tok = localStorage.getItem("tok");
  const handleSubmit = () => {
    setForm({
      country: country,
      isocode: isocode,
      symbol: symbol,
      name: name,
    });
    alert("Currency Added");
  };
  const AddCurrency = async () => {
    axios
      .post("https://api.streetrates.hng.tech/api/admin/add_currency", {}, {})
      .then(function (response) {
        console.log("Authenticated");
      })
      .catch((error) => {
        console.err(error);
      });
  };

  useEffect(() => {
    console.log(tok);
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h2>Add Currrency</h2>
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
