import { Button } from "@mui/material";
import React from "react";
import Input from "../../shared/Input";
import BasicSelect from "../../shared/Select";
import { Container } from "./formstyles";

const Form = ({ handleEditClose }) => {
  return (
    <Container>
      <h2>Edit Currrency</h2>
      <div className="inputs">
        <div className="select">
          <Input text="Country" value={"Niger"} />
        </div>
        <div>
          <Input text="Code" />
        </div>
        <div>
          <Input text="Rate" />
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
        <Button variant="contained" className="add" sx={{ fontSize: 13 }}>
          Save changes
        </Button>
      </div>
    </Container>
  );
};

export default Form;
