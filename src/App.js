import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Shop } from "./pages/Shop";
import { HomePageContextProvider } from "./contexts/HomePageContext";
import { DemoContextProvider } from "./contexts/DemoContext";

function App() {
  return (
    <div className="App">
      <HomePageContextProvider>
        <DemoContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<Shop/>}/>
            </Routes>
          </BrowserRouter>
        </DemoContextProvider>
      </HomePageContextProvider>
    </div>
  );
}

export default App;
