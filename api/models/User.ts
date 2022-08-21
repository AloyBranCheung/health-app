import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    MRN: {
      type: String,
    },
    familyMembers: {
      type: [String],
    },
    isProvider: {
      type: Boolean,
      default: false,
    },
    patientList: {
      type: [String],
    },
    preferredPronouns: {
      type: [String],
    },
    preferredName: {
      type: String,
    },
    bio: {
      type: String,
    },
    appointments: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Users", UserSchema);
