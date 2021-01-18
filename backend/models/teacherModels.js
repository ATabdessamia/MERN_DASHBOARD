import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  teach: {
    classes: [
      {
        type: String,
        required: true,
      },
    ],
    Subjects: [
      {
        type: String,
        required: true,
      },
    ],
    year: {
      type: Date,
      required: true,
    },
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;
