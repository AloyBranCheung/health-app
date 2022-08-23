import React, { useState } from "react";

type data = {
  token: string;
};

type User = {
  _id: string;
  email: string;
  displayName: string;
  firstName: string;
  lastName: string;
  familyMembers: string[];
  isProvider: boolean;
  patientList: string[];
  preferredPronouns: string[];
  preferredName: string;
  bio: string;
  appointments: string[];
  myGoals: string[];
};

const INITIAL_STATE = {
  user: {
    _id: "",
    email: "",
    displayName: "",
    firstName: "",
    lastName: "",
    familyMembers: [""],
    isProvider: false,
    patientList: [""],
    preferredPronouns: [""],
    preferredName: "",
    bio: "",
    appointments: [""],
    myGoals: [""],
  },
  setUser: (user: User) => {},
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
  const [user, setUser] = useState<User>(INITIAL_STATE.user);

  const login = ({ token }: data) => {
    if (token) {
      sessionStorage.setItem("token", token);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
  };

  const isLoggedIn = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      return false;
    }

    return true;
  };

  const value = {
    setUser: setUser,
    user: user,
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
