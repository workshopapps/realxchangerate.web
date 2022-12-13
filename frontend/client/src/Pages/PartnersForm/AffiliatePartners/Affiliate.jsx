import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Assets/Logo.png";
import { nations } from "./data";
import { addPartner } from "./database";
import { Link, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Affiliate = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [business, setBusiness] = useState("");
  const [website, setWebsite] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState(nations);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // <Response>
  //   <p>Your form has been successfully submitted.</p>
  //   <button className="btn" onClick={() => navigate("/")}>
  //     Return Home
  //   </button>
  // </Response>

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      firstname: firstname,
      lastname: lastname,
      birthdate: dob,
      phoneNumber: phone,
      email: email,
      address: address,
      city: city,
      business: business,
      website: website,
      title: title,
      message: message,
      country: country,
    };
    setLoading(true);
    addPartner("affiliate", data)
      .then((message) => {
        setLoading(false);
        navigate("/partnerships");
      })
      .catch((error) => {
        setLoading(true);
        console.log(error);
        setLoading(false);
        setError(true);
      });
  };
  return (
    <Container>
      <StyledHero>
        <div className="header">
          <img src={Logo} alt="StreetRate" />
          <p>StreetRate Affiliate Partner Application</p>
        </div>
      </StyledHero>

      <StyledSection>
        <div className="main">
          <form onSubmit={handleSubmit}>
            <div className="personal-details">
              <div className="name">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    placeholder="First name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Last name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>

              <div className="birth-and-contact">
                <div>
                  <label htmlFor="birthdate">Date of Birth</label>
                  <input
                    required
                    type="date"
                    name="birthdate"
                    id="birthdate"
                    placeholder="DD/MM/YYYY"
                    onSelect={(e) => setDob(e.target.value)}
                    style={{ textTransform: "uppercase" }}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone number</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="location">
              <div className="address">
                <label htmlFor="address">Address</label>
                <input
                  required
                  type="text"
                  name="address"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="location-details">
                <div>
                  <label htmlFor="city">City</label>
                  <input
                    required
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="country">Country</label>
                  <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    {countries.map((country, index) => {
                      return (
                        <>
                          <option key={index}>{country}</option>
                        </>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>

            <div className="business">
              <div className="company">
                <label htmlFor="business">Business Name</label>
                <input
                  type="text"
                  name="business"
                  id="business"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                />
              </div>
              <div className="others">
                <div className="website">
                  <label htmlFor="website">Website/LinkedIn</label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div className="title">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="content">
              <label htmlFor="objective">
                Why are you looking to work with StreetRates
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="submission">
              {loading && <CircularProgress sx={{ m: "0 auto" }} />}
              <button className="btn" type="submit">
                Apply
              </button>
            </div>
          </form>
        </div>
      </StyledSection>
    </Container>
  );
};

export default Affiliate;

const Container = styled.div`
  max-width: 1440px;
  margin: auto;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const StyledHero = styled.div`
  .header {
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    align-items: center;
    padding: 56px 0px;
    gap: 24px;
    background: #e6efff;
    width: 100%;
    height: 299px;
  }

  .header p {
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #0f172a;
  }

  @media screen and (min-width: 768px) {
    .header {
      flex-direction: row;
      justify-content: center;
    }
  }
`;

const StyledSection = styled.div`
  .main {
    max-width: 100%;
    padding: 20px;
    margin-bottom: 80px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
  }

  .personal-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    gap: 24px;
    width: 100%;
  }

  .name,
  .name div,
  .birth-and-contact,
  .location-details,
  .birth-and-contact div,
  .email,
  .location,
  .address,
  .location-details div,
  .business,
  .business div,
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
  }

  input,
  select,
  textarea {
    width: inherit;
    padding: 8px;
  }

  textarea {
    resize: none;
    height: 120px;
  }

  textarea: -webkit-scrollbar {
    display: none;
  }

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.001em;
    color: #334155;
  }

  .btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 125px;
    height: 48px;
    background: #0062ff;
    border-radius: 4px;
    border: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #f8fafc;
  }

  .btnDisabled {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 125px;
    height: 48px;
    // background: #0062FF;
    border-radius: 4px;
    border: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    // color: #F8FAFC;
  }

  @media screen and (min-width: 768px) {
    .main {
      padding: 30px 40px;
    }

    .form {
      gap: 100px;
    }

    .name,
    .birth-and-contact,
    .location-details,
    .business > div:last-child {
      flex-direction: row;
      align-items: flex-end;
      gap: 100px;
    }

    .email input {
      width: 304px;
    }

    label {
      font-size: 18px;
      line-height: 24px;
    }

    .btn {
      width: 160px;
      height: 56px;
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media screen and (min-width: 1024px) {
    .main {
      padding: 40px 100px;
    }

    textarea {
      height: 196px;
    }
  }
`;

const Response = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 50px;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    text-align: center;
  }

  .btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 125px;
    height: 48px;
    background: #0062ff;
    border-radius: 4px;
    border: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #f8fafc;
  }

  @media screen and (min-width: 768px) {
    height: 85vh;
    p {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1024px) {
    height: 95vh;
  }
`;
