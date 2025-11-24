
import { useState } from "react"
import { ProductTable } from "./ProductTable"
import { SearchBar } from "./SearchBar"


export const FilterProductTable =({products})=>{
   const [textFilter, setTextFilter] = useState('')
   const [inStockOnly,setInStockOnly]= useState(false)
  
   //we can update the state here
   //or carry it down to child component from where
   // the state update is initiated or triggered.
   //in this case we have searchBar comp. which make parent comp.
   //here filterProductTable to update. 
  const  handleText = (e)=>{
    console.log('e', e.target.value)
    setTextFilter(e.target.value)


  }
  const handleCheck = (e)=>{
    setInStockOnly(e.target.checked)
  }
  return(
     <div>
      <h3>The Products menu</h3>
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