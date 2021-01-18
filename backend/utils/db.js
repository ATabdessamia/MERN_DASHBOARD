import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.DATABASE_LOCAL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log(`Connected on ${con.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error Connecte DB : ${error.message}`.red.bold);
    process.exit(1);
  }
};

export default connectDb;
