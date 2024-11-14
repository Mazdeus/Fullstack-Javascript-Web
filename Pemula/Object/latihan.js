// Latihan :
// Buatlah sebuah function untuk soal berikut :
// Ubah larik berikut :
// Var buah : [“durian”,75000,true];

// Menjadi object
// {
// 		Jenis : “durian”,
// 		Harga : 75000,
// 		Enak : true,
// }

// var buah = {
//     jenis : "durian",
//     harga : 75000,
//     enak : true,
// }

// console.log(buah.jenis)
// console.log(buah.harga)
// console.log(buah.enak)

function vartoobject(array){
    var result = {}
    result.jenis = array[0]
    result.harga = array[1]
    result.enak = array[2]
    return result
}
// var buah : [“durian”,75000,true];
console.log(vartoobject(["durian",75000,true]))