import { useState, useEffect } from "react";
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
  StyledGrayWrapper,
} from "./ComplaintPage.styled";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useDispatch, useSelector } from "react-redux";
import { getComplaints } from "../../store/actions/complaintsActions";
import Loader from "../shared/Loader/Loader";

// const testData = {
//   full_name: "Rapha Paula",
//   complaint: `Hi, I noticed that it’s a bit hard for me to toggle between currencies when using the convert feature, please can this be checked and possibly worked on? I would like to perform a lot of transactions which rely on my use of the convert feature on the web app.`,
//   id: 123,
//   email: "raphaPaula@gmail.com",
//   status: "Resolved",
//   timestamp: "2022-12-01T02:21:29.653125",
// };

function ComplaintPageLayout() {
  const [data, setData] = useState(null);
  const params = useParams();

  const dispatch = useDispatch();
  const { complaints } = useSelector((state) => state.complaints);

  useEffect(() => {
    // get all complaints
    dispatch(getComplaints());
  }, [dispatch]);

  useEffect(() => {
    // find particular complaint
    if (complaints?.success) {
      const id = parseInt(params.id);
      let issue = complaints.complaints.find((item) => item.id === id);

      setData(issue);
    }
  }, [complaints, params.id]);

  // const onMutate = (e) => {
  //   setData((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

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

  if (!complaints || !data) return <Loader />;

  return (
    <StyledWrapper>
      <StyledPageHeader>
        <BackButton />
        <h3>Complaint #{params.id}</h3>
      </StyledPageHeader>

      <StyledComplaintForm>
        <StyledGrayWrapper>
          <StyledGrid>
            <div>
              <label htmlFor="name">Name</label>
              <StyledInputWrapper>
                <input
                  disabled
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={data.full_name}
                />
              </StyledInputWrapper>
            </div>

            <div>
              <label htmlFor="name">Email</label>
              <StyledInputWrapper>
                <input
                  disabled
                  type="email"
                  id="name"
                  name="name"
                  value={data.email}
                />
              </StyledInputWrapper>
            </div>
          </StyledGrid>

          <StyledGrid>
            <div>
              <label htmlFor="complaint">Complaint</label>
              <StyledTextArea
                disabled
                rows="4"
                id="complaint"
                name="complaint"
                defaultValue={data.complaint}
              ></StyledTextArea>
            </div>

            <div>
              <label htmlFor="id">Complaint Number</label>
              <StyledInputWrapper>
                <input
                  disabled
                  type="text"
                  id="id"
                  name="id"
                  value={`#${data.id}`}
                />
              </StyledInputWrapper>
            </div>
          </StyledGrid>
        </StyledGrayWrapper>

        <h3>Resolve complaint</h3>
        <StyledGrid>
          <div>
            <label htmlFor="message">Message</label>
            <StyledTextArea
              rows="4"
              id="message"
              name="message"
              // onChange={onMutate}
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
              value="Unresolved"
              // onChange={onMutate}
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
