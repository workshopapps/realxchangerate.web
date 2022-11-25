import * as React from "react";
import {
  StyledOption,
  StyledOptionIcon,
  StyledOptions,
  StyledWrapper,
} from "./Notification.styled";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close__icon.svg";
import { ReactComponent as TrendUpIcon } from "../../../assets/icons/trendup.svg";
import { ReactComponent as PeopleIcon } from "../../../assets/icons/people_icon.svg";
import { moneyFormatter } from "../FormatCurrency/FormatCurrency";
import ButtonCustom from "../Button/ButtonCustom";

const data = [
  {
    type: "price",
    market: "P/Harcourt BDC",
    rate: 886,
  },
  {
    type: "price",
    market: "P/Harcourt BDC",
    rate: 886,
  },
  {
    type: "message",
    sender: "Florish",
    message: "Hi, I would like to find out how.....",
  },
  {
    type: "price",
    market: "P/Harcourt BDC",
    rate: 886,
  },
  {
    type: "message",
    sender: "Florish",
    message: "Hi, I would like to find out how.....",
  },
  {
    type: "price",
    market: "P/Harcourt BDC",
    rate: 886,
  },
  {
    type: "price",
    market: "P/Harcourt BDC",
    rate: 886,
  },
  {
    type: "price",
    market: "P/Harcourt BDC",
    rate: 886,
  },
  {
    type: "message",
    sender: "Florish",
    message: "Hi, I would like to find out how.....",
  },
  {
    type: "message",
    sender: "Florish",
    message: "Hi, I would like to find out how.....",
  },
  {
    type: "message",
    sender: "Florish",
    message: "Hi, I would like to find out how.....",
  },
];

function Notifications({ show, close }) {
  // const [state, setState] = React.useState(true);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    // setState(open);
    close(false);
  };

  return (
    <Drawer
      anchor={"right"}
      open={show}
      onClose={() => {
        toggleDrawer(false);
        close(false);
      }}
    >
      <StyledWrapper>
        <div className="top">
          <h3>Notification</h3>
          <Tooltip title="close">
            <IconButton onClick={() => close(false)}>
              <CloseIcon width="24px" height="24px" />
            </IconButton>
          </Tooltip>
        </div>

        <StyledOptions>
          {data.map((item, index) => (
            <StyledOption
              key={index}
              //   data-aos="zoom-in-right"
              //   data-aos-duration="500"
              //   data-aos-mirror="true"
            >
              <StyledOptionIcon
                className={item.type === "price" ? "price" : "message"}
              >
                {item.type === "price" ? <TrendUpIcon /> : <PeopleIcon />}
              </StyledOptionIcon>

              <div className="preview">
                <h3>
                  {item.type === "price" ? "New Price Alert" : item.sender}
                </h3>
                <p>
                  {item.type === "price"
                    ? `${item.market} Rate Now ${moneyFormatter(item.rate)}`
                    : item.message}
                </p>
              </div>

              <div className="btn">
                <ButtonCustom>
                  {item.type === "price" ? "Update Price" : "Reply"}
                </ButtonCustom>
              </div>
            </StyledOption>
          ))}
        </StyledOptions>
      </StyledWrapper>
    </Drawer>
  );
}

export default Notifications;
