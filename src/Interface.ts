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
