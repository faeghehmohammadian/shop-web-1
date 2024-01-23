
import './App.css';
import AboutUS from './pages/aboutus/AboutUs';
import Home from './pages/home/Home';
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/shop-web-1" element={<Home/>}/>
        <Route path="/about" element={<AboutUS/>}/>
      </Routes>
    </div>
  );
}

export default App;
