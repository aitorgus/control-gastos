import React from 'react'
import Gasto from './Gasto'


const ListadoGasto = ({gastos}) => {
  return (
      <div className='listado-gasto contenedor'> 
          
          <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
          
          {/*map va a recorrer el objeto hasta que existan elementos */}
          {gastos.map(gasto => (
              <Gasto
                key={gasto.id}
                  gasto={gasto}
              />
          ))}
    </div>
  )
}

export default ListadoGasto