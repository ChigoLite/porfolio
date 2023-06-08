import FrontPage from "./frontPage/front";
import Home from "./home/home";
import React, { useEffect, useState } from "react";
function App() {
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
    <>
      <div className="home">
        <FrontPage display={display} />

        <Home />
      </div>
    </>
  );
}

export default App;
