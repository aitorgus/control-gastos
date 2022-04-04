import CerrarBtn from '../img/cerrar.svg'



const Modal = ({setModal}) => {
    {/*Desactivamos el modal asignandole false */}
    const ocultarModal = () => {
        setModal(false)
}
  return (
      <div className="modal">
            {/*Al pulsar el botón 'X' de cerrar, activo el evento onClick, que a su vez llama a la función ocultarModal */}
          <div className="cerrar-modal">
              <img src={CerrarBtn} alt="Botón Cerrar Modal" onClick={ocultarModal}

              />

            </div>

    </div>
  )
}

export default Modal