import React from "react";
import { IconButton, Stack, Divider, Typography, Button } from "@mui/material";
import { AccountMenu } from "../utils/shutdownMenu";
import Quickaccess from "./Quickaccess";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const Appbar = ({ openApp }) => {
  const handlenav = () => {
    console.log("clicked");
  };
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
          <div className="closenav" onClick={handlenav}>
            <CloseOutlinedIcon fontSize="large" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Appbar;
