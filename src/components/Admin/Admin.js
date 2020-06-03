import React from 'react';
import "./styles.css";



const Admin = () => {
    return (  
        <>
    <h3 className="text-white">desde admin</h3>
      <div className="Container-fluid">
          <div className="row">
              <div className="col-3 bg bg-dark uno-dash">
                  <h3>holaaaaaa</h3>
                   </div>
              <div className="col-9 bg bg-white dos-dash">
                <h4>chauuuuuuu</h4>
               <div className="row">
                    <div className="col-2 bg-danger ml-5 card-dash"> uno</div>
                    <div className="col-2 bg-danger ml-3 card-dash">dos</div>
                    <div className="col-2 bg-danger ml-3 card-dash">tres</div>
                    <div className="col-2 bg-danger ml-3 card-dash">tres</div>
                    <div className="col-2 bg-danger ml-3 card-dash">tres</div>
              </div>
                <div className="row">
                    <div className="col-4 m-3 card-dash bg-danger">primer</div>
                    <div className="col-4 m-3 card-dash bg-danger"> seg</div>
                </div>
          </div>
          
      </div>   
    </div>
    </>
    
);
}
 
export default Admin;

