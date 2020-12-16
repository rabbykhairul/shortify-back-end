const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(
    `<h1 style="text-align: center; margin: 5rem;">${req.hostname} says, welcome!</h1>`
  );
});

app.use("/api/short-url", require("./api/short-url"));

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}...`);
});
