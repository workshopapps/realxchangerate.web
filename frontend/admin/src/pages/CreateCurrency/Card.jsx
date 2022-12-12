import React from "react";
import { Container } from "./cardStyles";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import createIcon from '../../assets/create_new.svg';

const Card = ({ title, desc, link, loc, img, bg }) => {
  return (
    <Container bg={bg}>
      <div className="integration_info">
        <div className="type">
          <div className="type__header">
            <h2>{title}</h2>
            <img src={img} alt="" />
          </div>
          <p>{desc}</p>
          <Link to={loc}>
            <CardBtn>{link}</CardBtn>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Card;

const CardBtn = styled.button`
  outline: none;
  cursor: pointer;
  margin-top: 40px;
  border: none;
  background: transparent;
  border: 1.5px solid #0062ff;
  padding: 14px 16px;
  width: 100%;
  font-size: 16px;
  border-radius: 8px;
  font-weight: 400;
  color: #0062ff;
`;
