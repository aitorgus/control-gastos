import CerrarBtn from '../img/cerrar.svg'



const Modal = ({setModal,animarModal,setAnimarModal}) => {
    {/*Desactivamos el modal asignandole false */}
    const ocultarModal = () => {
      setModal(false)
      setAnimarModal(false)

      setTimeout(() => {
          setModal(false)
      },500)
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
      <form className={`formulario ${animarModal ? "animar " : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>

        <div className='campo'>
          <label htmlFor="nombre">Nombre Gasto</label>
          <input type="text"  placeholder='Añadir descripción del gasto'/>
        </div>

        <div className='campo'>
          <label htmlFor="cantidad">Cantidad</label>
          <input type="number"  placeholder='Añade la cantidad del gasto: ejemplo 300'/>
        </div>

        <div className='campo'>
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria">
            <option value="">--Seleccione--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Ocio</option>
            <option value="Suscripciones">Suscripciones</option>

          </select>
        </div>

        <input type="submit" value="Añadir Gasto" />
        

    </form>

    </div>
  )
}

export default Modal