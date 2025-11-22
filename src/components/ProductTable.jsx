import { ProductCategories } from "./ProductCategories";
import { ProductRows } from "./ProductRows";

export const ProductTable = ({products})=>{
    //pass the comp. category  and productRows here

    const rows = [];
    let lastCategory = null 
    products.map(product =>{
        console.log('p',product)
       if(product.category === lastCategory){
        
        console.log(rows.includes(product.category))
         rows.push(
          <ProductCategories  category={product.category} key={product.category}/>
    )}
    console.log('ind', !rows.includes(product.category))
     rows.push(
        <ProductRows products={product} key={product.name}/>
     )
     lastCategory = product.category;
    })

rows.forEach(row => console.log(row.props))



         
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