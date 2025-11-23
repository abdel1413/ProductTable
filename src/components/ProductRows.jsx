export const ProductRows =({products})=>{
     const name = products.stocked
     ?products.name
     :<span style={{color:'red'}}>{products.name}</span> 
    return(<>
           <tr  >
            <td colSpan={2} >{name}</td>
            <td colSpan={2}>{products.price}</td>
           </tr>
    </>)
}