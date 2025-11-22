import { ProductCategories } from "./ProductCategories";
import { ProductRows } from "./ProductRows";

export const ProductTable = ({products})=>{
    //pass the comp. category  and productRows here
    const rows = [];
    let lastCategory = null 
    products.map(product =>{
    
       if(product.category === lastCategory){
         rows.push(
          <ProductCategories  category={product.category} key={product.category}/>
    )}

     rows.push(
        <ProductRows products={product} key={product.name}/>
     )
     lastCategory = product.category;
    })





         
    return (<div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>     
             {rows} 
            </tbody>
        </table>
    </div>)
}