import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
