import {useState, useEffect} from 'react'

const Filtros = ({filtro,setFiltro}) => {
  return (
      <div className='filtros sombras contenedor'>
          <form action="">
              <div>
                  <label >Todas las categorías</label>
                  <select value={filtro} onChange={(evento) => setFiltro(evento.target.value) } >
                       <option value="">--Seleccione--</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                      <option value="Suscripciones">Suscripciones</option>
                      
                        </select>
              </div>
          </form>
    </div>
  )
}

export default Filtros