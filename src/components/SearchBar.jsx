export const SearchBar =({textFilter, inStockOnly, handleText, handleInStockOnly})=>{
    return(

    <form className="sear-bar" style={{marginBottom: '10px'}}>
      <input type="text" name="" id="input-search" 
       placeholder="Search..."
       value={textFilter}
       onChange={(e)=> handleText(e.target.value)}/>
      <br />
       <label >
         <input type="checkbox" name="" 
         id="input-checkbox"
         checked={inStockOnly}
         onChange={e => handleInStockOnly(e.target.checked)}
          />
          Only show products in store
        </label>
    </form>
    )
}