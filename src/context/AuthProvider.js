import React, { useState } from "react";

export const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const SignIn = () => {
    console.log("Sign In");
    setLoggedIn(true);
  };

  const logOut = () => {
    console.log("Log Out");
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logOut,
        SignIn,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
