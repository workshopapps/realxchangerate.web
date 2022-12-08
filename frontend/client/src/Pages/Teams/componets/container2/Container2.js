import React from "react";
import { useState } from "react";
import { LeadTeamHeading } from "./styles/LeadTeamHeading.style";
import { LeadMembers } from "./styles/LeadMembers.style";
import LeadMemberCard from "./LeadMemberCard";
import { Container } from "./styles/Container.style";
import mark from "../../assets/LeadTeam_img/mark.png";
import naza from "../../assets/LeadTeam_img/naza.png";
import folajomi from "../../assets/LeadTeam_img/folajomi.png";
import cynthia from "../../assets/LeadTeam_img/cynthia.png";
import isaac from "../../assets/LeadTeam_img/isaac.png";

const Container2 = () => {
  const [LeadName, setName] = useState("Cynthia Agwaraonye");

  const changeName = () => {
    window.innerWidth <= 768
      ? setName("Cynthia A.")
      : setName("Cynthia Agwaraonye");
  };
  window.addEventListener("resize", changeName);
  return (
    <>
      <Container>
        <LeadTeamHeading>The Leadership Team</LeadTeamHeading>
        <LeadMembers>
          <LeadMemberCard
            img={mark}
            MemberName="Mark Essien"
            MemberPosition="CEO/Founder"
          />
          <LeadMemberCard
            img={naza}
            MemberName="Chinaza Obiekwe"
            MemberPosition="COO/Co-Founder"
          />
          <LeadMemberCard
            img={cynthia}
            MemberName={LeadName}
            MemberPosition="Chief Marketing Officer"
          />
          <LeadMemberCard
            img={folajomi}
            MemberName="Folajomi Bello"
            MemberPosition="Chief Product Officer"
          />
          <LeadMemberCard
            img={isaac}
            MemberName="Isaac Adariku"
            MemberPosition="Chief Technology Officer"
          />
        </LeadMembers>
      </Container>
    </>
  );
};

export default Container2;
