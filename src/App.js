import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop";
import './App.css';

const HatsPage = ()=>(
  <div>
    <h1>Hats Page!</h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
