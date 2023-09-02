const consoleObject = console;

function encode(text) {
    return btoa(text)
    .split("")
    .reverse()
    .map((chr) => btoa(chr.charCodeAt(0)).replace("=", ""))
    .join("");
}

consoleObject.log("Hello \"World\"!");
var x = 3.1415;
var y = 123.456789;
var sum = x + y;
consoleObject.log("X is a " + typeof x)
//consoleObject.log(`Sum of ${x} + ${y} = ${x+y}`)
consoleObject.log('Sum of ' + x + ' + ' + y + ' = ' + sum)
//consoleObject.log('Sum of ' + y + ' + ' + x + ' = ' + sum)

const firstName = "Hunter";
const lastName = "171";
const fullName = firstName + lastName;

//consoleObject.log(`Full name is ${firstName} + ${lastName} = ${firstName+lastName}`);
consoleObject.log('Full name is ' + firstName + ' + ' + lastName + ' = ' + fullName);

consoleObject.log("VALUE: HELLO")
consoleObject.log("OUTPUT: " + encode("HELLO"))