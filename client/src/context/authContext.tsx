import React, { useState, useEffect } from "react";
import axios from "axios";

type data = {
  token: string;
  _id: string;
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
  myGoals: { _id: string; goal: string }[];
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
    myGoals: [{ _id: "", goal: "" }],
  },
  setUser: (user: User) => {},
  login: (data: data) => {},
  logout: () => {},
  isLoggedIn: () => false,
  isLoading: false,
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const token = sessionStorage.getItem("token");
    const id = sessionStorage.getItem("_id");
    const fetchData = async (token: string | null, id: string | null) => {
      if (token && id) {
        try {
          const response = await axios.get(`/dashboard/user/${id}`);
          setUser(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData(token, id);
    setIsLoading(false);
  }, []);

  const login = async ({ token, _id }: data) => {
    if (token) {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("_id", _id);
      try {
        const response = await axios.get(`/dashboard/user/${_id}`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
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
    isLoading: isLoading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
