import React from 'react'

const Mensaje = ({ children, tipo, }) => {

    return (


        <div className={`alerta ${tipo}`} > {/*
        Con esta sintaxis mezclo una clase fija con una dinámica {`alerta ${tipo}`}
        De esta manera modifico los estilos, utilizando clases de ccs previas, pueden ser alert success ó alert error
        */}

            {children}
        </div>
    )
}

export default Mensaje