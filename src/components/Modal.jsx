import { useState,useEffect } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'



const Modal = ({ setModal, animarModal, setAnimarModal,guardarGasto,gastoEditar }) => {
  
  const [mensaje,SetMensaje]=useState('')
  const [nombre, SetNombre] = useState('')
  const [cantidad, SetCantidad] = useState('')
  const [categoria, SetCategoria] = useState('')
  const [fecha,setFecha]=useState('')
  const [id, setId] = useState('')
    
  useEffect(() => {
      if (Object.keys(gastoEditar).length > 0)
    {
        SetNombre(gastoEditar.nombre)
        SetCantidad(gastoEditar.cantidad)
        SetCategoria(gastoEditar.categoria)
        SetId(gastoEditar.id)
        SetFecha(gastoEditar.fecha)
    }
  },[])
    {/*Desactivamos el modal asignandole false */}
    const ocultarModal = () => {
      setModal(false)
      setAnimarModal(false)
      setGastoEditar({})
      setTimeout(() => {
          setModal(false)
      }, 500)}
  
   const handleSubmit = evento => {
    {/*Previene la acción por defecto, que es enviar el formulario */}
        evento.preventDefault() 
        {/*Si alguno de los componentes del array está vacío debe de devolver algún error */ }
        if ([nombre,cantidad,categoria].includes('')) {
          SetMensaje('Todos los campos son obligatorios')
          setTimeout(() => {
            SetMensaje('')
          },3000 )
          return
     }
     guardarGasto({nombre,cantidad,categoria, id,fecha,setGastoEditar})
  }
  
  return (
      <div className="modal">
            {/*Al pulsar el botón 'X' de cerrar, activo el evento onClick, que a su vez llama a la función ocultarModal */}
          <div className="cerrar-modal">
              <img src={CerrarBtn} alt="Botón Cerrar Modal" onClick={ocultarModal}

              />

      </div>
      {/*Usando el template String combino clases estáticas y dinámicas
      y lo condiciono. Si animarModal es true, le añado la clase estática "animar", en caso contrario, le añado la clase  "cerrar" */}
      <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar " : 'cerrar'}`}>
        
        <legend>{gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className='campo'>
          <label htmlFor="nombre">Nombre Gasto</label>
          <input type="text"  placeholder='Añadir descripción del gasto' value={nombre} onChange={evento => SetNombre(evento.target.value)} />
        </div>

        <div className='campo'>
          <label htmlFor="cantidad">Cantidad</label>
          <input type="number" placeholder='Añade la cantidad del gasto: ejemplo 300' value={cantidad} onChange={evento => SetCantidad(Number(evento.target.value))} />
        </div>

        <div className='campo'>
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" value={categoria} onChange={evento => SetCategoria(evento.target.value)}>
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

        <input type="submit" value={gastoEditar.nombre ? "Guardar cambios" : "Añadir Gasto"} />
        

    </form>

    </div>
  )
}

export default Modal