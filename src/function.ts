// function in TypesScript

//1st syntax
function hero(type:string, cups:number){
    console.log(`Making ${cups} cups of ${type}`);
}
hero("Lemon", 2)

//2nd syntax
function makeOrder(order:string){
    if(!order) return null
    return order
}

//3rd syntax
function logChai() : void{
    console.log("chai is ready");
}
// 4th syntax we return number form the function
function getChai (): number {
    return 24
}


// 5t syntax while we working on react then this is important

function working(order : {
    type : string,
    sugar : number,
    size : "Small" | "Large"
}){
    console.log("what you want to get output");
}

//or

function working2(order : {
    type : string,
    sugar : number,
    size : "Small" | "Large"
}) : number {
    return 2
}






