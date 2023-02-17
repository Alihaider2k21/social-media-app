import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      required: true,
      type: String,
      min: 2,
      max: 50,
    },

    lastName: {
      required: true,
      type: String,
      min: 2,
      max: 50,
    },

    email: {
      required: true,
      type: String,
      min: 2,
      max: 50,
      unique: true,
    },

    password: {
      // required: true,
      type: String,
      min: 5,
      max: 50,
    },

    picturePath: {
      type: String,
      default: "",
    },

    friends: {
      type: Array,
      default: [],
    },
    loaction: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
