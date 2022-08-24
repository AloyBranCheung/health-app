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
  appointments: {
    _id: string;
    dayOfWeek: string;
    dateOfMonth: number;
    service: string;
    date: string;
  }[];
  myGoals: { _id: string; goal: string }[];
};

type UserHealth = {
  _id: string;
  biologicalSex: number;
  age: number;
  weight: number;
  pmHx: string[];
  allergies: string[];
  medications: {
    _id: string;
    name: string;
    dose: number;
    doseUnits: string;
    timing: string;
    lastTaken: string;
  }[];
  labWork: {}[];
  imaging: {}[];
  heartRate: {
    _id: string;
    date: string;
    time: string;
    heartRate: string;
  }[];
  bloodPressure: {
    _id: string;
    date: string;
    time: string;
    sys: string;
    dia: string;
  }[];
};

export type { data, User, UserHealth };
