/* 
Kasus 4
Menentukan jummlah huruf vokal pada teks.
*/

// var a = "makan nasi goreng"
// console.log(a[0])

function countVokal (str) {
    var result = {
        a : 0,
        i : 0,
        u : 0,
        e : 0,
        o : 0
    }

    for (i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            result.a++;
        } else if (str[i] === 'i') {
            result.i++;
        } else if (str[i] === 'u') {
            result.u++;
        } else if (str[i] === 'e') {
            result.e++;
        } else if (str[i] === 'o') {
            result.o++;
        }
    }

    return result
}

// Hasil
console.log(countVokal("makan nasi goreng"));


/*
{
    a : 3,
    i : 1,
    u : 0,
    e : 1,
    o : 1,
}
*/