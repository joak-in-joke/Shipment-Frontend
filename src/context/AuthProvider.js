import React, { useState } from "react";
import API from "variables/api.js";
//import md5 from "md5";
export const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorSignIn, setErrorSignIn] = useState(false);
  const [errorSignUp, setErrorSignUp] = useState(false);
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(null);

  const SignIn = async (email, password) => {
    setErrorSignIn(false);
    API.post(`auth/signin`, {
      mail: email,
      //pass: md5(password),
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

  const SignUp = async (
    tipo,
    nombre,
    apellido,
    rut,
    mail,
    cargo,
    asesor,
    telefono,
    permission,
    pass
  ) => {
    setErrorSignUp(false);
    API.post(`users/add`, {
      tipo,
      nombre,
      apellido,
      rut,
      mail,
      cargo,
      asesor,
      telefono,
      permission,
      pass,
    })
      .then((res) => {
        setIsLoading(false);
        if (res.data.resultado === false) {
          setErrorSignUp(true);
          return;
        }
        console.log(res.data);
        setUserData(res.data.usuario);
        setToken(res.data.token);
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
        setUserData,
        SignUp,
        errorSignUp,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
