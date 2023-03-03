import React, { useEffect, useState } from 'react'
import List from './List'

const Products = () => {
  const [products, setProducts] = useState([
    {
      title: '',
      description: '',
      price: '',
      image: '',
    },
  ])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      return setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div className="App container mx-auto">
      {products.length <= 1 ? (
        <h2 className="text-center">Загрузка...</h2>
      ) : (
        <List products={products} />
      )}
    </div>
  )
}

export default Products
