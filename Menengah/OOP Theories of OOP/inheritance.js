class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

class Programmer extends Person {
    constructor (name, age) {
        super (name, age);
    }
}