"use client"

import React, { useContext, useState, useEffect } from "react";


const Appcontext = React.createContext();
const Context = ({ children }) => {
  const [showAdmin, setShowAdmin] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [openApp, setOpenApp] = useState(false);
 const [about, setAbout] = useState(false)
const[edu, setEdu]=useState(false)

  const handleAdmin = () => {
    setShowAdmin(!showAdmin);
  };
  const handleClose = () => {
    setOpenApp(!openApp);
  };
  
  const ProjectTab = () => {
    setShowProjects(!showProjects)
  };
  
  const AboutTab = () => {
    setShowProjects(!showProjects)
  };
  
  const EduTab=()=>{
    setEdu(!edu)
  }

    
  
  return (
    <Appcontext.Provider
      value={{
        handleAdmin,
        showAdmin,
        openApp,
        handleClose,
        showProjects,
        ProjectTab,
        AboutTab,
        about,
        edu,EduTab
      }}>
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalHooks = () => {
  return useContext(Appcontext);
};
export default Context;
