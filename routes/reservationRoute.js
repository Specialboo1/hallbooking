var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Day = require("../models/Day").model;
const Reservation = require("../models/Reservation").model;


/* GET home page. */
router.post('/', function(req, res, next) {
  Day.find({date: req.body.date},(err,days)=>{
    if(!err)
    {
      if(days.length > 0) {
        let days = days[0];
        days.rooms.foreach(rooms => {
          if(rooms.id == req.body.rooms){
            rooms.reservation = new Reservation({
              name: req.body.name,
              phone: req.body.phone,
              email: req.body.email
            })
            rooms.isAvailable = false;
            days.save(err => {
              if(err)
              {
                console.log(err);
              } else
              {
                console.log("Booked");
                res.status(200).send("Reserved");
              }
            })
          }
        })
      } else
      {
        console.log("Day not found")
      }
    }
  })
});

module.exports = router;
