"use client";

import React, { useEffect, useState } from "react";
import FrontPage from "@/Components/frontpage/front";
import Main from "@/Components/home";
import { Grid } from "@mui/material";

function Home() {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main>
      <div className="home">
        <FrontPage display={display} />
        <Main />
      </div>
    </main>
  );
}

export default Home;
