let isActive : boolean = true;
let hasPermission = true;// Typescript automatically know the type of haspermission is boolean which is called inference

//represent both integer and float in number
let decimal:number = 10;
let hex: number = 0xf00d;
let binary:number =  0b1010;
let octal:number =  0o744;
let float:number = 5.6;

//Representing the string
let color:string = 'Red';
let FullName:string= "Hari";
let age:number = 8
console.log(`The name of the Backend Developer is ${FullName} with ${color} of laptop having age around ${age}`);

//Represents whole numbers larger than 253 - 1.
const hugeNumber = BigInt(9007199254740991);

//Explict Type Notation type means you tell typescript exactly what type of variable should be
// String
let greeting: string = "Hello, TypeScript!";

// Number
let userCount: number = 42;

// Boolean
let isLoading: boolean = true;

// Array of numbers
let scores: number[] = [100, 95, 98];

//TypeScript can automatically determine (infer) the type of a variable based on its initial value:
// TypeScript infers 'string'
let username = "alice";

// TypeScript infers 'number'
let score = 100;

// TypeScript infers 'boolean[]'
let flags = [true, false, true];

// TypeScript infers return type as 'number'
function add(a: number, b: number) {
return a + b;
}

//Union
let subs : string | number = '1M';

let apiRequest :' pending' | 'success' | 'error' = ' pending'


// Type Narrowing

function getChai(kind: string | number){
    if(typeof kind === "string"){
        return `Making ${kind} chai ..`
    }
    return `other chai : ${kind}`
}

//truthiness
function serverChai(msg? : string){
    if(msg){
    return `serving ${msg}`
    }
    return `serving default chai`
}

//exahustive check
function orderChai(size : "small" | "medium" | "large" | number){
    if(size === "small"){
        return `The size is small`
    }
    if(size === "medium" || size === "large"){
        return `The size of chai is Medium`
    }
    return `the count of chai ${size}`
}

//using classs

class A {
    server(){
        return `Serving A`
    }
}
class B{
    server(){
        return  `Serving B`
    }
}
function server(work: A | B){
    if(work instanceof A){
        return work.server()
    }
}