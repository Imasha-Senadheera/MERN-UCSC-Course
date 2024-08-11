const express = require("express");
const app = express();
const rout = require("./routes");

// Middleware to parse JSON bodies
app.use(express.json());

// Use the router for all requests starting with /routes
app.use("/routes", rout);

app.listen(8085, () => {
  console.log("Server is running on http://localhost:8085");
});
