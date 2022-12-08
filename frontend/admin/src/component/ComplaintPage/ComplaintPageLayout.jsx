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
  StyledDeleteNo,
  StyledDeleteQuestion,
  StyledDeleteQuestionWrapper,
  StyledDeleteYes,
  StyledCardDelete,
} from "./ComplaintPage.styled";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneComplaint,
  updateComplaint,
  deleteComplaint,
} from "../../store/actions/complaintsActions";
// import Loader from "../shared/Loader/Loader";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import { ReactComponent as DeleteIcon } from "../../assets/icons/x_icon.svg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  width: "fit-content",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "12px",
  p: 4,
};

function ComplaintPageLayout() {
  const [data, setData] = useState(null);
  const [adminMssg, setAdminMssg] = useState("");
  const [currStatus, setCurrStatus] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const { complaint, loading, deleteStatus } = useSelector(
    (state) => state.complaints
  );

  useEffect(() => {
    // get complaint

    const info = { id: params.id };
    dispatch(getOneComplaint(info));
  }, [dispatch, params.id]);

  useEffect(() => {
    if (complaint?.Success) {
      setData(complaint?.Contacts);
      setCurrStatus(complaint?.Contacts.status);
    }
  }, [complaint]);

  // console.log(complaint);

  if (!complaint?.Success && loading === "failed") {
    toast.error("error fetching complaint");
  }
  if (complaint?.Success && loading === "rejected") {
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

  const handleDelete = () => {
    const info = {
      id: data?.id,
    };

    dispatch(deleteComplaint(info));

    handleClose();

    if (deleteStatus === "success") {
      setTimeout(() => {
        navigate("/admin/complaints");
      }, 2000);
      toast.success(`Complaint #${data?.id} has been deleted`);
    } else if (deleteStatus === "failed") {
      toast.error(`Deletion failed`);
    }
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
    if (currStatus !== data?.status) {
      toast.success(`Complaint ${data?.status}`);
    }
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

      <StyledCardDelete>
        <Button
          onClick={handleOpen}
          variant="outlined"
          startIcon={<DeleteIcon fill="#D32F2F" />}
          color="error"
        >
          Delete
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="confirm delete"
          aria-describedby="modal to confirm delete"
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <StyledDeleteQuestion>
                Confirm this complaint would be deleted
                <StyledDeleteQuestionWrapper>
                  <StyledDeleteYes onClick={handleDelete}>YES</StyledDeleteYes>
                  <StyledDeleteNo onClick={handleClose}>NO</StyledDeleteNo>
                </StyledDeleteQuestionWrapper>
              </StyledDeleteQuestion>
            </Box>
          </Fade>
        </Modal>
      </StyledCardDelete>

      <StyledComplaintForm onSubmit={onSubmit}>
        <StyledGrayWrapper>
          <StyledGrid>
            <div>
              <label htmlFor="name">Name</label>
              <StyledInputWrapper>
                <input
                  style={{ backgroundColor: "inherit" }}
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
                  style={{ backgroundColor: "inherit" }}
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
                style={{ backgroundColor: "inherit" }}
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
                  style={{ backgroundColor: "inherit" }}
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
          <StyledFormButtonCancel
            type="button"
            onClick={() => window.history.go(-1)}
          >
            Cancel
          </StyledFormButtonCancel>
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
