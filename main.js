// Task 2

let name = 'Hasan';
let job = 'Engineer';

const obj = { name1: 'Munna', job1: 'Web Developer' };
let { name1, job1 } = obj;
name = name1; // name = obj.name
job = job1; // job = obj = job
let str = `Hi, My name is ${name} and I am an ${job}`;
console.log(str);

const arFn = (number, number2) => number / number2;
console.log(arFn(10, 2));