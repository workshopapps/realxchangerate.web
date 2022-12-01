import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";

import expandIcon from "../../assets/icons/open_plus.svg";
import expandIconClose from "../../assets/icons/close_minus.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/pen_edit.svg";
import DeleteContent from "./DeleteContent";
import EditContent from "./EditContent";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function FaqsCard({ faq }) {
  const [expanded, setExpanded] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card elevation={0} sx={{ maxWidth: "800px", border: "1px solid #CBD5E1" }}>
      <CardHeader
        sx={{
          bgcolor: `${expanded ? "#0062FF" : "white"}`,
          color: `${expanded ? "white" : "black"}`,
        }}
        title={faq.question}
        action={
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <img
              src={expanded ? expandIconClose : expandIcon}
              alt="Expand for more"
            />
          </ExpandMore>
        }
      />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{faq.answer}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <IconButton
            sx={{
              bgcolor: "#EEF5FF",
              p: "1.2rem",
              m: "1rem",
              borderRadius: "1px",
            }}
            onClick={handleOpenEdit}
          >
            {" "}
            <img src={editIcon} alt="edit icon" />{" "}
          </IconButton>
          <IconButton
            onClick={handleOpenDelete}
            sx={{
              bgcolor: "#FFEAEA",
              p: "1.2rem",
              m: "1rem",
              borderRadius: "1px",
            }}
          >
            {" "}
            <img src={deleteIcon} alt="delete icon" />{" "}
          </IconButton>
        </CardActions>
      </Collapse>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openDelete}
        onClose={handleCloseDelete}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <DeleteContent cancel={handleCloseDelete} />
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openEdit}
        onClose={handleCloseEdit}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <EditContent cancel={handleCloseEdit} />
      </Modal>
    </Card>
  );
}
