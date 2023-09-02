// Function declaration
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Function expression
const add = function (a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Template literals
const message = `The sum of 2 and 3 is ${add(2, 3)}`;

// Array manipulation
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);

// Object creation
const person = {
    name: "John",
    age: 30,
    greet() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
    },
};

// Classes
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
};

fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

// Asynchronous functions
const fetchAsyncData = async () => {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

fetchAsyncData();

// Invoke functions and log variables
greet("Alice");
console.log(add(5, 3));
console.log(multiply(4, 6));
console.log(message);
console.log(doubledNumbers);
person.greet();

const dog = new Dog("Buddy");
dog.speak();
