import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Order from "./containers/order/Order";
import Product from "./containers/product/Product";
import ProductEdit from "./containers/product/ProductEdit";
import About from "./containers/About";
import PageNotFound from "./containers/error/404";
import Layout from "./components/Layout";

class App extends Component {
  constructor(props) {
    super(props);
  }
  renderRouter() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/add" element={<ProductEdit />} />
          <Route path="/products/edit/:id" element={<ProductEdit />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    );
  }

  render() {
    return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  }
}

export default App;
