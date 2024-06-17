import React, { Dispatch, FC } from 'react'
import ProductItem from '../components/ProductsItem'
import { Product, SubTotal } from '../shared/interfaces'
import { products } from '../schema/products.schema'

const HomePage: FC<{
  setSelectedProducts: Dispatch<Product[]>,
  selectedProducts: Product[],
  subTotal: SubTotal[],
  setSubTotal: Dispatch<SubTotal[]>
}> = ({
  selectedProducts,
  setSelectedProducts,
  subTotal,
  setSubTotal
}) => {

    return (
      <>
        <h1>
          Popular Products
        </h1>
        <div className='products-wrapper'>
          {products.map((product) =>
            <ProductItem
              key={product.id}
              product={product}
              subTotal={subTotal}
              setSubTotal={setSubTotal}
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
            />
          )}
        </div>
      </>
    )
  }

export default HomePage