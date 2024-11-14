// Buatlah fungsi untuk mengubah larik dua dimensi ini
// menjadi larik object
/*
Hasil
[
    { 
        name : "Asus",
        type : "Laptop",
        price : 7500000
    },
    { 
        name : "Dell",
        type : "Laptop",
        price : 7000000
    },
    { 
        name : "Corsair",
        type : "Ram",
        price : 1250000
    },
]
*/

var items = [
    ["Asus", "Laptop", 7500000],
    ["Dell", "Laptop", 7000000],
    ["Corsair", "Ram", 1250000]
]

function larik2dobject (array2d) {
    
    var result = [];

    for (var i = 0; i < array2d.length; i++) {
        var tempObj = {};
        tempObj.name = array2d[i][0];
        tempObj.type = array2d[i][1];
        tempObj.price = array2d[i][2];

        result.push(tempObj);
    }

    return result;
}

console.log("Bentuk Object dari Array items : ", larik2dobject(items))