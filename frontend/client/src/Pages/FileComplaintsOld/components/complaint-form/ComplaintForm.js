import React from "react";
import { StyledComplaintForm } from "./ComplaintForm.styled";

const ComplaintForm = () => {
  return (
    <StyledComplaintForm>
      <h3>We are always here for you.</h3>
      <p>
        We hoped our FAQs would help. Since they didn't, please fill this this
        short form and we'd give you special attention as quickly as possible
      </p>

      <form>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" placeholder="Enter your name" />

        <label htmlor="email">Your email</label>
        <input type="text" id="email" placeholder="Enter your email" />

        <label htmlFor="description"> Description</label>
        <textarea
          id="description"
          cols="30"
          rows="10"
          style={{ resize: "none" }}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </StyledComplaintForm>
  );
};

export default ComplaintForm;
