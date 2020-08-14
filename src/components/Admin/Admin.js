import React, { useState } from "react";
import "./style.css";
import Graficos from "./Graficos";
import Productos from "./Productos";
import AgregProd from "./AgregProd";
import TurnosPanel from "./TurnosPanel";
import Usuarios from "./Usuarios";
import Ventas from "./Ventas";
import { useHistory } from "react-router-dom";





const Admin = () => {
  let history = useHistory();
  const [cuerpo, setCuerpo] = useState({});

  const cambiar = (e) => {

    setCuerpo(e.target.firstChild.data);
  };

  const cerrarSes = () => {
    localStorage.removeItem("Token");
    history.push("/main");
  };

  const mostrarCuerpo = () => {
    if (cuerpo === "Graficos") {
      return <Graficos />;
    } else if (cuerpo === "Nuevo producto") {
      return <AgregProd />;
    } else if (cuerpo === "TurnosPanel") {
      return <TurnosPanel />;
    } else if (cuerpo === "Usuarios") {
      return <Usuarios />;
    } else if (cuerpo === "Ventas") {
      return <Ventas />;
    } else if (cuerpo === "Productos") {
      return <Productos />;
    } else {
      return <Usuarios />;
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {" "}
          <div className="col-2 opciones">
            <br />
            <nav class="main-menu">
              <h2 style={{ color: "white", textAlign: "center" }}>
                Zero Technology
              </h2>
              <br />
              <ul style={{ marginLeft: "15px" }}>
                <li>
             {/*eslint-disable-next-line*/}
                  <a>
                    <i class="fa fa-bar-chart-o fa-2x"></i>
                    <span class="nav-text" onClick={(e) => cambiar(e)}>
                      Graficos
                    </span>
                  </a>
                </li>
                <li class="has-subnav">
                  <a>
                    <i class="fa fa-users fa-2x"></i>
                    <span
                      className="nav-text"
                      name="usuario"
                      value="usuario"
                      onClick={(e) => cambiar(e)}
                    >
                      Usuarios
                    </span>
                  </a>
                </li>
                <li class="has-subnav">
                  <a>
                    <i class="fa fa-list fa-2x"></i>
                    <span class="nav-text" onClick={(e) => cambiar(e)}>
                      TurnosPanel
                    </span>
                  </a>
                </li>
                <li class="has-subnav">
                  <a href="#">
                    <i class="fa fa-folder-open fa-2x"></i>
                    <span class="nav-text" onClick={(e) => cambiar(e)}>
                      Nuevo producto
                    </span>
                  </a>
                </li>
                <li class="has-subnav">
                  <a href="#">
                    <i class="fa fa-folder-open fa-2x"></i>
                    <span class="nav-text" onClick={(e) => cambiar(e)}>
                      Productos
                    </span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i class="fa fa-clock fa-2x"></i>
                    <span class="nav-text" onClick={(e) => cambiar(e)}>
                      Ventas
                    </span>
                  </a>
                </li>
              </ul>
              <ul class="logout" style={{ marginLeft: "15px" }}>
                <li onClick={cerrarSes}>
                  <a>
                  <i class="fa fa-power-off fa-2x"></i>
                  <span class="nav-text">Logout</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-10 panel">{mostrarCuerpo()} </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
