import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Shop } from "./pages/Shop";
import Login from "./pages/Login";
import { CartPage } from "./pages/CartPage";
import UserPage from "./pages/UserPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import Dashboard from "./pages/Dashboard"
import Courts from "./pages/Courts";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
            <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="/product" element={<ProductDetailPage/>}>
            <Route path=":productId" element={<ProductDetailPage />} />
          </Route> */}
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/authentication" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/my-account" element={<UserPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courts" element={<Courts />} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
