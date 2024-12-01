import Navbar from "./Component/Navbar/Navbar"
import './App.css'
import Home from "./Component/Home/Home";
import Product from "./Component/Product/Product";
import {Routes , Route} from "react-router-dom"
import Products from "./Component/Products/Products";

function App() {
  return (
    // <div className="App">
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Product />}/> 
        <Route path="/products/:id" element={<Products />}/> 
        {/* <Products /> */}
      </Routes>
    </>
    // </div>
  );
}
// import { Form, Route } from "react-router-dom";

export default App;
