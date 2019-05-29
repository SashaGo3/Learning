
//let age = prompt('How old are you?', 100);
//alert(`You are ${age} years old!`); // You are 100 years old!

// let isBoss = confirm("Are you the boss?");
// alert( isBoss );

// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
// let age = 1;
// let accessAllowed = age > 18 ? true : false;
// console.log(accessAllowed);


// let begin = prompt("What off name of JS");
// if(begin=="ECMAScript"){
//     alert("RIGHT!")
// } else {alert("Piece of shit")}





let box = document.getElementById('box'),
    btn = document.getElementsByTagName("button"),
    circle = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll(".heart");
    console.log(btn);
    console.log(btn[0]);
    console.log(circle[2]);
    console.log(heart);

box.style.backgroundColor = 'blue';

btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for(let i=0; i < heart.length; i++){
//     heart[i].style.backgroundColor = 'blue';
// }

heart.forEach(function(item, i, hearts){
    item.style.backgroundColor = 'blue';
});

let div = document.createElement('div');
    text = document.createTextNode("Hello amigos");

div.classList.add('black');


doc


console.log(div); 






// // let arr = [1,12,2];
// //     i = arr.sort(comparenum);

// //     function comparenum(a,b){
// //         return b-a;
// //     }
// //     console.log(arr);

// let soldier = {
//     health: 400,
//     armor: 100
// };
// let john ={
//     health:100
// };

// john.__proto__ = soldier;
// console.log(john);
// console.log(john.armor);