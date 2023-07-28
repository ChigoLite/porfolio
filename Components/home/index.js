"use client"

import React, { useState, useEffect } from "react";
import {FaAppStore} from "react-icons/fa";
import { IconButton} from "@mui/material";
import { useGlobalHooks } from "@/Components/context";
import Appbar from "./Appbar";

// import Folder from "./folder";

const Main = () => {
  const [date, setDate] = useState(new Date());
  const { showAdmin, openApp, handleClose,  
     } = useGlobalHooks();
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const currentDate = date.toDateString();
  const currentTime = date.toLocaleTimeString();
  return (
    <div className="homepage">
      
      {/* <Folder /> */}

      <Appbar/>

      <main className="footernav">
        <div className="footer-cont">

        <div>
          <IconButton onClick={handleClose}>
            <FaAppStore
              style={{ fontSize: "44px", color: "white" }}
            />
          </IconButton>
        </div>

        <div className="timeIcon">
            <p>{currentTime}</p>
            <p>{currentDate}</p>
        </div>
              </div>
      </main>
    </div>
  );
};

export default Main;
