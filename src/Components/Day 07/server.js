const express = require("express");
const connectDB = require("./Connect");
require("dotenv").config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to the database
connectDB(process.env.MONGO_URI);

// Sample route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
