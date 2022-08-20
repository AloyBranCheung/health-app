import React, { useState } from "react";

type data = {
  token: string;
  email: string;
  displayName: string;
  firstName: string;
  lastName: string;
  isProvider: boolean;
  preferredPronouns: string[];
  preferredName: string;
  _id: string;
};

const INITIAL_STATE = {
  user: {},
  isLoggedIn: false,
  login: (data: data) => {},
  logout: () => {},
};

// createContext
const AuthContext = React.createContext(INITIAL_STATE);

export default AuthContext;

type Props = {
  children: JSX.Element;
};

// Context.Provider
export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = ({ token, ...others }: data) => {
    if (token) {
      sessionStorage.setItem("token", token);
      setIsLoggedIn(true);
      setUser(others);
    }
  };

  const value = {
    user: user,
    isLoggedIn: isLoggedIn,
    login: login,
    logout: () => {},
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
