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
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    MRN: {
      type: String,
      default: "00000000",
    },
    familyMembers: {
      type: [
        {
          familyId: {
            type: String,
            deafult: "",
          },
        },
      ],
      default: [{}],
    },
    isProvider: {
      type: Boolean,
      default: false,
    },
    patientList: {
      type: [
        {
          patientId: {
            type: String,
            deafult: "",
          },
        },
      ],
      default: [{}],
    },
    preferredPronouns: {
      type: [String],
      default: [""],
    },
    preferredName: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    appointments: {
      type: [
        {
          appointmentDate: {
            type: String,
            default: "",
          },
        },
      ],
      default: [{}],
    },
    myGoals: {
      type: [
        {
          goal: {
            type: String,
            default: "Try adding a goal",
          },
        },
      ],
      default: [""],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Users", UserSchema);
