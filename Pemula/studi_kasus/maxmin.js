/*
Kasus 3
Mencari nilai max dan min dalam sebuah array angka
*/

function nilaiMaxMin (arrayAngka) {
    max = arrayAngka [0];
    min = arrayAngka [0];
    for (i = 0; i < arrayAngka.length; i++) {
        if (max < arrayAngka[i]) {
            max = arrayAngka[i];  
        } 
        if (min > arrayAngka[i]) {
            min = arrayAngka[i];
        }
    }
    return {
        max : max,
        min : min
    }
}

console.log(nilaiMaxMin([10,3,5,12,7]))
// Hasil
/*
{
    max : 12;
    min : 3;
}
*/