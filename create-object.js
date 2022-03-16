// 1. using object literal
const student = { name: "Rakibul", job: "freelancing"};

// 2. constructor
const person = new Object();


// 3. crete object
// const human = Object.create(null);
const human = Object.create(student);
console.log(human.job);


// class (syntactical sugar)
class People {
    constructor(name, age){
        this.name = name;
        this.age= age;
    }
}
const peop = new People("manush", 12);
console.log(peop)

// funcition (aitar dorkar nai)
function Manush(name){
    this.name = name;
}
const man = new Manush("kader");
console.log(man);