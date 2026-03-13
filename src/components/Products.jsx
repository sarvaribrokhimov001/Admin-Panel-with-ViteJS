import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';
import Table from './Table';

const Products = () => {
  const [products , setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/Products`)
    .then(data => {setProducts(data?.data)});
  } , [])

  return (
    <div>
        <Table products={products} />
    </div>
  )
}

export default Products