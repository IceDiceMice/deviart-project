import React, { FC } from 'react'
import Main from "./Main"
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Product, SubTotal } from '../shared/interfaces'


const Layout: FC<{
    selectedProducts: Product[],
    subTotal: SubTotal[]
}> = ({
    selectedProducts,
    subTotal
}) => {

        return (
            <>
                <Header selectedProducts={selectedProducts} subTotal={subTotal} />
                <Main>
                    <Outlet />
                </Main>
                <Footer />
            </>
        )
    }

export default Layout