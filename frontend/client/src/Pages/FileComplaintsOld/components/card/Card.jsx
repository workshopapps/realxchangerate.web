import React from "react";
import CardWrapper from "./card.styles";
import { data } from "./data";

const Card = ({textColor}) => {
  return (
    <CardWrapper>
      <div className="card-wrapper">
        {data.map(({id, title, img, desc}) => (
          <div key={id} className="card-container">
            <div className="wrapper">
              <img src={img} alt="" />
              <h1>{title}</h1>
              <p style={{color:textColor}}>
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
};

export default Card;
