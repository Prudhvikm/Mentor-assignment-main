const mongoose = require("mongoose");

const mentorSchema = mongoose.Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    students: { type: Array, required: false, default: null },
  },
  { timestamps: true }
);

const mentorModule = mongoose.model("mentors", mentorSchema);

module.exports = mentorModule;
