import React, { FC } from 'react'
import '../styles/footer.scss'
import Instagram from '../static/instagram.png'
import Facebook from '../static/facebook.png'
import Pinterest from '../static/pinterest.png'
import Twitter from '../static/twitter.png'
import Logo from '../static/plant 1.png'

const Footer: FC = () => {
  return (
    <>
      <footer>
        <div className='subscribe'>
          <div className='subscribe-text'>
            <h3>Subscribe our Newsletter</h3>
            <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
          </div>
          <div className='input-wrapper'>
            <input placeholder='Your email address'></input>
            <button>Subscribe</button>
          </div>
          <div className='social-media'>
            <img src={Facebook} alt="facebook-logo" />
            <img src={Twitter} alt="twitter-logo" />
            <img src={Pinterest} alt="pinterest-logo" />
            <img src={Instagram} alt="instagram-logo" />
          </div>
        </div>
        <div className='info-wrapper'>
          <div className='info'>
            <div>
              <div className='footer-logo'><img src={Logo} alt="footer-logo" /><span>EcoBazar</span></div>
              <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
              <div className='email'>Proxy@gmail.com</div>
            </div>
            <div className='footer-options'>
              <div>
                <h3>My Account</h3>
                <span>My Account</span>
                <span>Order History</span>
                <span>Shoping Card</span>
                <span>Wishlist</span>
              </div>
              <div>
                <h3>Helps</h3>
                <span>Contact</span>
                <span>Faqs</span>
                <span>Terms & Condition</span>
                <span>Privacy Police</span>
              </div>
              <div>
                <h3>Proxy</h3>
                <span>About</span>
                <span>Shop</span>
                <span>Product</span>
                <span>Track Order</span>
              </div>
              <div>
                <h3>Categories</h3>
                <span>Fruit & Vegetables</span>
                <span>Meat & Fish</span>
                <span>Bread & Bakery</span>
                <span>Beauty & Health</span>
              </div>
            </div>
          </div>
          <div className='copyright'>Ecobazar eCommerce © 2024. All Rights Reserved</div>
        </div>
      </footer>
    </>
  )
}

export default Footer