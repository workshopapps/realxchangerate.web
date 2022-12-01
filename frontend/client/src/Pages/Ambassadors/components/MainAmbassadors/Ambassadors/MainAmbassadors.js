import React from "react";
import { AmbassadorsData } from "./data";
import { AmbassadorsImages } from "./MainAmbassadors.styled";

const MainAmbassadors = () => {
  return (
    <AmbassadorsImages>
      {AmbassadorsData.map((ambassador) => {
        return (
          <div key={ambassador.id} xs={3} item>
            <img src={ambassador.image} alt="img" />
            <p className="header">{ambassador.name}</p>
            <p className="title">{ambassador.title}</p>
          </div>
        );
      })}
    </AmbassadorsImages>
  );
};

export default MainAmbassadors;
