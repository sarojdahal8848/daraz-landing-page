import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URI = process.env.DB_URI;

mongoose
  .connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

mongoose.connection.on("connected", () => {
  console.log("Mongoose conncted to db");
});

mongoose.connection.on("error", (err) => {
  console.log(err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose connected is disconnected");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("you cancel the connection");
  process.exit(0);
});
