//Contoh dari method dalam object
//Function dalam object

var mobil = {
    //key
    nama : "Porsche Cayman",
    cc : 5000,

    //method
    startEngine : function(){
        console.log("Mesin nyala");
    }
}

console.log(mobil);

//2
var obj = {
    name : "james",
    "is able": true,
    1 : 100
}

console.log(obj.name);