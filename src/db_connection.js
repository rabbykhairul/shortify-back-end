const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.once("open", () => console.log("Connected to url-shortener database..."));
db.on("error", () =>
  console.log("An error occured while connecting to database!")
);
