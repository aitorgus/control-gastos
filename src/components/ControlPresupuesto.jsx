import {useState, useEffect} from 'react'

const ControlPresupuesto = ({ gastos, presupuesto }) => {
  
  const [disponible, SetDisponible] = useState(0)
  const [gastado, SetGastado]=useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
    const totalDisponible = presupuesto - totalGastado
    SetDisponible(totalDisponible)
    SetGastado(totalGastado)
  }, [gastos])
    
  {/*Formateo Number en dinero, para mostrarlo de forma mas amigable, pero NO MODIFICO el valor real de "presupuesto", este permanece inmutable */}
  const formatearCantidad = (cantidad) => {
      
      
       return (cantidad.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' }))
    }



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