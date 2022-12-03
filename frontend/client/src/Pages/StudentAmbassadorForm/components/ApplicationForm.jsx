import React from "react";
import { FormSection } from "../style/Application.style";
import leftIcon from "../../../assets/svg/arrow-left.svg";
import InputField from "../../../components/shared/InputField/InputField";
import { Link } from "react-router-dom";

const ApplicationForm = () => {
  return (
    <FormSection>
      <div className="header">
        <Link to="/ambassadors/student-ambassador">
          <img src={leftIcon} alt="" />
        </Link>
        <h2>Student Ambassador Application Form</h2>
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
              placeHolder=""
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

        <div className="grid-full school-section">
          <div>
            <InputField
              type="text"
              placeHolder=""
              name="school name"
              label="School name"
            />
          </div>
        </div>
        <div className="grid-half course-name">
          <div>
            <InputField type="text" name="course name" label="Name of course" />
          </div>
        </div>
        <div className="grid-two course-year">
          <div>
            <InputField type="text" name="entry year" label="Year of entry" />
          </div>
          <div>
            <InputField
              type="text"
              name="completion year"
              label="Year of completion"
            />
          </div>
        </div>

        <div className="text-area">
          <label htmlFor="inquiry">
            How did you find out about the Student Ambassador Program?
          </label>
          <textarea name="inquiry" id="inquiry" cols="30" rows="10"></textarea>
        </div>
        <div className="text-area">
          <label htmlFor="ambassador">
            Why do you want to be an student ambassador of our company?
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

export default ApplicationForm;
