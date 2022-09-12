import mongoose from "mongoose";

const ProfilePicSchema = new mongoose.Schema({
  url: {
    type: String,
    default: "",
    required: true,
    unique: true,
  },
});

export default mongoose.model("ProfilePic", ProfilePicSchema);
