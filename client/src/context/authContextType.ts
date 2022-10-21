export type data = {
  token: string;
  _id: string;
};

export type User = {
  _id: string;
  email: string;
  displayName: string;
  firstName: string;
  lastName: string;
  MRN: string;
  profilePic: string;
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
  phoneNumber: string;
  address: Address;
};

export type UserHealth = {
  _id: string;
  primaryConcern: string;
  biologicalSex: number;
  age: number;
  gender: string;
  sex: string;
  bloodGroup: string;
  weight: number;
  pmHx: string[];
  familyHx: string[];
  allergies: string[];
  medications: Medications;
  otherTx: {
    _id: string;
    treatment: string;
  }[];
  familyMembers: {
    _id: string;
    name: string;
    MRN: string;
    primaryIssue: string;
  }[];
  labWork: LabWork[];
  imaging: Imaging[];
  heartRate: HeartRate[];
  bloodPressure: BloodPressure[];
};

export interface Imaging {
  name: string;
  dateCreate: string;
  url: string;
  _id: string;
}

export interface LabWork {
  dateTested: string;
  sodium: number;
  potassium: number;
  chloride: number;
  bloodGlucose: number;
  creatinine: number;
  hgb: number;
  wbc: number;
  plt: number;
  hct: number;
}

export interface HeartRate {
  _id: string;
  date: string;
  time: string;
  heartRate: string;
}
export interface BloodPressure {
  _id: string;
  date: string;
  time: string;
  sys: string;
  dia: string;
}

export type Medications = {
  _id: string;
  name: string;
  dose: number;
  doseUnits: string;
  timing: string;
  lastTaken: string;
  nextDue: string;
}[];

export type OtherTx = {
  _id: string;
  treatment: string;
}[];

export interface FamilyMembers {
  _id: string;
  name: string;
  MRN: string;
  primaryIssue: string;
}

export interface Address {
  _id?: string;
  city: string;
  province: string;
  country: string;
  postalCode: string;
}
