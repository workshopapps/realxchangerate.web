import React, { useState } from "react";
import { FormSection, MessageModal } from "../style/Application.style";
import leftIcon from "../../../assets/svg/arrow-left.svg";
import InputField from "../../../components/shared/InputField/InputField";
import { Link } from "react-router-dom";
import axios from "axios";

const ApplicationForm = () => {
  const [ambassadorDetails, setAmbassadorDetails] = useState({
    firstName: "",
    lastName: "",
    DOB: "",
    phoneNumber: "",
    email: "",
    address: "",
    city: "",
    country: "",
    schoolName: "",
    courseName: "",
    entryYear: "",
    completionYear: "",
    howDidYouLearnAboutUs: "",
    reasonForApplication: "",
  });
  const {
    firstName,
    lastName,
    DOB,
    phoneNumber,
    email,
    address,
    city,
    country,
    schoolName,
    courseName,
    entryYear,
    completionYear,
    howDidYouLearnAboutUs,
    reasonForApplication,
  } = ambassadorDetails;

  const [statusMessage, setStatusMessage] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  setTimeout(() => setMessage(false), 5000);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAmbassadorDetails({ ...ambassadorDetails, [name]: value });
  };

  const validate = (value) => {
    const errors = {};
    if (!value.firstName) {
      errors.firstName = "First name is required";
    }
    if (!value.last_name) {
      errors.lastName = "Last name is required";
    }
    if (!value.email) {
      errors.email = "Email is required";
    }
    if (!value.DOB) {
      errors.DOB = "DOB is required";
    }
    if (!value.address) {
      errors.address = "address is required";
    }
    if (!value.city) {
      errors.city = "city is required";
    }
    if (!value.schoolName) {
      errors.schoolName = "school name is required";
    }
    if (!value.courseName) {
      errors.courseName = "course name is required";
    }
    if (!value.entryYear) {
      errors.entryYear = "entry year is required";
    }
    if (!value.completionYear) {
      errors.completionYear = "completion year is required";
    }
    if (!value.reasonForApplication) {
      errors.reasonForApplication = "Please give a reason for application";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(validate(ambassadorDetails));
    if (errorMessage) {
      return;
    }

    try {
      const { data } = await axios.post(
        "https://formsubmit.co/ajax/e79cf7c6eade7d5068495853b4cec9dc",
        ambassadorDetails
      );

      if (data.success === "true") {
        setMessage(true);
        setStatusMessage("Your application has been received!");
      }
    } catch (error) {
      setMessage(false);
      error && setStatusMessage("You application was not received, try again!");
    }

    setLoading(false);
    setAmbassadorDetails({
      firstName: "",
      lastName: "",
      DOB: "",
      phoneNumber: "",
      email: "",
      address: "",
      city: "",
      country: "",
      schoolName: "",
      courseName: "",
      entryYear: "",
      completionYear: "",
      howDidYouLearnAboutUs: "",
      reasonForApplication: "",
    });
  };

  return (
    <FormSection>
      <div className="header">
        <Link to="/ambassadors/student-ambassador">
          <img src={leftIcon} alt="" />
        </Link>
        <h2>Student Ambassador Application Form</h2>
      </div>

      {message && (
        <MessageModal>
          <p>{statusMessage}</p>
        </MessageModal>
      )}
      <form>
        <div className="grid-two">
          <div>
            <InputField
              type="text"
              placeHolder="First name"
              name="firstName"
              label="Name"
              value={firstName}
              handleChange={handleChange}
              onBlur={() => setErrorMessage(validate(firstName))}
              errorMessage={!firstName && errorMessage.firstName}
            />
          </div>
          <div>
            <InputField
              type="text"
              placeHolder="Last name"
              name="lastName"
              value={lastName}
              handleChange={handleChange}
              errorMessage={!lastName && errorMessage.lastName}
            />
          </div>
        </div>
        <div className="grid-two">
          <div>
            <InputField
              type="date"
              name="DOB"
              label="Date of birth"
              value={DOB}
              handleChange={handleChange}
              errorMessage={!DOB && errorMessage.DOB}
            />
          </div>
          <div>
            <InputField
              type="text"
              placeHolder="Mobile number"
              name="phoneNumber"
              label="Phone number"
              value={phoneNumber}
              handleChange={handleChange}
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
              value={email}
              handleChange={handleChange}
              errorMessage={!email && errorMessage.email}
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
              value={address}
              handleChange={handleChange}
              errorMessage={!address && errorMessage.address}
            />
          </div>
        </div>
        <div className="grid-two">
          <div>
            <InputField
              type="text"
              name="city"
              label="City"
              value={city}
              handleChange={handleChange}
              errorMessage={!city && errorMessage.city}
            />
          </div>
          <div className="select-field">
            <label htmlFor="country">Country</label>
            <select name="country" id="country">
              <option value={country} handleChange={handleChange}>
                {country}
              </option>
            </select>
          </div>
        </div>

        <div className="grid-full school-section">
          <div>
            <InputField
              type="text"
              placeHolder=""
              name="schoolName"
              label="School name"
              value={schoolName}
              handleChange={handleChange}
              errorMessage={!schoolName && errorMessage.schoolName}
            />
          </div>
        </div>
        <div className="grid-half course-name">
          <div>
            <InputField
              type="text"
              name="courseName"
              label="Name of course"
              value={courseName}
              handleChange={handleChange}
              errorMessage={!courseName && errorMessage.courseName}
            />
          </div>
        </div>
        <div className="grid-two course-year">
          <div>
            <InputField
              type="text"
              name="entryYear"
              label="Year of entry"
              value={entryYear}
              handleChange={handleChange}
              errorMessage={!entryYear && errorMessage.entryYear}
            />
          </div>
          <div>
            <InputField
              type="text"
              name="completionYear"
              label="Year of completion"
              value={completionYear}
              handleChange={handleChange}
              errorMessage={!completionYear && errorMessage.completionYear}
            />
          </div>
        </div>

        <div className="text-area">
          <label htmlFor="howDidYouLearnAboutUs">
            How did you find out about the Student Ambassador Program?
          </label>
          <textarea
            name="howDidYouLearnAboutUs"
            id="howDidYouLearnAboutUs"
            cols="30"
            rows="10"
            value={howDidYouLearnAboutUs}
            onChange={handleChange}
          />
        </div>
        <div className="text-area">
          <label htmlFor="reasonForApplication">
            Why do you want to be an student ambassador of our company?
          </label>
          <textarea
            name="reasonForApplication"
            id="reasonForApplication"
            cols="30"
            rows="10"
            value={reasonForApplication}
            onChange={handleChange}
            errorMessage={errorMessage.reasonForApplication}
          />
          {!reasonForApplication && (
            <p style={{ fontSize: "14px", color: "red", marginTop: "4px" }}>
              {errorMessage.reasonForApplication}
            </p>
          )}
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading & !errorMessage}
        >
          {loading & !errorMessage ? "submitting" : "Apply"}
        </button>
      </form>
    </FormSection>
  );
};

export default ApplicationForm;
