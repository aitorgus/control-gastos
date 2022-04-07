import { useState } from 'react'
import Header from './components/Header'
import ListadoGasto from './components/ListadoGasto';
import Modal from './components/Modal';
import { generarId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {

   const [gastos,SetGastos] = useState([])
  {/*El presupuesto por defecto es 0, hasta que el usuario indique un valor. */ }
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  {/*El valor inicial del Modal será falso, pues no quiero que al inicio se muestre, sólo tras pulsar el Añadir nuevo gasto */}
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  

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
    gasto.fecha=Date.now()
    SetGastos([...gastos, gasto])
    {/*Al añadir el gasto, cierro el MODAL */}
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    },500)
  }

  return (
    
    <div className={modal ? 'fijar' : ''}>
      {/*Insertamos una className que agregue la clase fijar, en caso de que se esté usando el modal. Esto es debido a que conforme añadamos gastos, el modal queda arriba y es posible hacer scroll sobre la página
      y el modal queda arriba, únicamente */}

      {/*Utilizamos los props, para extraer las variables a otros componentes */}
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

        {/*El botón de añadir presupuesto, sólo debe demostrarse si el valor añadido es correcto, si isValidPresupuesto es true, se ejecuta el resto. */}
      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGasto 
              gastos={gastos}
            />

            
          </main>
        <div className='nuevo-gasto'>
          
          <img src={IconoNuevoGasto} alt="icono nuevo gasto" onClick={handleNuevoGasto} />
          
          </div>
          </>
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
