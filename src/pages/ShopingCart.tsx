import React, { Dispatch, FC, useEffect, useState } from 'react'
import '../styles/shopping-cart.scss'
import CartsItems from '../components/CartsItems'
import { Link } from 'react-router-dom'
import { Product, SubTotal } from '../shared/interfaces'

const ShopingCart: FC<{
  setSelectedProducts: Dispatch<Product[]>,
  selectedProducts: Product[],
  subTotal: SubTotal[],
  setSubTotal: Dispatch<SubTotal[]>
}> = ({
  setSelectedProducts,
  selectedProducts,
  setSubTotal,
  subTotal
}) => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
      setTotal(subTotal.reduce(
        (accumulator, currentValue) => accumulator + currentValue.subTotal,
        0,
      ))
    }, [subTotal])

    return (
      <>
        <h1>
          My Shopping Card
        </h1>
        <div className='shopping-cart'>
          <div className='cart-section'>
            <div className='carts-table'>
              <table>
                <thead>
                  <tr >
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    selectedProducts.map((product) => <CartsItems
                      key={product.id}
                      product={product}
                      setSelectedProducts={setSelectedProducts}
                      selectedProducts={selectedProducts}
                      subTotal={subTotal}
                      setSubTotal={setSubTotal}
                    ></CartsItems>
                    )
                  }

                </tbody>
                <tfoot>
                  <tr>
                    <th>
                      <Link to={'/'}>
                        <button>Return to Shop</button>
                      </Link>
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className='coupon-section'>
              <h3>Coupon Code</h3>
              <div className='input-wrapper'>
                <input placeholder='Enter Code'></input>
                <button>Apply Coupon</button>
              </div>
            </div>
          </div>
          <div className='price-section'>
            <h3>Card total</h3>
            <div className='price-sum'>
              <div>
                <span>Subtotal</span>
                <span>{`$${total.toFixed(2)}`}</span>
              </div>
              <div>
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div>
                <span>Total</span>
                <span>{`$${total.toFixed(2)}`}</span>
              </div>
            </div>
            <button>Proceed to checkout</button>
          </div>
        </div>
      </>
    )
  }

export default ShopingCart