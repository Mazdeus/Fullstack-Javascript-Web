/*
Kasus 5
Menentukan rata rata terbesar pada sebuah array 2 dimensi
*/
function findAvarageMax (arr2D) {
    var result = [];
    for (var i = 0; i < arr2D.length; i++) {
        result.push(averageArray(arr2D[i]));
    }

    var max = result[0]
    var index = 0;
    for (i = 0; i < result.length; i++) {
        if (max < result [i]) {
            max = result [i];
            index = i;
        }
    }
    return "Array ke " + (index + 1) + " merupakan rata rata terbesar";
}

function averageArray (arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

// hasil
console.log(findAvarageMax([
    [10,3,5,7,5],
    [5,6,4,1,2],
    [7,8,12,10,5]
]))

// Hasil
// Array ke 3 merupakan rata-rata terbesar