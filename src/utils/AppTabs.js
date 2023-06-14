import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Stack, Button, Slider } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useGlobalHooks } from "./context";
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
            }}>
            <AccountBoxIcon sx={{ fontSize: "34px" }} />
          </IconButton>
        </Tooltip>
        <Divider />
        <Tooltip title="shutdown">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}>
            <PowerSettingsNewIcon sx={{ fontSize: "34px" }} />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleCloseTab}
          onClick={handleCloseTab}
          transformOrigin={{ horizontal: "left", vertical: "top" }}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}>
          <MenuItem onClick={handleCloseTab}>
            <Button onClick={shutDown}>Shutdown</Button>
          </MenuItem>
        </Menu>
      </Stack>
    </React.Fragment>
  );
}
