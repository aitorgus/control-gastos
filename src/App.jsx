import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal';

function App() {
  {/*El presupuesto por defecto es 0, hasta que el usuario indique un valor. */ }
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  {/*El valor inicial del Modal será falso, pues no quiero que al inicio se muestre, sólo tras pulsar el Añadir nuevo gasto */}
  const [modal,setModal] = useState(false)

  const handleNuevoGasto = () => {
    {/*Activamos el modal si detecta que pulsa el botón de añadir gasto */}
    setModal(true)

  }

  return (
    <div>
      {/*Utilizamos los props, para extraer las variables a otros componentes */}
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

        {/*El botón de añadir presupuesto, sólo debe demostrarse si el valor añadido es correcto, si isValidPresupuesto es true, se ejecuta el resto. */}
      {isValidPresupuesto && (
      
        <div className='nuevo-gasto'>
          
          <img src={IconoNuevoGasto} alt="icono nuevo gasto" onClick={handleNuevoGasto} />
          
        </div>
      ) }
      
      {modal &&
        
        <Modal
        setModal={setModal}
      />}
    </div>
  )
}

export default App
