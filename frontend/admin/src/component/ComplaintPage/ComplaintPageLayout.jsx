import { useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../shared/BackButton/BackButton";
import {
  StyledComplaintForm,
  StyledInputWrapper,
  StyledPageHeader,
  StyledGrid,
  StyledWrapper,
  StyledTextArea,
  StyledButtonWrapper,
  StyledFormButtonSubmit,
  StyledFormButtonCancel,
} from "./ComplaintPage.styled";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";

const initialDataState = {
  id: "08213",
  name: "Rapha Paula",
  complaint: `Hi, I noticed that it’s a bit hard for me to toggle between currencies when using the convert feature, please can this be checked and possibly worked on? I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.`,
  email: "RaphaPaula@gmail.com",
  message: `Hi, I noticed that it’s a bit hard for me to toggle between currencies when using the convert feature, please can this be checked and possibly worked on? I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.`,
  status: "Unresolved",
};

function ComplaintPageLayout() {
  const [data, setData] = useState(initialDataState);
  const params = useParams();

  // TODO: useEffect to fetch data by id, then set state to data

  const onMutate = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <StyledWrapper>
      <StyledPageHeader>
        <BackButton />
        <h3>Complaint #{params.id}</h3>
      </StyledPageHeader>

      <StyledComplaintForm>
        <StyledGrid>
          <div>
            <label htmlFor="name">Name</label>
            <StyledInputWrapper>
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={onMutate}
              />
            </StyledInputWrapper>
          </div>

          <div>
            <label htmlFor="name">Email</label>
            <StyledInputWrapper>
              <input
                type="email"
                id="name"
                name="name"
                value={data.email}
                onChange={onMutate}
              />
            </StyledInputWrapper>
          </div>
        </StyledGrid>

        <StyledGrid>
          <div>
            <label htmlFor="complaint">Complaint</label>
            <StyledTextArea
              rows="4"
              id="complaint"
              name="complaint"
              onChange={onMutate}
              defaultValue={data.complaint}
            ></StyledTextArea>
          </div>

          <div>
            <label htmlFor="id">Complaint Number</label>
            <StyledInputWrapper>
              <input
                type="text"
                id="id"
                name="id"
                value={`#${data.id}`}
                onChange={onMutate}
              />
            </StyledInputWrapper>
          </div>
        </StyledGrid>

        <h3>Resolve complaint</h3>
        <StyledGrid>
          <div>
            <label htmlFor="message">Message</label>
            <StyledTextArea
              rows="4"
              id="message"
              name="message"
              onChange={onMutate}
              defaultValue={data.message}
            ></StyledTextArea>
          </div>

          <div>
            <label htmlFor="status">Set Complaint Status</label>

            <Select
              fullWidth
              displayEmpty
              sx={{ border: "1px solid #CBD5E120" }}
              input={<OutlinedInput />}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
              id="status"
              name="status"
              value={data.status}
              onChange={onMutate}
            >
              <MenuItem id="status" value="Closed">
                Closed
              </MenuItem>
              <MenuItem id="status" value="Resolved">
                Resolved
              </MenuItem>
              <MenuItem id="status" value="Still in Review">
                Still in Review
              </MenuItem>
              <MenuItem id="status" value="Unresolved">
                Unresolved
              </MenuItem>
            </Select>
          </div>
        </StyledGrid>

        <StyledButtonWrapper>
          <StyledFormButtonCancel>Cancel</StyledFormButtonCancel>
          <StyledFormButtonSubmit>Save Changes</StyledFormButtonSubmit>
        </StyledButtonWrapper>
      </StyledComplaintForm>
    </StyledWrapper>
  );
}

export default ComplaintPageLayout;
