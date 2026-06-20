// Array

// basic syntax of Array
const x : string[] = ["Hari", "Gita"]
const y : number[] = [1,2,3,4]
const z : Array<number> = [4.5,5,4,4]

// Array object
type p = {
    name : string,
    price : number
}
const menu : p[] = [
    {name:"food",price:4},
    {name:"vegetable",price:20}
]

// readonly array

const cities : readonly string[]=["KTM","JNK"]

//multi-dimension array

const table : number [][] =[
    [2,3,4,5,5],
    [3,5,5,5,]
]



//tuples

let chaiTuples : [string, number];
chaiTuples = ["Har", 20]
// chaiTuples = [20, "Hari"] not valid


let userInfo : [string, number, boolean?]
userInfo=["Hari",20]
userInfo = ["sita",20,true]


const location : readonly [number,number]=[22,33]


const chaiItems : [name:string , price: number] = ["sita",20]



//enum
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}
const size = CupSize.LARGE

//example
enum status {
    PENDING = 100,
    SERVERED,//Automatically increase 101
    CANCELLED,//Automatically increase 102
}


//example
enum chaiType{
    Hero1 = "Orange",
    Lemon = "lemon"
}
function makeChai(type:chaiType){
    console.log(`Making : ${type}`);
}
makeChai(chaiType.Lemon)


//example
enum RandomEnum{
    ID = 1,
    name = "Hari"
}


//example
const enum sugars{
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}
const s = sugars.LOW


//example
let t:[string,number]=["cahi",10]
t.push("extra")
