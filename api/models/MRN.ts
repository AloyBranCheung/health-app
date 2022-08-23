import mongoose from "mongoose";

const HealthSchema = new mongoose.Schema(
  {
    primaryConcern: {
      type: String,
      default: "",
    },
    biologicalSex: {
      type: Number,
      default: null,
    },
    age: {
      type: Number,
      min: 0,
      default: 0,
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
    allergies: {
      type: [String],
      default: [""],
    },
    medications: {
      type: [
        {
          name: {
            type: String,
            default: "",
          },
          dose: {
            type: Number,
            default: "",
          },
          doseUnits: {
            type: String,
            default: "",
          },
          timing: {
            type: String,
            default: "",
          },
        },
      ],
      default: [{}],
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
      default: [{}],
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
      default: [{}],
    },
  },
  { timestamps: true }
);

export default mongoose.model("HealthInfo", HealthSchema);
