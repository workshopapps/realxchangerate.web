import React from "react";
import globe from "../assets/globe.png";
import styled from "styled-components";
import CountrySort from "../CountrySort";

function EnCurrency() {
  return (
    <Parent>
          <Header>
            <div className="header">
              <h3>World Currency Encyclopedia</h3>
              <p className="p">
                Street rates Encyclopedia allows you check every countries
                exchange rates, currency facts and more.
              </p>
              <div className="sort">
                <CountrySort />
              </div>
              <div>
                <img src={globe} alt="" />
              </div>
            </div>
          </Header>
    </Parent>
  );
}

export default EnCurrency;

const Parent = styled.div`
  max-width: 1440px;
  background: #FFFFFF;;
  height: auto
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Header = styled.div`
  .header {
    font-family: 'Inter';
    font-style: normal;
    color: #0F172A;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: between;
    height: 565px;
    width: 100%;
    padding: 30px;
  }

  h3 {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    text-align: center
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center
  }

  .sort {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 14px 12px;
    gap: 12px;
    width: 290px;
    height: 52px;
    border: 1px solid #CBD5E1;
    border-radius: 4px;
  }

  img {
    width: 152px;
    // height: 153.59px;
  }
`

const Right = styled.div`

`
