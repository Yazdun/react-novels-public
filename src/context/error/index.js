import React from "react";
import { useHistory } from "react-router-dom";
import { createContext, useState, useEffect, useMemo, useContext } from "react";
import { useAuthContext, useAuthActions } from "../auth";
import { Error } from "../../pages";

const ErrorStatusContext = createContext();

export const ErrorHandler = ({ children }) => {
  const history = useHistory();
  const { logOut } = useAuthActions();
  const isLoggedIn = useAuthContext();
  const [errorStatusCode, setErrorStatusCode] = useState();
  const [serverErrors, setServerErrors] = useState();

  const errorHandler = (statusCode, errors) => {
    setErrorStatusCode(statusCode);
    setServerErrors(errors);

    setTimeout(() => {
      setServerErrors(undefined);
    }, 7000);
  };

  useEffect(() => {
    // Listen for changes to the current location.
    const unlisten = history.listen(() => {
      errorHandler(undefined, undefined);
    });
    // cleanup the listener on unmount
    return unlisten;
  }, []);

  const renderContent = () => {
    switch (true) {
      case errorStatusCode === 401:
        if (isLoggedIn) return logOut();
        return children;

      case errorStatusCode === 404:
        return <Page404 />;

      case errorStatusCode >= 500:
        return (
          <Error
            title="500 ! Our fault ..."
            message="there is a problem within our servers, we are looking into it ..."
          />
        );

      case errorStatusCode === "NETWORK":
        return (
          <Error
            title="Oops ! Network Error..."
            message="request is failed, something wrong with your network"
          />
        );

      default:
        return children;
    }
  };

  return (
    <ErrorStatusContext.Provider
      value={{ errorHandler, serverErrors, errorStatusCode }}
    >
      {renderContent()}
    </ErrorStatusContext.Provider>
  );
};

export const useErrorStatus = () => useContext(ErrorStatusContext);
