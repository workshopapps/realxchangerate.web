import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { ReactComponent as BackIcon } from "../../../assets/icons/arrow_back.svg";

function BackButton() {
  return (
    <Tooltip title="Back">
      <IconButton onClick={() => window.history.go(-1)}>
        <BackIcon />
      </IconButton>
    </Tooltip>
  );
}

export default BackButton;
