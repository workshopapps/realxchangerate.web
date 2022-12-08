import React from "react";
import styled from "styled-components";
import Value from "./components/Value";
import { useTheme, Box } from "@mui/material";
import TeamMember from "./components/TeamMember";
import teamate1 from "./assets/person1.png";
import teamate2 from "./assets/person2.png";
import teamate3 from "./assets/person3.png";
import teamate4 from "./assets/person4.png";
import teamate5 from "./assets/person5.png";
import teamate6 from "./assets/person6.png";
import teamate7 from "./assets/person7.png";
import teamate8 from "./assets/person8.png";
import Header from "./components/Header";
import Mission from "./components/Mission";
import Download from "./components/Download";
const About = () => {
  const teamMember = [
    {
      name: "Isaac Adariku",
      image: teamate1,
      designation: "Mentor",
    },
    {
      name: "Obiekwe Agnes",
      image: teamate2,
      designation: "Program Coordinator",
    },
    {
      name: "Flourish Agnes",
      image: teamate3,
      designation: "Design Lead",
    },
    {
      name: "Folajomi Bello",
      image: teamate4,
      designation: "Design Mentor",
    },
    {
      name: "Mark Essien",
      image: teamate5,
      designation: "Chief Mentor",
    },
    {
      name: "Agwaraonye Cynthia",
      image: teamate6,
      designation: "Marketing Mentor",
    },
    {
      name: "Isaac Adariku",
      image: teamate7,
      designation: "Mentor",
    },
    {
      name: "Folajomi Bello",
      image: teamate8,
      designation: "Design Mentor",
    },
  ];
  const theme = useTheme();
  const DarkMode = theme.palette.mode === "dark";

  const textColor = DarkMode ? "#fff" : "";

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ gap: { xs: "27px", sm: "80px" } }}
        width="100%"
        backgroundColor={DarkMode ? "#00050C" : ""}
      >
      
          <Header />
        

        <Container textColor={textColor}>
          <Mission />
        </Container>

        <Container values={true} textColor={textColor}>
          <Value />
        </Container>
        <Container textColor={textColor}>
          <TeamSection>
            <StyledContent>
              <StyledHead>Meet the Brilliant Team</StyledHead>
              <StyledText>
                Meet our team of digital warriors ready to harness the force for
                good
              </StyledText>
            </StyledContent>
            <TeamMembers>
              {teamMember.map((member) => {
                return (
                  <TeamMember
                    image={member.image}
                    name={member.name}
                    designation={member.designation}
                    key={teamMember.indexOf(member)}
                  />
                );
              })}
            </TeamMembers>
          </TeamSection>
        </Container>
        <Container>
          <Download />
        </Container>
      </Box>
    </>
  );
};

export default About;

const sizes = {
  mobile: "480px",
  tablet: "768px",
  laptopS: "1024px",
  laptop: "1200px",
};

const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptopS: `(max-width: ${sizes.laptop})`,
  laptop: `(max-width: ${sizes.laptop})`,
};

const Container = styled.div`
  background-color: ${(props) => {
    if (props.about) {
      return `
        ${props.darkMode ? "#00050C" :"#00296b"};
        color: #fff;
    `;
    } else if (props.noBg) {
      return `
        
        color: #202020;
    `;
    } else if (props.values) {
      return `
        
        color: #202020;
    `;
    }
  }};

  display: flex;
  width:100%;
  justify-content: center;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 64px;

  @media ${devices.mobile} {
    gap: 16px;
    margin-bottom: 40px;
  }
`;
const StyledHead = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;

  @media ${devices.mobile} {
    font-size: 24px;
    line-height: 32px;
  }
`;
const StyledText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  @media ${devices.mobile} {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.001em;
    text-align: center;
  }
`;

const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  /* color: #202020; */
  font-family: var(--font-family);
  padding: 0px 177px;
  width: 100%;
  @media ${devices.laptop} {
    flex-direction: column;
    padding: 42px 224px;
    align-items: center;
    width: 730px;
  }
  @media ${devices.laptopS} {
    flex-direction: column;
    padding: 42px 44px;
    align-items: center;
    width: auto;
  }
  @media ${devices.tablet} {
    flex-direction: column;
    padding: 42px 44px;
    align-items: center;
    width: auto;
  }
  @media ${devices.mobile} {
    /* flex-direction: column; */
    padding: 13px 44px;
    /* align-items: center; */
    width: auto;
  }
`;

const TeamMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;
  @media ${devices.mobile} {
    width: 330px;
    justify-content: flex-start;
    gap: 30px;
    overflow: hidden;
    overflow-x: scroll;
    flex-wrap: nowrap;
    flex-direction: row;
  }
`;
export const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  align-items: center;
  gap: 16px;
`;
