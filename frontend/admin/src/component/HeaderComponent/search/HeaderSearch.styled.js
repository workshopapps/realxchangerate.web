import styled from "styled-components";

export const SearchWrapper = styled.div`
  padding: 0px 0px 0px 16px;

  display: flex;
  width: 80%;
  max-width: 400px;
  margin: auto;
  align-items: center;
  gap: 2px;

  border: 1.3px solid ${(props) => props.theme.$styled.colors.text400};
  border-radius: ${(props) => props.theme.$styled.borderRadius.sm};

  &:hover {
    /* box-shadow: 0 0 0 .15vw rgba(135, 207, 235, 0.186); */
    border: 1.3px solid ${(props) => props.theme.$styled.colors.text600};
  }

  @media (min-width: ${(props) => props.theme.$styled.breakpoints.md}) {
    max-width: 660px;
    margin: 0;
  }
`;

export const StyledSearchIconWrapper = styled.div`
  cursor: pointer;

  &:active svg {
    transform: scale(0.95);
  }
`;

export const StyledSearchInput = styled.input.attrs({
  type: "text",
})`
  background-color: inherit;
  color: ${(props) => props.theme.$styled.colors.tex600};

  display: inline-block;

  width: 100%;
  border: 0;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.001em;

  &:focus {
    border: 0;
    outline: 0;
  }

  // @media (min-width: ${(props) => props.theme.$styled.breakpoints.md}) {
  //   min-width: 205px;
  // }
  // @media (min-width: ${(props) => props.theme.$styled.breakpoints.lg}) {
  //   &:focus {
  //     width: 360px;
  //   }
  // }
`;
