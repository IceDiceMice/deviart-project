import React, { Dispatch, FC, useEffect, useState } from 'react'
import '../styles/carts-item.scss'
import { Product, SubTotal } from '../shared/interfaces'

const CartsItems: FC<{
    product: Product,
    setSelectedProducts: Dispatch<Product[]>,
    selectedProducts: Product[],
    subTotal: SubTotal[],
    setSubTotal: Dispatch<SubTotal[]>
}> = ({
    product,
    setSelectedProducts,
    selectedProducts,
    subTotal,
    setSubTotal
}) => {
        const [quantity, setQuantity] = useState(1)

        const deleteProduct = (deletedProduct: Product) => {
            setSelectedProducts([...selectedProducts].filter(product => product !== deletedProduct))
            setSubTotal([...subTotal].filter(subTotal => subTotal.productId !== product.id))
        }

        const handleSubTotal = (updatedSubTotal: SubTotal) => {
            setSubTotal(subTotal.map((subTotalItem) =>
                updatedSubTotal.productId === subTotalItem.productId ? updatedSubTotal : subTotalItem
            ));
        }

        const handleSub = () => {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            }
        }

        const handleAdd = () => {
            setQuantity(quantity + 1)
        }

        useEffect(() => {
            handleSubTotal({ productId: product.id, subTotal: product.cost * quantity })
        }, [quantity])

        return (
            <tr className='carts-item'>
                <th >
                    <div className='carts-info'>
                        <img src={product.image}></img>
                        {product.name}
                    </div>
                </th>
                <th className='carts-cost'>
                    {`$${product.cost.toFixed(2)}`}
                </th>
                <th>
                    <div className='quantity-controls'>
                        <button onClick={handleSub}>-</button>
                        <span>{quantity}</span>
                        <button onClick={handleAdd}>+</button>
                    </div>
                </th>
                <th className='subtotal'>
                    {`$${(product.cost * quantity).toFixed(2)}`}
                </th>
                <th>
                    <button className='item-delete' onClick={() => deleteProduct(product)}>X</button>
                </th>
            </tr>
        )
    }

export default CartsItems