// It play crucial role while i am working on large project like react,angular,api data handlig, working on enterprise
// Interface means to define the structure of object

//Structure of interface
interface Employee {
    id: number,
    name:string,
    salary:number
}

let employee:Employee = {
    id: 123,
    name: "Tohid",
    salary:12000
}

// union
type TeaType = "Masala" | "ginger"| "lemon"
function Chai (t:TeaType){
    console.log(t);
}

//Intersection
type Chai1 = {teaLeaves: number}
type Chai2 = {sugar : number}

type ComboChai = Chai1 & Chai2

const OrderChai : ComboChai = {
    teaLeaves : 1,
    sugar : 2
}
console.log(OrderChai);


// more about interface
interface chai{
    name:string,
    price: number,
    milk?:boolean
}
const masala : chai ={
    name : "Milk Tea",
    price : 20,
}



// other example of interface
interface shop {
    readonly id : number,
    name:string
}
const c : shop ={
    id : 34,
    name:"Hari"
}


//
interface Discount{
    (price : number) : number,
}
const apply : Discount = (P)=> P*3

//
interface user{
    name:string
}
interface user{
    age:number
}
const u : user = {
    name:"Umar",
    age:23
}

//

interface A{a:string}
interface B{b:string}

interface c extends A,B {}