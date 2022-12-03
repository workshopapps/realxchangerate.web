import React from "react";
import { StyledWrapper, StyledGrid, StyledFaq } from "./FaqOverview.styled";
import { ReactComponent as SearchIcon } from "./assets/icons/search.svg";

function FaqOverview() {
  return (
    <StyledWrapper>
      <StyledGrid>
        <StyledFaq>
          <h3>FAQ</h3>
          <p>Have any questions? We are here to help.</p>
          <div className="search">
            <div className="icon">
              <SearchIcon />
            </div>
            <input type="text" placeholder="Search FAQs" />
            <button>Search</button>
          </div>
        </StyledFaq>
      </StyledGrid>
    </StyledWrapper>
  );
}

export default FaqOverview;
