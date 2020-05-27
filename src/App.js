import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ShoppingDetail from "./components/ShoppingDetail/ShoppingDetail";
import PageService from "./components/PageService/PageService";
import Payment from "./components/Payment/Payment";
import Register from "./components/Register/Register";
import Error404 from "./components/Error404/Error404"

import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";


function App() {


  return (
    
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/main">
          <Main />
        </Route>
        <Route exact path="/shopping-cart">
          <ShoppingCart />
        </Route>
        <Route exact path="/shopping-details">
          <ShoppingDetail />
        </Route>
        <Route exact path="/service">
          <PageService />
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
        <Route  path="/error404">
          <Error404 />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
