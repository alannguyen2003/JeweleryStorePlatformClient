import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Shop } from "./pages/Shop";
import Login from "./pages/Login";
import { CartPage } from "./pages/CartPage";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/authentication" element={<Login/>}/>
              <Route path="/cart" element={<CartPage/>}/>

            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
