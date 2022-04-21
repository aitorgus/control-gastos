import { useState, useEffect } from 'react'
import Header from './components/Header'
import Filtros from './components/Filtros';
import ListadoGasto from './components/ListadoGasto';
import Modal from './components/Modal';
import { generarId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [])
     
  {/*El presupuesto por defecto es 0, hasta que el usuario indique un valor. */ }
  const [presupuesto, setPresupuesto] = useState( Number ( localStorage.getItem('presupuesto') ?? 0 ));
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  {/*El valor inicial del Modal será falso, pues no quiero que al inicio se muestre, sólo tras pulsar el Añadir nuevo gasto */}
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})

  const [filtro, setFiltro] = useState()
  const [gastosFiltrados, setGastoFiltrados] =useState([])
  
  useEffect(()=> {
    if (Object.keys(gastoEditar).length > 0)
    {
         {/*Activamos el modal si detecta que pulsa el botón de añadir gasto */}
    setModal(true)
    
    {/*Tras abrir el modal, pasado 0.5 segundo, activamos el formulario  */}
    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
    }
  }, [gastoEditar])

  
  useEffect(() => {
    localStorage.setItem('gastos',presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])


  useEffect(() => {
    if (filtro) {
      //Filtrar gastos por categoría
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
      
      setGastoFiltrados(gastosFiltrados)
    }
  }, [filtro])

  {/*Carga sólo cuando se inicia la aplicación, en caso de tener un valor de presupuesto guardado en localStorage, el presupuesto es válido y no carga el panel inicial */}
  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
    
    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true)
    }
  }, [])
  

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

     setTimeout(() => {
      setAnimarModal(true)
    }, 500)

  }

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      //Actualizar 
      const gastoActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastoActualizados)
    } else {
      //Nuevo Gasto
          gasto.id = generarId()
          gasto.fecha=Date.now()
          setGastos([...gastos, gasto])
    }

    {/*Al añadir el gasto, cierro el MODAL */}
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    },500)
  }

  const eliminarGasto = id => {
    const gastoActualizados = gasto.filter(gasto => gasto.id !== id)
    setGastos(gastoActualizados)
    setGastoEditar({})
  } 

  return (
    
    <div className={modal ? 'fijar' : ''}>
      {/*Insertamos una className que agregue la clase fijar, en caso de que se esté usando el modal. Esto es debido a que conforme añadamos gastos, el modal queda arriba y es posible hacer scroll sobre la página
      y el modal queda arriba, únicamente */}

      {/*Utilizamos los props, para extraer las variables a otros componentes */}
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

        {/*El botón de añadir presupuesto, sólo debe demostrarse si el valor añadido es correcto, si isValidPresupuesto es true, se ejecuta el resto. */}
      {isValidPresupuesto && (
        <>
          <main>
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />

            
            <ListadoGasto 
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}

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
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}
      />}
    </div>
  )
}

export default App
