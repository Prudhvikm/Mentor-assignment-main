const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    current_mentor: { type: String, required: false, default: null },
    previous_mentor: { type: String, required: false, default: null },
  },
  { timestamps: true }
);

const studentModel = mongoose.model("students", studentSchema);

module.exports = studentModel;
