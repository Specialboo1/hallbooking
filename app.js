require("dotenv").config()
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var cors = require('cors');

mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology: true, useNewUrlParser: true});

var db = mongoose.connection


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/availability', require('./routes/reservationRoute'));
app.use('/reserve', require('./routes/reservationRoute'));

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=> {
  console.log("Connected to DB")
})


module.exports = app;
