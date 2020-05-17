import React from 'react';
import Carrousel from './Carrousel'
import Mostrador from './Mostrador'
import Fotter from '../Layout/Fotter'
import Header from '../Layout/Header'
// stilos de register
import "./styles.css"

const Main = () => {
    return ( 
        <>
        <Header/>
        <Carrousel/>
        <Mostrador/>
        <Fotter/>
        </>
     );
}
 
export default Main;