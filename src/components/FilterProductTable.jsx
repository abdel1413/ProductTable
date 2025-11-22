
import { ProductTable } from "./ProductTable"
import { SearchBar } from "./SearchBar"


export const FilterProductTable =({products})=>{
   
  return(
     <div>
     <SearchBar />
     <ProductTable products={products} />
  </div>)
}