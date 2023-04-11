import React from 'react';
import '../styles/Testimonio.css'




function Testimonio(props) {
  return(
    <div className='contenedor-testimonio'>
      <img
       className='imagen-testimonio'
       src={require(`../images/${props.img}-testimonio.jpg`)} 
       alt='Imagen CR7'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.name}</strong></p>
        <p className='cargo-testimonio'><strong>{props.country}</strong> {props.job}</p>
        <p className='texto-testimonio'>"{props.caract}"</p>

      </div>
    </div>
  );    
}

export default Testimonio;