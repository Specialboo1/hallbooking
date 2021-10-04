const mongoose = require('mongoose');
const Rooms = require("../models/Rooms").model;
const fs = require("fs");

let roomData = fs.readFileSync(__dirname + "/allRooms.json");
roomData = JSON.parse(roomData).rooms;

let allRooms = [];
roomData.forEach(rooms => {
    allRooms.push(new Rooms(rooms))
})

module.exports = allRooms;