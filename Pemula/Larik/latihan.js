// Bikin code yang hasilnya :
// 1. Vincent, IPK = 3.5, Lulus
// 2. Udin, IPK = 3.0, Lulus
// 3. Mamang, IPK = 2.1, Gagal

// (Syarat lulus IPK minimum 3.0)

var murid = [
    [1,"Vincent",3.5],
    [2,"Udin",3.0],
    [3,"Mamang",2.1]
];

for (i = 0; i <= murid.length-1; i++) {
    if (murid[i][2] >= 3.0){
        console.log(murid[i][0] + ". " + murid[i][1] + ", IPK = " + murid[i][2] + ", Lulus");
        // console.log("Lulus");
    } else {
        console.log(murid[i][0] + ". " + murid[i][1] + ", IPK = " + murid[i][2] + ", Gagal");
        // console.log("Tidak lulus");
    }
    
}
