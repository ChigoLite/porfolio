"use client";

import React, { useEffect, useState } from "react";
import FrontPage from "@/Components/frontpage/front";
import Main from "@/Components/home";
import { Grid, ThemeProvider } from "@mui/material";

import Theme from "@/theme";

function Home() {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(false);
    }, 1000);
  }, []);

  return (
    <main>
      <ThemeProvider theme={Theme}>
        <div className="home">
          <FrontPage display={display} />
          <Main />
        </div>
      </ThemeProvider>
    </main>
  );
}

export default Home;
