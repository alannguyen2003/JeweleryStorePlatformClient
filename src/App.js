import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Shop } from "./pages/Shop";
import Login from "./pages/Login";
import { CartPage } from "./pages/CartPage";
import UserPage from "./pages/UserPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/authentication" element={<Login/>}/>
              <Route path="/cart" element={<CartPage/>}/>
              <Route path="/myaccount" element={<UserPage/>}/>
              <Route path="/product-detail/:id" element={<ProductDetailPage/>}/>
              <Route path="/checkout" element={<CheckoutPage/>}/>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
