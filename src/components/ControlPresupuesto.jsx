import { useState, useEffect } from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({ gastos, presupuesto }) => {
  
  const [disponible, SetDisponible] = useState(0)
  const [gastado, SetGastado] = useState(0)
   const [porcentaje, SetPorcentaje] = useState(0)
  

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
    const totalDisponible = presupuesto - totalGastado

    //Calcular porcentaje gastado (uso toFixed(2)-> Para redondear a 2 cifras)
    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
  
    SetDisponible(totalDisponible)
    SetGastado(totalGastado)
    setTimeout(() => {
        SetPorcentaje(nuevoPorcentaje)
    }, 1000)
  }, [gastos]) 
    
  {/*Formateo Number en dinero, para mostrarlo de forma mas amigable, pero NO MODIFICO el valor real de "presupuesto", este permanece inmutable */}
  const formatearCantidad = (cantidad) => {
      
      
       return (cantidad.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' }))
    }



  return (
      <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
          <div>
           
        <CircularProgressbar
          styles={buildStyles({
            pathColor: '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: '#3B82F6'
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}>
          
          </CircularProgressbar>
          </div>
          <div className='contenido-presupuesto'>
              <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)} 
        </p>
         <p>
          <span>Disponible: </span> {formatearCantidad(disponible)} 
        </p>
         <p>
          <span>Gastado: </span> {formatearCantidad(gastado)} 
          
        </p>
        
          </div>
          </div>
  )
}

export default ControlPresupuesto