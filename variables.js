let admin, name;
name = "John";
admin = name;
console.log(admin);



let name = true;
var random1 = 50 * Math.random();
var random2 = 100 * Math.random();
console.log(random1);
console.log(random2);
let isTrue = random1 < random2;

if (isTrue == true) {
    console.log(`Hello, my dear ${name}th!`);
} else {
    console.log("Nothing!");
}

let kek = Number("cheburek");
console.log(kek);
if(kek == "NaN") {
    console.log("Why are you g?")
} else {
    var Test = typeof undefined === 'undefined';
    console.log(Test);
}




function hello(name, greeting){
    return `${greeting} ${name}`;
}
console.log(hello());

console.log("" + 1 + 0)
