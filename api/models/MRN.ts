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
      enum: ["M", "F"],
      default: "",
    },
    bloodGroup: {
      type: String,
      enum: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+", "?"],
      default: "?",
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
    labWork: {
      type: [
        {
          dateTested: {
            type: String,
          },
          sodium: {
            type: Number,
          },
          potassium: {
            type: Number,
          },
          chloride: {
            type: Number,
          },
          creatinine: {
            type: Number,
          },
          bloodGlucose: {
            type: Number,
          },
          wbc: {
            type: Number,
          },
          plt: {
            type: Number,
          },
          hgb: {
            type: Number,
          },
          hct: {
            type: Number,
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
