
import { useState } from "react"
import { ProductTable } from "./ProductTable"
import { SearchBar } from "./SearchBar"


export const FilterProductTable =({products})=>{
   const [textFilter, setTextFilter] = useState('')
   const [inStockOnly,setInStockOnly]= useState(false)
   console.log(textFilter, inStockOnly)
  const  handleText = (e)=>{
    console.log('e', e.target.value)
    setTextFilter(e.target.value)


  }
  const handleCheck = (e)=>{
    setInStockOnly(e.target.checked)
  }
  return(
     <div>
     <SearchBar 
      textFilter={textFilter}
      inStockOnly = {inStockOnly}
      onHandleText = {handleText}
      onHandleInStockOnly ={handleCheck}
     />
     <ProductTable 
     products={products} 
     textFilter={textFilter}
     inStockOnly={inStockOnly}/>
  </div>)
}