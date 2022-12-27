import {  useContext} from 'react';
import { StoreContext } from '../../Context/StoreContext';
import { MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import './styles.css';
import { removeProductFromCart, updateItemQuantityFromCart } from '../../../utils';


function CartProducts() {
    const ButtonGroup = Button.Group;
    const { cart, addProductsToCart } = useContext(StoreContext);

    const increase = (item) => {
        addProductsToCart(updateItemQuantityFromCart(cart, item, 1));
    };
      
    const decrease = (item) => {
        if(item.quantity >= 2){
            addProductsToCart(updateItemQuantityFromCart(cart, item, -1));
        } else {
            addProductsToCart(removeProductFromCart(cart, item.title)); 
        }
    };

    const handleOnDelete = (item) => {
        addProductsToCart(removeProductFromCart(cart, item.title)); 
    }

  return (
    <div className="cart-products-container">
        {cart.map((product) => {
            const {title, price, quantity, image, id} = product;
            const total = (price * quantity).toFixed(2);
            return (
                <div className='product-container-cart' key={id}>
                    <div className='product-image-container'>
                        <img
                            alt={title}
                            src={image} 
                            className='item-img-cart'
                        />
                    </div>
                    <div className='product-information-container'>
                        <div className='titles-container'>
                            <p>Article</p>
                            <p>Price</p>
                            <p>Quantiy</p>
                            <p>Total</p>
                            <Divider  className='divider-cart-product'/>
                        </div>
          
                        <div className='product-title'>  
                            <p>{title} </p>
                        </div>

                            <div onClick={() => handleOnDelete(product)} className='delete-icon-container'>
                                <DeleteOutlined className='delete-icon' />
                                <p>Delete </p>
                            </div>
    
                            <p className='product-price'>${price} </p>
                            <ButtonGroup className='product-quantity'>
                                <Button onClick={() => decrease(product)} icon={<MinusOutlined />} />
                                <Button type="text">{quantity} </Button> 
                                <Button onClick={() => increase(product)} icon={<PlusOutlined />} />
                            </ButtonGroup>
                            <p className='product-total'>${total} </p>
                    </div>
                </div>
            );
        })}

    </div>

  );
}
 
export default CartProducts;

