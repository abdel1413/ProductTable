
import { useState } from "react"
import { ProductTable } from "./ProductTable"
import { SearchBar } from "./SearchBar"


export const FilterProductTable =({products})=>{
   const [textFilter, setTextFilter] = useState('')
   const [inStockOnly,setInStockOnly]= useState(false)
  return(
     <div>
     <SearchBar 
      textFilter={textFilter}
      inStockOnly = {inStockOnly}
      onHandleText = {setTextFilter}
      onHandleInStockOnly ={setInStockOnly}
     />
     <ProductTable 
     products={products} 
     textFilter={textFilter}
     inStockOnly={inStockOnly}/>
  </div>)
}