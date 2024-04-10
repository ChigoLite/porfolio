"use client";

import React, { useContext, useState, useEffect } from "react";

const Appcontext = React.createContext();
const Context = ({ children }) => {
  const [showAdmin, setShowAdmin] = useState(false);
  const [openApp, setOpenApp] = useState(false);
  const [developer, setDeveloper] = useState(false);
  const [education, setEducation] = useState(false);
  const [projects, setProjects] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpenProject = () => {
    setProjects(true);
    setOpen(true);
  };
  const handleOpenDeveloper = () => {
    setDeveloper(true);
    setOpen(true);
  };
  const handleOpenEducation = () => {
    setEducation(true);
    setOpen(true);
  };
  const handleOpenAbout = () => setOpen(true);
  const handleCloseModal = () => {
    setOpen(false);
    setDeveloper(false);
    setEducation(false);
    setProjects(false);
  };
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
        developer,
        education,
        handleCloseModal,
        open,
        handleOpenAbout,
        handleOpenProject,
        handleOpenDeveloper,
        handleOpenEducation,
        projects,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalHooks = () => {
  return useContext(Appcontext);
};
export default Context;
