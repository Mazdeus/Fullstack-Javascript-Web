// 1
var student = {
    name : "andy",
    gpa : 3.05,
    
    speak(){
    console.log(this.name)
    }
}

student.speak();

//2
var obj = {
    name : "james",
    "is able": true,
    1 : 100
}

console.log(obj.name);

//3
var obj = {
    name : "james",
    "is able": true,
    1 : 100
    }
var kata = "kata";
console.log(obj[kata]);

//4
var tes = { 1 : 100 };
tes["1"] = tes["1"] + 5;
console.log(tes["1"]);

//5
var obj = {
    name : "james",
    "is able": true,
    1 : 100
    }
    console.log(typeof obj["1"]);