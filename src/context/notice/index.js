import React, { useState, createContext, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

export const NoticesProviderContext = createContext();

export const NoticesProvider = ({ children }) => {
  const history = useHistory();

  const [isNotif, setIsNotif] = useState(false);

  const [alert, setAlert] = useState({
    show: false,
    title: "",
    content: "",
  });

  const hideAlert = () => {
    setAlert((prev) => ({ ...prev, show: false }));
  };

  const showAlert = (title, content) => {
    setAlert({ show: true, title, content });
  };

  useEffect(() => {
    // Listen for changes to the current location.
    const unlisten = history.listen(() => {
      hideAlert();
    });
    // cleanup the listener on unmount
    return unlisten;
  }, []);

  return (
    <NoticesProviderContext.Provider value={{ alert, hideAlert, showAlert }}>
      {children}
    </NoticesProviderContext.Provider>
  );
};

export const useNoticesContext = () => {
  const value = useContext(NoticesProviderContext);
  if (value === undefined)
    console.warn("no provider found for notices context");
  return value;
};
