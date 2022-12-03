import { Modal, Box, Button } from "@mui/material";
// import Box from '@mui/material';
// import Button from '@mui/material';
import add from "../../assets/add.svg";
import Form from "./EditForm.jsx";

const ModalUi = ({ editOpen, handleEditOpen, handleEditClose, editVal }) => {
  return (
    <>
      {/* <Button
        onClick={handleEditOpen}
        variant="contained"
        disableElevation
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        sx={{ height: 1 / 2 }}
      >
        <span style={{ textTransform: "capitalize" }}>Edit currency</span>
        <img src={add} alt="add" style={{ marginLeft: "10px" }} />
      </Button> */}
      <Modal
        open={editOpen}
        onClose={handleEditClose}
        sx={{
          height: "100vh",

          // border: '1px solid red',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: "500px",
          }}
        >
          <Form handleEditClose={handleEditClose} editVal={editVal} />
        </Box>
      </Modal>
    </>
  );
};

export default ModalUi;
