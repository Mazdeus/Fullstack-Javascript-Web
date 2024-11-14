/* Bikinlah function untuk mengelompokkan jumlah anak
 yang lulus tiap anaknya
 ubah objek student 
 Hasil:
 [
    { 
        class : "A",
        students : ["Charlie","Berno"],
        score : [87,75]
    },
    { 
        class : "B",
        students : ["Andi","Ellie"],
        score : [81,73]
    }
]

 */
var student = [
    ["Charlie","A",87],
    ["Berno","A",75],
    ["Andi","B",81],
    ["Ellie","B",73],
]

function amountOfstudent (data) {
    var result = [];

    var classA = {
        class : "A",
        students : [],
        scores : [] 
    }

    var classB = {
        class : "B",
        students : [],
        scores : [] 
    }

    for (var i = 0; i < data.length; i++) {
        if (data[i][1] == 'A') {
            classA.students.push(data[i][0])
            classA.scores.push(data[i][2])
        } else {
            classB.students.push(data[i][0])
            classB.scores.push(data[i][2])
        }
    }

    result.push(classA)
    result.push(classB)

    return result
}

console.log("Bentuk Object dari Array data : ", amountOfstudent (student) )