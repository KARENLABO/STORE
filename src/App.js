import './App.css';
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart'
import { StoreContextProvider } from "./components/Context/StoreContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
      <StoreContextProvider>
        <Router>
            <NavBar/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
            </Routes>
        </Router>
      </StoreContextProvider>
  );
}

export default App;
