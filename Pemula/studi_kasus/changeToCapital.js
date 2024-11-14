/* 
Studi kasus 2
Membuat sebuah function untuk mengubah huruf menjadi kapital
*/

// cara 1
// function changeToCapital (str) {
//     var result;
//     result = str.toUpperCase();
//     return result;
// }

//cara 2
// function changeToCapital (str) {
//     var word = String(str);

//     return word.toUpperCase();
// }


// Cara 3
function changeToCapital (str) {

    return str.toUpperCase();
}


// Hasil
console.log(changeToCapital("hello world"));
// HELLO WORLD
console.log(changeToCapital("MaKan nasI"));
// MAKAN NASI