import React from 'react';
import "./styles.css";



const Admin = () => {
    return (  
        <>
    <h3 className="text-white text-center">Desde admin</h3>
      <div className="Container-fluid">
          <div className="row">
              {/* <div className="col-3 bg bg-dark uno-dash"> */}
              <div class="area"></div><nav class="main-menu">
      <ul>
          <li>
              
          <a href="#">
                  <i class="fa fa-bar-chart-o fa-2x"></i>
                  <span class="nav-text">
                      Graficos
                  </span>
              </a>
            
          </li>
          <li class="has-subnav">
              <a href="#">
                  {/* <i class="fa fa-laptop fa-2x"></i> */}
                  <i class="fa fa-users fa-2x"></i>
                  <span class="nav-text">
                      Usuarios
                  </span>
              </a>
              
          </li>
          <li class="has-subnav">
              <a href="#">
                 <i class="fa fa-list fa-2x"></i>
                  <span class="nav-text">
                      Turnos
                  </span>
              </a>
              
          </li>
          <li class="has-subnav">
              <a href="../AdminAgregar">
                 <i class="fa fa-folder-open fa-2x"></i>
                  <span class="nav-text">
                      Agregar Productos
                  </span>
              </a>
             
          </li>
         
          <li class="has-subnav">
              <a href="#">
              <i class="fa fa-user-slash fa-x2"></i>
             
                  <span class="nav-text">
                     Eliminar Productos
                  </span>
              </a>
          </li>
          <li>
             <a href="#">
                 <i class="fa fa-table fa-2x"></i>
                  <span class="nav-text">
                      Tablas
                  </span>
              </a>
          </li>
          <li>
             <a href="#">
                  <i class="fa fa-map-marker fa-2x"></i>
                  <span class="nav-text">
                      Mapa
                  </span>
              </a>
          </li>
          <li>
              <a href="#">
                 <i class="fa fa-info fa-2x"></i>
                  <span class="nav-text">
                      Documentación
                  </span>
              </a>
          </li>
      </ul>

      <ul class="logout">
          <li>
             <a href="#">
                   <i class="fa fa-power-off fa-2x"></i>
                  <span class="nav-text">
                      Logout
                  </span>
              </a>
          </li>  
      </ul>
  </nav>
                   {/* </div> */}










              <div className="col-12 bg bg-white dos-dash p-5">
            
               <div className="row">
                    <div className="col-2 bg-dark ml-3 card-dash"> uno
                    <img src="" className="card-dash"></img>
                    </div>
                    <div className="col-2 bg-dark ml-3 card-dash">dos</div>
                    <div className="col-2 bg-dark ml-3 card-dash">tres</div>
                    <div className="col-2 bg-dark ml-3 card-dash">tres</div>
                    <div className="col-2 bg-dark ml-3 card-dash">tres</div>
              </div>
                <div className="row">
                    <div className="col-5 m-5 card-dash bg-dark">primer</div>
                    <div className="col-5 m-5 card-dash bg-dark"> seg</div>
                </div>
          </div>
          
      </div>   
    </div>
    </>
    
);
}
 
export default Admin;

