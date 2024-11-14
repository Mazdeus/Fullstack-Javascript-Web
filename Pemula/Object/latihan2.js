//Buatlah method dari object untuk menampilkan profil :
/*
Nama : Caca
Berat : 45 kg
Tinggi : 160 cm
Hobi : nonton, baca buku
*/

var profil = {
    //key
    nama : "caca",
    berat : 45,
    tinggi : 160,
    hobi : ["menulis", "membaca"],

    //method
    sebutkanhobby : function(){
        console.log("Hobby Caca : ");
        for (i = 0; i < this.hobi.length; i++) {
            console.log(1 + i + ". " + this.hobi[i]);
        }
    }
};
profil.sebutkanhobby();
// console.log(profil.hobi);