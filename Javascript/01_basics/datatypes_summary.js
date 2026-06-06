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



// ---------------------------------------------------------

//stack (primitive){copy milta hai } , heap (non primitive) {original milta hai or ushi me change hota hai }


let myyoutubename = "akshay"

let anothername = myyoutubename
anothername = "varun"

console.log(anothername);//varun
console.log(myyoutubename);//akshay


let user = {
    email : "iuagss"
}

let user2 =  user 
user2.email = "isdooa"
console.log(user2);//changed
console.log(user);//changed

