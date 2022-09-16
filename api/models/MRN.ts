import mongoose from "mongoose";

const HealthSchema = new mongoose.Schema(
  {
    primaryConcern: {
      type: String,
      default: "",
    },
    age: {
      type: Number,
      min: 0,
      default: 0,
    },
    gender: {
      type: String,
      default: "",
    },
    sex: {
      type: String,
      default: "",
    },
    bloodGroup: {
      type: String,
      default: "",
    },
    weight: {
      type: Number,
      default: 0.0,
      min: 0,
    },
    pmHx: {
      type: [String],
      default: [""],
    },
    familyHx: {
      type: [String],
      default: [""],
    },
    allergies: {
      type: [String],
      default: [""],
    },
    medications: {
      type: [
        {
          name: {
            type: String,
          },
          dose: {
            type: Number,
          },
          doseUnits: {
            type: String,
          },
          timing: {
            type: String,
          },
          lastTaken: {
            type: String,
          },
          nextDue: {
            type: String,
          },
        },
      ],
      default: [],
    },
    otherTx: {
      type: [
        {
          treatment: {
            type: String,
          },
        },
      ],
      default: [{ treatment: "" }],
    },
    familyMembers: {
      type: [
        {
          name: {
            type: String,
          },
          MRN: {
            type: String,
          },
          primaryIssue: {
            type: String,
          },
        },
      ],
    },
    labWork: {
      type: [
        {
          dateTested: {
            type: String,
            default: "",
          },
          sodium: {
            type: Number,
            default: 0,
          },
          potassium: {
            type: Number,
            default: 0,
          },
          calcium: {
            type: Number,
            default: 0,
          },
          chloride: {
            type: Number,
            default: 0,
          },
          phos: {
            type: Number,
            default: 0,
          },
          bloodGlucose: {
            type: Number,
            default: 0,
          },
          cbc: {
            type: Number,
            default: 0,
          },
          wbc: {
            type: Number,
            default: 0,
          },
          plt: {
            type: Number,
            default: 0,
          },
          hct: {
            type: Number,
            default: 0,
          },
        },
      ],
      default: [],
    },
    imaging: {
      type: [
        {
          name: {
            type: String,
            default: "",
          },
          dateCreate: {
            type: String,
            default: "",
          },
          url: {
            type: String,
            default: "",
          },
        },
      ],
      default: [],
    },
    heartRate: {
      type: [
        {
          date: {
            type: String,
            default: "YY-MM-DD",
          },
          time: {
            type: String,
            default: "23:59",
          },
          heartRate: {
            type: String,
            default: "69",
          },
        },
      ],
      default: [],
    },
    bloodPressure: {
      type: [
        {
          date: {
            type: String,
            default: "YY-MM-DD",
          },
          time: {
            type: String,
            default: "23:59",
          },
          sys: {
            type: String,
            default: "120",
          },
          dia: {
            type: String,
            default: "80",
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("HealthInfo", HealthSchema);
