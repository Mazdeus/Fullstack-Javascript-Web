// Proses argv : bisa mengambil input dari terminal
// Command : show, add, delete, update

const { Console } = require('console');

const command = process.argv[2];
const params = process.argv.slice(3);
// console.log(command);
// console.log(params);

switch (command) {
    case 'show' :
        // console.log("command show");
        const fs = require ('fs');
        let data = fs.readFileSync('./data.json','utf8'); // utf8 untuk encoding untuk dapat menjadi string
        let todos = JSON.parse(data);
        console.log(todos);
        break;
    case 'add' :
        console.log("command add");
        break;
    case 'delete' :
        console.log("command delete");
        break;   
    case 'update' :
        console.log("command update");
        break;
    default :
        console.log("Command tidak sesuai");
        break;
}