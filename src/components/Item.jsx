import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = ({ product }) => {
  const navigate = useNavigate()

  return (
    <li 
      className={'shadow p-2 bg-gray-100 hover:bg-gray-200'}
      onClick={() => navigate(`/products/${product.id}`)}
      role='button'
    >
      <div className="flex flex-col">
        <p className="font-medium text-2xl mb-3">
          <span>{product.title}</span>
        </p>
        <p>{product.description}</p>
        <img className='max-w-xs mx-auto my-3' src={product.image} alt={product.title} />
        <h2 className='text-center text-2xl'>{product.price} ₽</h2>
      </div>
    </li>
  )
}

export default Item