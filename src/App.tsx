import React, { FC, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './layout';
import HomePage from './pages/HomePage';
import ShopingCart from './pages/ShopingCart';
import { Product, SubTotal } from './shared/interfaces';

const App: FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [subTotal, setSubTotal] = useState<SubTotal[]>([])

  return (
    <div className='wrapper'>
      <Router>
        <Routes>
          <Route path="/" element={<Layout selectedProducts={selectedProducts} subTotal={subTotal} />}>
            <Route index element={<HomePage
              setSelectedProducts={setSelectedProducts}
              selectedProducts={selectedProducts}
              subTotal={subTotal}
              setSubTotal={setSubTotal}
            />} />
            <Route path="/shopping-cart" element={<ShopingCart
              setSelectedProducts={setSelectedProducts}
              selectedProducts={selectedProducts}
              subTotal={subTotal}
              setSubTotal={setSubTotal}
            />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;