var x = 3.1415;
var y = 123.456789;
var sum = y + x;
var diffrence = y - x;
var product = y * x;
var division = y / x;
console.log("Running on " + this.JSOBF.ENGINE)
console.log(`Sum of ${y} + ${x} = ${sum}`);
console.log(`Diffrence of ${y} - ${x} = ${diffrence}`);
console.log(`Product of ${y} * ${x} = ${product}`);
console.log(`Division of ${y} / ${x} = ${division}`);

let colors = ["red", "green", "blue"];
for(let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
    if(colors[i] == "blue"){
        console.log("blue blue sky blue")
    } else {
        console.log("black darkness")
    }
}

