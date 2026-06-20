// class chai{
//     flavour : string;
//     price : number
// }
// const MasalaChai = new chai()
// MasalaChai.flavour = "Lemon"


class chai{
    flavour : string;
    price : number

    constructor (flavour : string, price:number){
        this.flavour = flavour
        this.price = price
    }
}
const MasalaChai = new chai("Lemon", 2)
MasalaChai.flavour = "Lemon"


// Access modifier
class chai1 {
    public flavour : string = "Lemon"
    private secretIngridients = "Ginger"

    reveal(){
        return this.secretIngridients
    }
}
const c = new chai1()
c.reveal()

//
class shop {
    protected shopName = "Chai Corner"
}
class Branch extends shop{
    getName(){
        return this.shopName
    }
}

// #-private
class waller {
    #balance = 1000;
    getBalance(){
        return this.#balance
    }
}
const w= new waller()


//
class cup{
    readonly capacity : number =200
    constructor(capacity:number){
        this.capacity = capacity
    }
}

//
class ModernChai {
    private _sugar = 2
    get Sugar(){
        return this._sugar
    }
    set sugar(value : number){
        if(value > 5) throw new Error ("Too Sweet")
            this._sugar = value
    }
}
const p = new ModernChai()
p.sugar = 3