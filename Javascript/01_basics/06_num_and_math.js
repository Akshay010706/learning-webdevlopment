const score = 400
console.log(score);//400


const balance = new Number(100)
console.log(balance);//[Number: 100]

console.log(balance.toString().length);//3

console.log(balance.toFixed(2));//100.00

const othernumber = 23.8966//123.8966,1123.8966

console.log(othernumber.toPrecision(3));//23.9,124,1.12e+3


const hundreads = 1000000
console.log(hundreads.toLocaleString('en-IN'));//1,000,000acoording to us bu default , en-IN convert accordingf to indian standard


//Number.MAX_SAFE_INTEGER and other function


//+++++++++++++++++++++Math+++++++++++++++++++++++

console.log(Math);//Object [Math] {}

console.log(Math.abs(-4));//4, absolute positive value
console.log(Math.round(4.3));//4, 4.6->5

//to control 
console.log(Math.ceil(4.2));//5,Takes upper value
console.log(Math.floor(4.9));//4 takes lower value


console.log(Math.min(4,6,2,8));
console.log(Math.max(4,6,2,8));


console.log(Math.random());//0.78 always betwwen 0 and 1
console.log(Math.floor(Math.random()*10 )+ 1);//min value 1


const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1 )) + min);
 


