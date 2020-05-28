const express = require("express");
const dbConn = require("./config/db");

const app = express();

dbConn
  .authenticate()
  .then(() => {
    console.log("👍 Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("👎 Unable to connect to the database:", err);
  });

const port = process.env.PORT;

app.listen(port, console.log(`🚀 Server started on port ${port}`));
