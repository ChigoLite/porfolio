import React, { useState, useEffect } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import AppBar from "./Appbar";
import { IconButton, Slider, Stack, Box } from "@mui/material";
import Admin from "../main/Admin";
import { useGlobalHooks } from "../utils/context";
import Folder from "./folder";
const Home = () => {
  const [date, setDate] = useState(new Date());
  const { showAdmin, openApp, handleClose } = useGlobalHooks();
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
      {showAdmin && <Admin />}
      <Folder />
      <AppBar openApp={openApp} />

      <main className="footernav">
        <div>
          <IconButton onClick={handleClose}>
            <AppsIcon
              sx={{ fontSize: "44px", color: "white" }}
              color="tertiary"
            />
          </IconButton>
        </div>

        <div className="timeIcon">
          <div>
            <p>{currentTime}</p>
            <p>{currentDate}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
