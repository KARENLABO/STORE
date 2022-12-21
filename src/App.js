import './App.css';
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import { StoreContextProvider } from "./components/Context/StoreContext";

function App() {
  return (
    <div className="App">
      <StoreContextProvider>
        <NavBar/>
        <Home/>
      </StoreContextProvider>
    </div>
  );
}

export default App;
