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

  setTimeout(() => setMessage(false), 5000);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAmbassadorDetails({ ...ambassadorDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
            />
          </div>
          <div>
            <InputField
              type="text"
              placeHolder="Last name"
              name="lastName"
              value={lastName}
              handleChange={handleChange}
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
            />
          </div>
          <div>
            <InputField
              type="text"
              name="completionYear"
              label="Year of completion"
              value={completionYear}
              handleChange={handleChange}
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
          />
        </div>

        <button type="submit" onClick={handleSubmit} disabled={loading}>
          {loading ? "submitting" : "Apply"}
        </button>
      </form>
    </FormSection>
  );
};

export default ApplicationForm;
