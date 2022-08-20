// reference type
console.log([] === []); // false
console.log([1] === [1]); // false

let obj1 = { value: 10 };
let obj2 = obj1;
let obj3 = { value: 10 };

obj1.value = 87;

console.log(
    obj1 === obj2, // true
    obj3 === obj1, // false
    obj1.value, // 87
    obj2.value, // 87
    obj3.value // 10
);

// context vs scope


// instantiation - reuse a object by copying it
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}
class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    introduce() {
        console.log(`WEEEE I'm a ${this.type}`);
    }
}

const w1 = new Wizard('Tom', 'Healer');
const w2 = new Player('Shelly', 'Dark Magic');

w1.introduce();
w2.introduce();