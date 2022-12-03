import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import {
  getComplaints,
  updateComplaint,
} from "../../store/actions/complaintsActions";
// import Loader from "../shared/Loader/Loader";
import { toast } from "react-toastify";

function ComplaintPageLayout() {
  const [data, setData] = useState(null);
  const [adminMssg, setAdminMssg] = useState("");
  const params = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { complaints, loading } = useSelector((state) => state.complaints);

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

  if (!complaints && loading === "failed") {
    toast.error("error fetching complaints");
  }
  if (complaints && loading === "rejected") {
    toast.error("update failed");
  }

  const onMutate = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAdminMssg = (e) => {
    setAdminMssg(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (adminMssg) {
      setAdminMssg("");
      toast.success(`Complaint ${data?.status.toLowerCase()}`);
    }

    const info = {
      id: data?.id,
      status: data?.status,
    };

    dispatch(updateComplaint(info));
    // if (loading !== "rejected") {
    //   navigate("/admin/complaints");
    // }
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

      <StyledComplaintForm onSubmit={onSubmit}>
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
                  value={data?.full_name}
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
                  value={data?.email}
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
                defaultValue={data?.complaint}
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
                  value={`#${data?.id}`}
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
              onChange={handleAdminMssg}
              value={adminMssg}
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
              value={data?.status ? data?.status : "unresolved"}
              onChange={onMutate}
            >
              {/* <MenuItem id="status" value="Closed">
                Closed
              </MenuItem> */}
              <MenuItem id="status" value="resolved">
                Resolved
              </MenuItem>
              <MenuItem id="status" value="in review">
                Still in Review
              </MenuItem>
              <MenuItem id="status" value="unresolved">
                Unresolved
              </MenuItem>
            </Select>
          </div>
        </StyledGrid>

        <StyledButtonWrapper>
          <StyledFormButtonCancel>Cancel</StyledFormButtonCancel>
          <StyledFormButtonSubmit
            onClick={onSubmit}
            disabled={!data ? true : false}
          >
            Save Changes
          </StyledFormButtonSubmit>
        </StyledButtonWrapper>
      </StyledComplaintForm>
    </StyledWrapper>
  );
}

export default ComplaintPageLayout;
