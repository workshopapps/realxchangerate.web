import { Button } from "@mui/material";
import React, { useState } from "react";

import Input from "../../shared/Input";
import { Container } from "./formstyles";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ handleAddRateClose, editVal }) => {
  const [officailBuy, setOfficialBuy] = useState();
  const [officialSell, setOfficialSell] = useState();
  const [parallelBuy, setParrallelBuy] = useState();
  const [parallelSell, setParrallelSell] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = {
      official_buy: officailBuy,
      official_sell: officialSell,
      parallel_buy: parallelBuy,
      parallel_sell: parallelSell,
    };
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        `https://api.streetrates.hng.tech/api/admin/update_rate/${editVal.isocode}?iso_code=${editVal.isocode}`,

        JSON.stringify(form),

        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) toast.success("Rate Updated");
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
        <h2>Add Currrency</h2>
        <div className="inputs">
          <Input
            text="Official Buy"
            value={officailBuy}
            handleChange={setOfficialBuy}
            type="number"
          />

          <div>
            <Input
              text="Official Sell"
              value={officialSell}
              type="number"
              handleChange={setOfficialSell}
            />
          </div>
          <div>
            <Input
              text="Parallel Buy"
              value={parallelBuy}
              type="number"
              handleChange={setParrallelBuy}
            />
          </div>
          <div>
            <Input
              text="Parallel Sell"
              value={parallelSell}
              type="number"
              handleChange={setParrallelSell}
            />
          </div>
        </div>
        <div class="addCurr">
          <Button
            variant="outlined"
            sx={{ fontSize: 13 }}
            onClick={handleAddRateClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            className="add"
            sx={{ fontSize: 13 }}
          >
            Add Rate
          </Button>
        </div>
      </form>
      <ToastContainer />
    </Container>
  );
};

export default Form;
