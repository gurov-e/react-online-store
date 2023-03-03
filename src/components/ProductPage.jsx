import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ProductPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState([
    {
      title: '',
      description: '',
      price: '',
      image: '',
    },
  ])

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${params.id}`)
      const data = await response.json()
      return setProduct(data)
    }
    fetchProduct()
  }, [params.id])

  return (
    <>
      {product.length <= 1 ? (
        <h2 className="text-center">Загрузка...</h2>
      ) : (
        <div className={'shadow bg-gray-100 container mx-auto p-4'}>
          <p className="font-medium">
            <span className="mr-3">{product.title}</span>
          </p>

          <hr className="my-4 h-px border-0 bg-gray-300" />

          <div className="flex gap-x-10">
            <img
              className="mb-3 basis-1/2 max-w-xs"
              src={product.image}
              alt={product.title}
            />
            <p className="mb-3 max-w-96 basis-1/2">{product.description}</p>
          </div>

          <button
            className="bg-red-500 hover:bg-red-600 rounded text-slate-50 text-center py-4 px-10 mr-3"
            onClick={() => navigate('/cart')}
          >
            В корзину
          </button>
          <span className="text-2lg">{product.price} ₽</span>
        </div>
      )}
    </>
  )
}

export default ProductPage