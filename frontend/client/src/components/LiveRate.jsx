import React from "react";
import styled from "styled-components";
import { CountrySort } from "./";

const LiveRate = () => {
  const Wrapper = styled.div`
    padding: 0 80px;
    margin: 70px 0;
    width: 100%;
    div {
      width: 595px;
      h5 {
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #0062ff;
        font-weight: 400;
      }

      h2 {
        font-size: 2rem;
        font-weight: 800;
        margin-bottom: 50px;
      }
    }

    .table {
      display: flex;
      width: 100%;

      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .action {
          border: 2px solid #0062ff;
          color: #0062ff;
          font-weight: 700;
          background: transparent;
          padding: 15px 100px;
          border-radius: 5px;
        }
      }
    }
  `;

  return (
    <Wrapper>
      <div>
        <h5>live rates</h5>
        <h2>Live rates of every currency around the world</h2>
      </div>
      <div className="table">
        <div>
          <CountrySort />
          <button className="action">Edit</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default LiveRate;
