export const SearchBar =({ onHandleText, onHandleInStockOnly})=>{
    return(

    <form className="sear-bar" style={{marginBottom: '10px'}}>
      <input type="text" name="" id="input-search" 
       placeholder="Search..."
       onChange={(e)=>onHandleText(e.target.value)}/>
      <br />
       <label >
         <input type="checkbox" name="" 
         id="input-checkbox"
         
         onChange={(e) => onHandleInStockOnly(e.target.checked)}
          />
          Only show products in store
        </label>
    </form>
    )
}