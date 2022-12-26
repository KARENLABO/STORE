import {  useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';
import CartProducts from '../Common/CartProducts/CartProducts';
import { Button, Empty } from 'antd';
import empty_cart from "../../Assets/empty_cart.png"
import { Link } from "react-router-dom";
import './styles.css';


function Cart() {
  const { cart } = useContext(StoreContext);

  const handleOnPay = () => {

  }
  
  return (
    <div className="cart">
        <div className='summary-container'>
          <h1 className='title'> Summary of products ({cart.length})</h1>
          <div className='summary-content'>
            <CartProducts products={cart}/>
          </div>
          {cart.length === 0 && (
              <Empty
              image={empty_cart}
              className='empty'
              imageStyle={{
                height: 120,
              }}
              description={
                <span>
                  Empty cart, go to products to add them to your shopping cart
                </span>
              }
            >

            <Link to={'/'}> 
              <Button type="primary">Go to Products</Button>
            </Link>
              
            </Empty>
          )}

        </div>
        <div className='amount-container'>
          <h1 className='title'> Total Amount </h1>
          <div className='subtotal-container'>
            <p>Subtotal</p>
            <p className='total'>$0</p>
          </div>
          <Button onClick={handleOnPay} className='pay-button' type="primary" block >
               PAY
          </Button>
        </div>
    </div>
  );
}
 
export default Cart;

