export const SearchBar =({ inStockOnly, onHandleText, onHandleInStockOnly})=>{
   
 
  return(
    <form className="sear-bar" style={{marginBottom: '10px'}}>
      <input type="text" name="" id="input-search" 
        
       placeholder="Search..."
       onChange={(e)=>  onHandleText(e)}/>
      <br />
       <label >
         <input type="checkbox" name="" 
         id="input-checkbox"
           value={inStockOnly}
         onChange={(e) => onHandleInStockOnly(e)}
          />
          Only show products in store
        </label>
    </form>
    )
}