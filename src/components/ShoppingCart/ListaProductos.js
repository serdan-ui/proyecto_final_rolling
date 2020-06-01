import React, { useState, Fragment} from "react";
import  Tarjeta  from "./Tarjeta";
// stilos de register
import "./styles.css";


export const ListaProductos = ( ) => {

    const datosProductos = [
        {name: 'Mouse', precio: 300, id: 1, descripcion: 'Debido a su diseño eficaz, este mouse convencional te brindará comodidad y una gran experiencia de uso. '},
        {name: 'Teclado', precio: 1000, id: 2, descripcion: 'Este teclado Logitech será tu mejor complemento para hacer todo tipo de actividades en la pc'},
        {name: 'Monitor', precio: 5000, id: 3, descripcion: 'Este teclado Logitech será tu mejor complemento para hacer todo tipo de actividades en la pc'}
    ]

   const [productos , setProductos] = useState(datosProductos);

    
    return(
        <Fragment>
            {
                productos.map(item => (
                    <Tarjeta name = {item.name} 
                    precio = {item.precio} 
                    descripcion = {item.descripcion} 
                    key = {item.id} 
                    id={item.id}
                    setProductos={setProductos}
                    productos={productos}/>
                ))

            }
        </Fragment>
    );
}

export default ListaProductos;