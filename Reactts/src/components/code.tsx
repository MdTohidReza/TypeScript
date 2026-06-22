
interface ChaiCard {
    name: string;
    price: number;
    isSpecial ?: boolean
}



export function Chai({name, price, isSpecial = false}:ChaiCard){
     return(
      <article>
        <h2>{name} {isSpecial && <span>star</span> }</h2>
        <p>{price}</p>
      </article>
     );
}