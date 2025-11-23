export const SearchBar =()=>{
    return(
    <form className="sear-bar" style={{marginBottom: '10px'}}>
      <input type="text" name="" id="input-search"  placeholder="Search"/>
      <br />
       <label >
         <input type="checkbox" name="" id="input-checkbox" />
          Only show products in store
        </label>
    </form>
    )
}