import { useState } from "react"

 export function Counter (){
    const [count, setCount] = useState<number | null >(0)
    return(
        <div>
            <p>Cups of Tea :{count}</p>
            <button onClick={()=> setCount((c)=> c + 1)}
            >Add More</button>
        </div>
    )
}