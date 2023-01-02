import './App.css';
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart'
import { Result } from 'antd';
import { StoreContextProvider } from "./components/Context/StoreContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
      <StoreContextProvider>
        <Router>
            <NavBar/>
            <Routes>
              <Route exact path="/store" element={<Home/>}/>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
              <Route path="*"
                element={
                  <Result
                  status="404"
                  title="404"
                  subTitle="Sorry, the page you visited does not exist."
                  />}
              />
              <Route path="/product/*" element={<Home/>}/>
            </Routes>
        </Router>
      </StoreContextProvider>
  );
}

export default App;
