import React, { useContext, useState } from "react";
const Appcontext = React.createContext();
const Context = ({ children }) => {
  const [showAdmin, setShowAdmin] = useState(false);

  const handleAdmin = () => {
    setShowAdmin(!showAdmin);
  };
  return (
    <Appcontext.Provider value={{ handleAdmin, showAdmin }}>
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalHooks = () => {
  return useContext(Appcontext);
};
export default Context;
