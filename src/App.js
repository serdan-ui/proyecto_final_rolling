import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import PageService from "./components/PageService/PageService";
import ShoppingCheckout from "./components/ShoppingCart/shopping-checkout";
import Error404 from "./components/Error404/Error404";
import Turn from "./components/Turn/Turn";
import Admin from "./components/Admin/Admin";
import axiosInstance from "./components/util/axiosInstance";
import AgregProd from "./components/Admin/AgregProd";
import TurnosPanel from "./components/Admin/TurnosPanel";
import Graficos from "./components/Admin/Graficos";
import Drag from "./components/Admin/Drag";
import Usuarios from "./components/Admin/Usuarios";
import Payment from "./components/PaginaDePago/Payment";
import PerfilUsuario from "./components/PerfilUsuario/PerfilUsuario";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PrivateRoute from "./components/routes/PrivateRoute";
import RestrictedRoutes from "./components/routes/RestrictedRoutes";
import PrivateAdmin from "./components/routes/PrivateAdmin";

function App() {
  const token = localStorage.getItem("Token");
  const [authen, setAuthen] = useState(token);
  const [usuario, setUsuario] = useState({});
  const [userId, setUserId] = useState();
  const [products, setProducts] = useState([]);
  //Prueba Carrito
  const [carrito, setCarrito] = useState([]);

  const cargarUserId = (usuario) => {
    setUserId(usuario._id);
  };

  const autenticar = async () => {
    try {
      const response = await axiosInstance.get("/private", {
        headers: { Authorization: `Bearer ${authen}` },
      });
      setUsuario(response.data.user);
      cargarUserId(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    autenticar();
  }, [authen]);

  return (
    <Router>
      <Switch>
        <RestrictedRoutes exact path="/">
          <Login />
        </RestrictedRoutes>

        <Route exact path="/main">
          <Main
            authen={authen}
            setAuthen={setAuthen}
            usuario={usuario}
            setCarrito={setCarrito}
            userId={userId}
            products={products}
            setProducts={setProducts}
            autenticar={autenticar}
          />
        </Route>
        <PrivateRoute exact path="/shopping-checkout">
          <ShoppingCheckout
            
            authen={authen}
            usuario={usuario}
            carrito={carrito}
            setAuthen={setAuthen}
            userId={userId}
          />
        </PrivateRoute>

        <Route exact path="/service">
          <PageService
            authen={authen}
            setAuthen={setAuthen}
            usuario={usuario}
          />
        </Route>
        <PrivateRoute exact path="/turn">
          <Turn
            authen={authen}
            setAuthen={setAuthen}
            usuario={usuario}
            userId={userId}
          />
        </PrivateRoute>
        <PrivateAdmin exact path="/admin">
          <Admin />
        </PrivateAdmin>
        <Route path="/pago/:id">
          <Payment />
        </Route>
        <PrivateRoute exact path="/perfil">
          <PerfilUsuario
            authen={authen}
            setAuthen={setAuthen}
            usuario={usuario}
          />
        </PrivateRoute>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
