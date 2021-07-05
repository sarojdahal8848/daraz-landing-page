import React from "react";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MenuBar from "./components/menuBar/MenuBar";
import Main from "./components/main/Main";
import ProductDetail from "./components/product-detail/ProductDetail";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <Switch>
        <div className="app">
          <Header />
          <Route exact path="/">
            <MenuBar />
            <Main />
          </Route>
          <Route exact path="/product/:id">
            <ProductDetail />
          </Route>
          <Footer />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
