import React, { useState, FC, Dispatch } from 'react'
import BlackBag from '../static/Blackbag.png'
import WhiteBag from '../static/Whitebag.png'
import Wishlist from '../static/Wishlist.png'
import Preview from '../static/Preview.png'
import '../styles/products-item.scss'
import { Product, SubTotal } from '../shared/interfaces'

const ProductsItem: FC<{
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
        const [active, setActive] = useState(false)

        const handleClick = (product: Product) => {
            if (!selectedProducts.includes(product)) {
                setSelectedProducts([...selectedProducts, product])
                setSubTotal([...subTotal, { productId: product.id, subTotal: product.cost }])
            }
        }

        return (
            <div
                key={product.id}
                className={`product ${active ? 'active-product' : ''}`}
                onClick={() => setActive(!active)}
            >
                <img src={product.image} />
                <div className='product-info'>
                    <span className={`name ${active ? 'active-name' : ''}`}>{product.name}</span>
                    <div className='product-cost'>
                        <span>{`$${product.cost.toFixed(2)}`}</span>
                        {product.discount ? <span>{product.originalCost}</span> : null}
                    </div>
                    <div>{<img src={product.rating} />}</div>
                </div>
                {product.discount ? <div className='discount'>Sale {product.discount}</div> : null}
                <div
                    className={`bag ${active ? 'active-bag' : ''}`}
                    onClick={() => handleClick(product)}>{
                        active ? <img src={WhiteBag} alt='white-bug' /> : <img src={BlackBag} alt='black-bug' />
                    }
                </div>
                {active ? <div className='wishlist'>{<img src={Wishlist} alt='wish-list' />}</div> : null}
                {active ? <div className='preview'>{<img src={Preview} alt='preview' />}</div> : null}
            </div>
        )
    }

export default ProductsItem