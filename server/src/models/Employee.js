const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  office: { type: String, required: true },
  salary: { type: Number, required: true },
},
{
    versionKey: false,
    timestamps: true,
  });


  module.exports = mongoose.model("Employee", employeeSchema);