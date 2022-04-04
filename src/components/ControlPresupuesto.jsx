import React from 'react'

const ControlPresupuesto = ({ presupuesto }) => {
    
  {/*Formateo Number en dinero, para mostrarlo de forma mas amigable, pero NO MODIFICO el valor real de "presupuesto", este permanece inmutable */}
  const formatearCantidad = (cantidad) => {
      
      
       return (cantidad.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' }))
    }


    console.log(formatearCantidad(presupuesto))
  return (
      <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
          <div>
            <p>Gráfica</p>
          </div>
          <div className='contenido-presupuesto'>
              <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)} 
          
        </p>
        

         <p>
          <span>Disponible: </span> {formatearCantidad(0)} 
          
        </p>
        
         <p>
          <span>Gastado: </span> {formatearCantidad(0)} 
          
        </p>
        
          </div>
          </div>
  )
}

export default ControlPresupuesto