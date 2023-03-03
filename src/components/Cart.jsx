import React, { useState, useEffect } from 'react'

const Cart = () => {
  const [cart, setCart] = useState([
    {
      title: '',
      price: '',
      description: '',
      image: '',
    },
  ])

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=3')
      const data = await response.json()
      return setCart(data)
    }
    fetchProduct()
  }, [])
  
  localStorage.setItem('products', cart.length)

  let total = 0
  const prices = cart.map((item) => (total += item.price))
  total = prices.at(-1)

  return (
    <div className="container mx-auto flex flex-wrap flex-col grow gap-3">
      {cart.map((item, index) => (
        <div className={'shadow bg-gray-100 basis-1/3 py-4 px-10'} key={index}>
          <p className="font-medium">
            <span>{item.title}</span>
          </p>

          <hr className="my-4 h-px border-0 bg-gray-300" />

          <div className="max-w-[180px] flex flex-col gap-4">
            <img src={item.image} alt={item.title} />
            <p className="text-center">{item.price} ₽</p>
          </div>
        </div>
      ))}
      <div>
        <p>Всего к оплате {total} ₽</p>
        <button
          onClick={() =>
            console.log(`Заказ оформлен на пользователя ${Date.now()}`)
          }
          className="bg-red-500 hover:bg-red-600 rounded text-slate-50 text-center py-4 px-10 my-10"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  )
}

export default Cart
