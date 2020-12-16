const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(
    `<h1 style="text-align: center; margin: 5rem;">${req.hostname} says, welcome!</h1>`
  );
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}...`);
});
