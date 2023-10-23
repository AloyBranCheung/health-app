/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import type {
  User,
  data,
  UserHealth,
  Medications,
  OtherTx,
  FamilyMembers,
  Address,
  Imaging,
  LabWork,
} from "./authContextType";

const INITIAL_HEALTH = {
  _id: "",
  primaryConcern: "",
  biologicalSex: 0,
  age: 0,
  gender: "",
  sex: "",
  bloodGroup: "",
  weight: 0.0,
  pmHx: [""],
  familyHx: [""],
  allergies: [""],
  medications: [] as Medications,
  otherTx: [] as OtherTx,
  labWork: [] as LabWork[],
  imaging: [] as Imaging[],
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
    MRN: "",
    profilePic: "",
    familyMembers: [] as FamilyMembers[],
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
    address: {} as Address,
  },
  setUser: (user: User) => {},
  setUserHealth: (userHealth: UserHealth) => {},
  login: (data: data) => {},
  logout: () => {},
  isLoggedIn: () => false,
  isLoading: false,
  userHealth: INITIAL_HEALTH,
};

// createContext
const AuthContext = React.createContext(INITIAL_STATE);

export default AuthContext;

interface Props {
  children: JSX.Element;
}

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
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/dashboard/user/${id}`,
            {
              data: {
                userId: id,
              },
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUser(response.data);
        } catch (error) {
          console.log(error);
        }

        // get user health info
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/mrn/healthinformation/${id}`,
            {
              data: {
                userId: id,
              },
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
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
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/dashboard/user/${_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
      // get user health info
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/mrn/healthinformation/${_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
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
    setUser,
    user,
    login,
    logout,
    isLoggedIn,
    userHealth,
    isLoading,
    setUserHealth,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
