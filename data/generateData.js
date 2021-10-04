const fs = require('fs');
const numRooms = Math.floor(Math.random() *10) + 10;

let Rooms = [];

for(i=1; i<numRooms; i++)
{
    const beds = Math.floor(Math.random() * 6) + 2;
    const name = `Rooms ${i}`;
    const location = ["Any Room", "Delux", "SuperDelux", "Premium"][Math.floor(Math.random() * 3)];
    Rooms.push({
        name: name,
        capacity: beds,
        isAvailable: true,
        location: location
    })
}
let data = JSON.stringify({rooms: Rooms})

fs.writeFileSync(__dirname + "/allRooms.json", data);




