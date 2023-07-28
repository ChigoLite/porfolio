"use client"

import React from "react";
import { IconButton, Stack, Divider, Box, Slider } from "@mui/material";
import { AccountMenu } from "./Appmenu";
import Quickaccess from "./Quickacess";
import {FaTimes} from 'react-icons/fa'
import { useGlobalHooks } from "@/Components/context";
const Appbar = () => {
  const { handleClose,openApp } = useGlobalHooks();
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
            <FaTimes style={{fontSize:'32px'}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Appbar;
