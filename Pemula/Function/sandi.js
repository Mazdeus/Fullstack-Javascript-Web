//Soal
/* Cek apakah panjang sebuah kata sandi :
    diantara 5 dan 12
    Buatlah function untuk :
    - Menghitung jumlah karakter 
    - Cek apakah panjang karakter antara 5 dan 12

    Contoh : 
    kata sandi : 123
    // Masukkan karakter antara 5 dan 12
    kata sandi : abcdefgh
    // kata sandi diterima
*/

// function countchar(kalimat){
//     var countword = kalimat.length
//     var panjang = cekpanjang(kalimat.length)
//     return countword
// }

// function cekpanjang(karakter){
//     if (karakter >= 5 && karakter <= 12){
//         console.log("Kata sandi diterima")
//     } else {
//         console.log("Kata sandi diitolak")
//     }
// }

// console.log("Jumlah karakter : " + countchar("Aku12345"))

function countchar(str){
    var countword = str.length;
    return countword;
}

function cekpanjang(str){
    var strlength = countchar(str);
    if (strlength >= 5 && strlength <= 12){
        return "Kata sandi diterima";
    } else {
        return "Kata sandi diitolak";
    }
}

console.log(cekpanjang("Aku12345"));