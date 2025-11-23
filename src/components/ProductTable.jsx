import { ProductCategories } from "./ProductCategories";
import { ProductRows } from "./ProductRows";

export const ProductTable = ({products, filterText, inStockOnly})=>{
    //pass the comp. category  and productRows here
console.log('filtw', filterText)
    const rows = [];
    let lastCategory = null 
   
    products.map(product =>{
         //convert everything to lower then check if 
         //entered text is in the product. if not don't do anything
         console.log('fi',product.name,(filterText))
         console.log('on', inStockOnly)
         
        // if(product.name.indexOf(filterText)===-1){return};

        // if(inStockOnly && !product.stocked) {return};
       
       if(product.category !== lastCategory){
         rows.push(
          <ProductCategories  category={product.category} key={product.category}/>
    )}

     rows.push(
        <ProductRows products={product} key={product.name}/>
     )
     lastCategory = product.category;
    })





         
    return (<div >
        <table>
            <thead>
                <tr  style={{ textDecoration: "underline"}} >
                    <th colSpan={2}  >Name</th>
                    <th colSpan={2}>Price</th>
                </tr>
            </thead>
            <tbody>     
             {rows} 
            </tbody>
        </table>
    </div>)
}