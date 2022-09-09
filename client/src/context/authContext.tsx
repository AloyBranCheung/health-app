import React, { useState, useEffect } from "react";
import axios from "axios";
import type { User, data, UserHealth, Medications } from "./authContextType";

const INITIAL_HEALTH = {
  _id: "",
  biologicalSex: 0,
  age: 0,
  weight: 0.0,
  pmHx: [""],
  allergies: [""],
  medications: [] as Medications,
  labWork: [{}],
  imaging: [{}],
  heartRate: [
    {
      _id: "",
      date: "",
      time: "",
      heartRate: "",
    },
  ],
  bloodPressure: [
    {
      _id: "",
      date: "",
      time: "",
      sys: "",
      dia: "",
    },
  ],
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
    appointments: [
      {
        _id: "",
        dayOfWeek: "",
        dateOfMonth: 0,
        service: "",
        date: "",
      },
    ],
    myGoals: [{ _id: "", goal: "" }],
    phoneNumber: "",
    address: "",
  },
  setUser: (user: User) => {},
  login: (data: data) => {},
  logout: () => {},
  isLoggedIn: () => false,
  isLoading: false,
  userHealth: INITIAL_HEALTH,
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
  const [userHealth, setUserHealth] = useState<UserHealth>(INITIAL_HEALTH);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const id = sessionStorage.getItem("_id");
    const fetchData = async (token: string | null, id: string | null) => {
      if (token && id) {
        // get user info
        try {
          setIsLoading(true);
          const response = await axios.get(`/dashboard/user/${id}`);
          setUser(response.data);
        } catch (error) {
          console.log(error);
        }

        // get user health info
        try {
          const response = await axios.get(`/mrn/healthinformation/${id}`);
          setUserHealth(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData(token, id);
  }, []);

  const login = async ({ token, _id }: data) => {
    if (token) {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("_id", _id);
      try {
        setIsLoading(true);
        const response = await axios.get(`/dashboard/user/${_id}`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
      // get user health info
      try {
        const response = await axios.get(`/mrn/healthinformation/${_id}`);
        setUserHealth(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("_id");
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
    userHealth: userHealth,
    isLoading: isLoading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
