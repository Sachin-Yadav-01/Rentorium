import mongoose from "mongoose";
// const db = require("../db.connection.js");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: null,
  },
  lastName: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    unique: true,
    default: null,
  },
  phoneNumber: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    default: null,
  },
  countryCode: {
    type: String,
    default: null,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  isPhoneVerified: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    default: null,
  },
  address: {
    type: Object,
  },
  dateOfBirth: {
    type: Date,
    default: null,
  },
  bio: {
    default: null,
    type: String,
  },
  document: {
    type: Object,
    default: null,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

export const User = mongoose.model("users", userSchema);
