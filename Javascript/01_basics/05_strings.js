const name = "akshay"
const repocount = 50 

//console.log(name + repocount + "value")

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String("aksh-ay")

console.log(gamename[0]);
console.log(gamename.__proto__);


console.log(gamename.length);
console.log(gamename.toUpperCase());//original value is not changed
console.log(gamename.charAt(2));
console.log(gamename.indexOf('h'));

const newstring = gamename.substring(0,4)//4 not included , just till 3
//negative values not allowed in substring
console.log(newstring);

const anotherstring = gamename.slice(-2,4)//negative values allwoed
console.log(anotherstring);


const newstringone = "   akshay   "
console.log(newstringone);
console.log(newstringone.trim());//trim remove spaces

const url = "https://akshay.com/akshay%20pratap"

console.log(url.replace('%20','-'));

console.log(url.includes('akshay'));
  

//convert string to array from string seprated by -
console.log(gamename.split('-'));






