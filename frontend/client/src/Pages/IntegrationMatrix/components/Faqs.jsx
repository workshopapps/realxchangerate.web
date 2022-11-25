import { FaqsHeading, Question, StyledFaqs } from "./styled/Faqs.styled";
import plus from "../assets/500px-Plus_symbol.svg.png";

const Faqs = ({textColor}) => {
  return (
    <StyledFaqs >
      <FaqsHeading >Frequently asked questions</FaqsHeading>
      <Question >
        <p style={{color:textColor}}>What is Street Rate API?</p>
        <img src={plus} alt="plus" />
      </Question>
      <Question>
        <p style={{color:textColor}}>How Secure is Street Rates API?</p>
        <img src={plus} alt="plus" />
      </Question>
      <Question>
        <p style={{color:textColor}}>How do i get started?</p>
        <img src={plus} alt="plus" />
      </Question>
      <Question>
        <p style={{color:textColor}}>How do i go Live?</p>
        <img src={plus} alt="plus" />
      </Question>
    </StyledFaqs>
  );
};

export default Faqs;
