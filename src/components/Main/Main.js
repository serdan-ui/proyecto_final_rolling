import React from 'react';
import Carrousel from './Carrousel'
import Container from './Container'
import Fotter from '../Layout/Fotter'
import Header from '../Layout/Header'
// stilos de register
import "./styles.css"

const Main = () => {
    return ( 
        <>
        <Header/>
        <Carrousel/>
        <Container/>
        <Fotter/>
        </>
     );
}
 
export default Main;