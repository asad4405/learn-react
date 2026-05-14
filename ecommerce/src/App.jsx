import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./components/Home/Homepage";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/product-details/:slug" element={<ProductDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
