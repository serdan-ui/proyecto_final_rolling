import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ShoppingDetail from "./components/ShoppingDetail/ShoppingDetail";
import PageService from "./components/PageService/PageService";
import Payment from "./components/Payment/Payment";
import ShippingDetail from "./components/ShippingDetail/shipping-detail";
import Register from "./components/Register/Register";
import Error404 from "./components/Error404/Error404";
import Turn from "./components/Turn/Turn";
import Admin from "./components/Admin/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosInstance from './components/util/axiosInstance'

import "./App.css";
import AgregProd from "./components/Admin/AgregProd";

function App() {
  const token = localStorage.getItem("Token");
  const [authen, setAuthen] = useState(token);
  const [usuario ,setUsuario] = useState()

const autenticar = async () => {
  try {
    const response = await axiosInstance.get("/private",{ headers: {"Authorization" : `Bearer ${authen}`} })
    setUsuario(response.data.user)
 
  } catch (error) {
    console.log(error)
  }
 
}

  useEffect(() => {
    autenticar()
  }, [authen])

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
          <Main authen={authen} setAuthen={setAuthen} usuario={usuario} />
        </Route>
        <Route exact path="/shopping-cart">
          <ShoppingCart />
        </Route>
        <Route exact path="/shopping-details">
          <ShoppingDetail />
        </Route>
        <Route exact path="/service" >
          <PageService authen={authen} setAuthen={setAuthen} />
        </Route>
        <Route exact path="/payment">
          <Payment authen={authen} setAuthen={setAuthen} />
        </Route>
        <Route exact path="/shipping-detail">
          <ShippingDetail />
        </Route>
        <Route exact path="/turn">
          <Turn authen={authen} setAuthen={setAuthen} />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/AdminAgregar">
          <AgregProd/>
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
