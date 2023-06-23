import React from "react";
import { IconButton, Stack, Divider, Box, Slider } from "@mui/material";
import { AccountMenu } from "../utils/AppTabs";
import Quickaccess from "./Quickaccess";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useGlobalHooks } from "../utils/context";
const Appbar = ({ openApp }) => {
  const { handleClose } =
    useGlobalHooks();

  return (
    <>
      <div className="appbar">
        <div className={openApp ? "fadeInApp app" : " app fadeOutApp "}>
          <div className="applogo">
            <Stack>
              <Divider orientation="vertical" />
              <AccountMenu />
            </Stack>
          </div>
       
          <h4 className="quickAccess">Quick Access</h4>

          <Quickaccess />
          <div className="closenav" onClick={handleClose}>
            <CloseOutlinedIcon fontSize="large" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Appbar;
