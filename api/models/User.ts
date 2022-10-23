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
    },
    profilePic: {
      type: String,
    },
    familyMembers: {
      type: [
        {
          mrn: {
            type: String,
          },
          nickname: {
            type: String,
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
      default: [],
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
          dayOfWeek: {
            type: String,
            default: "",
          },
          dateOfMonth: {
            type: Number,
            default: 1,
          },
          service: {
            type: String,
            default: "",
          },
          date: {
            type: String,
            default: "YY-MM-DD",
          },
          time: {
            type: String,
            default: "23:59",
          },
        },
      ],
    },
    myGoals: {
      type: [
        {
          goal: {
            type: String,
            default: "Try adding a goal.",
          },
        },
      ],
      default: [""],
    },
    phoneNumber: {
      type: String,
    },
    address: {
      type: {
        city: {
          type: String,
        },
        province: {
          type: String,
        },
        country: {
          type: String,
        },
        postalCode: {
          type: String,
        },
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Users", UserSchema);
