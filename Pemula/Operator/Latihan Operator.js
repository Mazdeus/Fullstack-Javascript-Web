//Menghitung Volume Kubus

var sisi = 5;
var volume = sisi * sisi * sisi;
console.log("Volume kubus = " + volume)

//Menghitung Luas Lingkaran

var jarijari = 4;
var pi = 3.14;
var luas = pi * jarijari * jarijari;
console.log(luas)

//Soal 1
var pi = 3.14;
var r = 5;
console.log(Math.ceil(pi * r)); //untuk membulatkan sebuah angka ke atas menjadi bilangan bulat terdekat. 

//Soal 2
var x = 10;
var y = '10';
var z = x === y; // == untuk membandingkan nilai, tapi === membandingkan nilai dan tipe datanya
console.log(z)

//Soal 3
var p = true;
var q = 0;
var r = p + q;
console.log(r) //Hasil dari program JavaScript di bawah ini adalah 1 karena dalam ekspresi p + q, JavaScript akan melakukan konversi tipe data secara otomatis. Nilai true = 1. lalu ditambah 0 , maka hasilnya 1

//Soal 4
var u = 10;
var v = 'abc';
var w = u - v;
console.log(w) //Operator - dalam ekspresi u - v mencoba untuk mengurangkan nilai dari v (yang merupakan sebuah string) dari nilai u. JavaScript akan mencoba mengonversi nilai string tersebut menjadi angka, tetapi karena string 'abc' tidak dapat diubah menjadi angka, hasilnya adalah NaN (Not a Number).

//Soal 5
var a = 5;
var b = 3;
var c = a**b;
console.log(c) // Artinya a pangkat b

