import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from './Table';

const Products = () => {
  const [products , setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/Products`)
    .then(data => {setProducts(data?.data)});
  } , [])

  return (
    <div>
        <Table products={products} />
    </div>
  )
}

export default Products