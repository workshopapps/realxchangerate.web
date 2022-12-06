import React, { useState } from "react";
import table from '../assets/Frame 68.png'
import { CurrencyContainer, Table, Header, Image } from "./EnStatStyles";
import { stat } from "../../../Currency/data/data";

const EnStat = () => {
  const [data, setData] = useState(stat)
  return (
    <CurrencyContainer>
      <Header>Canadian Dollar Stat</Header>

      <Table>
        {
          data.slice(0,2).map(item => {
            return (item.id === 2) ? <div className="list" key={item.id}>
              <span>{item.title}</span>
              <span>{item.value}</span>
            </div> : <div className="header" key={item.id}>
              <span>{item.title}</span>
              <span>{item.value}</span>
            </div>
          })
        }
        {
          data.slice(2,7).map(item => {
            return (item.id === 3 || item.id === 4) ? <div key={item.id}>
                <span>{item.title}</span>
                <span>
                  <Image src={item.value} alt='' />
                </span>
              </div>
            :
            <div key={item.id}>
              <span>{item.title}</span>
              <span>{item.value}</span>
            </div>
          })
        }
      </Table>
    </CurrencyContainer>
  );
};

export default EnStat;
