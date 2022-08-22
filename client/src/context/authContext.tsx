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
  bio: string;
  appointments: string[];
};

const INITIAL_STATE = {
  user: {
    email: "",
    displayName: "",
    firstName: "",
    lastName: "",
    isProvider: false,
    preferredPronouns: [""],
    preferredName: "",
    _id: "",
    bio: "",
    appointments: [""],
  },
  login: (data: data) => {},
  logout: () => {},
  isLoggedIn: () => false,
};

// createContext
const AuthContext = React.createContext(INITIAL_STATE);

export default AuthContext;

type Props = {
  children: JSX.Element;
};

// Context.Provider
export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState({
    email: "",
    displayName: "",
    firstName: "",
    lastName: "",
    isProvider: false,
    preferredPronouns: [""],
    preferredName: "",
    _id: "",
    bio: "",
    appointments: [""],
  });

  const login = ({ token, ...others }: data) => {
    if (token) {
      sessionStorage.setItem("token", token);
      setUser(others);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setUser({
      email: "",
      displayName: "",
      firstName: "",
      lastName: "",
      isProvider: false,
      preferredPronouns: [""],
      preferredName: "",
      _id: "",
      bio: "",
      appointments: [""],
    });
  };

  const isLoggedIn = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      return false;
    }

    return true;
  };

  const value = {
    user: user,
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
