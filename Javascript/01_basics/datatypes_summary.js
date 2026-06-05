//data type 
//primitive and non primitive

//1.primitive   

//7 types : string , number , boolean , null , undefined , symbol , BigInt

const score = 100 // false , "akshay"
// hence javascript is dynamically typed programming language


const score = 100.8
let username ; //undefined
let name = null //null typeof null == object

const id = Symbol('123')
const anotherid = symbol("123")

console.log(id == anotherid);//false

//bigint
// const bignumber = 378932495745929857543n




//2.reference type , (non primitive)

//Array , objects , function 

const heros =["akshay","eren","anakin"]
let myobj = {
    name : "akshay",
    age = 20,
}

const myfunction = function(){
    console.log("helloword");
    
}