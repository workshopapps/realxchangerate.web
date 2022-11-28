import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import IconButton from "@mui/material/IconButton";
import {
  SearchWrapper,
  StyledSearchIconWrapper,
  StyledSearchInput,
} from "./HeaderSearch.styled";

export default function Search() {
  return (
    <SearchWrapper>
      <StyledSearchInput placeholder="Search" />

      <StyledSearchIconWrapper>
        <IconButton
          size="small"
          aria-label="search"
          sx={{ borderRadius: 0, paddingInline: "5px" }}
        >
          <SearchIcon fontSize="small" size="small" />
        </IconButton>
      </StyledSearchIconWrapper>
    </SearchWrapper>
  );
}
