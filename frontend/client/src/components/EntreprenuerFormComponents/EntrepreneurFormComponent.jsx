import React from "react";
import { FormSection } from "./entrepreneurFormStyle";
import leftIcon from "../../assets/svg/arrow-left.svg";
import InputField from "../shared/InputField/InputField";
import { Link } from "react-router-dom";

const EntrepreneurFormComponent = () => {
  return (
    <FormSection>
      <div className="header">
        <Link to={'/ambassadors/entrepreneur-ambassador'}>
        <img src={leftIcon} alt="" />
        </Link>
        <h2>Entrepreneur Ambassador Application Form</h2>
      </div>
      <form>
        <div className="grid-two">
          <div>
            <InputField
              type="text"
              placeHolder="First name"
              name="firstName"
              label="Name"
            />
          </div>
          <div>
            <InputField type="text" placeHolder="Last name" name="lastName" />
          </div>
        </div>
        <div className="grid-two">
          <div>
            <InputField type="date" name="dateOfBirth" label="Date of birth" />
          </div>
          <div>
            <InputField
              type="text"
              placeHolder="Mobile number"
              name="phone"
              label="Phone number"
            />
          </div>
        </div>
        <div className="grid-half">
          <div>
            <InputField
              type="email"
              placeHolder="Email address"
              name="email"
              label="Email"
            />
          </div>
        </div>
        <div className="grid-full">
          <div>
            <InputField
              type="text"
              placeHolder="Enter your address"
              name="address"
              label="Address"
            />
          </div>
        </div>
        <div className="grid-two">
          <div>
            <InputField type="text" name="city" label="City" />
          </div>
          <div className="select-field">
            <label htmlFor="country">Country</label>
            <select name="country" id="country">
              <option value="">Country</option>
            </select>
          </div>
        </div>
        <div className="grid-two grid-sec">
          <div>
            <InputField type="text" name="occupation" label="Occupation" />
          </div>
          <div>
            <InputField
              type="text"
              name="company"
              label="Name of business/company"
            />
          </div>
        </div>
        <div className="text-area">
          <label htmlFor="inquiry">
            How did you find out about the Entrepreneur Ambassador Program?
          </label>
          <textarea name="inquiry" id="inquiry" cols="30" rows="10"></textarea>
        </div>
        <div className="text-area">
          <label htmlFor="ambassador">
            Why do you want to be an entrepreneur ambassador of our company?
          </label>
          <textarea
            name="ambassador"
            id="ambassador"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit">Apply</button>
      </form>
    </FormSection>
  );
};

export default EntrepreneurFormComponent;
