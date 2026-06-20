//it makes code reusable

//general syntax of generics
function A <T>(item:T):T[]{
    return[item]
}
A("chai")
A(2)
A({flavour:"chai"})

//
function pair <A,B>(a:A,b:B):[A,B]{
    return[a,b]
}
pair("chai",3)
pair(3,3)

// interface in generics

interface box<T>{
    content : T
}
const NumBox : box <string> = {content : "10"}
const NumBoxs : box <number> = {content : 10}


//api response
interface api <T>{
    status : number,
    data: T
}
const res : api <{flavour : string}>={
    status : 200,
    data:{flavour:"chai"}
}