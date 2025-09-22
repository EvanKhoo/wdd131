const PI = 3.14;
const ONE = 1;
const TWO = '2';
let radius = 3;
let area = radius * radius * PI;

console.log(area);

radius = 20;

area = radius * radius * PI;

console.log(area);

//Multiplication operator
let result = ONE * TWO;
console.log(result);

//Concat operator
result = ONE + TWO;
console.log(result);

//Addition operator
result = ONE + Number(TWO);
console.log(result);

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    