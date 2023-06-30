const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/BMS");

const express = require("express");
const app = express();

const isBlog = require("./middlewares/isBlog");

app.use(isBlog.isBlog);  

//forn admin routes

const adminRoute  = require("./routes/adminRoute");
app.use('/',adminRoute);

//forn user routes

const userRoute  = require("./routes/adminRoute");
app.use('/',userRoute);

app.listen(3000,function(){
    console.log("server is running");
});