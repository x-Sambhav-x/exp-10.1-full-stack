const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/todoApp")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

app.use("/api/todos", todoRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} ✅`));
