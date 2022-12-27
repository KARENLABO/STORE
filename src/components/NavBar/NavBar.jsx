import { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';

import Logo from "../../Assets/Logo.png"
import { ShoppingOutlined } from '@ant-design/icons';
import { Badge, Space } from 'antd';
import { Link } from "react-router-dom";
import './styles.css';

const Navbar = () => {
  const { cart } = useContext(StoreContext);

  const totalProducts = () => {
    let suma = 0;
    for (let product of cart){
      suma += product.quantity;
    }
    return suma;
  };

  return (
    <nav className="navbar">

      <Link to='/' className='img-logo-container'>
        <img  className='img-logo' src={Logo} alt='Main-Store-Logo'/>
      </Link>

      <div className='title-nav'>
        <h1> MAIN STORE </h1>
      </div>
      

      <Link to='/cart' className='cart-nav'>
      <Space size="middle">
        <Badge count={totalProducts()}>
          <ShoppingOutlined className='icon-Bag'/>
        </Badge>
        </Space>
      </Link>

    </nav>
  )

}

export default Navbar