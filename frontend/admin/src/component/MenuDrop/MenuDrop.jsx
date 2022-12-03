import { IconButton } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import more from "../../assets/more.svg";
import plus from "../../assets/plus.svg";
import del from "../../assets/delete.svg";
import create from "../../assets/create.svg";

function MenuDrop({ handleOpen, handleEditOpen }) {
  const [drop, setDrop] = useState(false);
  return (
    <>
      <MenuDropDown>
        <IconButton
          onClick={() => {
            setDrop(!drop);
          }}
        >
          <img src={more} alt="options" />
        </IconButton>
        {drop && (
          <DropDown>
            <div className="items">
              <Option
                onClick={() => {
                  setDrop(false);
                  handleEditOpen(true);
                }}
              >
                <img src={create} alt="" />
                Edit Currency
              </Option>
              <Option
                onClick={() => {
                  setDrop(false);
                  handleOpen(true);
                }}
              >
                <img src={plus} alt="" />
                Add Currency
              </Option>
              <Option
                onClick={() => {
                  setDrop(false);
                }}
              >
                <img src={del} alt="delete" />
                Delete Currency
              </Option>
            </div>
          </DropDown>
        )}
      </MenuDropDown>
    </>
  );
}

export default MenuDrop;
const MenuDropDown = styled.div`
  position: relative;
`;

const DropDown = styled.div`
  position: absolute;
  background-color: white;
  /* bottom: 20px; */
  padding: 24px 16px;
  .items {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  z-index: 90;
  width: 180px;
  right: 10px;
  height: 188px;
`;

const Option = styled.div`
  display: flex;
  cursor: pointer;
  gap: 12px;
  align-items: center;

  &:last-child {
    color: #ef4444;
  }
`;
