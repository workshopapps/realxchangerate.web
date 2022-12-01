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
      name: "Person name",
      image: teamate1,
      designation: "designation",
    },
    {
      name: "Person name",
      image: teamate2,
      designation: "designation",
    },
    {
      name: "Person name",
      image: teamate3,
      designation: "designation",
    },
    {
      name: "Person name",
      image: teamate4,
      designation: "designation",
    },
    {
      name: "Person name",
      image: teamate5,
      designation: "designation",
    },
    {
      name: "Person name",
      image: teamate6,
      designation: "designation",
    },
    {
      name: "Person name",
      image: teamate7,
      designation: "designation",
    },
    {
      name: "Person name",
      image: teamate8,
      designation: "designation",
    },
  ];
  const theme = useTheme();
  const DarkMode = theme.palette.mode === "dark";

  const textColor = DarkMode ? "#fff" : "";

  return (
    <>
      <StyledPage>
        <Container about textColor={textColor}>
          <Header />
        </Container>

        <Container textColor={textColor}>
          <Mission />
        </Container>

        <Container values textColor={textColor}>
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
                  />
                );
              })}
            </TeamMembers>
          </TeamSection>
        </Container>
        <Container>
          <Download />
        </Container>
      </StyledPage>
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
const StyledPage = styled.div``;

const Container = styled.div`
  background-color: ${(props) => {
    if (props.about) {
      return `
        #00296b;
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
  justify-content: center;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
`;
const StyledHead = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 24px;

  @media ${devices.mobile} {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 15px;
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
  }
`;

const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  /* color: #202020; */
  font-family: var(--font-family);
  padding: 80px 177px;
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
    padding: 42px 44px;
    /* align-items: center; */
    width: auto;
  }
`;

const TeamMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 44px;
  justify-content: center;
  @media ${devices.mobile} {
    gap: 30px;
  }
`;
export const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  align-items: center;
  gap: 16px;
`;

