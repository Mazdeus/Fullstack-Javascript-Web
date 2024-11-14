// Bikinlah class student yang memiliki :
// Attribute : 
// o	name;
// o	subject (dalam bentuk larik);
// o	score.
// Method :
// o	sebutkanNama();
// o	sebutkanSubject().

class Student {
    constructor (name,subject,score) {
        this.name = name;
        this.subject = subject;
        this.score = score;
    }

    sebutkanNama() {
        console.log(this.name);
    }

    sebutkanSubject() {
        console.log(this.subject);
    }
}

// Proses Instantiation
let andi = new Student("Andi",["Math","English"],90);

// Hasil
console.log(andi);
andi.sebutkanNama();
andi.sebutkanSubject();