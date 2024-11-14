// Studi kasus 1
// Studi kasus ini membuat sebuah function untuk menentukan bilangan prima atau bukan

// cara 1
// function cekPrima (angka) {
//     if (angka < 2) {
//         return false;
//     }

//     for (var i = 2; i < angka; i++) {
//         if (angka % i == 0) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// }

function cekPrima (angka) {
    var flag = 0;
    for (var i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            flag++;
        } 
    }

    if (flag === 2) {
        return true;
    } else {
        return false;
    }
}

console.log(cekPrima(1));
console.log(cekPrima(5));