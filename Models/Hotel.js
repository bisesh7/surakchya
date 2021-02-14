const mongoose = require("mongoose");

// Create a schema
const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  registerDate: {
    type: Date,
    default: Date.now(),
  },
  profilePicturePath: {
    type: String,
    default: "/assets/images/default-profile.png",
  },
  streetAddress: {
    type: String,
    default: "",
  },
  phoneNumber: {
    type: Number,
    default: "",
  },
  messageReadCanBeSeen: {
    type: Boolean,
    default: true,
  },
  getNews: {
    type: Boolean,
    default: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  blocked: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Hotel = mongoose.model("hotel", HotelSchema);
module.exports = Hotel;
