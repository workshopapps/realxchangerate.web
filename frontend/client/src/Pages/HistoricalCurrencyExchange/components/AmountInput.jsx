import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  Skeleton,
} from "@mui/material";
import { DownArrow } from "../assets";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { countries } from "../../../utils/data";

const AmountInput = ({ amount, setAmount, defaultCurrency }) => {
  const { currencyList, isNavLoading } = useSelector((state) => state.service);
  const [currentCurrency, setCurrentCurrency] = useState(null);
  const [loading, setLoading] = useState(true);
  const TextInput = {
    border: "none",
    padding: "3px",
    width: "90%",
    "::focus": {
      border: "none",
    },
    "::blur": {
      border: "none",
    },
    height: "25px",
    backgroundColor: "inherit",
    color: "inherit",
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseItem = (ele) => {
    setAnchorEl(null);
    setCurrentCurrency(ele);
  };

  useEffect(() => {
    if (currentCurrency === null) {
      const DefaultCurrency = JSON.parse(
        sessionStorage.getItem("localCurrency")
      );
      setCurrentCurrency(DefaultCurrency);
    }
    setCurrentCurrency(defaultCurrency);
    setLoading(false);
  }, [defaultCurrency]);

  return (
    <Box
      display="flex"
      flexDirection="row"
      border="1px solid #9B9DFD"
      justifyContent="space-between"
      alignItems="center"
      height="44px"
      borderRadius="6px"
      sx={{
        width: { xs: "100%", sm: "33%" },
        gap: { sm: "2px", md: "8px", xl: "10px" },
        padding: {
          xs: "10px 12px",
          sm: "2px 3px",
          md: "5px 6px",
          xl: "10px 12px",
        },
      }}
    >
      <Box display="flex" width="50%" gap="5px" alignItems="center">
        <input
          type="text"
          placeholder="Amount"
          style={TextInput}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Box>

      <Box
        display="flex"
        sx={{
          gap: { xs: "8px", sm: "10px" },
        }}
        justifyContent="center"
        alignItems="center"
      >
        {loading ? (
          <Box display="flex" gap="1px" flexDirection="column">
            <Skeleton variant="rounded" width={70} height={5} />
            <Skeleton variant="rounded" width={70} height={5} />
            <Skeleton variant="rounded" width={70} height={5} />
          </Box>
        ) : (
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Box display="flex" flexDirection="row" gap="6px">
              <img
                loading="lazy"
                height="20"
                src={
                  currentCurrency
                    ? `https://flagcdn.com/h20/${currentCurrency.code.toLowerCase()}.png `
                    : ""
                }
                srcSet={
                  currentCurrency
                    ? `https://flagcdn.com/h40/${currentCurrency.code.toLowerCase()}.png 2x,
                     https://flagcdn.com/h60/${currentCurrency.code.toLowerCase()}.png 3x`
                    : ""
                }
                alt=""
              />
              <img src={DownArrow} height={20} width={20} alt="arrow" />
            </Box>
          </Button>
        )}

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => handleClose()}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          width="120px"
          sx={{
            height: "auto",
          }}
        >
          {currencyList.map((ele) => {
            let image = countries.find((x) => ele.country === x.label);
            return (
              <MenuItem
                sx={{
                  display: "flex",
                  gap: "6px",
                  flexDirection: "row",
                }}
                onClick={() => handleCloseItem(image)}
                key={ele.isocode}
              >
                {image && (
                  <>
                    {" "}
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${image.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${image.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    <Typography marginRight="5px">{ele.isocode}</Typography>{" "}
                  </>
                )}
              </MenuItem>
            );
          })}
        </Menu>
      </Box>
    </Box>
  );
};

AmountInput.propTypes = {
  flag: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  setAmount: PropTypes.func.isRequired,
};

export default AmountInput;
