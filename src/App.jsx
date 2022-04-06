import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import { generarId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {
  {/*El presupuesto por defecto es 0, hasta que el usuario indique un valor. */ }
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  {/*El valor inicial del Modal será falso, pues no quiero que al inicio se muestre, sólo tras pulsar el Añadir nuevo gasto */}
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos,SetGastos] = useState([])

  const handleNuevoGasto = () => {
    {/*Activamos el modal si detecta que pulsa el botón de añadir gasto */}
    setModal(true)
  
    {/*Tras abrir el modal, pasado 0.5 segundo, activamos el formulario  */}
    setTimeout(() => {
      setAnimarModal(true)
    }, 500)

  }

  const guardarGasto = (gasto) => {
     gasto.id = generarId()
    SetGastos([...gastos, gasto])
    {/*Al añadir el gasto, cierro el MODAL */}
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    },500)
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
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
      />}
    </div>
  )
}

export default App
