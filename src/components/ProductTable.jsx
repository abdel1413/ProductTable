import { ProductCategories } from "./ProductCategories";
import { ProductRows } from "./ProductRows";

export const ProductTable = ({products})=>{
    //pass the comp. category  and productRows here
    const rows = [];
    let category = null 
    products.map(product =>{
       if(product.category === category){
         rows.push(
          <ProductCategories  categories={product.categories} key={product.categories}/>
    )}

     rows.push(
        <ProductRows products={product} key={product.name}/>
     )
     category = product.category;
    })


console.log('rows',rows)


         
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