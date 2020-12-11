//Prototypal iheritance
function Person(age, name, gender) {
    this.age = age;
    this.name = name;
    this.gender = gender;
}

Person.prototype.getAge = function () {
    return this.name;
}

Person.prototype.getName = function () {
    return this.name;
}

Person.prototype.getGender = function () {
    return this.gender;
}

function Teacher(age, name, gender, subject) {
    Person.call(this, age, name, gender);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.getSubject = function () {
    return this.subject;
}

//Classes in ES6
class PersonClass {
    
    constructor(name, age, gender) {
        this.age = age;
        this.name = name;
        this.gender = gender;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getGender() {
        return this.gender;
    }
}

class TeacherClass extends PersonClass {
    constructor(name, age, gender, subject) {
        super(name, age, gender);
        this.subject = subject;
    }
    getSubject() {
        return this.subject;
    }
}


//Module Pattern allows encapsulation and private variables
const CarModule = () => {
    let milesDriven = 0;
    let speed = 0;

    const accelerate = (amount) => {
        speed += amount;
        milesDriven += speed;
    }

    const getMilesDriven = () => milesDriven;

    // Using the "return" keyword, you can control what gets
    // exposed and what gets hidden. In this case, we expose
    // only the accelerate() and getMilesDriven() function.
    return {
        accelerate,
        getMilesDriven
    }
};

const testCarModule = CarModule();
testCarModule.accelerate(5);
testCarModule.accelerate(4);
console.log(testCarModule.getMilesDriven());


//Debug

let myPerson = new PersonClass("kido", 18, "male")
console.table([myPerson])
console.log("his age = " + myPerson.age)
console.log("his age = " + myPerson.getAge())