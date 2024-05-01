"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { FaUserCog, FaPowerOff } from "react-icons/fa";
import { Stack, Button, Slider } from "@mui/material";
import { useGlobalHooks } from "@/Components/context";
import Link from "next/link";

export function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseTab = () => {
    setAnchorEl(null);
  };
  const shutDown = () => {
    window.close();
  };
  const { handleAdmin, handleClose } = useGlobalHooks();
  return (
    <React.Fragment>
      <Stack spacing={2}>
        <Tooltip title="Admin">
          <IconButton
            onClick={() => {
              handleClose();
              handleAdmin();
            }}
          >
            <FaUserCog style={{ fontSize: "34px" }} />
          </IconButton>
        </Tooltip>
        <Divider />
        <Tooltip title="shutdown">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <FaPowerOff style={{ fontSize: "34px" }} />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleCloseTab}
          onClick={handleCloseTab}
          transformOrigin={{ horizontal: "left", vertical: "top" }}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        >
          <MenuItem onClick={handleCloseTab}>
            <Button onClick={shutDown}>Shutdown</Button>
          </MenuItem>
        </Menu>
      </Stack>
    </React.Fragment>
  );
}
