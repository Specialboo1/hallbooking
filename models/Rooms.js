const mongoose = require('mongoose');
const reservationSchema = require("./Reservation").schema;

let roomsSchema = new mongoose.Schema({
    name: String,
    capacity: Number,
    isAvailable: Boolean,   
    location: String,
    reservation: {
        required: false,
        type: reservationSchema,
    }
})

let Rooms = mongoose.model("Rooms", roomsSchema);

module.exports.model = Rooms;
module.exports.schema = roomsSchema;
