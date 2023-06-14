import React, { useContext, useState, useEffect } from "react";
const Appcontext = React.createContext();
const Context = ({ children }) => {
  const [showAdmin, setShowAdmin] = useState(false);
  const [openApp, setOpenApp] = useState(false);
  const [screenBrightness, setScreenBrightness] = useState(50);
  const handleAdmin = () => {
    setShowAdmin(!showAdmin);
  };
  const handleClose = () => {
    setOpenApp(!openApp);
  };
  const handleBrightnessChange = (event, newValue) => {
    setScreenBrightness(newValue);
  };

  useEffect(() => {
    const increaseBrightness = () => {
      setScreenBrightness((prevBrightness) =>
        Math.min(prevBrightness + 10, 100)
      );
    };

    const decreaseBrightness = () => {
      setScreenBrightness((prevBrightness) => Math.max(prevBrightness - 10, 0));
    };

    const handleKeyPress = (event) => {
      if (event.key === "ArrowUp") {
        increaseBrightness();
      } else if (event.key === "ArrowDown") {
        decreaseBrightness();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (typeof window.screen === "undefined" || !window.screen.brightness) {
      console.log("Screen brightness control is not supported.");
      return;
    }
    // Update screen brightness when the slider value changes
    if (typeof window.screen !== "undefined" && window.screen.brightness) {
      const newBrightness = screenBrightness / 100;
      window.screen.brightness = newBrightness;
    }
  }, [screenBrightness]);

  return (
    <Appcontext.Provider
      value={{
        handleAdmin,
        showAdmin,
        openApp,
        handleClose,
        screenBrightness,
        handleBrightnessChange,
      }}>
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalHooks = () => {
  return useContext(Appcontext);
};
export default Context;
