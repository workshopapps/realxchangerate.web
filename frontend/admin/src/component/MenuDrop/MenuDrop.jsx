import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import more from "../../assets/more.svg";
import plus from "../../assets/plus.svg";
import del from "../../assets/delete.svg";
import create from "../../assets/create.svg";
import axios from "axios";

function MenuDrop({ handleOpen, handleEditOpen, setRowData, rowData }) {
  const [drop, setDrop] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const anchorOpen = Boolean(anchorEl);
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `https://api.streetrates.hng.tech/api/admin/delete_currency?isocode=${rowData.isocode}`,

        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Currency Deleted");
      window.location.reload();
      return response;
    } catch (err) {
      console.error(err);
    }
  };
  const handleAnchorClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAnchorClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <MenuDropDown>
        {/* <IconButton
          onClick={() => {
            setDrop(!drop);
          }}
        >
          <img src={more} alt="options" />
        </IconButton> */}
        <IconButton onClick={(e) => handleAnchorClick(e)}>
          <img src={more} alt="options" />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={anchorOpen}
          onClose={handleAnchorClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleAnchorClose}>
            {" "}
            <Option
              onClick={() => {
                setDrop(false);
                handleEditOpen(true);
                setRowData(rowData);
              }}
            >
              <img src={create} alt="" />
              Edit Currency
            </Option>
          </MenuItem>
          <MenuItem onClick={handleAnchorClose}>
            {" "}
            <Option
              onClick={() => {
                setDrop(false);
                handleOpen(true);
              }}
            >
              <img src={plus} alt="" />
              Add Currency
            </Option>
          </MenuItem>
          <MenuItem onClick={handleAnchorClose}>
            <Option
              onClick={() => {
                setDrop(false);
                handleDelete();
              }}
            >
              <img src={del} alt="delete" />
              Delete Currency
            </Option>
          </MenuItem>
        </Menu>
        {drop && (
          <DropDown>
            <div className="items"></div>
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
  z-index: 999;
  margin-bottom: 30px;
  top: -10px;
  left: -10px;
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
