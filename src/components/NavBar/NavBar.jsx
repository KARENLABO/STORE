import './styles.css';
import Logo from "../../Assets/Logo.png"
import {
  ShoppingCartOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <Link to={'/'}>
      <div className="navbar--logo-holder">
       <img src={Logo} alt="logo manu store" className="navbar--logo" />
      </div> 
    </Link>


    <div className="navbar--title">
     MANU STORE
    </div>

    <div className="navbar--icon">
      
    <Link to={'/cart'}>
      <ShoppingCartOutlined color='white'/>
    </Link>

    </div>

  </nav>
)
export default Navbar