import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="bg-red-500 text-slate-50 mb-6">
      <ul className="container mx-auto flex items-center justify-between">
        <li className="flex gap-4">
          <NavLink className="flex" to={'/'}>
            <img src="./logo.png" alt="Логотип" height={35} className="m-auto" />
          </NavLink>
          <NavLink className="py-3 px-4 hover:bg-red-600" to={'/products'}>
            Товары
          </NavLink>
        </li>
        <li>
          <NavLink className="px-4 py-3 hover:bg-red-600" to={'/cart'}>
            Корзина ({localStorage.getItem('products')})
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
