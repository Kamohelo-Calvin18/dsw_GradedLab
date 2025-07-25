import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './SearchBar'
import ProductList from './ProductList'
import products from './Data'



function App() {
  const [count, setCount] = useState(0)

  const [userQuery, setuserSearchItem] = useState('');
  const [userCategory, setCategory] = useState('All');
  const [inStock, SetInStock] = useState(false);

  const filteredResult = products.filter(product =>{
    const inputMatch = product.name.toLowerCase().includes(userQuery.toLowerCase());
    const categoryMatch = userCategory === "All" || product.category === userCategory;
    const stockMatch = !inStock || product.inStock;

    return inputMatch && categoryMatch && stockMatch;
  })

  return (
    <div className='app-section'>
      <SearchBar
      userQuery={userQuery}
      setuserSearchItem={setuserSearchItem}
      userCategory={userCategory}
      setCategory={setCategory}
      inStock={inStock}
      SetInStock={SetInStock}
      />

      <ProductList products={filteredResult}/>
    </div>
  );
}

export default App
