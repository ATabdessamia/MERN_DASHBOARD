import mongoose from "mongoose";

const classSchema = mongoose.Schema(
  {
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

classSchema.virtual("countStudents").get(function () {
  return this.attend.students.length;
});

classSchema.virtual("countTeachers").get(function () {
  return this.teachers.length;
});

classSchema.pre(/^find/, function (next) {
  this.populate({
    path: "attend.students",

    select: "firstName lastName",
  }).populate({
    path: "teachers",
    select: "firstName lastName",
  });
  next();
});

const Class = mongoose.model("Class", classSchema);

export default Class;
