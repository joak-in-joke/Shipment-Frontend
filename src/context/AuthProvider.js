import React, { useState } from "react";
import API from "variables/api.js";
export const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorSignIn, setErrorSignIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);

  const SignIn = async (email, password) => {
    setErrorSignIn(false);
    API.post(`auth/signin`, {
      email: email,
      pass: password,
    })
      .then((res) => {
        setIsLoading(false);
        if (res.data.resultado === false) {
          setErrorSignIn(true);
          return;
        }
        console.log(res.data);
        setUserData(res.data.usuario);
        setToken(res.data.token);
        setLoggedIn(true);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  const logOut = () => {
    console.log("Log Out");
    setUserData(null);
    setToken(null);
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        errorSignIn,
        userData,
        token,
        isLoading,
        logOut,
        SignIn,
        setIsLoading,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
