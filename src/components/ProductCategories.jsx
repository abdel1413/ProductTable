export const ProductCategories =({category})=>{
    console.log('cat',category)
    return (<tr>
           <th colSpan={2}>{category}</th>
    </tr>)
}