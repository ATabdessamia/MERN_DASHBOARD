import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateBirth: {
    type: Date,
    required: true,
  },
  classes: {
    type: String,
    required: true,
  },
  teachers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Teacher",
    },
  ],
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
