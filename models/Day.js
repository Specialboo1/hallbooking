const mongoose = require('mongoose');
const roomsSchema = require("./Rooms").schema;

let daySchema = new mongoose.Schema({
    date: Date,
    rooms: [roomsSchema]    
});

let Day = mongoose.model("Day", daySchema);

module.exports.model = Day;
module.exports.schema = daySchema;
