//JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

//Date

let myDate = new Date()
console.log(myDate);//2026-06-06T17:02:23.071Z
console.log(myDate.toString());//Sat Jun 06 2026 22:33:01 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString());//6/6/2026, 10:34:45 PM

console.log(typeof myDate);//object

let mycreatedDate = new Date(2023,0,23)
console.log(mycreatedDate.toDateString());//Mon Jan 23 2023
//alwaays call the method ()---------IMPORTANT

let my2createdDate = new Date(2023,0,23,5,3)
console.log(my2createdDate.toLocaleString());//1/23/2023, 5:03:00 AM


// let my3createdDate = new Date("2023-01-14")//1/14/2023, 5:30:00 AM
let my3createdDate = new Date("01-14-2023")//1/14/2023, 12:00:00 AM
// console.log(my3createdDate.toLocaleString());

let mytimestamp = Date.now()
// console.log((mytimestamp));//1780765871339 in millisecond from jan 1 , 1970
// console.log(my3createdDate.getTime());//1673634600000 in miliseconds

// allways compaiere in millisecond

console.log(Math.floor(Date.now()/1000));// now converted in seconds



let newdate = new Date()
console.log(newdate);//2026-06-06T17:16:58.340Z
console.log(newdate.getMonth());//and many more methods , and allways call the methods ()



// newdate.toLocaleString('default',{
//     weekday: "narrow",
//     timeZone: AbortSignal
// })



