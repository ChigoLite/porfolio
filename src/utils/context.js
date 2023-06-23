import React, { useContext, useState, useEffect } from "react";


const Appcontext = React.createContext();
const Context = ({ children }) => {
  const [showAdmin, setShowAdmin] = useState(false);
  const [openApp, setOpenApp] = useState(false);
 
  const handleAdmin = () => {
    setShowAdmin(!showAdmin);
  };
  const handleClose = () => {
    setOpenApp(!openApp);
  };
  

    
  
  return (
    <Appcontext.Provider
      value={{
        handleAdmin,
        showAdmin,
        openApp,
        handleClose,
     
      }}>
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalHooks = () => {
  return useContext(Appcontext);
};
export default Context;
