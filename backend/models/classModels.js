import mongoose from "mongoose";

const classSchema = mongoose.Schema({
  className: {
    type: String,
    required: true,
  },
  teachers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Teacher",
    },
  ],
  attend: {
    students: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Student",
      },
    ],
    schoolYear: {
      type: Date,
      required: true,
    },
  },
});

const Class = mongoose.model("Class", classSchema);

export default Class;
