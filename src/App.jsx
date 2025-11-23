

import './App.css'
import { FilterProductTable } from './components/FilterProductTable'
import { Products } from './components/Products'

function App() {
 

  return (
    <div className='table-container'>
      
      <FilterProductTable  products ={Products}/>
    </div>
  )
}

export default App
