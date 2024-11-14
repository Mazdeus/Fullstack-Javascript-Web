// Read file JSON
const fs = require ('fs');
let data = fs.readFileSync('./Menengah/Javascript Object Notation/data.json','utf8'); // utf8 untuk encoding untuk dapat menjadi string

let parseddata = JSON.parse(data);
// console.log(parseddata);

console.log("Lis Student : ");
parseddata.forEach(data => {
    console.log(`${data.id}.${data.name},${data.score}`)
});
//result :
/*
List Student :
1. Andi, 90
2. Bejo, 80
*/