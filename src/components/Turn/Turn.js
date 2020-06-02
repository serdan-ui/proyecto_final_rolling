import React from 'react';
import BodyTurn from './BodyTurn';
import HeaderStatic from '../Layout/HeaderStatic';
import Fotter from '../Layout/Fotter';
import "./styles.css";
// eslint-disable-next-line
const Turn = () => {
    return ( 
        <>
        <HeaderStatic />
        <BodyTurn /> 
        <Fotter/>
       </>         
     );
}
 
export default Turn;