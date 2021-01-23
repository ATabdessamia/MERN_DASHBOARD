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
  className: {
    type: String,
    required: true,
  },
  teachers: [
    {
      type: String,
      required: true,
    },
  ],
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
