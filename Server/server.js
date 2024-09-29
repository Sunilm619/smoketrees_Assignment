const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

mongoose
    .connect("mongodb+srv://sunilmanga60:bangbang-23@sunilm19.ne13j3y.mongodb.net/smoketrees?retryWrites=true&w=majority&appName=sunilm19")
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log("Error connecting to DB:", e));

app.use("/auth", require("./Api/Api"));

app.listen(port, () => console.log(`Server running on port ${port}`));
