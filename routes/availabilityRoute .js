var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Day = require("../models/Day").model;


/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("request attempted");
  console.log(req.body);

  const dateTime = new Date(req.body.date);
  Day.find({date: dataTime}, (err,docs) => {
    if(!err)
    {
      if (docs.length > 0){
        console.log("Record exists. Sent docs");
        res.status(200).send(docs[0])
      }
      else{
        const allRooms = require("../data/allRooms");
        const day = new Day({
          date: dateTime,
          rooms: allRooms,          
        })
        day.save(err => {
          if(err)
          {
            res.status(400).send("Error saving new data")
          }
          else{
            console.log("Created new dateTime");
            Day.find({date: dateTime},(err,docs)=>{
              err ? res.sendStatus(400) : res.sendStatus(200).send(docs[0]);
            })
          }
        })
      }
    }
    else{
      res.status(400).send("Could not Search for date")
    }
  })
});

module.exports = router;
