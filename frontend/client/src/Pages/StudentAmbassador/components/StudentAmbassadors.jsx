import React from "react";
import {
  StudentAmbassadorsContainer,
  StudentAmbassadorsSection,
} from "../style/StudentAmbassador.styled";
import AMBASSADORS from "./ambassadorData";
import { useTheme } from "@mui/material";

const StudentAmbassadors = () => {
  const theme = useTheme();
  const DarkMode = theme.palette.mode === "dark";
  const color = DarkMode ? "#fff" : "#0F172A";

  return (
    <StudentAmbassadorsSection color={color}>
      <h2>Meet our student ambassadors</h2>
      <StudentAmbassadorsContainer color={color}>
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
