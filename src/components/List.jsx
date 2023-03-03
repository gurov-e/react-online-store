import React from 'react'
import Item from './Item'

const List = ({ products }) => {
  return (
    <ul className='grid gap-4 grid-cols-2 mb-4'>
      {products.map((product, index) => {
        return <Item product={product} key={index} />
      })}
    </ul>
  )
}

export default List