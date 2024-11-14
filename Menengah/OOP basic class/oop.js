// Contoh object
// let vehicle = {
//     name : "Civic",
//     type : "Sedan",
//     price : 1000000,

//     startEngine : function(){
//         console.log("Start engine");
//     },

//     stopEngine : function(){
//         console.log("Stop engine");
//     }
// }

// console.log(vehicle);

// Contoh Class
class Vehicle {
    constructor(name, type, price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }

    startEngine(){
        console.log("Start engine");
    }

    stopEngine(){
        console.log("Stop engine");
    }
}

let vehicle = new Vehicle ("Civic","Sedan",1000000)
console.log(vehicle);