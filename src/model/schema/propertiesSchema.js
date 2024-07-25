import mongoose from "mongoose";

const propertySchema = mongoose.Schema({
  type: {
    type: String,
    default: null,
  },
});
const propertymodel = new mongoose.model(propertySchema);

module.exports = { propertymodel };
