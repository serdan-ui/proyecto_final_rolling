import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./style.css";
import Graficos from "./Graficos";

import AgregProd from "./AgregProd"
import TurnosPanel from "./TurnosPanel"


const Admin = () => {

  const [cuerpo, setCuerpo] = useState({});

  const cambiar = (e) => {
    console.log(e.target.firstChild.data);
    setCuerpo(e.target.firstChild.data);
  };
  const mostrarCuerpo = () => {
    if (cuerpo === "Graficos") {
      return <Graficos />;
    } else if (cuerpo === "AgregProd"){
        return (<AgregProd/>)
    }else if ( cuerpo === "TurnosPanel"){
      return (<TurnosPanel/>)
    }
        
    
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {" "}
          <div className="col-2 opciones">
            
            <br/>
            <nav class="main-menu">
            <h2 style={{color:"#96E2FF", textAlign:"center"}} >Zero Technology</h2>
            <br/>
              <ul className="m-3">
                <li>
                  <a>
                    <i class="fa fa-bar-chart-o fa-2x m-5"></i>
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
                  <a >
                    <i class="fa fa-list fa-2x"></i>
                    <span class="nav-text" onClick={(e) => cambiar(e)}>
                      TurnosPanel
                    </span>
                  </a>
                </li>
                <li class="has-subnav">
                  <a href="#">
                    <i class="fa fa-folder-open fa-2x"></i>
                    <span class="nav-text" onClick={(e) => cambiar(e)}>AgregProd</span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i class="fa fa-clock fa-2x"></i>
                    <span class="nav-text" onClick={(e) => cambiar(e)}>Ventas</span>
                  </a>
                </li>
              </ul>
              <ul class="logout m-3">
                <li>
                  <a href="#">
                    <i class="fa fa-power-off fa-2x"></i>
                    <span class="nav-text">Logout</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-10 panel">{mostrarCuerpo()}</div>
        </div>
      </div>
    </>
  );
};

export default Admin;




// import React from 'react';
// import "./styles.css";



// const Admin = () => {
//     return (
//         <>
//             <h3 className="text-white text-center">Desde admin</h3>
//             <div className="Container-fluid">
//                 <div className="row">
//                     {/* <div className="col-3 bg bg-dark uno-dash"> */}
//                     <div class="area"></div><nav class="main-menu">
//                         <ul>
//                             <li>

//                                 <a href="#">
//                                     <i class="fa fa-bar-chart-o fa-2x"></i>
//                                     <span class="nav-text">
//                                         Graficos
//                   </span>
//                                 </a>

//                             </li>
//                             <li class="has-subnav">
//                                 <a href="#">
//                                     {/* <i class="fa fa-laptop fa-2x"></i> */}
//                                     <i class="fa fa-users fa-2x"></i>
//                                     <span class="nav-text">
//                                         Usuarios
//                   </span>
//                                 </a>

//                             </li>
//                             <li class="has-subnav">
//                                 <a href="#">
//                                     <i class="fa fa-list fa-2x"></i>
//                                     <span class="nav-text">
//                                         Turnos
//                   </span>
//                                 </a>

//                             </li>
//                             <li class="has-subnav">
//                                 <a href="../AdminAgregar">
//                                     <i class="fa fa-folder-open fa-2x"></i>
//                                     <span class="nav-text">
//                                         Agregar Productos
//                   </span>
//                                 </a>

//                             </li>

//                             <li class="has-subnav">
//                                 <a href="#">
//                                     <i class="fa fa-user-slash fa-x2"></i>

//                                     <span class="nav-text">
//                                         Eliminar Productos
//                   </span>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#">
//                                     <i class="fa fa-table fa-2x"></i>
//                                     <span class="nav-text">
//                                         Tablas
//                   </span>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#">
//                                     <i class="fa fa-map-marker fa-2x"></i>
//                                     <span class="nav-text">
//                                         Mapa
//                   </span>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#">
//                                     <i class="fa fa-info fa-2x"></i>
//                                     <span class="nav-text">
//                                         Documentación
//                   </span>
//                                 </a>
//                             </li>
//                         </ul>

//                         <ul class="logout">
//                             <li>
//                                 <a href="#">
//                                     <i class="fa fa-power-off fa-2x"></i>
//                                     <span class="nav-text">
//                                         Logout
//                   </span>
//                                 </a>
//                             </li>
//                         </ul>
//                     </nav>
//                     {/* </div> */}










//                     <div className="col-12 bg bg-white dos-dash p-5">

//                         <div className="row">
//                             <div className="col-2 bg-dark ml-3 card-dash"> uno
//                     <img src="" className="card-dash"></img>
//                             </div>
//                             <div className="col-2 bg-dark ml-3 card-dash">dos</div>
//                             <div className="col-2 bg-dark ml-3 card-dash">tres</div>
//                             <div className="col-2 bg-dark ml-3 card-dash">tres</div>
//                             <div className="col-2 bg-dark ml-3 card-dash">tres</div>
//                         </div>
//                         <div className="row">
//                             <div className="col-5 m-5 card-dash bg-dark">primer
                  
//                     </div>
//                             <div className="col-5 m-5 card-dash bg-dark"> seg</div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>

//     );
// }

// export default Admin;

