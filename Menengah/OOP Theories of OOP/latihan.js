/* 
Bikin class Person dengan attribute dasar :
- name
- age

Bikin subclass Programmer dan Student dan berikan attribute tambahan :
- skills di class Programmer
- scores di class Student

Manfaatkan konsep inheritance dan encapsulation
*/

class Person {
    constructor (name, age) {
        this._name = name;
        this._age = age;
    }

    get name () {
        return this._name;
    }

    get age () {
        return this._age;
    }

    set setName (name) {
        this._name = name;
    }

    set setAge (age) {
        this._age = age;
    }
}

class Programmer extends Person {
    constructor (name, age, skills) {
        super (name, age);
        this._skills = skills;
    }

    get skills () {
        return this._skills
    }

    set setSkills (skills) {
        this._skills = skills;
    }
}

class Student extends Person {
    constructor (name, age, scores) {
        super (name, age);
        this._scores = scores;
    }

    get scores () {
        return this._scores
    }

    set setScores (scores) {
        this._scores = scores;
    }
}

let person = new Person ("Amadeus",19);
let programmer = new Programmer ("Amadeus",19,"UI/UX Designer");
let student = new Student ("Amadeus",19,100);
console.log(person);
console.log(programmer.name);
console.log(student.age);