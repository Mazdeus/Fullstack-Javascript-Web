// Latihan :
// Buatlah 2 fungsi yang :
// •	Mengubah kalimat menjadi larik
// •	Menghitung jumlah elemen dalam larik
// Contoh : masukkan “Hello selamat pagi”. Akan memberi hasil 3.

function SplitToArray(teks){
    var arrayteks = teks.split(" ")
    console.log("Isi dari array : " + arrayteks)
    return arrayteks
}

function Countteks(kalimat){
    var result = SplitToArray(kalimat)
    var arraylength = result.length
    return arraylength
}

console.log("Jumlah elemen dalam array : " + Countteks("Hallo Aku adalah sebuah laptop yang memiliki spesifikasi memumpuni"))
