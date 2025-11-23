
import { useState } from "react"
import { ProductTable } from "./ProductTable"
import { SearchBar } from "./SearchBar"


export const FilterProductTable =({products})=>{
   const [textFilter, setTextFilter] = useState('fruits')
   const [inStockOnly,setInStockOnly]= useState(false)
  return(
     <div>
     <SearchBar 
      textFilter={textFilter}
      inStockOnly = {inStockOnly}
     />
     <ProductTable 
     products={products} 
     textFilter={textFilter}
     inStockOnly={inStockOnly}/>
  </div>)
}