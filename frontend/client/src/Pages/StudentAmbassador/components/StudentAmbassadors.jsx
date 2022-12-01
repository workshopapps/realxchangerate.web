import React from "react";
import {
  StudentAmbassadorsContainer,
  StudentAmbassadorsSection,
} from "../style/StudentAmbassador.styled";
import AMBASSADORS from "./ambassadorData";

const StudentAmbassadors = () => {
  return (
    <StudentAmbassadorsSection>
      <h2>Meet our student ambassadors</h2>
      <StudentAmbassadorsContainer>
        {AMBASSADORS.map(({ image, name, role }, index) => {
          return (
            <div key={index}>
              <div className="image-container">
                <img src={image} alt={name} />
              </div>
              <div>
                <h3>{name}</h3>
                <span>{role}</span>
              </div>
            </div>
          );
        })}
      </StudentAmbassadorsContainer>
    </StudentAmbassadorsSection>
  );
};

export default StudentAmbassadors;
