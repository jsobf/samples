const consoleObject = console;

function encode(text) {
    return btoa(text)
        .split("")
        .reverse()
        .map((chr) => btoa(chr.charCodeAt(0)).replace("=", ""))
        .join("");
}

consoleObject.log(`Hello "World"!`);
var x = 3.1415;
var y = 123.456789;
var sum = y + x;
var diffrence = y - x;
var product = y * x;
var division = y / x;
consoleObject.log();
consoleObject.log(`X is a ${typeof x}`);
consoleObject.log(`Y is a ${typeof x}`);
consoleObject.log();
consoleObject.log(`Sum of ${y} + ${x} = ${sum}`);
consoleObject.log(`Diffrence of ${y} - ${x} = ${diffrence}`);
consoleObject.log(`Product of ${y} * ${x} = ${product}`);
consoleObject.log(`Division of ${y} / ${x} = ${division}`);
consoleObject.log();

const firstName = "Hunter";
const lastName = "171";
const fullName = firstName + lastName;

consoleObject.log(`Full name is ${firstName} + ${lastName} = ${fullName}`);

consoleObject.log(`VALUE: HELLO`);
consoleObject.log(`OUTPUT: ${encode("HELLO")}`);
