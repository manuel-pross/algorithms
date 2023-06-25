import { fibLinear, fibMatrix, fibRec } from "./Fibonacci/fibonacci";
import { closedJosephus, recJosephus } from "./Josephus/Josephus";

console.log(fibRec(0));
console.log(fibRec(1));
console.log(fibRec(2));
console.log(fibRec(3));
console.log(fibRec(4));
console.log(fibRec(5));
console.log(fibRec(20));

console.log(fibLinear(0));
console.log(fibLinear(1));
console.log(fibLinear(2));
console.log(fibLinear(3));
console.log(fibLinear(4));
console.log(fibLinear(5));
console.log(fibLinear(20));

console.log(fibMatrix(20));

// console.log(recJosephus(10));
// console.log(closedJosephus(10));
