import {  useContext, useState } from 'react';
import { StoreContext } from '../Context/StoreContext';
import CartProducts from '../Common/CartProducts/CartProducts';
import { Button, Empty, Modal, Result } from 'antd';
import empty_cart from "../../Assets/empty_cart.png"
import { Link } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';

import './styles.css';


function Cart() {
  const { cart, addProductsToCart } = useContext(StoreContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const totalAmount = () => {
    let suma = 0;
    for (let product of cart){
      suma += product.quantity * product.price;
    }
    return suma.toFixed(2);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOnPay = () => {
    setIsModalOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      addProductsToCart([]);
    }, 4000);
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
            <p className='total'>$ {totalAmount()} </p>
          </div>
          <Button onClick={handleOnPay} className='pay-button' type="primary" block >
               PAY
          </Button>
        </div>
        <Modal open={isModalOpen} onOk={handleCancel} onCancel={handleCancel}>
        
        {loading && (
          <Result
          icon={<LoadingOutlined />}
          title="Processing the Order, please wait"
        />
        )}

        {!loading && (
          <Result
          status="success"
          title="Order completed successfully!"
        />
        )}

      </Modal>
    </div>
  );
}
 
export default Cart;

