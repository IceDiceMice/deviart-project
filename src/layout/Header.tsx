import React, { FC, useEffect, useState } from 'react'
import Logo from '../static/plant 1.png'
import Heart from '../static/Heart.png'
import Bug from '../static/Bag.png'
import '../styles/header.scss'
import { Link } from 'react-router-dom'
import { Product, SubTotal } from '../shared/interfaces'

const Header: FC<{ selectedProducts: Product[], subTotal: SubTotal[] }> = ({ selectedProducts, subTotal }) => {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(subTotal.reduce(
      (accumulator, currentValue) => accumulator + currentValue.subTotal,
      0,
    ))
  }, [subTotal])

  return (
    <header>
      <div className='header-logo'><img src={Logo} alt='header-logo' /><span>EcoBazar</span></div>
      <div className='header-icons'>
        <img src={Heart} alt='heart-icon' />
        <div className='divider'></div>
        <Link to={'shopping-cart'}>
          <div className='purchase'>
            <div className='bag-icon'>
              <img src={Bug} alt='bag-icon' />
              {selectedProducts.length ? <div>{selectedProducts.length}</div> : null}
            </div>
            <div className='price'>
              <span>Shoping card:</span>
              <span>{`$${total.toFixed(2)}`}</span>
            </div>
          </div>
        </Link>
      </div>
    </header >
  )
}

export default Header