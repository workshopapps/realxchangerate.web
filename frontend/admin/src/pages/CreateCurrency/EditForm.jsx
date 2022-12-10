import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Input from "../../shared/Input";
import { Container } from "./formstyles";

const Form = ({ handleEditClose, editVal }) => {
  const [country, setCountry] = useState(editVal.country);
  const [isocode, setIsocode] = useState(editVal.isocode);
  const [symbol, setSymbol] = useState(editVal.symbol);
  const [name, setName] = useState(editVal.name);
  // const [form, setForm] = useState({});

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
      if (form === {}) {
        alert("Please Confirm your changes");
        throw Error("confirm");
      }
      const response = await axios.put(
        `https://api.streetrates.hng.tech/api/admin/update_currency/${editVal.isocode}?iso_code=${editVal.isocode}`,

        form,

        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Currency Edited");
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
        <h2>Edit Currrency</h2>

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
            onClick={handleEditClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            className="add"
            sx={{ fontSize: 13 }}
          >
            Save changes
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Form;
