const teachers = [
  {
    _id: "5c88fa8cf4afda39709c2955",
    firstName: "jhon",
    lastName: "doe",
    teach: {
      classes: ["5c8a22c62f8fb814b56fa18b", "5c8a1f4e2f8fb814b56fa185"],
      Subjects: ["Mathematics", "Science"],
      year: "2021",
    },
  },
  {
    _id: "5c88fa8cf4afda39709c2940",
    firstName: "jhane",
    lastName: "doe",
    teach: {
      classes: ["5c8a22c62f8fb814b56fa18b", "5c8a1f4e2f8fb814b56fa185"],
      Subjects: ["history", "English"],
      year: "2021",
    },
  },
];

const classes = [
  {
    _id: "5c8a22c62f8fb814b56fa18b",
    teachers: ["5c88fa8cf4afda39709c2955", "5c88fa8cf4afda39709c2940"],
    className: "kindergarten",
    attend: {
      students: ["5c8a1d5b0190b214360dc057", "5c8a1dfa2f8fb814b56fa181"],
      schoolYear: "2021",
    },
  },
  {
    _id: "5c8a1f4e2f8fb814b56fa185",
    teachers: ["5c88fa8cf4afda39709c2955", "5c88fa8cf4afda39709c2940"],
    className: "grade 2",
    attend: {
      students: ["5c8a1e1a2f8fb814b56fa182", "5c8a1ec62f8fb814b56fa183"],
      schoolYear: "2021",
    },
  },
];

const students = [
  {
    _id: "5c8a1d5b0190b214360dc057",
    teachers: ["5c88fa8cf4afda39709c2955", "5c88fa8cf4afda39709c2940"],
    class: "5c8a22c62f8fb814b56fa18b",
    firstName: "jane",
    lastName: "doe",
    dateBirth: "01/01/2016",
  },
  {
    _id: "5c8a1dfa2f8fb814b56fa181",
    teachers: ["5c88fa8cf4afda39709c2955", "5c88fa8cf4afda39709c2940"],
    class: "5c8a22c62f8fb814b56fa18b",
    firstName: "janna",
    lastName: "doe",
    dateBirth: "02/03/2016",
  },
  {
    _id: "5c8a1e1a2f8fb814b56fa182",
    teachers: ["5c88fa8cf4afda39709c2955", "5c88fa8cf4afda39709c2940"],
    class: "5c8a1f4e2f8fb814b56fa185",
    firstName: "jesse",
    lastName: "doe",
    dateBirth: "02/01/2014",
  },
  {
    _id: "5c8a1ec62f8fb814b56fa183",
    teachers: ["5c88fa8cf4afda39709c2955", "5c88fa8cf4afda39709c2940"],
    class: "5c8a1f4e2f8fb814b56fa185",
    firstName: "jemme",
    lastName: "doe",
    dateBirth: "03/02/2014",
  },
];

export { teachers, classes, students };
