import './styles.css';
import Logo from "../../Assets/Logo.png"

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar--logo-holder">
      <img src={Logo} alt="logo manu store" className="navbar--logo" />
    </div>

    <div className="navbar--title">
     MANU STORE
    </div>

    <div className="navbar--title">
      Cart 
    </div>

  </nav>
)
export default Navbar