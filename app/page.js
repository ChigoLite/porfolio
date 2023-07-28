"use client"

import React, { useEffect, useState } from "react";
import FrontPage from "@/Components/frontpage/front";
import Main from "@/Components/home";

function Home() {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="home">
        <FrontPage display={display} />
<Main/>
      </div>
    </>
  );
}

export default Home;
