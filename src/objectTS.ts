//object decleration
const Obj = {
    name : "Hari",
    age : 24,
    isHot : false
}


let tea : {
    name: string,
    age : number,
    isHot: boolean
}

tea = {
    name : "Hari",
    age : 23,
    isHot: false
}

// syntax of parcel and required
type chaiOrder = {
    name : string,
    quantity : number
}

const placeOrder = (order: Required<chaiOrder>)=>{
    console.log(order);
}

placeOrder({
    name: 'chai with ginger',
    quantity:2
})

// syntax of peak
type chai = {
    name : string,
    price : number,
    quantity : number,
    isHot : boolean,
    ingridients : string[]
}
type BasicChaiInfo = Pick <chai, "name", "price"> ;
const chaiInfo : BasicChaiInfo = {
    name :'Lemon Tea',
    price : 30
}

//Syntax of omit

type chaiNew = {
    name : string,
    price : number,
    quantity : number,
    isHot : boolean,
    secretIngridients : string
}
type publicChai = Omit <chai, " secretIngridients">
