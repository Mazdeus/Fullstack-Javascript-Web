// cara lama (ES 5)
let number = [1,2,3];

// for (let i = 0; i < number.length; i++) {
//     console.log(number[i]);
// }

// // Cara new (ES 6)
// number.forEach(element => { //disebut callback function
//     console.log(element); // element yang dimaksud adalah indeks pada number
// })

// Cara new 2
// let result = number.map(number => {
//     return number*2;
// })

// cara new 3 lebih singkat
let result = number.map(number => number * 2)
console.log(result);