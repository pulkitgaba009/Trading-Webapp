require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGO_URL;

const app = express();

app.listen(PORT,()=>{
    console.log("App is working ... ")
    mongoose.connect(URL);
    console.log("Db connected !");
})